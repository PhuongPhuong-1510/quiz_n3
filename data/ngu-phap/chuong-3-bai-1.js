/*
  FILE NGỮ PHÁP

  Thêm tên file mới vào ngu-phap/danh-sach-ngu-phap.js.

  direction:

    "ja-vi" = hiện câu Nhật, nhập Romaji và nghĩa Việt.

    "vi-romaji" = hiện câu Việt, nhập câu bằng Romaji.
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({

  name: "chương 3 bài 1",

  grammar: [

    // =========================================================
    // 1. ～など / ～なんか / ～なんて（1）
    // =========================================================
    {
      structure: "N + など / なんか / なんて",
      meaning: "Như là N... / kiểu như N",

      note:
        "Dùng để đưa ra một ví dụ hoặc đề xuất cho một vấn đề, sự việc nào đó. " +
        "「など」thường dùng trong văn viết; 「なんか」và「なんて」thường dùng trong văn nói. " +
        "Sau「N + など / なんか / なんて」thường có thể đi cùng trợ từ. " +
        "Tuy nhiên trong văn nói, đặc biệt với「なんか」「なんて」, trợ từ thường có thể được lược bỏ.",

      examples: [

        {
          direction: "ja-vi",
          kanji: "プレゼントはハンカチなんかどうかな。",
          hiragana: "プレゼントはハンカチなんかどうかな。",
          romaji: "purezento wa hankachi nanka dou kana",
          meaning: "Quà tặng thì khăn tay chẳng hạn, cậu thấy thế nào?"
        },

        {
          direction: "ja-vi",
          kanji: "土日はいつも暇だけど、年末なんかは土日でも忙しくなる。",
          hiragana: "どにちはいつもひまだけど、ねんまつなんかはどにちでもいそがしくなる。",
          romaji: "donichi wa itsumo hima da kedo, nenmatsu nanka wa donichi demo isogashiku naru",
          meaning: "Thứ Bảy và Chủ nhật thì bình thường lúc nào cũng rảnh, nhưng vào những dịp như cuối năm thì dù là cuối tuần cũng trở nên bận rộn."
        },

        {
          direction: "ja-vi",
          kanji: "皆さんのご感想、ご意見などをお待ちしています。",
          hiragana: "みなさんのごかんそう、ごいけんなどをおまちしています。",
          romaji: "minasan no gokansou, goiken nado o omachi shite imasu",
          meaning: "Chúng tôi mong nhận được những cảm tưởng, ý kiến... của mọi người."
        },

        // ----- Bài dịch -----

        {
          direction: "vi-romaji",
          kanji: "今晩、日本料理なんてどう？",
          hiragana: "こんばん、にほんりょうりなんてどう？",
          romaji: "konban, nihon ryouri nante dou",
          meaning: "Tối nay ăn đồ Nhật thì thế nào?"
        },

        {
          direction: "vi-romaji",
          kanji: "今日、ラーメンなんか食べたいなー。",
          hiragana: "きょう、ラーメンなんかたべたいなー。",
          romaji: "kyou, raamen nanka tabetai naa",
          meaning: "Hôm nay tớ muốn ăn món gì như mì ramen quá!"
        },

        {
          direction: "vi-romaji",
          kanji: "A：今度の日曜日、どこに行く？ B：遊園地なんかどう？",
          hiragana: "A：こんどのにちようび、どこにいく？ B：ゆうえんちなんかどう？",
          romaji: "A: kondo no nichiyoubi, doko ni iku? B: yuuenchi nanka dou?",
          meaning: "A: Chủ nhật tới mình đi đâu nhỉ? B: Khu vui chơi chẳng hạn thì thế nào?"
        }

      ]
    },

    // =========================================================
    // 2. ～など / ～なんか / ～なんて（2）
    // =========================================================
    {
      structure: "N + など / なんか / なんて",
      meaning: "(Cái thứ như) N thì... / N ấy mà...",

      note:
        "Dùng khi nói về người, sự vật hoặc sự việc mà người nói có cảm giác xem nhẹ, coi thường, khinh thường hoặc đánh giá thấp. " +
        "Phía sau「など / なんか / なんて」thường xuất hiện từ ngữ mang nghĩa phủ định. " +
        "Khi dùng để nói về chính bản thân mình, mẫu câu còn có thể biểu thị thái độ khiêm tốn.",

      examples: [

        {
          direction: "ja-vi",
          kanji: "結婚なんかしなくても一人で生きていける。",
          hiragana: "けっこんなんかしなくてもひとりでいきていける。",
          romaji: "kekkon nanka shinakute mo hitori de ikite ikeru",
          meaning: "Không cần làm cái chuyện như kết hôn thì một mình tôi vẫn có thể sống được."
        },

        {
          direction: "ja-vi",
          kanji: "マッサージなんて、本当に効果があるんですか。",
          hiragana: "マッサージなんて、ほんとうにこうかがあるんですか。",
          romaji: "massaaji nante, hontou ni kouka ga arun desu ka",
          meaning: "Cái thứ như mát-xa ấy thật sự có hiệu quả sao?"
        },

        {
          direction: "ja-vi",
          kanji: "未来のことなど、だれも予想できない。",
          hiragana: "みらいのことなど、だれもよそうできない。",
          romaji: "mirai no koto nado, dare mo yosou dekinai",
          meaning: "Những chuyện như tương lai thì chẳng ai có thể dự đoán được."
        },

        // ----- Bài dịch -----

        {
          direction: "vi-romaji",
          kanji: "学生時代は勉強なんかしなくてもいいと思っていた。",
          hiragana: "がくせいじだいはべんきょうなんかしなくてもいいとおもっていた。",
          romaji: "gakusei jidai wa benkyou nanka shinakute mo ii to omotte ita",
          meaning: "Thời sinh viên, tôi đã nghĩ rằng chẳng cần học hành gì đấy cũng được."
        },

        {
          direction: "vi-romaji",
          kanji: "あの人の言葉など、信じられない。",
          hiragana: "あのひとのことばなど、しんじられない。",
          romaji: "ano hito no kotoba nado, shinjirarenai",
          meaning: "Lời của người đó ấy mà, chẳng thể nào tin nổi!"
        },

        {
          direction: "vi-romaji",
          kanji: "安いスマホなんか買っても、どうせすぐに壊れるよ。",
          hiragana: "やすいスマホなんかかっても、どうせすぐにこわれるよ。",
          romaji: "yasui sumaho nanka katte mo, douse sugu ni kowareru yo",
          meaning: "Điện thoại rẻ tiền ấy mà, dù có mua thì kiểu gì cũng hỏng ngay thôi!"
        }

      ]
    },

    // =========================================================
    // 3. ～なんて
    // =========================================================
    {
      structure: "普通形 / Aなだ・Aなだった / Nだ・Nだった + なんて",
      meaning: "Không ngờ... / vậy mà... / chuyện... thật là...",

      note:
        "Dùng để bày tỏ cảm xúc ngạc nhiên, kinh ngạc trước một sự việc nằm ngoài dự đoán. " +
        "Phần đứng trước「なんて」là nội dung hoặc sự việc gây ngạc nhiên; phần sau thể hiện cảm xúc như ngạc nhiên, xúc động, khó tin... " +
        "Cũng có trường hợp câu thể hiện cảm xúc được đặt trước rồi mới đến vế「～なんて」. " +
        "Ngoài ra, phần phía sau「なんて」có thể được lược bỏ nếu cảm xúc đã rõ trong ngữ cảnh.",

      examples: [

        // ----- Ví dụ bổ sung trong phần giải thích -----

        {
          direction: "ja-vi",
          kanji: "本当に驚きました。私がN1に合格できたなんて。",
          hiragana: "ほんとうにおどろきました。わたしがエヌいちにごうかくできたなんて。",
          romaji: "hontou ni odorokimashita. watashi ga enu ichi ni goukaku dekita nante",
          meaning: "Tôi thực sự rất bất ngờ. Không ngờ chính tôi lại có thể đỗ N1."
        },

        {
          direction: "ja-vi",
          kanji: "記念日を忘れるなんて…。",
          hiragana: "きねんびをわすれるなんて…。",
          romaji: "kinenbi o wasureru nante...",
          meaning: "Lại quên ngày kỷ niệm như thế..."
        },

        // ----- Ví dụ chính -----

        {
          direction: "ja-vi",
          kanji: "安全な日本でこんな事件が起こるなんて…信じられません。",
          hiragana: "あんぜんなにほんでこんなじけんがおこるなんて…しんじられません。",
          romaji: "anzen na nihon de konna jiken ga okoru nante... shinjiraremasen",
          meaning: "Không ngờ ở một nước Nhật an toàn lại xảy ra sự việc như thế này... Thật không thể tin được."
        },

        {
          direction: "ja-vi",
          kanji: "ベトナム料理がこんなにおいしかったなんて！",
          hiragana: "ベトナムりょうりがこんなにおいしかったなんて！",
          romaji: "betonamu ryouri ga konna ni oishikatta nante",
          meaning: "Không ngờ món ăn Việt Nam lại ngon đến thế!"
        },

        {
          direction: "ja-vi",
          kanji: "もう一度検査が必要だなんて…変な病気だったら嫌だな…。",
          hiragana: "もういちどけんさがひつようだなんて…へんなびょうきだったらいやだな…。",
          romaji: "mou ichido kensa ga hitsuyou da nante... hen na byouki dattara iya da na",
          meaning: "Không ngờ lại cần phải kiểm tra thêm một lần nữa... Nếu là bệnh gì kỳ lạ thì tôi không muốn chút nào..."
        },

        // ----- Bài dịch -----

        {
          direction: "vi-romaji",
          kanji: "約束の時間に遅れるなんて、彼らしくない。",
          hiragana: "やくそくのじかんにおくれるなんて、かれらしくない。",
          romaji: "yakusoku no jikan ni okureru nante, kare rashikunai",
          meaning: "Trễ giờ hẹn á, thật chẳng giống anh ấy gì cả!"
        },

        {
          direction: "vi-romaji",
          kanji: "４月に東京で雪が降るなんて異常だ。",
          hiragana: "しがつにとうきょうでゆきがふるなんていじょうだ。",
          romaji: "shigatsu ni toukyou de yuki ga furu nante ijou da",
          meaning: "Vào tháng Tư mà lại có tuyết rơi ở Tokyo, quả là bất thường!"
        },

        {
          direction: "vi-romaji",
          kanji: "宝くじ当たるなんて、夢にも思わなかったよ。",
          hiragana: "たからくじあたるなんて、ゆめにもおもわなかったよ。",
          romaji: "takarakuji ataru nante, yume ni mo omowanakatta yo",
          meaning: "Trúng xổ số thì ngay cả trong mơ tôi cũng không hề nghĩ tới!"
        }

      ]
    },

    // =========================================================
    // 4. Vたらどう
    // =========================================================
    {
      structure: "Vた + らどう",
      meaning: "Nếu V thì thế nào? / V xem sao?",

      note:
        "Dùng để đưa ra phương án hoặc đề nghị cho một vấn đề hay dự định của đối phương. " +
        "Có thể xem đây là một lời khuyên nhẹ nhàng được đưa ra dưới dạng gợi ý. " +
        "Cách nói lịch sự là「Vたらどうですか」; cách nói suồng sã, thân mật là「Vたら？」.",

      examples: [

        {
          direction: "ja-vi",
          kanji: "給料を上げてほしいなら社長に相談したらどう？",
          hiragana: "きゅうりょうをあげてほしいならしゃちょうにそうだんしたらどう？",
          romaji: "kyuuryou o agete hoshii nara shachou ni soudan shitara dou",
          meaning: "Nếu muốn được tăng lương thì thử trao đổi với giám đốc xem sao?"
        },

        {
          direction: "ja-vi",
          kanji: "そんなに恋人が欲しいなら、ゲームをしていないでパーティーに行ったらどう？",
          hiragana: "そんなにこいびとがほしいなら、ゲームをしていないでパーティーにいったらどう？",
          romaji: "sonna ni koibito ga hoshii nara, geemu o shite inaide paatii ni ittara dou",
          meaning: "Nếu muốn có người yêu đến thế thì thay vì chơi game, thử đi dự tiệc xem sao?"
        },

        {
          direction: "ja-vi",
          kanji: "お母さんに感謝の気持ちを伝えたいなら、花と一緒に手紙を渡したらどうですか。",
          hiragana: "おかあさんにかんしゃのきもちをつたえたいなら、はなといっしょにてがみをわたしたらどうですか。",
          romaji: "okaasan ni kansha no kimochi o tsutaetai nara, hana to issho ni tegami o watashitara dou desu ka",
          meaning: "Nếu muốn bày tỏ lòng biết ơn với mẹ thì thử gửi một lá thư cùng với hoa xem sao?"
        },

        // ----- Bài dịch -----

        {
          direction: "vi-romaji",
          kanji: "わからないなら、先生に聞いてみたらどう？",
          hiragana: "わからないなら、せんせいにきいてみたらどう？",
          romaji: "wakaranai nara, sensei ni kiite mitara dou",
          meaning: "Nếu không hiểu thì cậu thử hỏi giáo viên xem sao?"
        },

        {
          direction: "vi-romaji",
          kanji: "痩せたいなら、甘い物をやめたらどう？",
          hiragana: "やせたいなら、あまいものをやめたらどう？",
          romaji: "yasetai nara, amai mono o yametara dou",
          meaning: "Nếu muốn giảm cân thì cậu thử bỏ đồ ngọt đi thì thế nào?"
        },

        {
          direction: "vi-romaji",
          kanji: "自分が本当にやりたいことを、一度考えてみたらどう？",
          hiragana: "じぶんがほんとうにやりたいことを、いちどかんがえてみたらどう？",
          romaji: "jibun ga hontou ni yaritai koto o, ichido kangaete mitara dou",
          meaning: "Cậu thử suy nghĩ một lần về điều mình thật sự muốn làm xem sao?"
        }

      ]
    },

    // =========================================================
    // 5. ～ことだ
    // =========================================================
    {
      structure: "Vる / Vない + ことだ",
      meaning: "Nên V / Không nên V",

      note:
        "Dùng để đưa ra lời khuyên, ý kiến hoặc lời cảnh báo của người nói về việc nên hoặc không nên làm gì. " +
        "Thường người trên dùng với người dưới. " +
        "Vる + ことだ mang nghĩa nên làm; Vない + ことだ mang nghĩa không nên làm.",

      examples: [

        {
          direction: "ja-vi",
          kanji: "身体の健康を気遣うのであれば、野菜を食べることだ。",
          hiragana: "からだのけんこうをきづかうのであれば、やさいをたべることだ。",
          romaji: "karada no kenkou o kizukau node areba, yasai o taberu koto da",
          meaning: "Nếu quan tâm đến sức khỏe cơ thể thì nên ăn rau."
        },

        {
          direction: "ja-vi",
          kanji: "N2に合格したければ、毎日欠かさず勉強することだ。",
          hiragana: "エヌツーにごうかくしたければ、まいにちかかさずべんきょうすることだ。",
          romaji: "enu tsuu ni goukaku shitakereba, mainichi kakasazu benkyou suru koto da",
          meaning: "Nếu muốn đỗ N2 thì nên học mỗi ngày không bỏ buổi nào."
        },

        // ----- Bài dịch -----

        {
          direction: "vi-romaji",
          kanji: "皆さん、N2に合格したいのなら、今からちゃんと勉強することだ。",
          hiragana: "みなさん、エヌツーにごうかくしたいのなら、いまからちゃんとべんきょうすることだ。",
          romaji: "minasan, enu tsuu ni goukaku shitai no nara, ima kara chanto benkyou suru koto da",
          meaning: "Các bạn nếu muốn đỗ N2 thì từ bây giờ nên học hành thật cẩn thận."
        },

        {
          direction: "vi-romaji",
          kanji: "どんなことがあっても、冷静に対応することだ。",
          hiragana: "どんなことがあっても、れいせいにたいおうすることだ。",
          romaji: "donna koto ga atte mo, reisei ni taiou suru koto da",
          meaning: "Dù có chuyện gì đi chăng nữa thì cũng nên xử lý một cách bình tĩnh."
        },

        {
          direction: "vi-romaji",
          kanji: "泣きたいときは我慢せずに泣くことだよ。",
          hiragana: "なきたいときはがまんせずになくことだよ。",
          romaji: "nakitai toki wa gaman sezu ni naku koto da yo",
          meaning: "Khi bạn muốn khóc thì đừng chịu đựng mà hãy cứ khóc đi."
        }

      ]
    },

    // =========================================================
    // 6. ～ことにする / ～ことにした
    // =========================================================
    {
      structure: "Vる / Vない + ことにする / ことにした",
      meaning: "Quyết định V / quyết định không V",

      note:
        "Dùng để diễn tả một việc người nói tự quyết định dựa trên ý chí của bản thân. " +
        "「ことにする」biểu thị quyết định được đưa ra tại thời điểm nói hoặc ngay trong cuộc hội thoại, mang nghĩa 'quyết định sẽ ~'. " +
        "「ことにした」biểu thị việc người nói đã quyết định từ trước thời điểm hội thoại, mang nghĩa 'đã quyết định là ~'.",

      examples: [

        {
          direction: "ja-vi",
          kanji: "旅行のためにお金を貯めることにします。",
          hiragana: "りょこうのためにおかねをためることにします。",
          romaji: "ryokou no tame ni okane o tameru koto ni shimasu",
          meaning: "Tôi quyết định sẽ tiết kiệm tiền để đi du lịch."
        },

        {
          direction: "ja-vi",
          kanji: "もうすぐ子供が生まれるから、禁煙することにしました。",
          hiragana: "もうすぐこどもがうまれるから、きんえんすることにしました。",
          romaji: "mou sugu kodomo ga umareru kara, kin'en suru koto ni shimashita",
          meaning: "Vì sắp có con nên tôi đã quyết định bỏ thuốc lá."
        },

        {
          direction: "ja-vi",
          kanji: "今日は天気が悪いから、出かけないで家にいることにする。",
          hiragana: "きょうはてんきがわるいから、でかけないでいえにいることにする。",
          romaji: "kyou wa tenki ga warui kara, dekakenaide ie ni iru koto ni suru",
          meaning: "Hôm nay thời tiết xấu nên tôi quyết định không ra ngoài mà ở nhà."
        },

        // ----- Bài dịch -----

        {
          direction: "vi-romaji",
          kanji: "決めた！４月から日本語を勉強することにします。",
          hiragana: "きめた！しがつからにほんごをべんきょうすることにします。",
          romaji: "kimeta! shigatsu kara nihongo o benkyou suru koto ni shimasu",
          meaning: "Tớ quyết định rồi! Từ tháng 4, tớ sẽ học tiếng Nhật."
        },

        {
          direction: "vi-romaji",
          kanji: "最近、運動不足だから、毎晩歩くことにしました。",
          hiragana: "さいきん、うんどうぶそくだから、まいばんあるくことにしました。",
          romaji: "saikin, undou busoku da kara, maiban aruku koto ni shimashita",
          meaning: "Gần đây thiếu vận động nên tớ đã quyết định sẽ đi bộ hàng tối."
        },

        {
          direction: "vi-romaji",
          kanji: "健康のために、毎日運動することにした。",
          hiragana: "けんこうのために、まいにちうんどうすることにした。",
          romaji: "kenkou no tame ni, mainichi undou suru koto ni shita",
          meaning: "Để khỏe mạnh, tôi quyết định hàng ngày sẽ tập thể dục."
        }

      ]
    }

  ]

});