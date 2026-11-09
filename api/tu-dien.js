/**
 * GET /api/tu-dien?q=ハイキング
 * 1. Lọc từ điển Nhật (Jotoba / Jisho) theo cách viết hoặc cách đọc TRÙNG KHỚP.
 * 2. Tự dịch phần định nghĩa sang tiếng Việt (ưu tiên Google Cloud khi có API key,
 *    nếu không có thì thử dịch vụ MyMemory công khai, hạn mức theo nhà cung cấp).
 * 3. KHÔNG chèn từ gần giống vào danh sách kết quả chính và không bịa nghĩa.
 * Đặt GOOGLE_TRANSLATE_API_KEY trong Vercel nếu muốn dùng Google Cloud Translation.
 */
const MAX_QUERY_LENGTH = 90;
const CACHE_DURATION = 10 * 60 * 1000;
const memo = new Map();

async function getJson(url, init={}, ms=7500) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), ms);
  try {
    const response = await fetch(url, {...init, signal:ctl.signal});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally { clearTimeout(timer); }
}

function normalize(text) { return String(text || '').normalize('NFKC').trim(); }
function toHiragana(text) {
  return normalize(text).replace(/[\u30A1-\u30F6]/g, c => String.fromCharCode(c.charCodeAt(0)-96));
}
function exactScore(item, query) {
  const word=normalize(item.kanji), kana=normalize(item.kana), q=normalize(query);
  if (word === q) return 3;
  if (kana === q) return 2;
  if (kana && toHiragana(kana) === toHiragana(q)) return 1;
  return 0;
}
function parseJotoba(body) {
  const rows=Array.isArray(body?.words) ? body.words : [];
  return rows.map(row => {
    const kana=normalize(row.reading?.kana);
    const kanji=normalize(row.reading?.kanji) || kana;
    const senses=Array.isArray(row.senses) ? row.senses : [];
    const english=senses.filter(s => !s.language || /^english$/i.test(s.language))
      .flatMap(s => Array.isArray(s.glosses)?s.glosses:[]).filter(Boolean).slice(0,3).join('; ');
    const vietnamese=senses.filter(s => /^vietnamese$/i.test(s.language || ''))
      .flatMap(s => Array.isArray(s.glosses)?s.glosses:[]).filter(Boolean).slice(0,3).join('; ');
    return {kanji, kana, romaji:'', meaning:vietnamese, englishMeaning:english,
      type:'Từ mới', source:'Jotoba'};
  }).filter(i => i.kanji && i.kana);
}
function parseJisho(body, query) {
  return (Array.isArray(body?.data)?body.data:[]).flatMap(entry => {
    const senses=Array.isArray(entry.senses) ? entry.senses:[];
    const english=senses.flatMap(s => s.english_definitions || []).slice(0,3).join('; ');
    const type=senses[0]?.parts_of_speech?.slice(0,2).join(' / ') || 'Từ mới';
    const variants=Array.isArray(entry.japanese)?entry.japanese:[];
    // Lấy chính xác biến thể khớp từ nhập, không lấy biến thể đầu tiên bừa bãi.
    return variants.filter(j => exactScore({kanji:j.word || j.reading, kana:j.reading}, query) > 0)
      .map(j => ({kanji:normalize(j.word || j.reading), kana:normalize(j.reading),
        romaji:'', meaning:'', englishMeaning:english, type, source:'Jisho'}));
  });
}
function distinctExact(items, query) {
  const seen=new Map();
  for (const item of items) {
    const score=exactScore(item,query);
    if (!score) continue;
    const key=normalize(item.kanji)+'\u0000'+toHiragana(item.kana);
    const old=seen.get(key);
    if (!old || (!old.meaning && item.meaning) || (!old.englishMeaning && item.englishMeaning))
      seen.set(key,{...item,score});
  }
  return [...seen.values()].sort((a,b) => b.score-a.score).slice(0,8)
    .map(({score,...rest})=>rest);
}
function cleanTranslated(value, original) {
  const text=String(value||'').trim().replace(/&quot;/g,'"').replace(/&#39;/g,"'")
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
  if (!text || normalize(text).toLowerCase()===normalize(original).toLowerCase() || text.length>500) return '';
  if (/^(?:MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID LANGUAGE|PLEASE SELECT|NO QUERY|ERROR:)/i.test(text))return '';
  if (/<\/?[a-z][^>]*>/i.test(text)) return '';
  return text;
}
async function googleTranslate(text,source) {
  const key=process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!key) return '';
  const body={q:[text],source,target:'vi',format:'text'};
  const json=await getJson('https://translation.googleapis.com/language/translate/v2?key='+encodeURIComponent(key),{
    method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)
  },6500);
  return cleanTranslated(json?.data?.translations?.[0]?.translatedText,text);
}
async function myMemoryTranslate(text,source) {
  const qs=new URLSearchParams({q:text.slice(0,460),langpair:`${source}|vi`});
  const json=await getJson('https://api.mymemory.translated.net/get?'+qs.toString(), {},6000);
  if (Number(json?.responseStatus)!==200) return '';
  return cleanTranslated(json.responseData?.translatedText,text);
}
async function toVietnamese(item) {
  if (item.meaning) return item;
  const english=String(item.englishMeaning||'').trim();
  const original=english || item.kanji;
  const source=english?'en':'ja';
  let meaning='';let translatedBy='';
  if (process.env.GOOGLE_TRANSLATE_API_KEY) {
    try { meaning=await googleTranslate(original,source); if(meaning)translatedBy='Google Cloud Translation'; }
    catch (_) { /* Cho phep fallback */ }
  }
  if (!meaning) {
    try { meaning=await myMemoryTranslate(original,source); if(meaning)translatedBy='MyMemory'; }
    catch (_) { /* Mang / quota: ve UI de nhap thu cong */ }
  }
  return {...item,meaning,translatedBy,
    translationWarning: meaning?'Nghĩa dịch máy, nên kiểm tra theo ngữ cảnh.':'Chưa dịch được nghĩa tiếng Việt tự động.'};
}
async function searchExact(q) {
  let words=[]; const providers=[];
  try {
    const body=await getJson('https://jotoba.de/api/search/words',{
      method:'POST', headers:{'Content-Type':'application/json',Accept:'application/json'},
      body:JSON.stringify({query:q,language:'English'})
    },7000);
    words=distinctExact(parseJotoba(body),q);
    providers.push('Jotoba');
  } catch (_) { /* Thử Jisho */ }
  if (!words.length) {
    try {
      const jisho=await getJson('https://jisho.org/api/v1/search/words?keyword='+encodeURIComponent(q),{},7000);
      words=distinctExact(parseJisho(jisho,q),q);
      providers.push('Jisho');
    } catch (_) { /* Không có nguồn, không giả lập dữ liệu */ }
  }
  if (!words.length) return {results:[],exactFound:false,
    message:'Không tìm thấy kết quả trùng cách viết/cách đọc. Vui lòng kiểm tra từ hoặc tra thủ công.'};
  // Chỉ dịch các kết quả CHÍNH XÁC, không lãng phí hạn mức cho từ gần giống.
  const translated=await Promise.all(words.slice(0,5).map(toVietnamese));
  return {results:[...translated,...words.slice(5)],exactFound:true,
    translationAvailable:translated.some(x=>!!x.meaning),
    source:providers.join(', ')};
}

module.exports=async function handler(req,res) {
  res.setHeader('Cache-Control','private, max-age=120');
  res.setHeader('Content-Type','application/json; charset=utf-8');
  if(req.method!=='GET') return res.status(405).json({error:'Chỉ hỗ trợ GET'});
  const q=normalize(req.query?.q);
  if(!q || q.length>MAX_QUERY_LENGTH) return res.status(400).json({error:'Nhập từ tiếng Nhật tối đa 90 ký tự'});
  const cached=memo.get(q);
  if(cached && cached.until>Date.now())return res.status(200).json(cached.data);
  try {
    const data=await searchExact(q);
    if(memo.size>150)memo.clear();
    memo.set(q,{until:Date.now()+CACHE_DURATION,data});
    return res.status(200).json(data);
  }catch(_){return res.status(502).json({error:'Không tra cứu được từ điển',results:[]});}
};
