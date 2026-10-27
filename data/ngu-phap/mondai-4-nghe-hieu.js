/*
  MONDAI 4 – NGHE HIỂU: TẤT CẢ KIẾN THỨC
  Tổng hợp mẫu câu giao tiếp JLPT N3, dùng cho 問題4 (phát thoại biểu hiện)
  và hỗ trợ 問題5 (phản xạ nhanh).
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

const mondai4Example = (kanji, hiragana, romaji, meaning) => ({
  direction: "ja-vi", kanji, hiragana, romaji, meaning
});

window.GRAMMAR_SETS.push({
  name: "mondai 4- nghe hiểu tất cả kiến thức này",
  grammar: [
    {
      structure: "1. Nhờ vả – 依頼（いらい）",
      meaning: "Nhờ người khác làm một việc cho mình.",
      note: "Mẫu cần nhớ: ～て; ～てね; ～てくれる？; ～てくれない？; ～てくれますか; ～てくれませんか; ～てもらえる？; ～てもらえない？; ～てもらえますか; ～てもらえませんか; ～てください; ～てくださいませんか; ～ていただけますか; ～ていただけませんか; ～ていただきたいんですが。 Bẫy: ～てくれない？ là lời nhờ thân mật, không phải phủ định.",
      examples: [
        mondai4Example("ドアを開けてもらえますか。", "どあをあけてもらえますか。", "doa o akete moraemasu ka", "Bạn mở cửa giúp tôi được không?"),
        mondai4Example("もう一度説明していただけませんか。", "もういちどせつめいしていただけませんか。", "mou ichido setsumei shite itadakemasen ka", "Anh/chị vui lòng giải thích lại một lần nữa được không ạ?")
      ]
    },
    {
      structure: "2. Đề nghị giúp đỡ – 申し出（もうしで）",
      meaning: "Người nói chủ động đề nghị làm giúp người khác.",
      note: "Mẫu cần nhớ: ～ようか; ～ましょうか; ～てあげようか; ～てあげる; ～てあげましょうか; ～ておきましょうか; ～ましょう; 私が～ます; お手伝いしましょうか。 Phân biệt với nhờ vả: ドアを開けてもらえますか = nhờ người khác mở; ドアを開けましょうか = để tôi mở.",
      examples: [
        mondai4Example("荷物を持ちましょうか。", "にもつをもちましょうか。", "nimotsu o mochimashou ka", "Để tôi xách hành lý giúp nhé?"),
        mondai4Example("窓を開けようか。", "まどをあけようか。", "mado o akeyou ka", "Để mình mở cửa sổ nhé?")
      ]
    },
    {
      structure: "3. Xin phép – 許可（きょか）",
      meaning: "Người nói muốn chính mình thực hiện hành động.",
      note: "Mẫu cần nhớ: ～てもいい？; ～てもいいですか; ～てもよろしいですか; ～てもかまいませんか; ～ても大丈夫ですか; ～てもいいでしょうか; ～させてください; ～させてもらえますか; ～させていただけますか.",
      examples: [
        mondai4Example("ここに座ってもいいですか。", "ここにすわってもいいですか。", "koko ni suwatte mo ii desu ka", "Tôi ngồi đây được không?"),
        mondai4Example("写真を撮ってもよろしいですか。", "しゃしんをとってもよろしいですか。", "shashin o totte mo yoroshii desu ka", "Tôi xin phép chụp ảnh được không ạ?")
      ]
    },
    {
      structure: "4. Yêu cầu, chỉ dẫn – 指示（しじ）",
      meaning: "Yêu cầu hoặc hướng dẫn người nghe làm việc gì.",
      note: "Mẫu cần nhớ: ～てください; ～てくださいね; ～てほしい; ～てほしいんですが; ～ようにしてください; ～ようにお願いします; ～こと; ～なさい; ～てごらん; ～てみてください.",
      examples: [
        mondai4Example("ここに名前を書いてください。", "ここになまえをかいてください。", "koko ni namae o kaite kudasai", "Hãy viết tên vào đây."),
        mondai4Example("忘れないようにしてください。", "わすれないようにしてください。", "wasurenai you ni shite kudasai", "Hãy chú ý đừng quên.")
      ]
    },
    {
      structure: "5. Rủ rê và mời mọc – 誘い（さそい）",
      meaning: "Mời người khác cùng tham gia hành động.",
      note: "Mẫu cần nhớ: ～ない？; ～ませんか; ～ましょう; ～よう; ～ようか; ～たらどう？; ～たらどうですか; ～ません？; ～でもどう？; 一緒に～。 ～ませんか thường là lời rủ cùng tham gia; ～ましょうか thường là đề nghị thực hiện/giúp đỡ.",
      examples: [
        mondai4Example("一緒に映画を見に行かない？", "いっしょにえいがをみにいかない？", "issho ni eiga o mi ni ikanai", "Cùng đi xem phim không?"),
        mondai4Example("コーヒーでも飲みませんか。", "こーひーでものみませんか。", "koohii demo nomimasen ka", "Đi uống cà phê nhé?")
      ]
    },
    {
      structure: "6. Cho – nhận sự giúp đỡ – 授受表現（じゅじゅひょうげん）",
      meaning: "Diễn tả hướng của hành động giúp đỡ.",
      note: "～てあげる/あげます: mình làm cho người khác. ～てくれる/くださる: người khác làm cho mình hoặc phía mình. ～てもらう/いただく: mình nhận/nhờ người khác làm. ～てやる: thân mật, chỉ dùng tùy đối tượng. Luôn xác định ai là người làm và ai nhận lợi ích.",
      examples: [
        mondai4Example("友達が教えてくれました。", "ともだちがおしえてくれました。", "tomodachi ga oshiete kuremashita", "Bạn đã chỉ cho tôi."),
        mondai4Example("友達に教えてもらいました。", "ともだちにおしえてもらいました。", "tomodachi ni oshiete moraimashita", "Tôi được bạn chỉ cho.")
      ]
    },
    {
      structure: "7. Khuyên bảo – 助言（じょげん）",
      meaning: "Đưa ra lời khuyên khi người khác gặp vấn đề.",
      note: "Mẫu cần nhớ: ～たほうがいい; ～たほうがいいですよ; ～ないほうがいい; ～といいですよ; ～たらいい; ～ばいい; ～たらどう？; ～たらどうですか; ～べきです; ～ことをおすすめします; ～ようにしたほうがいい. ～たほうがいい khuyên trực tiếp, ～たらどう là gợi ý mềm hơn.",
      examples: [
        mondai4Example("早く寝たほうがいいですよ。", "はやくねたほうがいいですよ。", "hayaku neta hou ga ii desu yo", "Bạn nên đi ngủ sớm."),
        mondai4Example("病院へ行ったらどうですか。", "びょういんへいったらどうですか。", "byouin e ittara dou desu ka", "Bạn thử đi bệnh viện thì sao?")
      ]
    },
    {
      structure: "8. Cấm đoán và nhắc nhở – 禁止・注意（きんし・ちゅうい）",
      meaning: "Bảo người nghe không làm, hoặc nêu nghĩa vụ/miễn làm.",
      note: "Cấm: ～ないで; ～ないでね; ～ないでください; ～ちゃだめ; ～てはいけません; ～てはだめです; ～ちゃいけない; ～ないようにしてください; ～ないように気をつけて. Nghĩa vụ: ～なければなりません; ～ないといけません; ～なくちゃ; ～なきゃ. Không bắt buộc: ～なくてもいい; ～なくても大丈夫.",
      examples: [
        mondai4Example("ここで写真を撮ってはいけません。", "ここでしゃしんをとってはいけません。", "koko de shashin o totte wa ikemasen", "Không được chụp ảnh ở đây."),
        mondai4Example("明日は来なくても大丈夫です。", "あしたはこなくてもだいじょうぶです。", "ashita wa konakute mo daijoubu desu", "Ngày mai không đến cũng không sao.")
      ]
    },
    {
      structure: "9. Mong muốn – 希望（きぼう）",
      meaning: "Nói về điều mình muốn hoặc điều mong xảy ra.",
      note: "Mẫu cần nhớ: ～たい; ～たいです; ～たくない; ～てほしい; ～ないでほしい; ～てもらいたい; ～ていただきたい; ～といいな; ～たらいいな; ～ばいいのに; ～がほしい. ～たい = bản thân muốn làm; ～てほしい = muốn người khác làm.",
      examples: [
        mondai4Example("日本へ行きたいです。", "にほんへいきたいです。", "nihon e ikitai desu", "Tôi muốn đi Nhật Bản."),
        mondai4Example("みんなに来てほしいです。", "みんなにきてほしいです。", "minna ni kite hoshii desu", "Tôi muốn mọi người đến.")
      ]
    },
    {
      structure: "10. Dự định, quyết định – 意志・決定（いし・けってい）",
      meaning: "Nói về ý định, kế hoạch, quyết định và hành động chuẩn bị.",
      note: "Mẫu cần nhớ: ～ようと思う; ～ようと思っています; ～つもりです; ～予定です; ～ことにする; ～ことにした; ～ことになった; ～ことにしている; ～ようとする; ～てみる; ～ておく; ～てしまう. ～ことにした = tự quyết; ～ことになった = quyết định/sắp xếp từ bên ngoài.",
      examples: [
        mondai4Example("来年日本へ留学するつもりです。", "らいねんにほんへりゅうがくするつもりです。", "rainen nihon e ryuugaku suru tsumori desu", "Tôi dự định năm sau du học Nhật."),
        mondai4Example("会議は来週行うことになりました。", "かいぎはらいしゅうおこなうことになりました。", "kaigi wa raishuu okonau koto ni narimashita", "Cuộc họp đã được quyết định sẽ tổ chức tuần sau.")
      ]
    },
    {
      structure: "11. Từ chối và xin lỗi – 断り・謝罪（ことわり・しゃざい）",
      meaning: "Từ chối lịch sự, xin lỗi hoặc giải thích tình trạng.",
      note: "Mẫu cần nhớ: すみませんが; 申し訳ありませんが; せっかくですが; ～のはちょっと…; ～ことができません; ～予定があって…; ～なくてすみません; ～てしまってすみません; ごめん、～; 悪いけど、～. Khi từ chối, thường mở đầu xin lỗi rồi nêu lý do nhẹ nhàng.",
      examples: [
        mondai4Example("せっかくですが、予定があって行けません。", "せっかくですが、よていがあっていけません。", "sekkaku desu ga, yotei ga atte ikemasen", "Cảm ơn lời mời, nhưng tôi có việc nên không đi được."),
        mondai4Example("遅れてしまってすみません。", "おくれてしまってすみません。", "okurete shimatte sumimasen", "Xin lỗi vì tôi đã đến muộn.")
      ]
    },
    {
      structure: "12. Hỏi ý kiến và xác nhận – 意見・確認（いけん・かくにん）",
      meaning: "Hỏi lựa chọn, kiểm tra thông tin hoặc xác nhận cách hiểu.",
      note: "Mẫu cần nhớ: ～はどう？; ～はどうですか; ～でいい？; ～でいいですか; ～でよろしいですか; ～でしょうか; ～ですよね; ～じゃない？; ～かな; ～かどうか; ～ってことですか; ～ということですね; ～で間違いないですか.",
      examples: [
        mondai4Example("この色でいいですか。", "このいろでいいですか。", "kono iro de ii desu ka", "Màu này được không?"),
        mondai4Example("明日は休みということですね。", "あしたはやすみということですね。", "ashita wa yasumi to iu koto desu ne", "Nghĩa là ngày mai được nghỉ, đúng không ạ?")
      ]
    },
    {
      structure: "13. Đoán, suy luận và truyền đạt thông tin",
      meaning: "Nêu ý kiến, mức độ chắc chắn hoặc thông tin nghe được.",
      note: "Mẫu cần nhớ: ～と思う/と思います; ～かもしれない/かもしれません; ～でしょう; ～だろう; ～はずです; ～そうです; ～ようです; ～みたいです; ～らしいです; ～ような気がする; ～に違いない; ～わけではない; ～わけがない. Phân biệt: ～そうです = vẻ ngoài/nghe nói tùy cách nối; ～ようです = suy đoán dựa trên dấu hiệu; ～らしい = nghe nói/đúng chất; ～みたい = khẩu ngữ, có vẻ như.",
      examples: [
        mondai4Example("雨が降るかもしれません。", "あめがふるかもしれません。", "ame ga furu kamo shiremasen", "Có thể trời sẽ mưa."),
        mondai4Example("彼はもう帰ったようです。", "かれはもうかえったようです。", "kare wa mou kaetta you desu", "Hình như anh ấy đã về rồi.")
      ]
    },
    {
      structure: "14. Nhờ truyền đạt và hỏi lại – 伝言・聞き返し（でんごん・ききかえし）",
      meaning: "Nhờ nhắn lại, thuật lại lời nói hoặc xin nghe lại.",
      note: "Mẫu cần nhớ: ～と伝えてください; ～と言ってください; ～ように伝えてください; ～ように言ってください; ～って言ってた; ～って聞いた. Hỏi lại thường dùng: すみません、もう一度お願いします; ～ということですか; どういう意味ですか; ～って何ですか.",
      examples: [
        mondai4Example("田中さんに明日は休むと伝えてください。", "たなかさんにあしたはやすむとつたえてください。", "Tanaka-san ni ashita wa yasumu to tsutaete kudasai", "Hãy nhắn với anh Tanaka là ngày mai tôi nghỉ."),
        mondai4Example("もう一度言っていただけますか。", "もういちどいっていただけますか。", "mou ichido itte itadakemasu ka", "Anh/chị có thể nói lại một lần nữa được không ạ?")
      ]
    },
    {
      structure: "15. Cảm xúc và đánh giá – 感情・評価（かんじょう・ひょうか）",
      meaning: "Bày tỏ cảm xúc, nuối tiếc, cảm ơn hoặc đánh giá mức độ.",
      note: "Mẫu cần nhớ: ～てよかった; ～ばよかった; ～なければよかった; ～てしまった; ～ちゃった; ～てくれてありがとう; ～てもらってよかった; ～てうれしい; ～て困っている; ～なんて; ～のに; ～すぎる; ～ほどではない.",
      examples: [
        mondai4Example("手伝ってくれてありがとう。", "てつだってくれてありがとう。", "tetsudatte kurete arigatou", "Cảm ơn bạn đã giúp."),
        mondai4Example("もっと早く勉強すればよかった。", "もっとはやくべんきょうすればよかった。", "motto hayaku benkyou sureba yokatta", "Giá mà tôi học sớm hơn.")
      ]
    },
    {
      structure: "16. Câu giao tiếp cố định cần thuộc",
      meaning: "Các lời đáp tự nhiên thường xuất hiện trong hội thoại.",
      note: "Chào hỏi: おはようございます; こんにちは; お疲れさまです; 失礼します. Cảm ơn/đáp lại: ありがとうございます; どういたしまして; こちらこそ. Xin lỗi/đáp lại: すみません; 気にしないで; 大丈夫です. Đồng ý/không đồng ý: はい、いいですよ; もちろんです; ちょっと難しいです; また今度お願いします. Khi nghe hãy chọn câu đáp phù hợp quan hệ và tình huống, không chỉ đúng ngữ pháp.",
      examples: [
        mondai4Example("A：手伝いましょうか。B：ありがとうございます。お願いします。", "A：てつだいましょうか。B：ありがとうございます。おねがいします。", "A: tetsudaimashou ka. B: arigatou gozaimasu. onegaishimasu", "A: Tôi giúp nhé? B: Cảm ơn, nhờ bạn."),
        mondai4Example("A：すみません。B：いいえ、気にしないでください。", "A：すみません。B：いいえ、きにしないでください。", "A: sumimasen. B: iie, ki ni shinaide kudasai", "A: Xin lỗi. B: Không, đừng bận tâm.")
      ]
    },
    {
      structure: "17. Mondai 5 – Cặp phản xạ phải biết đáp lại",
      meaning: "Chọn câu đáp tự nhiên và đúng hướng giao tiếp.",
      note: "Cặp phản xạ quan trọng: lời nhờ → はい、いいですよ／すみません、ちょっと…。 Lời đề nghị giúp → お願いします／大丈夫です。 Lời mời → ぜひ／すみません、予定があって…。 Cảm ơn → どういたしまして。 Xin lỗi → 大丈夫です／気にしないで。 Xin phép → はい、どうぞ／すみません、だめです。 Lời khuyên → そうします／ありがとうございます。",
      examples: [
        mondai4Example("A：窓を開けてもいいですか。B：はい、どうぞ。", "A：まどをあけてもいいですか。B：はい、どうぞ。", "A: mado o akete mo ii desu ka. B: hai, douzo", "A: Tôi mở cửa sổ được không? B: Vâng, mời bạn."),
        mondai4Example("A：荷物を持ちましょうか。B：すみません、お願いします。", "A：にもつをもちましょうか。B：すみません、おねがいします。", "A: nimotsu o mochimashou ka. B: sumimasen, onegaishimasu", "A: Tôi xách hành lý giúp nhé? B: Cảm ơn, nhờ bạn.")
      ]
    },
    {
      structure: "18. Bẫy dễ nhầm và quy trình làm Mondai 4",
      meaning: "Nhận diện đúng ý định, hành động và mức độ lịch sự trước khi chọn đáp án.",
      note: "Cặp dễ nhầm: ～てくれる？ ↔ ～てあげようか？ (nhờ ↔ đề nghị giúp); ～てもらえますか ↔ ～ましょうか (nhờ giúp ↔ đề nghị tự làm); ～てもいいですか ↔ ～てください (xin phép ↔ yêu cầu); ～ませんか ↔ ～ましょうか (rủ rê ↔ đề nghị); ～てほしい ↔ ～たい (người khác làm ↔ bản thân làm); ～たほうがいい ↔ ～たらどう (khuyên ↔ gợi ý); ～ないでください ↔ ～なくてもいい (đừng làm ↔ không cần làm); ～ことにした ↔ ～ことになった (tự quyết ↔ quyết định bên ngoài); ～そうです ↔ ～ようです. Quy trình: (1) xác định ai nói với ai; (2) xác định mục đích: nhờ, đề nghị, xin phép, khuyên, từ chối…; (3) xác định hành động cụ thể; (4) kiểm tra độ lịch sự.",
      examples: [
        mondai4Example("ドアを押さえてくれる？", "どあをおさえてくれる？", "doa o osaete kureru", "Giữ cửa giúp mình được không?"),
        mondai4Example("ドアを閉めてくれる？", "どあをしめてくれる？", "doa o shimete kureru", "Đóng cửa giúp mình được không?")
      ]
    }
  ]
});
