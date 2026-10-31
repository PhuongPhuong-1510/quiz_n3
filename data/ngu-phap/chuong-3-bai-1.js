/*
  NGỮ PHÁP: CHƯƠNG 3 BÀI 1
  Nguồn: các ảnh trang 160–165.

  Thêm tên file vào ngu-phap/danh-sach-ngu-phap.js.

  direction:
    "ja-vi": hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-romaji": hiện câu Việt, nhập câu bằng Romaji.

  Tổng: 6 nhóm ngữ pháp, 34 mục luyện tập.
  - 14 mục ví dụ chính ở trang 160–164.
  - 2 mục ví dụ trong phần giải thích trang 161.
  - 18 mục bài tập từ đáp án trang 165.

  Chưa có ảnh trang giới thiệu và ví dụ gốc của mục 1.
  Một mục hội thoại giữ cả lượt A và B.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "chương 3 bài 1",
  grammar: [
    {
  structure: "N + など／なんか／なんて（nêu ví dụ, gợi ý）",
  meaning: "Như là…; chẳng hạn…; những thứ như…; hay là…",
  note: "Trang 159. Đã bổ sung đầy đủ ba ví dụ gốc và ba câu bài tập đối chiếu đáp án trang 165.\n\n1. Cách nối:\n• N + など.\n• N + なんか.\n• N + なんて.\n• Ví dụ: ハンカチなんか／年末なんか／ご意見など.\n\n2. Cách dùng:\n• Đưa một đối tượng ra làm ví dụ, đại diện cho những lựa chọn hoặc trường hợp tương tự.\n• Dùng để đề xuất một phương án mà không giới hạn lựa chọn chỉ ở phương án đó.\n• ハンカチなんかどうかな = Một món như khăn tay thì sao nhỉ?\n• 年末なんかは = Chẳng hạn vào dịp cuối năm thì…\n• ご感想、ご意見など = Những điều như cảm tưởng, ý kiến…\n\n3. Sắc thái:\n• など thường gặp trong văn viết và cách diễn đạt trang trọng; cũng dùng được trong lời nói lịch sự.\n• なんか／なんて thường gặp trong hội thoại, mang sắc thái thân mật.\n• Trong cách dùng này, なんか／なんて không nhất thiết có ý coi thường.\n\n4. Trợ từ:\n• Trợ từ có thể đi sau cụm này tùy vai trò trong câu: 年末なんかは／ご意見などを.\n• Trong hội thoại, một số trợ từ có thể được lược bỏ, nhất là khi dùng なんか／なんて.\n• Ví dụ: ラーメンなんか食べたい tương ứng với cách nói đầy đủ hơn ラーメンなんかを食べたい.\n• Không phải mọi trợ từ đều luôn lược bỏ được; cần xét cấu trúc và mức độ tự nhiên của câu.\n\n5. Dạng đề xuất thường gặp:\n• Nなんかどう？ = Một thứ như N thì sao?\n• Nなんてどう？ = Hay là N?\n• Nなんかどうかな = Một thứ như N thì sao nhỉ?; cách gợi ý nhẹ nhàng, có sắc thái cân nhắc.\n\n6. Phân biệt với mục 2:\n• ハンカチなんかどうかな → Gợi ý khăn tay làm quà.\n• 勉強なんかしなくてもいい → Xem nhẹ việc học.\n• Cùng hình thức nhưng thái độ khác nhau; phải dựa vào ngữ cảnh.\n\n7. Từ cần chú ý:\n• ハンカチ: khăn tay.\n• 年末（ねんまつ）: cuối năm.\n• 土日（どにち）: thứ Bảy và Chủ nhật.\n• ご感想（ごかんそう）: cảm tưởng, nhận xét; ご thể hiện sự lịch sự.\n• ご意見（ごいけん）: ý kiến; ご thể hiện sự lịch sự.\n• お待ちしています: cách nói lịch sự, khiêm nhường của 待っています; trong câu có thể dịch là mong nhận được.",
  examples: [
    {
      direction: "ja-vi",
      kanji: "プレゼントはハンカチなんかどうかな。",
      hiragana: "ぷれぜんとははんかちなんかどうかな。",
      romaji: "purezento wa hankachi nanka dou kana",
      meaning: "Quà tặng thì một món như khăn tay có được không nhỉ?"
    },
    {
      direction: "ja-vi",
      kanji: "土日はいつも暇だけど、年末なんかは土日でも忙しくなる。",
      hiragana: "どにちはいつもひまだけど、ねんまつなんかはどにちでもいそがしくなる。",
      romaji: "donichi wa itsumo hima da kedo, nenmatsu nanka wa donichi de mo isogashiku naru",
      meaning: "Cuối tuần tôi thường rảnh, nhưng vào những dịp như cuối năm thì ngay cả cuối tuần cũng trở nên bận rộn."
    },
    {
      direction: "ja-vi",
      kanji: "皆さんのご感想、ご意見などをお待ちしています。",
      hiragana: "みなさんのごかんそう、ごいけんなどをおまちしています。",
      romaji: "minasan no gokansou, goiken nado o omachi shite imasu",
      meaning: "Chúng tôi mong nhận được những chia sẻ như cảm tưởng và ý kiến của mọi người."
    },
    {
      direction: "vi-romaji",
      kanji: "今晩、日本料理なんてどう？",
      hiragana: "こんばん、にほんりょうりなんてどう？",
      romaji: "konban, nihon ryouri nante dou",
      meaning: "Tối nay ăn món Nhật thì thế nào?"
    },
    {
      direction: "vi-romaji",
      kanji: "今日、ラーメンなんか食べたいなー。",
      hiragana: "きょう、らーめんなんかたべたいなー。",
      romaji: "kyou, raamen nanka tabetai naa",
      meaning: "Hôm nay muốn ăn món gì đó như ramen quá."
    },
    {
      direction: "vi-romaji",
      kanji: "A：今度の日曜日、どこに行く？\nB：遊園地なんかどう？",
      hiragana: "A：こんどのにちようび、どこにいく？\nB：ゆうえんちなんかどう？",
      romaji: "A: kondo no nichiyoubi, doko ni iku. B: yuuenchi nanka dou",
      meaning: "A: Chủ nhật tới đi đâu nhỉ?\nB: Công viên giải trí chẳng hạn thì sao?"
    }
  ]
},
    {
      structure: "N + など／なんか／なんて（nêu ví dụ, gợi ý）",
      meaning: "Chẳng hạn như…; những thứ như…; hay là…",
      note: "Mục 1. Hiện chỉ có ba câu bài tập trong đáp án trang 165; chưa có ảnh phần giải thích và ví dụ gốc của mục này.\n\n1. Cách nối cơ bản:\n• N + など.\n• N + なんか.\n• N + なんて.\n\n2. Cách dùng trong các đáp án:\n• Nêu một đối tượng làm ví dụ hoặc gợi ý, không giới hạn lựa chọn chỉ ở đối tượng đó.\n• 日本料理なんてどう？ = Món Nhật thì sao?\n• ラーメンなんか食べたい = Muốn ăn thứ gì đó như ramen.\n• Có thể dịch tự nhiên là chẳng hạn, như là, hay là, hoặc lược bỏ tùy câu.\n\n3. Sắc thái:\n• など thường dùng được trong văn viết và cách nói tương đối trung tính.\n• なんか và なんて thường gặp trong hội thoại.\n• なんか／なんて không phải lúc nào cũng mang ý coi thường; trong các câu dưới đây chúng được dùng để gợi ý hoặc đưa ví dụ.\n\n4. Dễ nhầm:\n• Cùng hình thức nhưng ở mục 2, người nói có thái độ xem nhẹ hoặc khiêm tốn.\n• Phải dựa vào nội dung và giọng điệu để xác định sắc thái, không dịch cố định mọi trường hợp thành cái thứ như.",
      examples: [
        {
          direction: "vi-romaji",
          kanji: "今晩、日本料理なんてどう？",
          hiragana: "こんばん、にほんりょうりなんてどう？",
          romaji: "konban, nihon ryouri nante dou",
          meaning: "Tối nay ăn món Nhật thì sao?"
        },
        {
          direction: "vi-romaji",
          kanji: "今日、ラーメンなんか食べたいなー。",
          hiragana: "きょう、らーめんなんかたべたいなー。",
          romaji: "kyou, raamen nanka tabetai naa",
          meaning: "Hôm nay muốn ăn món gì đó như ramen quá."
        },
        {
          direction: "vi-romaji",
          kanji: "A：今度の日曜日、どこに行く？\nB：遊園地なんかどう？",
          hiragana: "A：こんどのにちようび、どこにいく？\nB：ゆうえんちなんかどう？",
          romaji: "A: kondo no nichiyoubi, doko ni iku. B: yuuenchi nanka dou",
          meaning: "A: Chủ nhật tới đi đâu?\nB: Hay đi công viên giải trí?"
        }
      ]
    },
    {
      structure: "N + など／なんか／なんて（xem nhẹ, khiêm tốn）",
      meaning: "Cái thứ như…; chuyện như…; người như…",
      note: "Trang 160.\n\n1. Cách nối:\n• N + など／なんか／なんて.\n• Ví dụ: 結婚なんか／マッサージなんて／未来のことなど.\n• Trợ từ đi kèm phụ thuộc vai trò trong câu: なんか có thể đứng trước が, を…; các trợ từ khác cũng có thể xuất hiện trước cụm này tùy cấu trúc.\n\n2. Cách dùng:\n• Nêu sự vật hoặc sự việc mà người nói xem nhẹ, coi là không đáng quan tâm, nghi ngờ giá trị hoặc cảm thấy khó chịu.\n• Phía sau thường có nội dung phủ định hoặc đánh giá tiêu cực, nhưng đây không phải điều kiện bắt buộc về ngữ pháp.\n• 結婚なんかしなくても… = Chuyện kết hôn ấy mà, dù không làm thì vẫn…\n\n3. Khi nói về bản thân:\n• Có thể mang sắc thái tự hạ mình, khiêm tốn: 私なんか = Người như tôi…\n• Cần xét ngữ cảnh; đôi khi còn thể hiện tự ti hoặc tự đánh giá thấp mình.\n\n4. Sắc thái giữa các dạng:\n• など tương đối phù hợp với văn viết hơn.\n• なんか／なんて thường dùng trong hội thoại và dễ bộc lộ thái độ cảm xúc.\n• Không dùng tùy tiện để nói về người khác vì có thể tạo cảm giác thiếu tôn trọng.\n\n5. Phân biệt với mục 1:\n• ラーメンなんかどう？ = Hay ăn ramen? → gợi ý.\n• 勉強なんかしなくてもいい = Chẳng cần học hành làm gì → xem nhẹ.\n• Hình thức giống nhau, ý nghĩa được quyết định bởi ngữ cảnh.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "結婚なんかしなくても一人で生きていける。",
          hiragana: "けっこんなんかしなくてもひとりでいきていける。",
          romaji: "kekkon nanka shinakute mo hitori de ikite ikeru",
          meaning: "Chẳng cần kết hôn thì vẫn có thể sống một mình."
        },
        {
          direction: "ja-vi",
          kanji: "マッサージなんて、本当に効果があるんですか。",
          hiragana: "まっさーじなんて、ほんとうにこうかがあるんですか。",
          romaji: "massaaji nante, hontou ni kouka ga aru n desu ka",
          meaning: "Mát-xa ấy mà, thật sự có hiệu quả sao?"
        },
        {
          direction: "ja-vi",
          kanji: "未来のことなど、だれも予想できない。",
          hiragana: "みらいのことなど、だれもよそうできない。",
          romaji: "mirai no koto nado, dare mo yosou dekinai",
          meaning: "Chuyện tương lai thì chẳng ai dự đoán được."
        },
        {
          direction: "vi-romaji",
          kanji: "学生時代は勉強なんかしなくてもいいと思っていた。",
          hiragana: "がくせいじだいはべんきょうなんかしなくてもいいとおもっていた。",
          romaji: "gakusei jidai wa benkyou nanka shinakute mo ii to omotte ita",
          meaning: "Thời còn đi học, tôi từng nghĩ chẳng cần học hành làm gì cũng được."
        },
        {
          direction: "vi-romaji",
          kanji: "あの人の言葉など、信じられない。",
          hiragana: "あのひとのことばなど、しんじられない。",
          romaji: "ano hito no kotoba nado, shinjirarenai",
          meaning: "Lời của người đó ấy mà, chẳng thể tin được."
        },
        {
          direction: "vi-romaji",
          kanji: "安いスマホなんか買っても、どうせすぐに壊れるよ。",
          hiragana: "やすいすまほなんかかっても、どうせすぐにこわれるよ。",
          romaji: "yasui sumaho nanka katte mo, douse sugu ni kowareru yo",
          meaning: "Điện thoại rẻ tiền ấy mà, có mua thì đằng nào cũng nhanh hỏng thôi."
        }
      ]
    },
    {
      structure: "～なんて（ngạc nhiên, cảm thán）",
      meaning: "Không ngờ…; chuyện… thật là…; vậy mà lại…",
      note: "Trang 161.\n\n1. Cách nối:\n• V thể thông thường + なんて.\n• Aい thể thông thường + なんて.\n• Aな + だ／だった + なんて.\n• N + だ／だった + なんて.\n• Ví dụ: 起こるなんて／おいしかったなんて／必要だなんて.\n\n2. Cách dùng:\n• Bày tỏ sự ngạc nhiên, xúc động, thất vọng hoặc cảm xúc mạnh trước sự việc ngoài dự đoán.\n• Phía trước なんて là nội dung khiến người nói có cảm xúc.\n• Phía sau thường là đánh giá: 信じられない／驚いた／彼らしくない…\n\n3. Có thể lược bỏ hoặc đổi vị trí phần cảm xúc:\n• ベトナム料理がこんなにおいしかったなんて！ → Lược bỏ nhận xét phía sau, vẫn hiểu là người nói rất ngạc nhiên.\n• 本当に驚きました。私がN1に合格できたなんて。 → Nêu cảm xúc trước rồi bổ sung nguyên nhân gây ngạc nhiên.\n• 記念日を忘れるなんて… → Bỏ lửng để người nghe tự hiểu sự trách móc hoặc thất vọng.\n\n4. Phân biệt với なんて ở mục 2:\n• 勉強なんて… có thể xem nhẹ việc học.\n• 合格できたなんて！ diễn tả ngạc nhiên vì đã thi đỗ.\n• Không phải mọi câu có なんて đều mang ý coi thường.\n\n5. Lưu ý:\n• Không nên thay mọi なんて bằng とても; hai từ có chức năng khác nhau.\n• Trong câu hội thoại, một số trợ từ có thể bị lược bỏ. Câu 宝くじ当たるなんて trong đáp án có thể viết đầy đủ là 宝くじが当たるなんて.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "安全な日本でこんな事件が起こるなんて…信じられません。",
          hiragana: "あんぜんなにほんでこんなじけんがおこるなんて…しんじられません。",
          romaji: "anzen na Nihon de konna jiken ga okoru nante, shinjiraremasen",
          meaning: "Không thể tin nổi một vụ việc như thế này lại xảy ra ở một đất nước an toàn như Nhật Bản."
        },
        {
          direction: "ja-vi",
          kanji: "ベトナム料理がこんなにおいしかったなんて！",
          hiragana: "べとなむりょうりがこんなにおいしかったなんて！",
          romaji: "Betonamu ryouri ga konna ni oishikatta nante",
          meaning: "Không ngờ món Việt lại ngon đến thế!"
        },
        {
          direction: "ja-vi",
          kanji: "もう一度検査が必要だなんて…変な病気だったら嫌だな…。",
          hiragana: "もういちどけんさがひつようだなんて…へんなびょうきだったらいやだな…。",
          romaji: "mou ichido kensa ga hitsuyou da nante, hen na byouki dattara iya da na",
          meaning: "Không ngờ lại cần kiểm tra thêm một lần nữa… Nếu là bệnh gì lạ thì thật đáng ngại…"
        },
        {
          direction: "ja-vi",
          kanji: "本当に驚きました。私がN1に合格できたなんて。",
          hiragana: "ほんとうにおどろきました。わたしがえぬいちにごうかくできたなんて。",
          romaji: "hontou ni odorokimashita. watashi ga enu ichi ni goukaku dekita nante",
          meaning: "Tôi thật sự rất ngạc nhiên. Không ngờ mình lại có thể đỗ N1."
        },
        {
          direction: "ja-vi",
          kanji: "記念日を忘れるなんて…。",
          hiragana: "きねんびをわすれるなんて…。",
          romaji: "kinenbi o wasureru nante",
          meaning: "Vậy mà lại quên ngày kỷ niệm…"
        },
        {
          direction: "vi-romaji",
          kanji: "約束の時間に遅れるなんて、彼らしくない。",
          hiragana: "やくそくのじかんにおくれるなんて、かれらしくない。",
          romaji: "yakusoku no jikan ni okureru nante, kare rashikunai",
          meaning: "Đến trễ giờ hẹn như vậy thật chẳng giống anh ấy."
        },
        {
          direction: "vi-romaji",
          kanji: "4月に東京で雪が降るなんて異常だ。",
          hiragana: "しがつにとうきょうでゆきがふるなんていじょうだ。",
          romaji: "shigatsu ni Toukyou de yuki ga furu nante ijou da",
          meaning: "Tháng Tư mà tuyết lại rơi ở Tokyo, thật bất thường."
        },
        {
          direction: "vi-romaji",
          kanji: "宝くじ当たるなんて、夢にも思わなかったよ。",
          hiragana: "たからくじあたるなんて、ゆめにもおもわなかったよ。",
          romaji: "takarakuji ataru nante, yume ni mo omowanakatta yo",
          meaning: "Trúng xổ số thì ngay cả trong mơ tôi cũng chưa từng nghĩ tới."
        }
      ]
    },
    {
      structure: "Vた + らどう／Vたらどうですか",
      meaning: "Thử làm… xem sao?; làm… thì thế nào?",
      note: "Trang 162.\n\n1. Cách tạo:\n• Chia động từ sang thể た rồi thêm らどう.\n• 聞く → 聞いたらどう？\n• やめる → やめたらどう？\n• 考える → 考えたらどう？\n• Lịch sự: ～たらどうですか.\n• Thân mật, rút gọn: ～たら？\n\n2. Cách dùng:\n• Đưa ra phương án, gợi ý hoặc lời khuyên cho vấn đề của đối phương.\n• Thường dựa trên tình huống người nghe đang gặp: không hiểu thì hỏi thầy cô; muốn giảm cân thì thử bỏ đồ ngọt.\n• Vた trong mẫu này tạo điều kiện giả định, không mang nghĩa hành động đã xảy ra trong quá khứ.\n\n3. Sắc thái:\n• Thường là gợi ý để người nghe cân nhắc.\n• Tuy nhiên, giọng nói và quan hệ giao tiếp có thể khiến câu mang sắc thái giục giã hoặc trách móc.\n• Khi nói với người trên hoặc trong hoàn cảnh trang trọng, nên chọn cách đề xuất phù hợp hơn, không chỉ thêm ですか là đủ trong mọi trường hợp.\n\n4. So với ～ほうがいい:\n• ～たらどう: đưa ra một phương án, thử làm xem sao.\n• ～たほうがいい: trực tiếp đánh giá rằng làm như vậy sẽ tốt hơn, thường có sắc thái khuyên rõ hơn.\n• Đây là khác biệt thường gặp, không phải ranh giới tuyệt đối.\n\n5. Dễ nhầm:\n• ～たらどうなる？ = Nếu làm thì sẽ ra sao? → hỏi kết quả.\n• ～たらどう？ = Thử làm xem sao? → gợi ý trong ngữ cảnh của bài.",
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
          hiragana: "そんなにこいびとがほしいなら、げーむをしていないでぱーてぃーにいったらどう？",
          romaji: "sonna ni koibito ga hoshii nara, geemu o shite inaide paatii ni ittara dou",
          meaning: "Nếu muốn có người yêu đến thế thì đừng mải chơi game nữa, thử đi dự tiệc xem sao?"
        },
        {
          direction: "ja-vi",
          kanji: "お母さんに感謝の気持ちを伝えたいなら、花と一緒に手紙を渡したらどうですか。",
          hiragana: "おかあさんにかんしゃのきもちをつたえたいなら、はなといっしょにてがみをわたしたらどうですか。",
          romaji: "okaasan ni kansha no kimochi o tsutaetai nara, hana to issho ni tegami o watashitara dou desu ka",
          meaning: "Nếu muốn bày tỏ lòng biết ơn với mẹ, bạn thử tặng mẹ một lá thư kèm hoa xem sao?"
        },
        {
          direction: "vi-romaji",
          kanji: "わからないなら、先生に聞いてみたらどう？",
          hiragana: "わからないなら、せんせいにきいてみたらどう？",
          romaji: "wakaranai nara, sensei ni kiite mitara dou",
          meaning: "Nếu không hiểu thì thử hỏi giáo viên xem sao?"
        },
        {
          direction: "vi-romaji",
          kanji: "痩せたいなら、甘い物をやめたらどう？",
          hiragana: "やせたいなら、あまいものをやめたらどう？",
          romaji: "yasetai nara, amai mono o yametara dou",
          meaning: "Nếu muốn giảm cân thì thử bỏ đồ ngọt xem sao?"
        },
        {
          direction: "vi-romaji",
          kanji: "自分が本当にやりたいことを、一度考えてみたらどう？",
          hiragana: "じぶんがほんとうにやりたいことを、いちどかんがえてみたらどう？",
          romaji: "jibun ga hontou ni yaritai koto o, ichido kangaete mitara dou",
          meaning: "Thử suy nghĩ một lần về điều mình thật sự muốn làm xem sao?"
        }
      ]
    },
    {
      structure: "Vる／Vない + ことだ（lời khuyên）",
      meaning: "Nên làm…; không nên làm…",
      note: "Trang 163.\n\n1. Cách nối:\n• V thể từ điển + ことだ: nên làm.\n• Vない + ことだ: không nên làm.\n• Ví dụ: 食べることだ／勉強することだ／我慢しないことだ.\n• Không dùng Vます + ことだ cho mẫu này.\n\n2. Cách dùng:\n• Đưa ra lời khuyên, hướng dẫn hoặc cảnh báo về việc cần làm hay tránh làm để đạt mục tiêu, giải quyết vấn đề.\n• Thường thấy trong lời khuyên của người có kinh nghiệm, giáo viên hoặc người ở vị trí hướng dẫn.\n• Sắc thái có thể khá trực tiếp, vì vậy cần chú ý khi nói với người trên.\n\n3. Dạng thường gặp:\n• ～たいなら／～たければ、Vることだ.\n• N2に合格したければ、毎日勉強することだ = Muốn đỗ N2 thì nên học mỗi ngày.\n• Có thể thêm よ: 泣くことだよ = Cứ khóc đi, đó là điều nên làm.\n\n4. Phân biệt:\n• Vることだ ở đây là lời khuyên, không chỉ là danh từ hóa một hành động.\n• Vることにする = quyết định làm → mẫu ở mục 6.\n• Vることになっている = được quy định hoặc sắp xếp làm → mẫu khác.\n\n5. Lưu ý:\n• Nghĩa không nên làm được tạo bằng Vないことだ.\n• Không nhầm với ～ことはない, thường mang nghĩa không cần làm hoặc chưa từng làm tùy cấu trúc.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "身体の健康を気遣うのであれば、野菜を食べることだ。",
          hiragana: "からだのけんこうをきづかうのであれば、やさいをたべることだ。",
          romaji: "karada no kenkou o kizukau no de areba, yasai o taberu koto da",
          meaning: "Nếu quan tâm đến sức khỏe của mình thì nên ăn rau."
        },
        {
          direction: "ja-vi",
          kanji: "N2に合格したければ、毎日欠かさず勉強することだ。",
          hiragana: "えぬににごうかくしたければ、まいにちかかさずべんきょうすることだ。",
          romaji: "enu ni ni goukaku shitakereba, mainichi kakasazu benkyou suru koto da",
          meaning: "Nếu muốn đỗ N2 thì nên học đều đặn mỗi ngày, không bỏ buổi nào."
        },
        {
          direction: "vi-romaji",
          kanji: "皆さん、N2に合格したいのなら、今からちゃんと勉強することだ。",
          hiragana: "みなさん、えぬににごうかくしたいのなら、いまからちゃんとべんきょうすることだ。",
          romaji: "minasan, enu ni ni goukaku shitai no nara, ima kara chanto benkyou suru koto da",
          meaning: "Các bạn, nếu muốn đỗ N2 thì nên học hành nghiêm túc từ bây giờ."
        },
        {
          direction: "vi-romaji",
          kanji: "どんなことがあっても、冷静に対応することだ。",
          hiragana: "どんなことがあっても、れいせいにたいおうすることだ。",
          romaji: "donna koto ga atte mo, reisei ni taiou suru koto da",
          meaning: "Dù có chuyện gì xảy ra cũng nên bình tĩnh xử lý."
        },
        {
          direction: "vi-romaji",
          kanji: "泣きたいときに我慢せずに泣くことだよ。",
          hiragana: "なきたいときにがまんせずになくことだよ。",
          romaji: "nakitai toki ni gaman sezu ni naku koto da yo",
          meaning: "Khi muốn khóc thì đừng cố chịu đựng, hãy cứ khóc đi."
        }
      ]
    },
    {
      structure: "Vる／Vない + ことにする／ことにした",
      meaning: "Quyết định làm…; quyết định không làm…",
      note: "Trang 164.\n\n1. Cách nối:\n• V thể từ điển + ことにする: quyết định làm.\n• Vない + ことにする: quyết định không làm.\n• Đổi する thành した để nói đã quyết định.\n• Ví dụ: 勉強することにする／行かないことにした.\n\n2. Ý nghĩa:\n• Nhấn mạnh lựa chọn, quyết định dựa trên ý chí của người thực hiện.\n• ことにする／ことにします: quyết định sẽ làm; có thể dùng khi vừa lựa chọn trong cuộc nói chuyện.\n• ことにした／ことにしました: đã đưa ra quyết định.\n• Không có nghĩa hành động được quyết định đã hoàn thành.\n\n3. Quyết định duy trì thói quen:\n• 毎日運動することにした = Đã quyết định tập thể dục mỗi ngày.\n• ～ことにしている thường nói về nguyên tắc hoặc thói quen mình đã quyết định duy trì.\n\n4. So với ～ことになる:\n• ～ことにする tập trung vào quyết định của bản thân.\n• ～ことになる tập trung vào quyết định được đưa ra, sự sắp xếp hoặc kết quả do hoàn cảnh; thường không nhấn mạnh ý chí riêng.\n• Đây là sự khác biệt về cách nhìn, không nên hiểu rằng ことになる luôn hoàn toàn không liên quan đến ý muốn của chủ thể.\n\n5. Lưu ý câu ví dụ thứ ba:\n• 出かけないで家にいることにする = Quyết định ở nhà, không ra ngoài.\n• ないで ở đây nối hai hành động; không phải lời yêu cầu đừng làm.\n\n6. Dễ nhầm:\n• 禁煙することにした = Đã quyết định bỏ thuốc.\n• 禁煙した = Đã bỏ thuốc.\n• Hai câu không khẳng định cùng một giai đoạn thực hiện.",
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
          meaning: "Vì con sắp chào đời nên tôi đã quyết định bỏ thuốc lá."
        },
        {
          direction: "ja-vi",
          kanji: "今日は天気が悪いから、出かけないで家にいることにする。",
          hiragana: "きょうはてんきがわるいから、でかけないでいえにいることにする。",
          romaji: "kyou wa tenki ga warui kara, dekakenaide ie ni iru koto ni suru",
          meaning: "Hôm nay thời tiết xấu nên tôi quyết định ở nhà, không ra ngoài."
        },
        {
          direction: "vi-romaji",
          kanji: "決めた！4月から日本語を勉強することにします。",
          hiragana: "きめた！しがつからにほんごをべんきょうすることにします。",
          romaji: "kimeta! shigatsu kara nihongo o benkyou suru koto ni shimasu",
          meaning: "Quyết định rồi! Từ tháng Tư tôi sẽ học tiếng Nhật."
        },
        {
          direction: "vi-romaji",
          kanji: "最近、運動不足だから、毎晩歩くことにしました。",
          hiragana: "さいきん、うんどうぶそくだから、まいばんあるくことにしました。",
          romaji: "saikin, undou busoku da kara, maiban aruku koto ni shimashita",
          meaning: "Gần đây thiếu vận động nên tôi đã quyết định đi bộ mỗi tối."
        },
        {
          direction: "vi-romaji",
          kanji: "健康のために、毎日運動することにした。",
          hiragana: "けんこうのために、まいにちうんどうすることにした。",
          romaji: "kenkou no tame ni, mainichi undou suru koto ni shita",
          meaning: "Vì sức khỏe, tôi đã quyết định tập thể dục mỗi ngày."
        }
      ]
    }
  ]
});
