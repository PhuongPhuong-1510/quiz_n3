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
