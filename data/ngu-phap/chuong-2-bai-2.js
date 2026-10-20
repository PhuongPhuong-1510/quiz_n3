/*
  NGỮ PHÁP - CHƯƠNG 2 BÀI 2
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 2 bài 2",
  grammar: [
    {
      structure: "～そうにない / ～そうもない / ～そうにもない",
      meaning: "Khó mà V / Chẳng có vẻ gì sẽ V",
      note: "Dạng phủ định của Vます＋そうです (sắp V đến nơi). Dùng để nói về một sự việc ít hoặc gần như không có khả năng sẽ xảy ra. Thường đi với động từ chỉ khả năng, trạng thái hoàn thành, cử động, thay đổi. Cấu trúc: Vます + そうにない / そうもない / そうにもない.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "あんなに高価なかばんは、とても買えそうにない。",
          hiragana: "あんなにこうかなかばんは、とてもかえそうにない。",
          romaji: "anna ni kouka na kaban wa, totemo kae sou ni nai",
          meaning: "Một chiếc túi đắt như vậy thì có vẻ khó mà mua nổi."
        },
        {
          direction: "ja-vi",
          kanji: "またお金を使ってしまった。このままでは、年末までに100万円貯金できそうにない。",
          hiragana: "またおかねをつかってしまった。このままでは、ねんまつまでにひゃくまんえんちょきんできそうにない。",
          romaji: "mata okane o tsukatte shimatta. kono mama de wa, nenmatsu made ni hyakuman en chokin deki sou ni nai",
          meaning: "Lại tiêu tiền mất rồi. Cứ thế này thì có vẻ khó mà tiết kiệm được một triệu yên trước cuối năm."
        },
        {
          direction: "ja-vi",
          kanji: "彼は学校の成績も悪かったし、真面目じゃないし、いい会社には就職できそうにないね。",
          hiragana: "かれはがっこうのせいせきもわるかったし、まじめじゃないし、いいかいしゃにはしゅうしょくできそうにないね。",
          romaji: "kare wa gakkou no seiseki mo warukatta shi, majime janai shi, ii kaisha ni wa shuushoku deki sou ni nai ne",
          meaning: "Thành tích ở trường của anh ấy cũng kém, lại không nghiêm túc nên có vẻ khó xin được việc ở công ty tốt."
        },
        {
          direction: "vi-ja",
          kanji: "この本は出てくる言葉が難しくて読めそうもない。",
          hiragana: "このほんはでてくることばがむずかしくてよめそうもない。",
          romaji: "kono hon wa detekuru kotoba ga muzukashikute yome sou mo nai",
          meaning: "Cuốn sách này có nhiều từ ngữ khó nên có vẻ tôi khó mà đọc được.",
          acceptedJapanese: [
            "この本は出てくる言葉が難しくて読めそうもない。",
            "このほんはでてくることばがむずかしくてよめそうもない。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "明日の試合で、勝てそうにありません。",
          hiragana: "あしたのしあいで、かてそうにありません。",
          romaji: "ashita no shiai de, kate sou ni arimasen",
          meaning: "Trong trận đấu ngày mai, tôi khó có thể thắng được.",
          acceptedJapanese: [
            "明日の試合で、勝てそうにありません。",
            "明日の試合で、勝てそうもありません。",
            "あしたのしあいで、かてそうにありません。",
            "あしたのしあいで、かてそうもありません。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "しばらく雨が止みそうにないから、家でゆっくりしていよう。",
          hiragana: "しばらくあめがやみそうにないから、いえでゆっくりしていよう。",
          romaji: "shibaraku ame ga yami sou ni nai kara, ie de yukkuri shite iyou",
          meaning: "Vì trời chẳng có vẻ gì là sẽ tạnh ngay, thế nên thong thả nghỉ ngơi ở nhà thôi.",
          acceptedJapanese: [
            "しばらく雨が止みそうにないから、家でゆっくりしていよう。",
            "しばらくあめがやみそうにないから、いえでゆっくりしていよう。"
          ]
        }
      ]
    },
    {
      structure: "～がる",
      meaning: "Biểu hiện cảm xúc, mong muốn của người khác",
      note: "Miêu tả trạng thái cơ thể, nguyện vọng, mong muốn, cảm xúc của người khác, không phải của mình. Thường dùng ở dạng ～がっている. Cấu trúc: Vたい / Aい / Aな + がる.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼女が寒がっていたので、僕のコートを貸してあげた。",
          hiragana: "かのじょがさむがっていたので、ぼくのこーとをかしてあげた。",
          romaji: "kanojo ga samugatte ita node, boku no kooto o kashite ageta",
          meaning: "Vì cô ấy tỏ ra lạnh nên tôi đã cho cô ấy mượn áo khoác của mình."
        },
        {
          direction: "ja-vi",
          kanji: "彼女は仕事中に話しかけられるのをとても嫌がっている。",
          hiragana: "かのじょはしごとちゅうにはなしかけられるのをとてもいやがっている。",
          romaji: "kanojo wa shigotochuu ni hanashikakerareru no o totemo iyagatte iru",
          meaning: "Cô ấy rất ghét bị bắt chuyện trong lúc làm việc."
        },
        {
          direction: "ja-vi",
          kanji: "私がどこへ行くときも、息子は一緒に行きたがる。",
          hiragana: "わたしがどこへいくときも、むすこはいっしょにいきたがる。",
          romaji: "watashi ga doko e iku toki mo, musuko wa issho ni ikitagaru",
          meaning: "Mỗi khi tôi đi đâu, con trai tôi cũng muốn đi cùng."
        },
        {
          direction: "vi-ja",
          kanji: "田舎に住む祖母が、久しぶりに孫に会いたがっている。",
          hiragana: "いなかにすむそぼが、ひさしぶりにまごにあいたがっている。",
          romaji: "inaka ni sumu sobo ga, hisashiburi ni mago ni aitagatte iru",
          meaning: "Người bà sống ở quê đang muốn gặp cháu của mình.",
          acceptedJapanese: [
            "田舎に住む祖母が、久しぶりに孫に会いたがっている。",
            "いなかにすむそぼが、ひさしぶりにまごにあいたがっている。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "猫は眠たがっている。",
          hiragana: "ねこはねむたがっている。",
          romaji: "neko wa nemutagatte iru",
          meaning: "Con mèo đang muốn ngủ.",
          acceptedJapanese: [
            "猫は眠たがっている。",
            "ねこはねむたがっている。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "ホラー映画を観て、妹は一人で眠れないと怖がっている。",
          hiragana: "ほらーえいがをみて、いもうとはひとりでねむれないとこわがっている。",
          romaji: "horaa eiga o mite, imouto wa hitori de nemurenai to kowagatte iru",
          meaning: "Sau khi xem phim kinh dị thì em gái tôi sợ rằng em ấy không thể ngủ một mình.",
          acceptedJapanese: [
            "ホラー映画を観て、妹は一人で眠れないと怖がっている。",
            "ほらーえいがをみて、いもうとはひとりでねむれないとこわがっている。"
          ]
        }
      ]
    },
    {
      structure: "～始める",
      meaning: "Bắt đầu...",
      note: "Bắt đầu làm một hành động hoặc bắt đầu diễn ra hiện tượng gì đó. Thường dùng cho hành động, động tác, thói quen, hiện tượng tự nhiên diễn ra liên tục. Cấu trúc: Vます + 始める.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私は20歳の時から、タバコを吸い始めました。",
          hiragana: "わたしははたちのときから、たばこをすいはじめました。",
          romaji: "watashi wa hatachi no toki kara, tabako o suihajimemashita",
          meaning: "Tôi bắt đầu hút thuốc từ năm 20 tuổi."
        },
        {
          direction: "ja-vi",
          kanji: "先週から、日本へ留学するために日本語センターに通い始めました。",
          hiragana: "せんしゅうから、にほんへりゅうがくするためににほんごせんたーにかよいはじめました。",
          romaji: "senshuu kara, nihon e ryuugaku suru tame ni nihongo sentaa ni kayoihajimemashita",
          meaning: "Từ tuần trước tôi bắt đầu đi học ở trung tâm tiếng Nhật để du học Nhật."
        },
        {
          direction: "ja-vi",
          kanji: "息子は夕方になって、やっと勉強をし始めた。",
          hiragana: "むすこはゆうがたになって、やっとべんきょうをしはじめた。",
          romaji: "musuko wa yuugata ni natte, yatto benkyou o shihajimeta",
          meaning: "Đến chiều tối con trai tôi cuối cùng cũng bắt đầu học."
        },
        {
          direction: "vi-ja",
          kanji: "3月末になって桜が咲き始める。",
          hiragana: "さんがつまつになってさくらがさきはじめる。",
          romaji: "sangatsu matsu ni natte sakura ga sakihajimeru",
          meaning: "Sang đến cuối tháng 3, hoa anh đào bắt đầu nở.",
          acceptedJapanese: [
            "3月末になって桜が咲き始める。",
            "さんがつまつになってさくらがさきはじめる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "雨が降り始める。",
          hiragana: "あめがふりはじめる。",
          romaji: "ame ga furihajimeru",
          meaning: "Trời bắt đầu mưa.",
          acceptedJapanese: [
            "雨が降り始める。",
            "あめがふりはじめる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "雪が降り始める。",
          hiragana: "ゆきがふりはじめる。",
          romaji: "yuki ga furihajimeru",
          meaning: "Tuyết bắt đầu rơi.",
          acceptedJapanese: [
            "雪が降り始める。",
            "ゆきがふりはじめる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "日本語を勉強し始めたのは2年前です。",
          hiragana: "にほんごをべんきょうしはじめたのはにねんまえです。",
          romaji: "nihongo o benkyou shihajimeta no wa ni nen mae desu",
          meaning: "Tôi bắt đầu học tiếng Nhật từ 2 năm trước.",
          acceptedJapanese: [
            "日本語を勉強し始めたのは2年前です。",
            "にほんごをべんきょうしはじめたのはにねんまえです。"
          ]
        }
      ]
    },
    {
      structure: "～終わる",
      meaning: "V xong / Kết thúc V",
      note: "Kết thúc hoặc làm xong một hành động đã diễn ra liên tục trước đó. Cấu trúc: Vます + 終わる.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "今日はレポートを書き終わるまで寝ないつもりだ。",
          hiragana: "きょうはれぽーとをかきおわるまでねないつもりだ。",
          romaji: "kyou wa repooto o kakiowaru made nenai tsumori da",
          meaning: "Hôm nay tôi định không ngủ cho đến khi viết xong báo cáo."
        },
        {
          direction: "ja-vi",
          kanji: "まだ私が話し終わっていないのに、彼が話し始めた。",
          hiragana: "まだわたしがはなしおわっていないのに、かれがはなしはじめた。",
          romaji: "mada watashi ga hanashiowatte inai noni, kare ga hanashihajimeta",
          meaning: "Tôi vẫn chưa nói xong mà anh ấy đã bắt đầu nói."
        },
        {
          direction: "ja-vi",
          kanji: "彼が歌い終わってから、次は私が歌わなければならない。",
          hiragana: "かれがうたいおわってから、つぎはわたしがうたわなければならない。",
          romaji: "kare ga utaiowatte kara, tsugi wa watashi ga utawanakereba naranai",
          meaning: "Sau khi anh ấy hát xong thì tiếp theo tôi phải hát."
        },
        {
          direction: "vi-ja",
          kanji: "書き終わる",
          hiragana: "かきおわる",
          romaji: "kakiowaru",
          meaning: "Viết xong.",
          acceptedJapanese: ["書き終わる", "かきおわる"]
        },
        {
          direction: "vi-ja",
          kanji: "飲み終わる",
          hiragana: "のみおわる",
          romaji: "nomiowaru",
          meaning: "Uống xong.",
          acceptedJapanese: ["飲み終わる", "のみおわる"]
        },
        {
          direction: "vi-ja",
          kanji: "本を読み終わる",
          hiragana: "ほんをよみおわる",
          romaji: "hon o yomiowaru",
          meaning: "Đọc xong sách.",
          acceptedJapanese: ["本を読み終わる", "ほんをよみおわる"]
        }
      ]
    },
    {
      structure: "～続ける",
      meaning: "Duy trì / Liên tục / Tiếp tục...",
      note: "Tiếp tục hoặc duy trì thực hiện một hành động hay thói quen nào đó. Cấu trúc: Vます + 続ける.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "この財布は10年前に母からもらい、その時からずっと使い続けている。",
          hiragana: "このさいふはじゅうねんまえにははからもらい、そのときからずっとつかいつづけている。",
          romaji: "kono saifu wa juu nen mae ni haha kara morai, sono toki kara zutto tsukaitsudzukete iru",
          meaning: "Chiếc ví này tôi nhận từ mẹ 10 năm trước và đã dùng liên tục từ đó đến nay."
        },
        {
          direction: "ja-vi",
          kanji: "N4のクラスが終わった後も、自分で日本語を勉強し続けるつもりです。",
          hiragana: "N4のくらすがおわったあとも、じぶんでにほんごをべんきょうしつづけるつもりです。",
          romaji: "N4 no kurasu ga owatta ato mo, jibun de nihongo o benkyou shitsudzukeru tsumori desu",
          meaning: "Sau khi lớp N4 kết thúc, tôi vẫn định tiếp tục tự học tiếng Nhật."
        },
        {
          direction: "ja-vi",
          kanji: "彼は休憩時間が終わった後も、ゲームをし続けている。",
          hiragana: "かれはきゅうけいじかんがおわったあとも、げーむをしつづけている。",
          romaji: "kare wa kyuukei jikan ga owatta ato mo, geemu o shitsudzukete iru",
          meaning: "Dù giờ nghỉ đã kết thúc, anh ấy vẫn tiếp tục chơi game."
        },
        {
          direction: "vi-ja",
          kanji: "留学から帰っても、日本語の勉強をし続けたいと思います。",
          hiragana: "りゅうがくからかえっても、にほんごのべんきょうをしつづけたいとおもいます。",
          romaji: "ryuugaku kara kaette mo, nihongo no benkyou o shitsudzuketai to omoimasu",
          meaning: "Dù có trở về nước sau khi đi du học thì tôi vẫn sẽ tiếp tục việc học tiếng Nhật.",
          acceptedJapanese: [
            "留学から帰っても、日本語の勉強をし続けたいと思います。",
            "りゅうがくからかえっても、にほんごのべんきょうをしつづけたいとおもいます。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "何事も、やり続けることで成果が見えてくるだろう。",
          hiragana: "なにごとも、やりつづけることでせいかがみえてくるだろう。",
          romaji: "nanigoto mo, yaritsudzukeru koto de seika ga miete kuru darou",
          meaning: "Chuyện gì thì chuyện, bằng việc chúng ta duy trì làm thì chắc hẳn sẽ nhìn thấy thành quả.",
          acceptedJapanese: [
            "何事も、やり続けることで成果が見えてくるだろう。",
            "なにごとも、やりつづけることでせいかがみえてくるだろう。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "登山で休みなく歩き続けたので、とても疲れてしまった。",
          hiragana: "とざんでやすみなくあるきつづけたので、とてもつかれてしまった。",
          romaji: "tozan de yasumi naku arukitsudzuketa node, totemo tsukarete shimatta",
          meaning: "Trong lúc leo núi, tôi cứ liên tục đi bộ mà không nghỉ nên rất mệt.",
          acceptedJapanese: [
            "登山で休みなく歩き続けたので、とても疲れてしまった。",
            "とざんでやすみなくあるきつづけたので、とてもつかれてしまった。"
          ]
        }
      ]
    },
    {
      structure: "～直す",
      meaning: "Làm lại... theo hướng sửa sai, cải thiện, làm cho đúng hơn",
      note: "Diễn tả hành động làm lại từ đầu sau khi đã thử nhưng thất bại, sai hoặc chưa tốt. Cấu trúc: Vます + 直す. 持ち直す mang nghĩa hồi phục/chuyển biến tốt từ trạng thái xấu, ví dụ 病気が持ち直す, 景気が持ち直す, 気持ちを持ち直す.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "家が古くなってきたので、建て直すことにしました。",
          hiragana: "いえがふるくなってきたので、たてなおすことにしました。",
          romaji: "ie ga furuku natte kita node, tatenaosu koto ni shimashita",
          meaning: "Vì ngôi nhà đã cũ nên tôi quyết định xây lại."
        },
        {
          direction: "ja-vi",
          kanji: "本当に仕事を辞めるかどうか、もう一度考え直してみなさい？",
          hiragana: "ほんとうにしごとをやめるかどうか、もういちどかんがえなおしてみなさい？",
          romaji: "hontou ni shigoto o yameru ka dou ka, mou ichido kangaenaoshite minasai",
          meaning: "Hãy thử suy nghĩ lại một lần nữa xem có thực sự nghỉ việc hay không."
        },
        {
          direction: "ja-vi",
          kanji: "今年に入って母の病気は進んでいたが、最近少し持ち直した。",
          hiragana: "ことしにはいってははのびょうきはすすんでいたが、さいきんすこしもちなおした。",
          romaji: "kotoshi ni haitte haha no byouki wa susunde ita ga, saikin sukoshi mochinaoshita",
          meaning: "Từ đầu năm bệnh của mẹ tiến triển xấu, nhưng gần đây đã hồi phục đôi chút."
        },
        {
          direction: "vi-ja",
          kanji: "このレポートは間違いが多いので、書き直してください。",
          hiragana: "このれぽーとはまちがいがおおいので、かきなおしてください。",
          romaji: "kono repooto wa machigai ga ooi node, kakinaoshite kudasai",
          meaning: "Vì bản báo cáo này nhiều lỗi sai nên bạn hãy viết lại đi!",
          acceptedJapanese: [
            "このレポートは間違いが多いので、書き直してください。",
            "このれぽーとはまちがいがおおいので、かきなおしてください。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "雨に濡れてしまった洗濯物は、洗い直してください。",
          hiragana: "あめにぬれてしまったせんたくものは、あらいなおしてください。",
          romaji: "ame ni nurete shimatta sentakumono wa, arainaoshite kudasai",
          meaning: "Quần áo phơi mà bị ẩm vì mưa thì hãy giặt lại nhé!",
          acceptedJapanese: [
            "雨に濡れてしまった洗濯物は、洗い直してください。",
            "あめにぬれてしまったせんたくものは、あらいなおしてください。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "失敗しても、何度でもやり直せばいいのだ。",
          hiragana: "しっぱいしても、なんどでもやりなおせばいいのだ。",
          romaji: "shippai shite mo, nando demo yarinaoseba ii no da",
          meaning: "Dù thất bại, chỉ cần làm lại bao nhiêu lần cũng được.",
          acceptedJapanese: [
            "失敗しても、何度でもやり直せばいいのだ。",
            "しっぱいしても、なんどでもやりなおせばいいのだ。"
          ]
        }
      ]
    },
    {
      structure: "～として",
      meaning: "Với tư cách, vai trò / Như là...",
      note: "N1 chỉ tư cách, vai trò, chức danh, nghề nghiệp, danh nghĩa. Khi N1 chỉ sở thích... mang nét nghĩa “như là...”. Có cả dạng としても và としては. Cấu trúc: N1 + として; N1 + としての + N2.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私はベトナムが好きで、趣味としてベトナム語を勉強している。",
          hiragana: "わたしはべとなむがすきで、しゅみとしてべとなむごをべんきょうしている。",
          romaji: "watashi wa Betonamu ga suki de, shumi to shite Betonamugo o benkyou shite iru",
          meaning: "Tôi thích Việt Nam và học tiếng Việt như một sở thích."
        },
        {
          direction: "ja-vi",
          kanji: "私は今ベトナムで、日本語の教師として働いている。",
          hiragana: "わたしはいまべとなむで、にほんごのきょうしとしてはたらいている。",
          romaji: "watashi wa ima Betonamu de, nihongo no kyoushi to shite hataraite iru",
          meaning: "Hiện tại tôi đang làm việc ở Việt Nam với tư cách là giáo viên tiếng Nhật."
        },
        {
          direction: "ja-vi",
          kanji: "私は子供に、勉強について親としての考えを言った。",
          hiragana: "わたしはこどもに、べんきょうについておやとしてのかんがえをいった。",
          romaji: "watashi wa kodomo ni, benkyou ni tsuite oya to shite no kangae o itta",
          meaning: "Tôi đã nói với con suy nghĩ của mình trong vai trò là cha mẹ về việc học."
        },
        {
          direction: "ja-vi",
          kanji: "彼は俳優だが、歌手としても有名だ。",
          hiragana: "かれははいゆうだが、かしゅとしてもゆうめいだ。",
          romaji: "kare wa haiyuu da ga, kashu to shite mo yuumei da",
          meaning: "Anh ấy là diễn viên nhưng cũng nổi tiếng với tư cách ca sĩ."
        },
        {
          direction: "ja-vi",
          kanji: "その男は一流の作家だが、映画監督としてはまだまだだ。",
          hiragana: "そのおとこはいちりゅうのさっかだが、えいがかんとくとしてはまだまだだ。",
          romaji: "sono otoko wa ichiryuu no sakka da ga, eiga kantoku to shite wa mada mada da",
          meaning: "Người đàn ông đó là nhà văn hàng đầu nhưng với tư cách đạo diễn phim thì vẫn còn non."
        },
        {
          direction: "vi-ja",
          kanji: "日本語の先生として働いています。",
          hiragana: "にほんごのせんせいとしてはたらいています。",
          romaji: "nihongo no sensei to shite hataraite imasu",
          meaning: "Tôi đang làm việc với tư cách là một giáo viên tiếng Nhật.",
          acceptedJapanese: [
            "日本語の先生として働いています。",
            "にほんごのせんせいとしてはたらいています。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "留学生として日本に来ました。",
          hiragana: "りゅうがくせいとしてにほんにきました。",
          romaji: "ryuugakusei to shite nihon ni kimashita",
          meaning: "Tôi đến Nhật với tư cách là một du học sinh.",
          acceptedJapanese: [
            "留学生として日本に来ました。",
            "りゅうがくせいとしてにほんにきました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "社長としての立場",
          hiragana: "しゃちょうとしてのたちば",
          romaji: "shachou to shite no tachiba",
          meaning: "Vị trí với tư cách là một giám đốc.",
          acceptedJapanese: ["社長としての立場", "しゃちょうとしてのたちば"]
        },
        {
          direction: "vi-ja",
          kanji: "親としての考え",
          hiragana: "おやとしてのかんがえ",
          romaji: "oya to shite no kangae",
          meaning: "Suy nghĩ trong vai trò là bố mẹ.",
          acceptedJapanese: ["親としての考え", "おやとしてのかんがえ"]
        },
        {
          direction: "vi-ja",
          kanji: "趣味としてピアノ習っています。",
          hiragana: "しゅみとしてぴあのならっています。",
          romaji: "shumi to shite piano naratte imasu",
          meaning: "Tôi đang học piano như là sở thích của mình.",
          acceptedJapanese: [
            "趣味としてピアノ習っています。",
            "しゅみとしてぴあのならっています。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "ズン先生は趣味としてレッスンの動画を作り始めました。",
          hiragana: "ずんせんせいはしゅみとしてれっすんのどうがをつくりはじめました。",
          romaji: "Zun sensei wa shumi to shite ressun no douga o tsukurihajimemashita",
          meaning: "Thầy Dũng đã bắt đầu làm clip bài giảng như là một sở thích.",
          acceptedJapanese: [
            "ズン先生は趣味としてレッスンの動画を作り始めました。",
            "ずんせんせいはしゅみとしてれっすんのどうがをつくりはじめました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "京都は観光地として知られています。",
          hiragana: "きょうとはかんこうちとしてしられています。",
          romaji: "Kyouto wa kankouchi to shite shirarete imasu",
          meaning: "Kyoto được biết đến như là một địa điểm tham quan du lịch.",
          acceptedJapanese: [
            "京都は観光地として知られています。",
            "きょうとはかんこうちとしてしられています。"
          ]
        }
      ]
    }
  ]
});
