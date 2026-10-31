/*
  CHƯƠNG 4 BÀI 2 — NGỮ PHÁP
  Trang 33–38.
  5 nhóm ngữ pháp, 34 mục luyện tập.
  Bao gồm hai ví dụ bổ sung trong phần giải thích.
  Thêm tên file vào ngu-phap/danh-sach-ngu-phap.js.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "chương 4 bài 2",
  grammar: [
    {
      structure: "Vる／Vない + こと",
      meaning: "Phải…; hãy…; không được…",
      note: "Trang 33.\n\n1. Cách nối:\n• V thể từ điển + こと: phải làm.\n• Vない + こと: không được làm.\n• Ví dụ: 提出すること／使わないこと／忘れないこと.\n\n2. Cách dùng:\n• Đưa ra quy tắc, chỉ thị, yêu cầu dưới dạng văn viết.\n• Thường thấy trong thông báo ở trường, công ty, quy định thi hoặc hướng dẫn.\n• Tương ứng về ý nghĩa với các yêu cầu như ～なさい／～てはいけない tùy câu.\n\n3. Sắc thái:\n• Mang tính chỉ dẫn, quy định, không đơn thuần là lời nhờ vả.\n• Không phải cứ thêm こと vào mọi câu là tạo được yêu cầu phù hợp trong hội thoại.\n\n4. Phân biệt:\n• Vること: yêu cầu, quy định trong bài này.\n• Vることだ: lời khuyên, điều nên làm.\n• Vることにする: quyết định làm.\n• Vることができる: có thể làm.\n\n5. までに chỉ hạn cuối: 今月末までに提出する = nộp chậm nhất vào cuối tháng này.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "そのイベントに参加を希望する者は、はがきに必要事項を書いて本社あてに送ること。",
          hiragana: "そのいべんとにさんかをきぼうするものは、はがきにひつようじこうをかいてほんしゃあてにおくること。",
          romaji: "sono ibento ni sanka o kibou suru mono wa, hagaki ni hitsuyou jikou o kaite honsha ate ni okuru koto",
          meaning: "Người muốn tham gia sự kiện phải ghi các thông tin cần thiết vào bưu thiếp và gửi đến trụ sở chính."
        },
        {
          direction: "ja-vi",
          kanji: "目上の人には常に敬意を持って接すること。",
          hiragana: "めうえのひとにはつねにけいいをもってせっすること。",
          romaji: "meue no hito ni wa tsune ni keii o motte sessuru koto",
          meaning: "Phải luôn đối xử với người trên bằng sự kính trọng."
        },
        {
          direction: "ja-vi",
          kanji: "怪しい勧誘には耳を貸さないこと。",
          hiragana: "あやしいかんゆうにはみみをかさないこと。",
          romaji: "ayashii kanyuu ni wa mimi o kasanai koto",
          meaning: "Không được nghe theo những lời dụ dỗ đáng ngờ."
        },
        {
          direction: "vi-romaji",
          kanji: "レポートは今月末までに提出すること。",
          hiragana: "れぽーとはこんげつまつまでにていしゅつすること。",
          romaji: "repooto wa kongetsumatsu made ni teishutsu suru koto",
          meaning: "Phải nộp báo cáo chậm nhất vào cuối tháng này."
        },
        {
          direction: "vi-romaji",
          kanji: "試験中に辞書を使わないこと。",
          hiragana: "しけんちゅうにじしょをつかわないこと。",
          romaji: "shikenchuu ni jisho o tsukawanai koto",
          meaning: "Không được sử dụng từ điển trong khi thi."
        },
        {
          direction: "vi-romaji",
          kanji: "受験票を忘れないこと。",
          hiragana: "じゅけんひょうをわすれないこと。",
          romaji: "jukenhyou o wasurenai koto",
          meaning: "Không được quên phiếu dự thi."
        }
      ]
    },
    {
      structure: "Vる + ことはない",
      meaning: "Không cần phải…; không có gì phải…",
      note: "Trang 34.\n\n1. Cách nối:\n• V thể từ điển + ことはない.\n• 心配することはない／落ち込むことはない.\n\n2. Cách dùng:\n• Nói rằng không cần thiết thực hiện hành động đó.\n• Thường dùng để khuyên nhủ, trấn an hoặc khích lệ đối phương.\n• Gần nghĩa ～必要はない.\n\n3. Phân biệt quan trọng:\n• 心配することはない = không cần lo.\n• 心配したことがない = chưa từng lo.\n• 心配しないこと = không được lo, nếu dùng như chỉ thị.\n• Không nhầm Vることはない với mẫu kinh nghiệm Vたことがない.\n\n4. Sắc thái:\n• そんなに怒ることはない = không cần tức giận đến thế.\n• Tùy ngữ điệu có thể là trấn an hoặc nhận xét hành động của đối phương là quá mức.\n• じゃん ở cuối đáp án là cách nói thân mật, không phù hợp mọi hoàn cảnh trang trọng.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "失恋したって落ち込むことはない。",
          hiragana: "しつれんしたっておちこむことはない。",
          romaji: "shitsuren shitatte ochikomu koto wa nai",
          meaning: "Dù thất tình cũng không cần suy sụp."
        },
        {
          direction: "ja-vi",
          kanji: "安全に運転するから、心配することはない。",
          hiragana: "あんぜんにうんてんするから、しんぱいすることはない。",
          romaji: "anzen ni unten suru kara, shinpai suru koto wa nai",
          meaning: "Tôi sẽ lái xe an toàn nên không cần lo."
        },
        {
          direction: "ja-vi",
          kanji: "この問題については、あなた一人で責任を感じることはない。",
          hiragana: "このもんだいについては、あなたひとりでせきにんをかんじることはない。",
          romaji: "kono mondai ni tsuite wa, anata hitori de sekinin o kanjiru koto wa nai",
          meaning: "Về vấn đề này, bạn không cần một mình cảm thấy phải chịu trách nhiệm."
        },
        {
          direction: "vi-romaji",
          kanji: "一回失敗したくらい、落ち込むことはない。やり直せばいい。",
          hiragana: "いっかいしっぱいしたくらい、おちこむことはない。やりなおせばいい。",
          romaji: "ikkai shippai shita kurai, ochikomu koto wa nai. yarinaoseba ii",
          meaning: "Chỉ mới thất bại một lần thì không cần suy sụp. Làm lại là được."
        },
        {
          direction: "vi-romaji",
          kanji: "家で注文できるから、わざわざ買いに行くことはない。",
          hiragana: "いえでちゅうもんできるから、わざわざかいにいくことはない。",
          romaji: "ie de chuumon dekiru kara, wazawaza kai ni iku koto wa nai",
          meaning: "Có thể đặt hàng ở nhà nên không cần cất công đi mua."
        },
        {
          direction: "vi-romaji",
          kanji: "大したことでもないから、そんなに怒ることはないじゃん。",
          hiragana: "たいしたことでもないから、そんなにおこることはないじゃん。",
          romaji: "taishita koto de mo nai kara, sonna ni okoru koto wa nai jan",
          meaning: "Cũng chẳng phải chuyện gì to tát, đâu cần giận đến mức đó."
        }
      ]
    },
    {
      structure: "Vる + よりほかない／ほかない／しかない",
      meaning: "Chỉ còn cách…; đành phải…",
      note: "Trang 35.\n\n1. Cách nối:\n• V thể từ điển + よりほかない.\n• V thể từ điển + ほかない.\n• V thể từ điển + しかない.\n• Ví dụ: あきらめるよりほかない／進むしかない.\n\n2. Cách dùng:\n• Không còn lựa chọn khả thi nào khác nên phải thực hiện hành động đó.\n• Thường có sắc thái bất đắc dĩ, nhưng cũng có thể diễn tả quyết tâm hoặc lựa chọn duy nhất một cách tích cực.\n\n3. Các dạng:\n• より có thể lược bỏ trong よりほかない.\n• Thể quá khứ: ～ほかなかった／～しかなかった.\n• Dạng lịch sự: ～ほかありません／～しかありません.\n\n4. Dễ nhầm:\n• Vるしかない = chỉ còn cách làm.\n• Nしかない = chỉ có N; gần về ý giới hạn nhưng khác cách nối.\n• Không dùng Vないしかない để thay cho mẫu khẳng định thông thường.\n\n5. Đáp án bài 1 và 2 cho phép có hoặc không có より. Dữ liệu chọn bản có より để luyện đầy đủ cấu trúc.\n6. Có thêm ví dụ trong phần giải thích về cầu mong thí nghiệm thành công.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "できることはやった。あとは実験が成功するのを祈るしかない。",
          hiragana: "できることはやった。あとはじっけんがせいこうするのをいのるしかない。",
          romaji: "dekiru koto wa yatta. ato wa jikken ga seikou suru no o inoru shika nai",
          meaning: "Tôi đã làm hết những gì có thể. Giờ chỉ còn cách cầu mong thí nghiệm thành công."
        },
        {
          direction: "ja-vi",
          kanji: "つまらなそうな映画だが、チケットを買ってしまったから見に行くほかない。",
          hiragana: "つまらなそうなえいがだが、ちけっとをかってしまったからみにいくほかない。",
          romaji: "tsumaranasou na eiga da ga, chiketto o katte shimatta kara mi ni iku hoka nai",
          meaning: "Phim có vẻ chán nhưng đã mua vé rồi nên đành đi xem."
        },
        {
          direction: "ja-vi",
          kanji: "勉強を続けたかったが、子どもを育てるために、一度勉強をやめるほかなかった。",
          hiragana: "べんきょうをつづけたかったが、こどもをそだてるために、いちどべんきょうをやめるほかなかった。",
          romaji: "benkyou o tsuzuketakatta ga, kodomo o sodateru tame ni, ichido benkyou o yameru hoka nakatta",
          meaning: "Tôi muốn tiếp tục học nhưng để nuôi con, đã đành phải tạm ngừng việc học."
        },
        {
          direction: "ja-vi",
          kanji: "コンサートに行きたかったが、仕事が入ってしまったので、あきらめるしかない。",
          hiragana: "こんさーとにいきたかったが、しごとがはいってしまったので、あきらめるしかない。",
          romaji: "konsaato ni ikitakatta ga, shigoto ga haitte shimatta node, akirameru shika nai",
          meaning: "Tôi muốn đi hòa nhạc nhưng có công việc phát sinh nên chỉ còn cách từ bỏ."
        },
        {
          direction: "vi-romaji",
          kanji: "大学に行きたいが、お金がないのであきらめるよりほかない。",
          hiragana: "だいがくにいきたいが、おかねがないのであきらめるよりほかない。",
          romaji: "daigaku ni ikitai ga, okane ga nai node akirameru yori hoka nai",
          meaning: "Tôi muốn học đại học nhưng không có tiền nên đành từ bỏ."
        },
        {
          direction: "vi-romaji",
          kanji: "日本語を上手に話せるようになりたいなら、毎日練習するよりほかない。",
          hiragana: "にほんごをじょうずにはなせるようになりたいなら、まいにちれんしゅうするよりほかない。",
          romaji: "nihongo o jouzu ni hanaseru you ni naritai nara, mainichi renshuu suru yori hoka nai",
          meaning: "Nếu muốn nói tiếng Nhật giỏi thì chỉ còn cách luyện tập mỗi ngày."
        },
        {
          direction: "vi-romaji",
          kanji: "試験に合格したいなら死ぬ気で勉強するよりほかないよ。",
          hiragana: "しけんにごうかくしたいならしぬきでべんきょうするよりほかないよ。",
          romaji: "shiken ni goukaku shitai nara shinu ki de benkyou suru yori hoka nai yo",
          meaning: "Nếu muốn đỗ kỳ thi thì chỉ còn cách học hết sức mình."
        },
        {
          direction: "vi-romaji",
          kanji: "ここまで来たら、後戻りはできない。もう前に進むしかない。",
          hiragana: "ここまできたら、あともどりはできない。もうまえにすすむしかない。",
          romaji: "koko made kitara, atomodori wa dekinai. mou mae ni susumu shika nai",
          meaning: "Đã đến tận đây thì không thể quay lại. Chỉ còn cách tiến về phía trước."
        },
        {
          direction: "vi-romaji",
          kanji: "あんなに熱心に頼まれたら、こちらも教えるしかない。",
          hiragana: "あんなにねっしんにたのまれたら、こちらもおしえるしかない。",
          romaji: "anna ni nesshin ni tanomaretara, kochira mo oshieru shika nai",
          meaning: "Được tha thiết nhờ đến thế thì tôi cũng đành chỉ cho vậy."
        }
      ]
    },
    {
      structure: "Vた／Vない + ほうがいい",
      meaning: "Nên làm…; không nên làm…",
      note: "Trang 36.\n\n1. Cách nối để khuyên:\n• Vた + ほうがいい: nên làm.\n• Vない + ほうがいい: không nên làm.\n• 解決したほうがいい／無理しないほうがいい.\n\n2. Cách dùng:\n• Đưa lời khuyên hoặc phương án tốt hơn cho đối phương.\n• Có thể cảnh báo rằng nếu không làm thì tình hình sẽ xấu đi, nhưng không phải lúc nào cũng có sắc thái tiêu cực.\n• Vた trong mẫu này không có nghĩa người nghe đã làm xong hành động.\n\n3. Làm mềm lời khuyên:\n• ～ほうがいいと思います.\n• ～ほうがいいかもしれません.\n• Khi nói với người trên cần chú ý hoàn cảnh; chỉ thêm です không bảo đảm mọi lời khuyên đều phù hợp.\n\n4. So sánh:\n• ～たらどう: đưa một phương án để người nghe cân nhắc.\n• ～ほうがいい: trực tiếp đánh giá làm như vậy sẽ tốt hơn.\n• ～べきだ: thường nhấn mạnh điều đúng đắn hoặc nên làm theo chuẩn mực.\n\n5. Có giữ ví dụ bổ sung 食べすぎないほうがいいと思うよ trong phần giải thích.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "食べすぎないほうがいいと思うよ。",
          hiragana: "たべすぎないほうがいいとおもうよ。",
          romaji: "tabesuginai hou ga ii to omou yo",
          meaning: "Tôi nghĩ bạn không nên ăn quá nhiều."
        },
        {
          direction: "ja-vi",
          kanji: "一生懸命なのはいいけど、無理しないほうがいいですよ。",
          hiragana: "いっしょうけんめいなのはいいけど、むりしないほうがいいですよ。",
          romaji: "isshoukenmei na no wa ii kedo, muri shinai hou ga ii desu yo",
          meaning: "Cố gắng là tốt nhưng bạn không nên quá sức."
        },
        {
          direction: "ja-vi",
          kanji: "この辺は、夜、危ないですから、女性は1人で歩かないほうがいいですよ。",
          hiragana: "このへんは、よる、あぶないですから、じょせいはひとりであるかないほうがいいですよ。",
          romaji: "kono hen wa, yoru, abunai desu kara, josei wa hitori de arukanai hou ga ii desu yo",
          meaning: "Khu vực này ban đêm nguy hiểm nên phụ nữ không nên đi bộ một mình."
        },
        {
          direction: "ja-vi",
          kanji: "小さな問題でも放っておくと膨れてしまうので、早く解決したほうがいい。",
          hiragana: "ちいさなもんだいでもほうっておくとふくれてしまうので、はやくかいけつしたほうがいい。",
          romaji: "chiisana mondai de mo houtte oku to fukurete shimau node, hayaku kaiketsu shita hou ga ii",
          meaning: "Dù là vấn đề nhỏ, nếu bỏ mặc cũng sẽ lớn lên nên nên giải quyết sớm."
        },
        {
          direction: "vi-romaji",
          kanji: "無理しないほうがいいよ。",
          hiragana: "むりしないほうがいいよ。",
          romaji: "muri shinai hou ga ii yo",
          meaning: "Không nên cố quá sức đâu."
        },
        {
          direction: "vi-romaji",
          kanji: "ゲームは1日1時間までにしたほうがいい。",
          hiragana: "げーむはいちにちいちじかんまでにしたほうがいい。",
          romaji: "geemu wa ichinichi ichijikan made ni shita hou ga ii",
          meaning: "Nên giới hạn chơi game tối đa một tiếng mỗi ngày."
        },
        {
          direction: "vi-romaji",
          kanji: "運動不足は体に悪いから、毎日運動したほうがいいですよ。",
          hiragana: "うんどうぶそくはからだにわるいから、まいにちうんどうしたほうがいいですよ。",
          romaji: "undou busoku wa karada ni warui kara, mainichi undou shita hou ga ii desu yo",
          meaning: "Thiếu vận động có hại cho sức khỏe nên bạn nên tập thể dục mỗi ngày."
        }
      ]
    },
    {
      structure: "Vる + べきだ／べきではない",
      meaning: "Nên…; cần phải…; không nên…",
      note: "Trang 37.\n\n1. Cách nối:\n• V thể từ điển + べきだ.\n• する có hai dạng: するべきだ／すべきだ.\n• N／Aな + であるべきだ.\n• Aい bỏ い + くあるべきだ; cách này mang sắc thái văn viết, không phải mọi tính từ đều dùng tự nhiên như nhau.\n\n2. Cách dùng:\n• Nêu việc nên làm vì đúng đắn, hợp lẽ thường, trách nhiệm hoặc chuẩn mực.\n• Khi nói trực tiếp với người khác có thể nghe khá mạnh, như phê bình hoặc yêu cầu.\n• Không đơn thuần là dự đoán việc gì sẽ xảy ra.\n\n3. Phủ định:\n• Vるべきではない／べきじゃない = không nên làm.\n• 叱るべきではない = không nên mắng.\n• Không ghép Vないべきだ để thay cho nghĩa phủ định thông thường này.\n\n4. Các dạng khác:\n• ～べきだと思う: tôi nghĩ nên…\n• ～べきだった: đáng lẽ nên làm.\n• ～べきではなかった: đáng lẽ không nên làm.\n\n5. Phân biệt:\n• ～ほうがいい: lời khuyên về lựa chọn tốt hơn.\n• ～べきだ: nhận định nên làm theo điều đúng đắn hoặc chuẩn mực.\n• ～はずだ: dự đoán có căn cứ, không phải nghĩa vụ.\n• ～なければならない: sự cần thiết hoặc bắt buộc; không đồng nhất mọi câu với べきだ.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "誰でも教育が受けられるように、高校や大学に払うお金は高くあるべきではない。",
          hiragana: "だれでもきょういくがうけられるように、こうこうやだいがくにはらうおかねはたかくあるべきではない。",
          romaji: "dare de mo kyouiku ga ukerareru you ni, koukou ya daigaku ni harau okane wa takaku aru beki de wa nai",
          meaning: "Để ai cũng được học, học phí trung học phổ thông và đại học không nên quá cao."
        },
        {
          direction: "ja-vi",
          kanji: "難しい文法を学ぶ前に、基礎的な文法をしっかり学ぶべきだ。",
          hiragana: "むずかしいぶんぽうをまなぶまえに、きそてきなぶんぽうをしっかりまなぶべきだ。",
          romaji: "muzukashii bunpou o manabu mae ni, kisoteki na bunpou o shikkari manabu beki da",
          meaning: "Trước khi học ngữ pháp khó, nên học chắc ngữ pháp cơ bản."
        },
        {
          direction: "ja-vi",
          kanji: "ゲームに熱中するのはいいけど、勉強を忘れるべきじゃない。",
          hiragana: "げーむにねっちゅうするのはいいけど、べんきょうをわすれるべきじゃない。",
          romaji: "geemu ni necchuu suru no wa ii kedo, benkyou o wasureru beki ja nai",
          meaning: "Say mê chơi game cũng được nhưng không nên quên việc học."
        },
        {
          direction: "vi-romaji",
          kanji: "君はもっと両親に感謝するべきだ。",
          hiragana: "きみはもっとりょうしんにかんしゃするべきだ。",
          romaji: "kimi wa motto ryoushin ni kansha suru beki da",
          meaning: "Cậu nên biết ơn bố mẹ nhiều hơn."
        },
        {
          direction: "vi-romaji",
          kanji: "親は人の前で子供を叱るべきではない。",
          hiragana: "おやはひとのまえでこどもをしかるべきではない。",
          romaji: "oya wa hito no mae de kodomo o shikaru beki de wa nai",
          meaning: "Cha mẹ không nên mắng con trước mặt người khác."
        },
        {
          direction: "vi-romaji",
          kanji: "先生は、子どもの教育に熱心であるべきだ。",
          hiragana: "せんせいは、こどものきょういくにねっしんであるべきだ。",
          romaji: "sensei wa, kodomo no kyouiku ni nesshin de aru beki da",
          meaning: "Giáo viên nên tận tâm với việc giáo dục trẻ em."
        }
      ]
    }
  ]
});