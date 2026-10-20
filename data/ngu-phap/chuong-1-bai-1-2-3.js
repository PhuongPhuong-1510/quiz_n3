/*
  NGỮ PHÁP - CHƯƠNG 1 BÀI 1

  direction:
    "ja-vi" = hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-ja" = hiện câu Việt, nhập câu Nhật bằng Kanji hoặc Hiragana.
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 1 bài 1",
  grammar: [
    {
      structure: "～ば～ほど",
      meaning: "Càng ～ càng ～",
      note: "Diễn tả việc cùng với sự thay đổi của một hành vi hay trạng thái nào đó, một điều khác cũng thay đổi theo. Hành vi đứng trước ～ば càng tiến triển hoặc trạng thái càng mạnh hơn thì sự việc phía sau cũng tiến triển hơn hoặc mức độ tăng lên tương ứng.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "男性は背が高ければ高いほど人気がある。",
          hiragana: "だんせいはせがたかければたかいほどにんきがある。",
          romaji: "dansei wa se ga takakereba takai hodo ninki ga aru",
          meaning: "Nam giới càng cao thì càng được yêu thích."
        },
        {
          direction: "ja-vi",
          kanji: "あの人のことを知れば知るほど好きになる。",
          hiragana: "あのひとのことをしればしるほどすきになる。",
          romaji: "ano hito no koto o shireba shiru hodo suki ni naru",
          meaning: "Càng biết về người đó thì càng thích."
        },
        {
          direction: "ja-vi",
          kanji: "日本語が上手であればあるほど、日本の会社で働きやすくなる。",
          hiragana: "にほんごがじょうずであればあるほど、にほんのかいしゃではたらきやすくなる。",
          romaji: "nihongo ga jouzu de areba aru hodo, nihon no kaisha de hatarakiyasuku naru",
          meaning: "Tiếng Nhật càng giỏi thì càng dễ làm việc ở công ty Nhật."
        },
        {
          direction: "vi-ja",
          kanji: "日本語は勉強すればするほど面白くなる。",
          hiragana: "にほんごはべんきょうすればするほどおもしろくなる。",
          romaji: "nihongo wa benkyou sureba suru hodo omoshiroku naru",
          meaning: "Tiếng Nhật thì càng học càng thú vị.",
          acceptedJapanese: [
            "日本語は勉強すればするほど面白くなる。",
            "にほんごはべんきょうすればするほどおもしろくなる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "私は、困難なら困難なほど、頑張ろうと思う性格だ。",
          hiragana: "わたしは、こんなんならこんなんなほど、がんばろうとおもうせいかくだ。",
          romaji: "watashi wa, konnan nara konnan na hodo, ganbarou to omou seikaku da",
          meaning: "Tôi có tính cách là: càng khó khăn thì càng cố gắng.",
          acceptedJapanese: [
            "私は、困難なら困難なほど、頑張ろうと思う性格だ。",
            "わたしは、こんなんならこんなんなほど、がんばろうとおもうせいかくだ。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "努力すればするほど、夢に近づけます。",
          hiragana: "どりょくすればするほど、ゆめにちかづけます。",
          romaji: "doryoku sureba suru hodo, yume ni chikadzukemasu",
          meaning: "Càng cố gắng, bạn sẽ càng tiến gần đến ước mơ.",
          acceptedJapanese: [
            "努力すればするほど、夢に近づけます。",
            "どりょくすればするほど、ゆめにちかづけます。"
          ]
        }
      ]
    },
    {
      structure: "～ようなら",
      meaning: "Nếu như... (giả sử xảy ra một tình huống nào đó)",
      note: "Dùng để giả định tình huống có thể xảy ra trong tương lai và từ đó đưa ra hướng xử lý, hành động hoặc lời khuyên ở vế sau. Mẫu này có sắc thái mềm mại, lịch sự và tôn trọng quyết định của người nghe.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "遅れるようなら、連絡してください。",
          hiragana: "おくれるようなら、れんらくしてください。",
          romaji: "okureru you nara, renraku shite kudasai",
          meaning: "Nếu có vẻ sẽ đến muộn thì hãy liên lạc."
        },
        {
          direction: "ja-vi",
          kanji: "この問題が解けないようなら、大学に行くのは無理だよ。",
          hiragana: "このもんだいがとけないようなら、だいがくにいくのはむりだよ。",
          romaji: "kono mondai ga tokenai you nara, daigaku ni iku no wa muri da yo",
          meaning: "Nếu không giải được bài này thì việc vào đại học là khó đấy."
        },
        {
          direction: "ja-vi",
          kanji: "その荷物、一人で運ぶのが無理なようなら、手伝いますよ。",
          hiragana: "そのにもつ、ひとりではこぶのがむりなようなら、てつだいますよ。",
          romaji: "sono nimotsu, hitori de hakobu no ga muri na you nara, tetsudaimasu yo",
          meaning: "Nếu một mình mang hành lý đó là quá sức thì tôi sẽ giúp."
        },
        {
          direction: "vi-ja",
          kanji: "忙しいようなら、無理に参加しなくてもいいですよ。",
          hiragana: "いそがしいようなら、むりにさんかしなくてもいいですよ。",
          romaji: "isogashii you nara, muri ni sanka shinakute mo ii desu yo",
          meaning: "Nếu bạn bận thì không cần miễn cưỡng tham gia đâu.",
          acceptedJapanese: [
            "忙しいようなら、無理に参加しなくてもいいですよ。",
            "いそがしいようなら、むりにさんかしなくてもいいですよ。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "仕事が早く終わるようなら、ぜひ忘年会に参加してください。",
          hiragana: "しごとがはやくおわるようなら、ぜひぼうねんかいにさんかしてください。",
          romaji: "shigoto ga hayaku owaru you nara, zehi bounenkai ni sanka shite kudasai",
          meaning: "Nếu công việc xong sớm thì cậu nhất định phải tham gia tiệc tất niên đấy nhé!",
          acceptedJapanese: [
            "仕事が早く終わるようなら、ぜひ忘年会に参加してください。",
            "しごとがはやくおわるようなら、ぜひぼうねんかいにさんかしてください。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "明日天気がいいようなら、サッカーをしましょう。",
          hiragana: "あしたてんきがいいようなら、さっかーをしましょう。",
          romaji: "ashita tenki ga ii you nara, sakkaa o shimashou",
          meaning: "Nếu ngày mai thời tiết đẹp thì chúng mình chơi bóng đá nhé!",
          acceptedJapanese: [
            "明日天気がいいようなら、サッカーをしましょう。",
            "あしたてんきがいいようなら、さっかーをしましょう。"
          ]
        }
      ]
    },
    {
      structure: "～ように",
      meaning: "Để V / Để không V",
      note: "Dùng để nói về việc thực hiện hành động ở vế sau nhằm đạt được trạng thái hoặc kết quả mong muốn ở vế trước. Trước ように thường là động từ không có tính ý chí; chủ ngữ hai vế có thể khác nhau.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "この薬は子供でも飲めるように甘い味がついています。",
          hiragana: "このくすりはこどもでものめるようにあまいあじがついています。",
          romaji: "kono kusuri wa kodomo demo nomeru you ni amai aji ga tsuite imasu",
          meaning: "Thuốc này có vị ngọt để trẻ em cũng có thể uống được."
        },
        {
          direction: "ja-vi",
          kanji: "この病院は、忙しい人でも来られるように、夜も開いています。",
          hiragana: "このびょういんは、いそがしいひとでもこられるように、よるもあいています。",
          romaji: "kono byouin wa, isogashii hito demo korareru you ni, yoru mo aite imasu",
          meaning: "Bệnh viện này mở cả buổi tối để người bận rộn cũng có thể đến."
        },
        {
          direction: "ja-vi",
          kanji: "子供がゲームをやりすぎないように、2時間を超えて続けていたら、ゲームの機械を取り上げています。",
          hiragana: "こどもがげーむをやりすぎないように、にじかんをこえてつづけていたら、げーむのきかいをとりあげています。",
          romaji: "kodomo ga geemu o yarisuginai you ni, ni jikan o koete tsudzukete itara, geemu no kikai o toriagete imasu",
          meaning: "Để con không chơi game quá nhiều, nếu chơi quá 2 tiếng thì tôi sẽ thu máy game."
        },
        {
          direction: "vi-ja",
          kanji: "早く病気が治るように祈っています。",
          hiragana: "はやくびょうきがなおるようにいのっています。",
          romaji: "hayaku byouki ga naoru you ni inotte imasu",
          meaning: "Tôi cầu chúc bạn sớm khỏi bệnh.",
          acceptedJapanese: [
            "早く病気が治るように祈っています。",
            "はやくびょうきがなおるようにいのっています。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "道を間違えないように気を付けてね。",
          hiragana: "みちをまちがえないようにきをつけてね。",
          romaji: "michi o machigaenai you ni ki o tsukete ne",
          meaning: "Hãy cẩn thận để không bị nhầm đường nhé.",
          acceptedJapanese: [
            "道を間違えないように気を付けてね。",
            "みちをまちがえないようにきをつけてね。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "日本の会社で働けるように、日本語を勉強しています。",
          hiragana: "にほんのかいしゃではたらけるように、にほんごをべんきょうしています。",
          romaji: "nihon no kaisha de hatarakeru you ni, nihongo o benkyou shite imasu",
          meaning: "Để có thể làm việc trong các công ty Nhật Bản thì tôi đang học tiếng Nhật.",
          acceptedJapanese: [
            "日本の会社で働けるように、日本語を勉強しています。",
            "にほんのかいしゃではたらけるように、にほんごをべんきょうしています。"
          ]
        }
      ]
    },
    {
      structure: "～ようにする",
      meaning: "(Sẽ) cố gắng V / không V",
      note: "Diễn tả việc từ thời điểm nói hoặc từ một thời điểm nào đó trở đi, người nói sẽ ý thức thực hiện thường xuyên vì một mục đích. Có thể dùng trong Vるようにしてください, Vるようにしましょう, Vるようにしなきゃ.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "もう大人なんですから、遅刻しないようにしましょう。",
          hiragana: "もうおとななんですから、ちこくしないようにしましょう。",
          romaji: "mou otona nan desu kara, chikoku shinai you ni shimashou",
          meaning: "Vì đã là người lớn rồi nên hãy cố gắng không đi muộn."
        },
        {
          direction: "ja-vi",
          kanji: "目に悪いから、寝る前にスマートフォンやパソコンを使わないようにしましょう。",
          hiragana: "めにわるいから、ねるまえにすまーとふぉんやぱそこんをつかわないようにしましょう。",
          romaji: "me ni warui kara, neru mae ni sumaatofon ya pasokon o tsukawanai you ni shimashou",
          meaning: "Vì không tốt cho mắt nên hãy cố gắng không dùng điện thoại và máy tính trước khi ngủ."
        },
        {
          direction: "ja-vi",
          kanji: "赤ちゃんが口の中に入る大きさのものを持っていたら、すぐに取り上げるようにしてください。危ないですから。",
          hiragana: "あかちゃんがくちのなかにはいるおおきさのものをもっていたら、すぐにとりあげるようにしてください。あぶないですから。",
          romaji: "akachan ga kuchi no naka ni hairu ookisa no mono o motte itara, sugu ni toriageru you ni shite kudasai. abunai desu kara",
          meaning: "Nếu em bé cầm vật có kích thước có thể cho vào miệng thì hãy cố gắng lấy ra ngay, vì nguy hiểm."
        },
        {
          direction: "vi-ja",
          kanji: "電話の前にメールをするようにします。",
          hiragana: "でんわのまえにめーるをするようにします。",
          romaji: "denwa no mae ni meeru o suru you ni shimasu",
          meaning: "Tôi sẽ cố gắng gửi mail trước khi gọi điện.",
          acceptedJapanese: [
            "電話の前にメールをするようにします。",
            "でんわのまえにめーるをするようにします。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "この前のテストの結果があまりよくなかったから、これから毎日勉強するようにしなきゃ。",
          hiragana: "このまえのてすとのけっかがあまりよくなかったから、これからまいにちべんきょうするようにしなきゃ。",
          romaji: "kono mae no tesuto no kekka ga amari yokunakatta kara, kore kara mainichi benkyou suru you ni shinakya",
          meaning: "Vì kết quả bài test trước không tốt lắm, nên từ giờ tôi phải cố gắng học mỗi ngày.",
          acceptedJapanese: [
            "この前のテストの結果があまりよくなかったから、これから毎日勉強するようにしなきゃ。",
            "このまえのてすとのけっかがあまりよくなかったから、これからまいにちべんきょうするようにしなきゃ。"
          ]
        }
      ]
    },
    {
      structure: "～ようにしている",
      meaning: "Cố gắng duy trì thói quen làm / không làm V",
      note: "Thể hiện việc người nói đang cố gắng duy trì làm hoặc không làm một việc nào đó như một thói quen.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "健康のために、毎日野菜を食べるようにしています。",
          hiragana: "けんこうのために、まいにちやさいをたべるようにしています。",
          romaji: "kenkou no tame ni, mainichi yasai o taberu you ni shite imasu",
          meaning: "Vì sức khỏe, tôi cố gắng ăn rau mỗi ngày."
        },
        {
          direction: "ja-vi",
          kanji: "日本語が上手になりたいから、毎日日本語で話すようにしています。",
          hiragana: "にほんごがじょうずになりたいから、まいにちにほんごではなすようにしています。",
          romaji: "nihongo ga jouzu ni naritai kara, mainichi nihongo de hanasu you ni shite imasu",
          meaning: "Vì muốn giỏi tiếng Nhật nên tôi cố gắng nói tiếng Nhật mỗi ngày."
        },
        {
          direction: "ja-vi",
          kanji: "無駄なものを買わないようにしています。",
          hiragana: "むだなものをかわないようにしています。",
          romaji: "muda na mono o kawanai you ni shite imasu",
          meaning: "Tôi cố gắng không mua những thứ lãng phí."
        },
        {
          direction: "vi-ja",
          kanji: "毎日7時間以上、寝るようにしています。",
          hiragana: "まいにちしちじかんいじょう、ねるようにしています。",
          romaji: "mainichi shichi jikan ijou, neru you ni shite imasu",
          meaning: "Tôi cố gắng ngủ trên 7 tiếng mỗi ngày.",
          acceptedJapanese: [
            "毎日7時間以上、寝るようにしています。",
            "まいにちしちじかんいじょう、ねるようにしています。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "家を買いたいから、毎月貯金するようにしています。",
          hiragana: "いえをかいたいから、まいつきちょきんするようにしています。",
          romaji: "ie o kaitai kara, maitsuki chokin suru you ni shite imasu",
          meaning: "Vì tôi muốn mua nhà nên hàng tháng tôi đều cố gắng dành dụm tiền.",
          acceptedJapanese: [
            "家を買いたいから、毎月貯金するようにしています。",
            "いえをかいたいから、まいつきちょきんするようにしています。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "どんなときでも前向きに考えるようにしている。",
          hiragana: "どんなときでもまえむきにかんがえるようにしている。",
          romaji: "donna toki demo maemuki ni kangaeru you ni shite iru",
          meaning: "Dù ở hoàn cảnh nào, tôi cũng luôn cố gắng duy trì thói quen suy nghĩ tích cực.",
          acceptedJapanese: [
            "どんなときでも前向きに考えるようにしている。",
            "どんなときでもまえむきにかんがえるようにしている。"
          ]
        }
      ]
    },
    {
      structure: "～ところだ",
      meaning: "Sắp sửa V / Đang V / Vừa mới V",
      note: "Vる＋ところだ: ngay trước khi hành động xảy ra. Vている＋ところだ: đúng lúc hành động đang xảy ra. Vた＋ところだ: ngay sau khi hành động vừa hoàn thành. Thường đi với ちょうど、今から、これから、今、たった今、さっき、ついさっき.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "A：電球、取り替えた？ B：これから取り替えるところ。",
          hiragana: "A：でんきゅう、とりかえた？ B：これからとりかえるところ。",
          romaji: "A: denkyuu, torikaeta? B: kore kara torikaeru tokoro",
          meaning: "A: Đã thay bóng đèn chưa? B: Bây giờ chuẩn bị thay."
        },
        {
          direction: "ja-vi",
          kanji: "寝坊して急いでゴミを出しに行ったら、ちょうどゴミを回収しているところでした。",
          hiragana: "ねぼうしていそいでごみをだしにいったら、ちょうどごみをかいしゅうしているところでした。",
          romaji: "nebou shite isoide gomi o dashi ni ittara, choudo gomi o kaishuu shite iru tokoro deshita",
          meaning: "Vì ngủ quên nên tôi vội mang rác ra thì đúng lúc người ta đang thu gom rác."
        },
        {
          direction: "ja-vi",
          kanji: "A：荷物、届きましたか。 B：はい。ちょうど今、受け取ったところです。",
          hiragana: "A：にもつ、とどきましたか。 B：はい。ちょうどいま、うけとったところです。",
          romaji: "A: nimotsu, todokimashita ka. B: hai. choudo ima, uketotta tokoro desu",
          meaning: "A: Hành lý đã tới chưa? B: Vâng, tôi vừa mới nhận được."
        },
        {
          direction: "vi-ja",
          kanji: "これからご飯を食べるところです。",
          hiragana: "これからごはんをたべるところです。",
          romaji: "kore kara gohan o taberu tokoro desu",
          meaning: "Tôi chuẩn bị ăn cơm bây giờ.",
          acceptedJapanese: ["これからご飯を食べるところです。", "これからごはんをたべるところです。"]
        },
        {
          direction: "vi-ja",
          kanji: "これから出かけるところです。",
          hiragana: "これからでかけるところです。",
          romaji: "kore kara dekakeru tokoro desu",
          meaning: "Tôi chuẩn bị ra ngoài bây giờ.",
          acceptedJapanese: ["これから出かけるところです。", "これからでかけるところです。"]
        },
        {
          direction: "vi-ja",
          kanji: "ちょうど今ご飯を食べているところです。",
          hiragana: "ちょうどいまごはんをたべているところです。",
          romaji: "choudo ima gohan o tabete iru tokoro desu",
          meaning: "Đúng lúc tôi đang ăn cơm.",
          acceptedJapanese: ["ちょうど今ご飯を食べているところです。", "ちょうどいまごはんをたべているところです。"]
        },
        {
          direction: "vi-ja",
          kanji: "今そっちに向かっているところだから、ちょっと待ってね。",
          hiragana: "いまそっちにむかっているところだから、ちょっとまってね。",
          romaji: "ima socchi ni mukatte iru tokoro da kara, chotto matte ne",
          meaning: "Bây giờ tôi đang đến chỗ bạn nên hãy đợi một chút nhé.",
          acceptedJapanese: ["今そっちに向かっているところだから、ちょっと待ってね。", "いまそっちにむかっているところだから、ちょっとまってね。"]
        },
        {
          direction: "vi-ja",
          kanji: "たった今帰ったところです。",
          hiragana: "たったいまかえったところです。",
          romaji: "tatta ima kaetta tokoro desu",
          meaning: "Bây giờ tôi vừa mới về.",
          acceptedJapanese: ["たった今帰ったところです。", "今帰ったところです。", "たったいまかえったところです。", "いまかえったところです。"]
        },
        {
          direction: "vi-ja",
          kanji: "たった今子供を駅に迎えに行ったところです。",
          hiragana: "たったいまこどもをえきにむかえにいったところです。",
          romaji: "tatta ima kodomo o eki ni mukae ni itta tokoro desu",
          meaning: "Tôi vừa mới đi đón con ở nhà ga.",
          acceptedJapanese: ["たった今子供を駅に迎えに行ったところです。", "たったいまこどもをえきにむかえにいったところです。"]
        }
      ]
    },
    {
      structure: "～たばかりだ",
      meaning: "Vừa mới V",
      note: "Diễn tả hành động vừa mới xảy ra và người nói cảm thấy thời gian kể từ khi hành động kết thúc là ngắn, chưa lâu. Mang tính chủ quan. Có thể dùng cho việc xảy ra ngay trước lúc nói, tuần trước, tháng trước, năm trước nếu người nói vẫn cảm thấy là mới.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "さっき帰ってきたばかりなので、まだメールをチェックしていないんです。",
          hiragana: "さっきかえってきたばかりなので、まだめーるをちぇっくしていないんです。",
          romaji: "sakki kaette kita bakari na node, mada meeru o chekku shite inai n desu",
          meaning: "Vì tôi vừa mới về nên vẫn chưa kiểm tra email."
        },
        {
          direction: "ja-vi",
          kanji: "さっき聞いたばかりのことを、もう忘れちゃったの。",
          hiragana: "さっききいたばかりのことを、もうわすれちゃったの。",
          romaji: "sakki kiita bakari no koto o, mou wasurechatta no",
          meaning: "Điều vừa mới nghe lúc nãy mà đã quên mất rồi."
        },
        {
          direction: "ja-vi",
          kanji: "父を亡くしたばかりで、まだ悲しみから抜け出せない。",
          hiragana: "ちちをなくしたばかりで、まだかなしみからぬけだせない。",
          romaji: "chichi o nakushita bakari de, mada kanashimi kara nukedasenai",
          meaning: "Vì vừa mới mất cha nên vẫn chưa thể thoát khỏi nỗi buồn."
        },
        {
          direction: "vi-ja",
          kanji: "さっきお菓子を食べたばかりだ。",
          hiragana: "さっきおかしをたべたばかりだ。",
          romaji: "sakki okashi o tabeta bakari da",
          meaning: "Tôi vừa mới ăn kẹo xong.",
          acceptedJapanese: ["さっきお菓子を食べたばかりだ。", "さっきおかしをたべたばかりだ。"]
        },
        {
          direction: "vi-ja",
          kanji: "先月、仕事を始めたばかりだ。",
          hiragana: "せんげつ、しごとをはじめたばかりだ。",
          romaji: "sengetsu, shigoto o hajimeta bakari da",
          meaning: "Tôi vừa bắt đầu công việc vào tháng trước.",
          acceptedJapanese: ["先月、仕事を始めたばかりだ。", "せんげつ、しごとをはじめたばかりだ。"]
        },
        {
          direction: "vi-ja",
          kanji: "去年、結婚したばかりだ。",
          hiragana: "きょねん、けっこんしたばかりだ。",
          romaji: "kyonen, kekkon shita bakari da",
          meaning: "Tôi mới kết hôn vào năm ngoái.",
          acceptedJapanese: ["去年、結婚したばかりだ。", "きょねん、けっこんしたばかりだ。"]
        },
        {
          direction: "vi-ja",
          kanji: "このパソコンは買ったばかりなのに、もう動かなくなった。",
          hiragana: "このぱそこんはかったばかりなのに、もううごかなくなった。",
          romaji: "kono pasokon wa katta bakari na noni, mou ugokanaku natta",
          meaning: "Cái máy tính này mới mua mà đã hỏng rồi.",
          acceptedJapanese: ["このパソコンは買ったばかりなのに、もう動かなくなった。", "このぱそこんはかったばかりなのに、もううごかなくなった。"]
        },
        {
          direction: "vi-ja",
          kanji: "まだ始まったばかりなんだから、うまくいかなくても大丈夫だよ。",
          hiragana: "まだはじまったばかりなんだから、うまくいかなくてもだいじょうぶだよ。",
          romaji: "mada hajimatta bakari nan da kara, umaku ikanakute mo daijoubu da yo",
          meaning: "Vì vừa mới bắt đầu thôi, nên nếu chuyện không suôn sẻ thì cũng không sao đâu.",
          acceptedJapanese: ["まだ始まったばかりなんだから、うまくいかなくても大丈夫だよ。", "まだはじまったばかりなんだから、うまくいかなくてもだいじょうぶだよ。"]
        }
      ]
    }
  ]
});


/*
  NGỮ PHÁP - CHƯƠNG 1 BÀI 2
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 1 bài 2",
  grammar: [
    {
      structure: "～って（1）",
      meaning: "～ thì... / nói về chủ đề",
      note: "Đứng sau chủ đề của câu, dùng thay cho は và thường dùng trong văn nói.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "あなたの恋人ってどんな人ですか。",
          hiragana: "あなたのこいびとってどんなひとですか。",
          romaji: "anata no koibito tte donna hito desu ka",
          meaning: "Người yêu của bạn thì là người như thế nào?"
        },
        {
          direction: "ja-vi",
          kanji: "日本語ってどうすれば上手になりますか。",
          hiragana: "にほんごってどうすればじょうずになりますか。",
          romaji: "nihongo tte dou sureba jouzu ni narimasu ka",
          meaning: "Tiếng Nhật thì làm thế nào để giỏi lên?"
        },
        {
          direction: "ja-vi",
          kanji: "すみません、会社のパーティーっていつですか。",
          hiragana: "すみません、かいしゃのぱーてぃーっていつですか。",
          romaji: "sumimasen, kaisha no paatii tte itsu desu ka",
          meaning: "Xin lỗi, tiệc của công ty thì khi nào vậy?"
        },
        {
          direction: "vi-ja",
          kanji: "富士山って日本で一番高い山らしいです。",
          hiragana: "ふじさんってにほんでいちばんたかいやまらしいです。",
          romaji: "Fujisan tte nihon de ichiban takai yama rashii desu",
          meaning: "Nghe nói núi Phú Sĩ là ngọn núi cao nhất Nhật Bản.",
          acceptedJapanese: ["富士山って日本で一番高い山らしいです。", "ふじさんってにほんでいちばんたかいやまらしいです。"]
        },
        {
          direction: "vi-ja",
          kanji: "日本語って難しい？",
          hiragana: "にほんごってむずかしい？",
          romaji: "nihongo tte muzukashii",
          meaning: "Tiếng Nhật có khó không?",
          acceptedJapanese: ["日本語って難しい？", "にほんごってむずかしい？"]
        },
        {
          direction: "vi-ja",
          kanji: "日本ってどんな国？",
          hiragana: "にほんってどんなくに？",
          romaji: "nihon tte donna kuni",
          meaning: "Nhật Bản là nước như thế nào?",
          acceptedJapanese: ["日本ってどんな国？", "にほんってどんなくに？"]
        }
      ]
    },
    {
      structure: "～って（2）",
      meaning: "Nghe nói là... / Thấy bảo là...",
      note: "Dùng để trích dẫn lại lời người khác hoặc thông tin nghe từ nơi khác. Cách nói thường nghe khác là んだって.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "今週はずっと晴れだって。",
          hiragana: "こんしゅうはずっとはれだって。",
          romaji: "konshuu wa zutto hare datte",
          meaning: "Nghe nói tuần này trời sẽ nắng suốt."
        },
        {
          direction: "ja-vi",
          kanji: "彼は今日、ちこくして先生におこられたって。",
          hiragana: "かれはきょう、ちこくしてせんせいにおこられたって。",
          romaji: "kare wa kyou, chikoku shite sensei ni okorareta tte",
          meaning: "Nghe nói hôm nay anh ấy đi muộn và bị giáo viên mắng."
        },
        {
          direction: "ja-vi",
          kanji: "その荷物は小さいけど結構重いって。",
          hiragana: "そのにもつはちいさいけどけっこうおもいって。",
          romaji: "sono nimotsu wa chiisai kedo kekkou omoi tte",
          meaning: "Nghe nói hành lý đó tuy nhỏ nhưng khá nặng."
        },
        {
          direction: "vi-ja",
          kanji: "あの二人は付き合ってるって。",
          hiragana: "あのふたりはつきあってるって。",
          romaji: "ano futari wa tsukiatteru tte",
          meaning: "Thấy bảo hai người đấy đang hẹn hò với nhau.",
          acceptedJapanese: ["あの二人は付き合ってるって。", "あのふたりはつきあってるって。"]
        },
        {
          direction: "vi-ja",
          kanji: "Thanh先生は子供ができたって。",
          hiragana: "Thanhせんせいはこどもができたって。",
          romaji: "Thanh sensei wa kodomo ga dekita tte",
          meaning: "Nghe nói cô Thanh có em bé rồi.",
          acceptedJapanese: ["Thanh先生は子供ができたって。", "Thanhせんせいはこどもができたって。"]
        },
        {
          direction: "vi-ja",
          kanji: "彼女はN3に合格したんだって。",
          hiragana: "かのじょはN3にごうかくしたんだって。",
          romaji: "kanojo wa N3 ni goukaku shita n datte",
          meaning: "Nghe nói cô ấy đỗ N3 rồi.",
          acceptedJapanese: ["彼女はN3に合格したんだって。", "かのじょはN3にごうかくしたんだって。"]
        }
      ]
    },
    {
      structure: "～って（3）",
      meaning: "Là... / thay cho と",
      note: "Dùng thay cho と trong các cấu trúc như と思う、と言う、と書いてある. Với câu hỏi dùng 何て, không dùng 何って.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼と初めて話したけど、いい人だなって思った。",
          hiragana: "かれとはじめてはなしたけど、いいひとだなっておもった。",
          romaji: "kare to hajimete hanashita kedo, ii hito da na tte omotta",
          meaning: "Tôi lần đầu nói chuyện với anh ấy và đã nghĩ rằng anh ấy là người tốt."
        },
        {
          direction: "ja-vi",
          kanji: "彼は来月から日本に留学するってみんなに言っていた。",
          hiragana: "かれはらいげつからにほんにりゅうがくするってみんなにいっていた。",
          romaji: "kare wa raigetsu kara nihon ni ryuugaku suru tte minna ni itte ita",
          meaning: "Anh ấy đã nói với mọi người rằng từ tháng sau sẽ du học Nhật."
        },
        {
          direction: "ja-vi",
          kanji: "子供のとき、父にご飯は残さず全部食べろってよく言われ。",
          hiragana: "こどものとき、ちちにごはんはのこさずぜんぶたべろってよくいわれ。",
          romaji: "kodomo no toki, chichi ni gohan wa nokosazu zenbu tabero tte yoku iware",
          meaning: "Hồi nhỏ tôi thường được bố bảo rằng phải ăn hết cơm, không được để thừa."
        },
        {
          direction: "vi-ja",
          kanji: "立ち入り禁止って書いてある。",
          hiragana: "たちいりきんしってかいてある。",
          romaji: "tachiiri kinshi tte kaite aru",
          meaning: "(Trên tấm biển) Có viết là cấm vào.",
          acceptedJapanese: ["立ち入り禁止って書いてある。", "たちいりきんしってかいてある。"]
        },
        {
          direction: "vi-ja",
          kanji: "「よくできたよ」ってほめてくれた。",
          hiragana: "「よくできたよ」ってほめてくれた。",
          romaji: "\"yoku dekita yo\" tte homete kureta",
          meaning: "Tôi đã được khen là “Con đã làm rất tốt” đấy!",
          acceptedJapanese: ["「よくできたよ」ってほめてくれた。"]
        }
      ]
    },
    {
      structure: "～って（4）/ ～という",
      meaning: "N2 gọi là N1",
      note: "N1 là tên riêng hoặc một danh từ cụ thể; N2 là danh từ cùng loại nhưng phạm vi nghĩa rộng hơn N1. Trong văn nói dùng っていう / って.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私は日本という国から来ました。",
          hiragana: "わたしはにほんというくにからきました。",
          romaji: "watashi wa nihon to iu kuni kara kimashita",
          meaning: "Tôi đến từ đất nước gọi là Nhật Bản."
        },
        {
          direction: "ja-vi",
          kanji: "これはフォーという料理でベトナムではとても有名です。",
          hiragana: "これはふぉーというりょうりでべとなむではとてもゆうめいです。",
          romaji: "kore wa foo to iu ryouri de Betonamu de wa totemo yuumei desu",
          meaning: "Đây là món ăn gọi là phở và rất nổi tiếng ở Việt Nam."
        },
        {
          direction: "ja-vi",
          kanji: "私はズンモリって日本語センターで、N5からN2まで勉強した。",
          hiragana: "わたしはずんもりってにほんごせんたーで、N5からN2までべんきょうした。",
          romaji: "watashi wa Zunmori tte nihongo sentaa de, N5 kara N2 made benkyou shita",
          meaning: "Tôi đã học từ N5 đến N2 tại trung tâm tiếng Nhật gọi là Dungmori."
        },
        {
          direction: "vi-ja",
          kanji: "ベトナムという国",
          hiragana: "べとなむというくに",
          romaji: "Betonamu to iu kuni",
          meaning: "Đất nước mang tên là Việt Nam.",
          acceptedJapanese: ["ベトナムという国", "べとなむというくに"]
        },
        {
          direction: "vi-ja",
          kanji: "寿司という料理",
          hiragana: "すしというりょうり",
          romaji: "sushi to iu ryouri",
          meaning: "Món ăn mà gọi là sushi.",
          acceptedJapanese: ["寿司という料理", "寿司って料理", "すしというりょうり", "すしってりょうり"]
        },
        {
          direction: "vi-ja",
          kanji: "Thanhさんという人",
          hiragana: "Thanhさんというひと",
          romaji: "Thanh san to iu hito",
          meaning: "Người mà tên là Thanh.",
          acceptedJapanese: ["Thanhさんという人", "Thanhさんって人", "Thanhさんというひと", "Thanhさんってひと"]
        }
      ]
    },
    {
      structure: "～らしい",
      meaning: "Ra dáng / Đậm chất / Chuẩn...",
      note: "Mang tính chất điển hình của một sự việc, sự vật hoặc đối tượng nào đó. Nらしい dùng như tính từ đuôi い và có thể bổ nghĩa cho danh từ phía sau.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "息子は高校生になり、だんだん大人らしい顔になってきた。",
          hiragana: "むすこはこうこうせいになり、だんだんおとならしいかおになってきた。",
          romaji: "musuko wa koukousei ni nari, dandan otona rashii kao ni natte kita",
          meaning: "Con trai tôi lên cấp ba và dần có gương mặt ra dáng người lớn."
        },
        {
          direction: "ja-vi",
          kanji: "あの子は遊ばないで勉強ばかりしていて、子供らしくない。",
          hiragana: "あのこはあそばないでべんきょうばかりしていて、こどもらしくない。",
          romaji: "ano ko wa asobanaide benkyou bakari shite ite, kodomo rashikunai",
          meaning: "Đứa trẻ đó chỉ học mà không chơi, chẳng ra dáng trẻ con."
        },
        {
          direction: "vi-ja",
          kanji: "今日は夏らしい日だね。",
          hiragana: "きょうはなつらしいひだね。",
          romaji: "kyou wa natsu rashii hi da ne",
          meaning: "Hôm nay là một ngày đúng kiểu mùa hè.",
          acceptedJapanese: ["今日は夏らしい日だね。", "きょうはなつらしいひだね。"]
        },
        {
          direction: "vi-ja",
          kanji: "ゆか先生は日本人らしい顔をしている。",
          hiragana: "ゆかせんせいはにほんじんらしいかおをしている。",
          romaji: "Yuka sensei wa nihonjin rashii kao o shite iru",
          meaning: "Cô Yuka có khuôn mặt đậm chất người Nhật.",
          acceptedJapanese: ["ゆか先生は日本人らしい顔をしている。", "ゆかせんせいはにほんじんらしいかおをしている。"]
        },
        {
          direction: "vi-ja",
          kanji: "花火がないと夏らしくなくなってしまう。",
          hiragana: "はなびがないとなつらしくなくなってしまう。",
          romaji: "hanabi ga nai to natsu rashikunaku natte shimau",
          meaning: "Nếu không có pháo hoa thì đâu còn là mùa hè nữa.",
          acceptedJapanese: ["花火がないと夏らしくなくなってしまう。", "はなびがないとなつらしくなくなってしまう。"]
        }
      ]
    },
    {
      structure: "～を中心に",
      meaning: "Mà chủ yếu là... / Trọng tâm là...",
      note: "Dùng khi muốn nhấn mạnh trọng tâm của hành động, sự vật hoặc sự việc. Cấu trúc: N1＋を中心に／として; N1＋を中心にした／とした＋N2; N1＋を中心にする／とする＋N2.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私はダイエットのため、野菜を中心とした食事をしている。",
          hiragana: "わたしはだいえっとのため、やさいをちゅうしんとしたしょくじをしている。",
          romaji: "watashi wa daietto no tame, yasai o chuushin to shita shokuji o shite iru",
          meaning: "Để ăn kiêng, tôi ăn bữa ăn chủ yếu là rau."
        },
        {
          direction: "ja-vi",
          kanji: "私の授業では、文法ではなく会話を中心に教えている。",
          hiragana: "わたしのじゅぎょうでは、ぶんぽうではなくかいわをちゅうしんにおしえている。",
          romaji: "watashi no jugyou de wa, bunpou de wa naku kaiwa o chuushin ni oshiete iru",
          meaning: "Trong lớp của tôi, tôi dạy chủ yếu hội thoại chứ không phải ngữ pháp."
        },
        {
          direction: "ja-vi",
          kanji: "この店は、パスタを中心とするイタリア料理の店だ。",
          hiragana: "このみせは、ぱすたをちゅうしんとするいたりありょうりのみせだ。",
          romaji: "kono mise wa, pasuta o chuushin to suru Itaria ryouri no mise da",
          meaning: "Cửa hàng này là nhà hàng Ý chủ yếu phục vụ pasta."
        },
        {
          direction: "vi-ja",
          kanji: "この町はベトナム人観光客を中心に観光客が多い。",
          hiragana: "このまちはべとなむじんかんこうきゃくをちゅうしんにかんこうきゃくがおおい。",
          romaji: "kono machi wa Betonamujin kankoukyaku o chuushin ni kankoukyaku ga ooi",
          meaning: "Thành phố này có rất nhiều du khách mà chủ yếu là du khách Việt Nam.",
          acceptedJapanese: ["この町はベトナム人観光客を中心に観光客が多い。", "このまちはべとなむじんかんこうきゃくをちゅうしんにかんこうきゃくがおおい。"]
        },
        {
          direction: "vi-ja",
          kanji: "発音を中心として日本語について研究しています。",
          hiragana: "はつおんをちゅうしんとしてにほんごについてけんきゅうしています。",
          romaji: "hatsuon o chuushin to shite nihongo ni tsuite kenkyuu shite imasu",
          meaning: "Tôi đang nghiên cứu tiếng Nhật mà trọng tâm là phát âm.",
          acceptedJapanese: ["発音を中心として日本語について研究しています。", "はつおんをちゅうしんとしてにほんごについてけんきゅうしています。"]
        },
        {
          direction: "vi-ja",
          kanji: "今週の研究会では少子化を中心とした問題について話し合った。",
          hiragana: "こんしゅうのけんきゅうかいではしょうしかをちゅうしんとしたもんだいについてはなしあった。",
          romaji: "konshuu no kenkyuukai de wa shoushika o chuushin to shita mondai ni tsuite hanashiatta",
          meaning: "Buổi nghiên cứu tuần này đã nói chuyện về vấn đề mà trọng tâm là mức sinh giảm.",
          acceptedJapanese: ["今週の研究会では少子化を中心とした問題について話し合った。", "こんしゅうのけんきゅうかいではしょうしかをちゅうしんとしたもんだいについてはなしあった。"]
        }
      ]
    }
  ]
});


/*
  NGỮ PHÁP - CHƯƠNG 1 BÀI 3
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 1 bài 3",
  grammar: [
    {
      structure: "～について",
      meaning: "Về N1",
      note: "Dùng khi muốn nói, nghe, nghĩ, viết, tìm hiểu... về điều gì đó. Cấu trúc: N1＋について（は／も／のN2）.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私の教授は30年間物理学について研究している。",
          hiragana: "わたしのきょうじゅはさんじゅうねんかんぶつりがくについてけんきゅうしている。",
          romaji: "watashi no kyouju wa sanjuu nenkan butsuri gaku ni tsuite kenkyuu shite iru",
          meaning: "Giáo sư của tôi đã nghiên cứu về vật lý trong 30 năm."
        },
        {
          direction: "ja-vi",
          kanji: "私は将来についてはあまり考えない性格だ。",
          hiragana: "わたしはしょうらいについてはあまりかんがえないせいかくだ。",
          romaji: "watashi wa shourai ni tsuite wa amari kangaenai seikaku da",
          meaning: "Tôi là người không suy nghĩ nhiều về tương lai."
        },
        {
          direction: "ja-vi",
          kanji: "先生は日本だけでなく、ベトナムの歴史についてもよく知っている。",
          hiragana: "せんせいはにほんだけでなく、べとなむのれきしについてもよくしっている。",
          romaji: "sensei wa nihon dake de naku, Betonamu no rekishi ni tsuite mo yoku shitte iru",
          meaning: "Thầy không chỉ biết về Nhật Bản mà còn biết rất rõ về lịch sử Việt Nam."
        },
        {
          direction: "vi-ja",
          kanji: "もう半年ぐらい付き合っていたのに、彼について何もわかんない。",
          hiragana: "もうはんとしぐらいつきあっていたのに、かれについてなにもわかんない。",
          romaji: "mou hantoshi gurai tsukiatte ita noni, kare ni tsuite nani mo wakannai",
          meaning: "Mặc dù đã hẹn hò được nửa năm rồi thế nhưng mà tôi chẳng biết gì về anh ấy cả.",
          acceptedJapanese: ["もう半年ぐらい付き合っていたのに、彼について何もわかんない。", "もうはんとしぐらいつきあっていたのに、かれについてなにもわかんない。"]
        },
        {
          direction: "vi-ja",
          kanji: "今大学院で日本語教育について研究しています。",
          hiragana: "いまだいがくいんでにほんごきょういくについてけんきゅうしています。",
          romaji: "ima daigakuin de nihongo kyouiku ni tsuite kenkyuu shite imasu",
          meaning: "Hiện tại ở cao học mình đang nghiên cứu về giáo dục tiếng Nhật.",
          acceptedJapanese: ["今大学院で日本語教育について研究しています。", "いまだいがくいんでにほんごきょういくについてけんきゅうしています。"]
        },
        {
          direction: "vi-ja",
          kanji: "自分の夢についての作文",
          hiragana: "じぶんのゆめについてのさくぶん",
          romaji: "jibun no yume ni tsuite no sakubun",
          meaning: "Bài văn về ước mơ của mình.",
          acceptedJapanese: ["自分の夢についての作文", "じぶんのゆめについてのさくぶん"]
        }
      ]
    },
    {
      structure: "～において / ～における",
      meaning: "Ở / tại / trong / trên N1",
      note: "N chỉ địa điểm, hoàn cảnh, trạng thái, phương diện, lĩnh vực. Đây là cách nói văn viết nên không dùng với những hành động thường ngày, đơn giản. Cấu trúc: N1＋において（は／も）; N1＋においての＋N2; N1＋における＋N2.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼女は何事においてもまじめにやる性格だ。",
          hiragana: "かのじょはなにごとにおいてもまじめにやるせいかくだ。",
          romaji: "kanojo wa nanigoto ni oite mo majime ni yaru seikaku da",
          meaning: "Cô ấy là người làm mọi việc một cách nghiêm túc."
        },
        {
          direction: "ja-vi",
          kanji: "今の日本において、タバコを吸える店はほとんどない。",
          hiragana: "いまのにほんにおいて、たばこをすえるみせはほとんどない。",
          romaji: "ima no nihon ni oite, tabako o sueru mise wa hotondo nai",
          meaning: "Ở Nhật hiện nay hầu như không có cửa hàng nào có thể hút thuốc."
        },
        {
          direction: "ja-vi",
          kanji: "勉強することにおいて、一番大事なのは続けることだ。",
          hiragana: "べんきょうすることにおいて、いちばんだいじなのはつづけることだ。",
          romaji: "benkyou suru koto ni oite, ichiban daiji na no wa tsudzukeru koto da",
          meaning: "Trong việc học, điều quan trọng nhất là tiếp tục duy trì."
        },
        {
          direction: "vi-ja",
          kanji: "今週のコンサートは東京ドームにおいて行われる予定です。",
          hiragana: "こんしゅうのこんさーとはとうきょうどーむにおいておこなわれるよていです。",
          romaji: "konshuu no konsaato wa Toukyou Doom ni oite okonawareru yotei desu",
          meaning: "Buổi hòa nhạc tuần này được dự kiến tổ chức ở tòa nhà Tokyo Dome.",
          acceptedJapanese: ["今週のコンサートは東京ドームにおいて行われる予定です。", "こんしゅうのこんさーとはとうきょうどーむにおいておこなわれるよていです。"]
        },
        {
          direction: "vi-ja",
          kanji: "私の人生において、失敗したことはたくさんあります。",
          hiragana: "わたしのじんせいにおいて、しっぱいしたことはたくさんあります。",
          romaji: "watashi no jinsei ni oite, shippai shita koto wa takusan arimasu",
          meaning: "Trong cuộc đời của tôi thì đã có rất nhiều lần tôi thất bại.",
          acceptedJapanese: ["私の人生において、失敗したことはたくさんあります。", "わたしのじんせいにおいて、しっぱいしたことはたくさんあります。"]
        },
        {
          direction: "vi-ja",
          kanji: "学校における教育",
          hiragana: "がっこうにおけるきょういく",
          romaji: "gakkou ni okeru kyouiku",
          meaning: "Giáo dục ở trong trường học.",
          acceptedJapanese: ["学校における教育", "がっこうにおけるきょういく"]
        }
      ]
    },
    {
      structure: "～にとって",
      meaning: "Đối với N1 thì...",
      note: "Danh từ đứng trước thường là người hoặc chủ thể. Vế sau đưa ra ý kiến, đánh giá, phán đoán hoặc nhận xét. Cấu trúc: N1＋にとって（は／も／のN2）.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私にとって、彼は家族みたいな存在だ。",
          hiragana: "わたしにとって、かれはかぞくみたいなそんざいだ。",
          romaji: "watashi ni totte, kare wa kazoku mitai na sonzai da",
          meaning: "Đối với tôi, anh ấy là một sự tồn tại giống như gia đình."
        },
        {
          direction: "ja-vi",
          kanji: "日本人にとっても、漢字はとても難しい。",
          hiragana: "にほんじんにとっても、かんじはとてもむずかしい。",
          romaji: "nihonjin ni totte mo, kanji wa totemo muzukashii",
          meaning: "Ngay cả đối với người Nhật, Kanji cũng rất khó."
        },
        {
          direction: "ja-vi",
          kanji: "私にとって、一番大事なものは家族です。",
          hiragana: "わたしにとって、いちばんだいじなものはかぞくです。",
          romaji: "watashi ni totte, ichiban daiji na mono wa kazoku desu",
          meaning: "Đối với tôi, điều quan trọng nhất là gia đình."
        },
        {
          direction: "vi-ja",
          kanji: "国にとって若者は貴重な財産である。",
          hiragana: "くににとってわかものはきちょうなざいさんである。",
          romaji: "kuni ni totte wakamono wa kichou na zaisan de aru",
          meaning: "Đối với đất nước, những người trẻ là tài sản quý giá.",
          acceptedJapanese: ["国にとって若者は貴重な財産である。", "くににとってわかものはきちょうなざいさんである。"]
        },
        {
          direction: "vi-ja",
          kanji: "お金は会社にとって血ともいえる。",
          hiragana: "おかねはかいしゃにとってちともいえる。",
          romaji: "okane wa kaisha ni totte chi to mo ieru",
          meaning: "Có thể nói rằng tiền là máu đối với công ty.",
          acceptedJapanese: ["お金は会社にとって血ともいえる。", "おかねはかいしゃにとってちともいえる。"]
        },
        {
          direction: "vi-ja",
          kanji: "あなたにとって、私は友達なのか、恋人なのか、一回ハッキリ言ってほしい。",
          hiragana: "あなたにとって、わたしはともだちなのか、こいびとなのか、いっかいはっきりいってほしい。",
          romaji: "anata ni totte, watashi wa tomodachi na no ka, koibito na no ka, ikkai hakkiri itte hoshii",
          meaning: "Đối với anh thì em là bạn hay người yêu, anh hãy nói một lần cho rõ xem nào.",
          acceptedJapanese: ["あなたにとって、私は友達なのか、恋人なのか、一回ハッキリ言ってほしい。", "あなたにとって、わたしはともだちなのか、こいびとなのか、いっかいはっきりいってほしい。"]
        }
      ]
    },
    {
      structure: "～に対して（1）",
      meaning: "Đối với / Với / Cho đối tượng nào đó",
      note: "Vế sau là hành động hoặc cảm xúc hướng tới đối tượng N đứng trước に対して. Cấu trúc: N1＋に対し（は／も／のN2）／に対して（は／も／のN2）／に対する＋N2.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "年上の人に対しては、ていねいな言葉を使った方がいい。",
          hiragana: "としうえのひとにたいしては、ていねいなことばをつかったほうがいい。",
          romaji: "toshiue no hito ni taishite wa, teinei na kotoba o tsukatta hou ga ii",
          meaning: "Đối với người lớn tuổi hơn thì nên dùng lời nói lịch sự."
        },
        {
          direction: "ja-vi",
          kanji: "先生は私の質問に対して答えてくれなかった。",
          hiragana: "せんせいはわたしのしつもんにたいしてこたえてくれなかった。",
          romaji: "sensei wa watashi no shitsumon ni taishite kotaete kurenakatta",
          meaning: "Giáo viên đã không trả lời câu hỏi của tôi."
        },
        {
          direction: "ja-vi",
          kanji: "社長に対する社員たちからの信頼は大きい。",
          hiragana: "しゃちょうにたいするしゃいんたちからのしんらいはおおきい。",
          romaji: "shachou ni taisuru shaintachi kara no shinrai wa ookii",
          meaning: "Sự tín nhiệm của nhân viên đối với giám đốc rất lớn."
        },
        {
          direction: "vi-ja",
          kanji: "彼は女に対していつも優しいです。",
          hiragana: "かれはおんなにたいしていつもやさしいです。",
          romaji: "kare wa onna ni taishite itsumo yasashii desu",
          meaning: "Anh ấy lúc nào cũng tốt với phụ nữ.",
          acceptedJapanese: ["彼は女に対していつも優しいです。", "かれはおんなにたいしていつもやさしいです。"]
        },
        {
          direction: "vi-ja",
          kanji: "私の意見に対して、父はいつも反対している。",
          hiragana: "わたしのいけんにたいして、ちちはいつもはんたいしている。",
          romaji: "watashi no iken ni taishite, chichi wa itsumo hantai shite iru",
          meaning: "Bố tôi lúc nào cũng phản đối những ý kiến của tôi.",
          acceptedJapanese: ["私の意見に対して、父はいつも反対している。", "わたしのいけんにたいして、ちちはいつもはんたいしている。"]
        },
        {
          direction: "vi-ja",
          kanji: "もう子供じゃないから、自分の行動に対して、責任を持たなきゃいけない。",
          hiragana: "もうこどもじゃないから、じぶんのこうどうにたいして、せきにんをもたなきゃいけない。",
          romaji: "mou kodomo janai kara, jibun no koudou ni taishite, sekinin o motanakya ikenai",
          meaning: "Vì không còn là trẻ con nữa, nên tôi phải có trách nhiệm với hành động của mình.",
          acceptedJapanese: ["もう子供じゃないから、自分の行動に対して、責任を持たなきゃいけない。", "もうこどもじゃないから、じぶんのこうどうにたいして、せきにんをもたなきゃいけない。"]
        }
      ]
    },
    {
      structure: "～に対して（2）",
      meaning: "Trái với / So với... thì...",
      note: "Vế trước và vế sau được đặt cạnh nhau để so sánh. Có thể mang nghĩa trái ngược hoặc diễn tả hai tính chất không liên quan. Cấu trúc: 普通形 / Aな・Aなである / Nな・Nである＋のに対し（て）; N＋に対して.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "兄は背が高いのに対して、私は背が低い。",
          hiragana: "あにはせがたかいのにたいして、わたしはせがひくい。",
          romaji: "ani wa se ga takai no ni taishite, watashi wa se ga hikui",
          meaning: "Trái với anh trai cao, tôi lại thấp."
        },
        {
          direction: "ja-vi",
          kanji: "今、ベトナムは夏なのに対してオーストラリアは冬だ。",
          hiragana: "いま、べとなむはなつなのにたいしておーすとらりあはふゆだ。",
          romaji: "ima, Betonamu wa natsu na no ni taishite Oosutoraria wa fuyu da",
          meaning: "Hiện giờ Việt Nam là mùa hè, trái lại Úc là mùa đông."
        },
        {
          direction: "ja-vi",
          kanji: "みんなが遊んでいるのに対し、彼は一人で勉強している。",
          hiragana: "みんながあそんでいるのにたいし、かれはひとりでべんきょうしている。",
          romaji: "minna ga asonde iru no ni taishi, kare wa hitori de benkyou shite iru",
          meaning: "Trong khi mọi người đang chơi thì anh ấy một mình học."
        },
        {
          direction: "vi-ja",
          kanji: "発音が難しいベトナム語に対して、日本語は発音が簡単だが、漢字が多いです。",
          hiragana: "はつおんがむずかしいべとなむごにたいして、にほんごははつおんがかんたんだが、かんじがおおいです。",
          romaji: "hatsuon ga muzukashii Betonamugo ni taishite, nihongo wa hatsuon ga kantan da ga, kanji ga ooi desu",
          meaning: "Trái với tiếng Việt phát âm khó, tiếng Nhật phát âm dễ nhưng lại nhiều chữ Hán.",
          acceptedJapanese: ["発音が難しいベトナム語に対して、日本語は発音が簡単だが、漢字が多いです。", "はつおんがむずかしいべとなむごにたいして、にほんごははつおんがかんたんだが、かんじがおおいです。"]
        },
        {
          direction: "vi-ja",
          kanji: "こっちの店は列が長いのに対して、向こうの店は一人もいない。",
          hiragana: "こっちのみせはれつがながいのにたいして、むこうのみせはひとりもいない。",
          romaji: "kocchi no mise wa retsu ga nagai no ni taishite, mukou no mise wa hitori mo inai",
          meaning: "Trái với cửa hàng bên này người xếp hàng dài, thì cửa hàng bên kia chẳng có một ai cả.",
          acceptedJapanese: ["こっちの店は列が長いのに対して、向こうの店は一人もいない。", "こっちのみせはれつがながいのにたいして、むこうのみせはひとりもいない。"]
        }
      ]
    },
    {
      structure: "～にしたがって（1）",
      meaning: "Tuân theo / Theo đúng như...",
      note: "Thực hiện hành động theo chỉ thị, hướng dẫn, quy tắc, nội dung, lời chỉ dạy đã có sẵn, như 指示、命令、ルール、規則、教え. Cấu trúc: N＋に従って.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私は親の希望に従って、医者になった。",
          hiragana: "わたしはおやのきぼうにしたがって、いしゃになった。",
          romaji: "watashi wa oya no kibou ni shitagatte, isha ni natta",
          meaning: "Tôi đã trở thành bác sĩ theo nguyện vọng của bố mẹ."
        },
        {
          direction: "ja-vi",
          kanji: "私が考えたこの方法に従ってダイエットすれば、1か月で5キロ痩せられます。",
          hiragana: "わたしがかんがえたこのほうほうにしたがってだいえっとすれば、いっかげつでごきろやせられます。",
          romaji: "watashi ga kangaeta kono houhou ni shitagatte daietto sureba, ikkagetsu de go kiro yaseraremasu",
          meaning: "Nếu ăn kiêng theo phương pháp tôi nghĩ ra thì có thể giảm 5 kg trong một tháng."
        },
        {
          direction: "ja-vi",
          kanji: "この洗剤は、説明に従って正しく使用してください。",
          hiragana: "このせんざいは、せつめいにしたがってただしくしようしてください。",
          romaji: "kono senzai wa, setsumei ni shitagatte tadashiku shiyou shite kudasai",
          meaning: "Hãy sử dụng chất tẩy này đúng theo hướng dẫn."
        },
        {
          direction: "vi-ja",
          kanji: "外国に住めば、その国の法律に従って、行動しなければならない。",
          hiragana: "がいこくにすめば、そのくにのほうりつにしたがって、こうどうしなければならない。",
          romaji: "gaikoku ni sumeba, sono kuni no houritsu ni shitagatte, koudou shinakereba naranai",
          meaning: "Nếu sống ở nước ngoài thì phải hành động tuân theo luật pháp ở nước đấy.",
          acceptedJapanese: ["外国に住めば、その国の法律に従って、行動しなければならない。", "がいこくにすめば、そのくにのほうりつにしたがって、こうどうしなければならない。"]
        },
        {
          direction: "vi-ja",
          kanji: "交通ルールに従って、車も歩行者も通行する。",
          hiragana: "こうつうるーるにしたがって、くるまもほこうしゃもつうこうする。",
          romaji: "koutsuu ruuru ni shitagatte, kuruma mo hokousha mo tsuukou suru",
          meaning: "Cả ô tô lẫn người đi bộ đều tuân theo luật giao thông để tham gia giao thông.",
          acceptedJapanese: ["交通ルールに従って、車も歩行者も通行する。", "こうつうるーるにしたがって、くるまもほこうしゃもつうこうする。"]
        },
        {
          direction: "vi-ja",
          kanji: "子どもの頃から、母の言葉に従って生きてきた。",
          hiragana: "こどものころから、ははのことばにしたがっていきてきた。",
          romaji: "kodomo no koro kara, haha no kotoba ni shitagatte ikite kita",
          meaning: "Từ nhỏ, tôi đã sống theo những lời mẹ dặn.",
          acceptedJapanese: ["子どもの頃から、母の言葉に従って生きてきた。", "こどものころから、ははのことばにしたがっていきてきた。"]
        }
      ]
    },
    {
      structure: "～にしたがって（2）",
      meaning: "Cùng với… thì… / Càng… thì… cũng càng…",
      note: "Hai vế diễn tả sự biến đổi theo thời gian, tình huống hoặc hoàn cảnh. Vế sau thay đổi do chịu ảnh hưởng, tác động của vế trước. Thường dùng trong văn viết, phân tích. Cấu trúc: N / Vる＋に従って.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "時間が経つに従って、頭が痛くなってきた。",
          hiragana: "じかんがたつにしたがって、あたまがいたくなってきた。",
          romaji: "jikan ga tatsu ni shitagatte, atama ga itaku natte kita",
          meaning: "Cùng với thời gian trôi qua, đầu tôi càng đau hơn."
        },
        {
          direction: "ja-vi",
          kanji: "日本語の勉強が進むに従って、日本語が面白くなってきた。",
          hiragana: "にほんごのべんきょうがすすむにしたがって、にほんごがおもしろくなってきた。",
          romaji: "nihongo no benkyou ga susumu ni shitagatte, nihongo ga omoshiroku natte kita",
          meaning: "Càng học tiếng Nhật tiến triển thì tôi càng thấy tiếng Nhật thú vị."
        },
        {
          direction: "ja-vi",
          kanji: "時代の流れに従って、刀を作れる人は減ってきている。",
          hiragana: "じだいのながれにしたがって、かたなをつくれるひとはへってきている。",
          romaji: "jidai no nagare ni shitagatte, katana o tsukureru hito wa hette kite iru",
          meaning: "Theo dòng chảy thời đại, số người có thể làm kiếm đang giảm."
        },
        {
          direction: "vi-ja",
          kanji: "太陽が昇るに従って、気温も高くなる。",
          hiragana: "たいようがのぼるにしたがって、きおんもたかくなる。",
          romaji: "taiyou ga noboru ni shitagatte, kion mo takaku naru",
          meaning: "Mặt trời càng lên cao thì nhiệt độ càng nóng lên.",
          acceptedJapanese: ["太陽が昇るに従って、気温も高くなる。", "たいようがのぼるにしたがって、きおんもたかくなる。"]
        },
        {
          direction: "vi-ja",
          kanji: "経験が積み重なるに従って、自信がついてくる。",
          hiragana: "けいけんがつみかさなるにしたがって、じしんがついてくる。",
          romaji: "keiken ga tsumikasanaru ni shitagatte, jishin ga tsuite kuru",
          meaning: "Càng tích luỹ được nhiều kinh nghiệm thì chúng ta càng thấy tự tin hơn.",
          acceptedJapanese: ["経験が積み重なるに従って、自信がついてくる。", "けいけんがつみかさなるにしたがって、じしんがついてくる。"]
        },
        {
          direction: "vi-ja",
          kanji: "歳を重ねるに従って、本当に大切なものが見えてくる。",
          hiragana: "としをかさねるにしたがって、ほんとうにたいせつなものがみえてくる。",
          romaji: "toshi o kasaneru ni shitagatte, hontou ni taisetsu na mono ga miete kuru",
          meaning: "Càng lớn tuổi, ta càng nhận ra điều gì là thực sự quan trọng.",
          acceptedJapanese: ["歳を重ねるに従って、本当に大切なものが見えてくる。", "としをかさねるにしたがって、ほんとうにたいせつなものがみえてくる。"]
        }
      ]
    }
  ]
});
