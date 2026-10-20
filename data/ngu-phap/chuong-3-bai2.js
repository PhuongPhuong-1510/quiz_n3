/*
  FILE MẪU NGỮ PHÁP

  Thêm tên file mới vào ngu-phap/danh-sach-ngu-phap.js.

  direction:
    "ja-vi" = hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-romaji" = hiện câu Việt, nhập câu bằng Romaji.
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 3 bài 2",
  grammar: [
    {
      structure: "普通形 + ということだ",
      meaning: "Có nghĩa là..., tức là...",
      note: "Dùng để giải thích hoặc diễn giải ý nghĩa của một từ ngữ hay cách hiểu về một sự việc đã được nêu ra trước đó. Khi nêu tình huống hoặc nội dung A ở phía trước rồi trình bày cách hiểu, ý nghĩa hay kết luận B ở phía sau, có thể dùng cấu trúc「Aということは、Bということだ」. Cách nói này thường được dùng trong văn viết hoặc trong những hoàn cảnh trang trọng, lịch sự. Trong hội thoại suồng sã,「という」thường được rút gọn thành「って」, tạo thành cách nói「～って（いう）こと」.",

      examples: [
        {
          direction: "ja-vi",
          kanji: "A：部長、これ以上、頑張れません。B：それは、仕事を辞めたいということですか。",
          hiragana: "A：ぶちょう、これいじょう、がんばれません。B：それは、しごとをやめたいということですか。",
          romaji: "A: buchou, kore ijou, ganbaremasen. B: sore wa, shigoto o yametai to iu koto desu ka",
          meaning: "A: Trưởng phòng, tôi không thể cố gắng thêm được nữa. B: Điều đó có nghĩa là bạn muốn nghỉ việc phải không?"
        },
        {
          direction: "ja-vi",
          kanji: "A：私たち、もう会わないほうがいいかも。B：それって、別れるってこと？",
          hiragana: "A：わたしたち、もうあわないほうがいいかも。B：それって、わかれるってこと？",
          romaji: "A: watashitachi, mou awanai hou ga ii kamo. B: sore tte, wakareru tte koto?",
          meaning: "A: Có lẽ chúng ta không nên gặp nhau nữa. B: Ý đó là chúng ta chia tay à?"
        },
        {
          direction: "ja-vi",
          kanji: "食べるということは、命をいただくということだ。",
          hiragana: "たべるということは、いのちをいただくということだ。",
          romaji: "taberu to iu koto wa, inochi o itadaku to iu koto da",
          meaning: "Ăn có nghĩa là nhận lấy sinh mệnh."
        },

        {
          direction: "vi-romaji",
          kanji: "私にとって幸せとは、人を幸せにするということだ。",
          hiragana: "わたしにとってしあわせとは、ひとをしあわせにするということだ。",
          romaji: "watashi ni totte shiawase to wa, hito o shiawase ni suru to iu koto da",
          meaning: "Với tôi, hạnh phúc chính là làm cho mọi người hạnh phúc."
        },
        {
          direction: "vi-romaji",
          kanji: "大人になるということは、自分の責任は自分で取るということです。",
          hiragana: "おとなになるということは、じぶんのせきにんはじぶんでとるということです。",
          romaji: "otona ni naru to iu koto wa, jibun no sekinin wa jibun de toru to iu koto desu",
          meaning: "Trưởng thành chính là việc bản thân chịu trách nhiệm của mình."
        },
        {
          direction: "vi-romaji",
          kanji: "幸せになるということは「あるものに気づくこと」ということだ。",
          hiragana: "しあわせになるということは「あるものにきづくこと」ということだ。",
          romaji: "shiawase ni naru to iu koto wa, \"aru mono ni kizuku koto\" to iu koto da",
          meaning: "Hạnh phúc có nghĩa là nhận ra những điều mình đang có."
        }
      ]
    },

    {
      structure: "普通形 / N + という点で",
      meaning: "Ở điểm là... / Ở khía cạnh là...",
      note: "Dùng để lấy một trong nhiều yếu tố, đặc điểm hoặc khía cạnh của một sự vật hay sự việc ra làm tiêu chí để so sánh, đánh giá hoặc nêu bật đặc điểm. Trừ trường hợp phần đứng trước「という点」là danh từ hoặc tính từ な, trong những trường hợp khác có thể lược bỏ「という」mà ý nghĩa cơ bản không thay đổi.「～という点」được sử dụng như một cụm danh từ trong câu và thường xuất hiện trước các trợ từ như「で」「が」.",

      examples: [
        {
          direction: "ja-vi",
          kanji: "エアコンは、消し忘れても火事になる心配がない点で、お年寄りにも安心だ。",
          hiragana: "エアコンは、けしわすれてもかじになるしんぱいがないてんで、おとしよりにもあんしんだ。",
          romaji: "eakon wa, keshiwasurete mo kaji ni naru shinpai ga nai ten de, otoshiyori ni mo anshin da",
          meaning: "Máy điều hòa an toàn cho cả người lớn tuổi ở điểm là dù quên tắt cũng không phải lo xảy ra hỏa hoạn."
        },
        {
          direction: "ja-vi",
          kanji: "山登りは楽しいですが、自然を相手にするという点で、危険もあります。",
          hiragana: "やまのぼりはたのしいですが、しぜんをあいてにするというてんで、きけんもあります。",
          romaji: "yamanobori wa tanoshii desu ga, shizen o aite ni suru to iu ten de, kiken mo arimasu",
          meaning: "Leo núi rất vui, nhưng ở khía cạnh phải đối mặt với thiên nhiên thì cũng có nguy hiểm."
        },
        {
          direction: "ja-vi",
          kanji: "この映画は、悪い人が登場しないのに面白いという点が評価されている。",
          hiragana: "このえいがは、わるいひとがとうじょうしないのにおもしろいというてんがひょうかされている。",
          romaji: "kono eiga wa, warui hito ga toujou shinai noni omoshiroi to iu ten ga hyouka sarete iru",
          meaning: "Bộ phim này được đánh giá cao ở điểm dù không có nhân vật xấu xuất hiện nhưng vẫn thú vị."
        },

        {
          direction: "vi-romaji",
          kanji: "A社のパソコンより、B社のパソコンのほうが丈夫だという点で評価が高い。",
          hiragana: "Aしゃのパソコンより、Bしゃのパソコンのほうがじょうぶだというてんでひょうかがたかい。",
          romaji: "A-sha no pasokon yori, B-sha no pasokon no hou ga joubu da to iu ten de hyouka ga takai",
          meaning: "So với laptop công ty A thì laptop công ty B được đánh giá cao hơn về độ bền."
        },
        {
          direction: "vi-romaji",
          kanji: "窓が西向きという点で、この部屋を借りるのを迷っている。",
          hiragana: "まどがにしむきというてんで、このへやをかりるのをまよっている。",
          romaji: "mado ga nishimuki to iu ten de, kono heya o kariru no o mayotte iru",
          meaning: "Tôi đang phân vân về việc thuê căn phòng này bởi điểm cửa sổ hướng về phía Tây."
        },
        {
          direction: "vi-romaji",
          kanji: "この町は人が優しいという点で、他のどこよりも好きだ。",
          hiragana: "このまちはひとがやさしいというてんで、ほかのどこよりもすきだ。",
          romaji: "kono machi wa hito ga yasashii to iu ten de, hoka no doko yori mo suki da",
          meaning: "Tôi thích thành phố này hơn bất kỳ đâu ở điểm là con người ở đây rất hiền lành."
        }
      ]
    },

    {
      structure: "普通形 + としたら",
      meaning: "Giả sử nếu mà... / Giả dụ như...",
      note: "Dùng để đưa ra một trường hợp giả định nào đó rồi suy nghĩ hoặc nói về kết quả trong trường hợp giả định ấy. Thường được dùng khi giả định những sự việc hoặc tình huống khó xảy ra trong thực tế.",

      examples: [
        {
          direction: "ja-vi",
          kanji: "その本の内容が全て正しいとしたら、彼の説明が間違っているということになるわね。",
          hiragana: "そのほんのないようがすべてただしいとしたら、かれのせつめいがまちがっているということになるわね。",
          romaji: "sono hon no naiyou ga subete tadashii to shitara, kare no setsumei ga machigatte iru to iu koto ni naru wa ne",
          meaning: "Nếu giả sử toàn bộ nội dung cuốn sách đó đều đúng thì có nghĩa là lời giải thích của anh ấy sai."
        },
        {
          direction: "ja-vi",
          kanji: "その事柄が事実だとしたら、事実確認を急ぐべきだ。",
          hiragana: "そのことがらがじじつだとしたら、じじつかくにんをいそぐべきだ。",
          romaji: "sono kotogara ga jijitsu da to shitara, jijitsu kakunin o isogu beki da",
          meaning: "Nếu sự việc đó là sự thật thì nên nhanh chóng xác minh sự thật."
        },
        {
          direction: "ja-vi",
          kanji: "宝くじが当たったとしたら、家族に海外旅行をプレゼントしたい。",
          hiragana: "たからくじがあたったとしたら、かぞくにかいがいりょこうをプレゼントしたい。",
          romaji: "takarakuji ga atatta to shitara, kazoku ni kaigai ryokou o purezento shitai",
          meaning: "Giả sử trúng xổ số, tôi muốn tặng gia đình một chuyến du lịch nước ngoài."
        },

        {
          direction: "vi-romaji",
          kanji: "もしも生まれ変わるとしたら、何になりたいですか。",
          hiragana: "もしもうまれかわるとしたら、なにになりたいですか。",
          romaji: "moshimo umarekawaru to shitara, nani ni naritai desu ka",
          meaning: "Giả sử cậu được sinh ra lại lần nữa, cậu muốn trở thành gì?"
        },
        {
          direction: "vi-romaji",
          kanji: "もし私があなただったとしたら、試験に落ちたと思いますけどね。",
          hiragana: "もしわたしがあなただったとしたら、しけんにおちたとおもいますけどね。",
          romaji: "moshi watashi ga anata datta to shitara, shiken ni ochita to omoimasu kedo ne",
          meaning: "Giả sử tớ mà là cậu, thì tớ trượt luôn rồi."
        },
        {
          direction: "vi-romaji",
          kanji: "明日地球が終わるとしたら、今日は何をしたいですか。",
          hiragana: "あしたちきゅうがおわるとしたら、きょうはなにをしたいですか。",
          romaji: "ashita chikyuu ga owaru to shitara, kyou wa nani o shitai desu ka",
          meaning: "Giả sử nếu như ngày mai thế giới kết thúc thì hôm nay các bạn muốn làm gì?"
        }
      ]
    },

    {
      structure: "普通形 + としても",
      meaning: "Cho dù là... / Thậm chí nếu là...",
      note: "Dùng để đưa ra một trường hợp giả định nhằm nêu ý kiến, quan điểm hoặc phán đoán của người nói: cho dù giả định đó xảy ra thì kết quả hoặc quan điểm phía sau vẫn không thay đổi. Thường đi cùng các từ như「たとえ」「仮に」「もし」「もしも」để nhấn mạnh tính giả định. Trong văn nói có thể dùng cách nói thân mật「としたって」.",

      examples: [
        {
          direction: "ja-vi",
          kanji: "たとえ冗談だとしても、女性にそんなことは言ってはいけない。",
          hiragana: "たとえじょうだんだとしても、じょせいにそんなことはいってはいけない。",
          romaji: "tatoe joudan da to shite mo, josei ni sonna koto wa itte wa ikenai",
          meaning: "Cho dù chỉ là nói đùa thì cũng không được nói điều như vậy với phụ nữ."
        },
        {
          direction: "ja-vi",
          kanji: "たとえきれいだとしても、性格が悪ければ付き合おうとは思わない。",
          hiragana: "たとえきれいだとしても、せいかくがわるければつきあおうとはおもわない。",
          romaji: "tatoe kirei da to shite mo, seikaku ga warukereba tsukiaou to wa omowanai",
          meaning: "Cho dù có xinh đẹp đi nữa, nếu tính cách xấu thì tôi cũng không nghĩ đến chuyện hẹn hò."
        },
        {
          direction: "ja-vi",
          kanji: "N1を持っていたとしても、会話が上手だとは限らない。",
          hiragana: "N1をもっていたとしても、かいわがじょうずだとはかぎらない。",
          romaji: "N1 o motte ita to shite mo, kaiwa ga jouzu da to wa kagiranai",
          meaning: "Cho dù có chứng chỉ N1 thì cũng chưa chắc hội thoại đã giỏi."
        },

        {
          direction: "vi-romaji",
          kanji: "後５分しかない。今走るとしても間に合わないかもしれない。",
          hiragana: "あとごふんしかない。いまはしるとしてもまにあわないかもしれない。",
          romaji: "ato gofun shika nai. ima hashiru to shite mo maniawanai kamo shirenai",
          meaning: "Chỉ còn 5 phút nữa thôi. Bây giờ cho dù có chạy thì cũng không thể kịp được."
        },
        {
          direction: "vi-romaji",
          kanji: "たとえどんなにお金があるとしても買えないものがある。",
          hiragana: "たとえどんなにおかねがあるとしてもかえないものがある。",
          romaji: "tatoe donna ni okane ga aru to shite mo kaenai mono ga aru",
          meaning: "Cho dù có bao nhiêu tiền đi chăng nữa thì có những thứ không thể nào mua được."
        },
        {
          direction: "vi-romaji",
          kanji: "親だとしても許可なしに子どもの日記を読んではいけないです。",
          hiragana: "おやだとしてもきょかなしにこどものにっきをよんではいけないです。",
          romaji: "oya da to shite mo kyoka nashi ni kodomo no nikki o yonde wa ikenai desu",
          meaning: "Cho dù là bố mẹ thì cũng không được đọc nhật kí của con khi chưa được sự cho phép."
        }
      ]
    },

    {
      structure: "V意向形 + とする",
      meaning: "Định/cố gắng làm V; sắp sửa V",
      note: "Khi kết hợp với động từ có ý chí,「V意向形＋とする」diễn tả hành động mà chủ thể đang định thực hiện hoặc đang cố gắng, nỗ lực để thực hiện. Khi kết hợp với động từ không có ý chí, cấu trúc diễn tả một hành động, sự việc hoặc sự thay đổi đang ở ngay trước thời điểm xảy ra, tức là 'sắp sửa'.",

      examples: [
        {
          direction: "ja-vi",
          kanji: "テレビを見ようとしたら、父が帰ってきて見れなかった。",
          hiragana: "テレビをみようとしたら、ちちがかえってきてみれなかった。",
          romaji: "terebi o miyou to shitara, chichi ga kaette kite mirenakatta",
          meaning: "Khi tôi định xem TV thì bố về nên tôi không xem được."
        },
        {
          direction: "ja-vi",
          kanji: "寝ようとした時に、宿題をやっていない事に気づいた。",
          hiragana: "ねようとしたときに、しゅくだいをやっていないことにきづいた。",
          romaji: "neyou to shita toki ni, shukudai o yatte inai koto ni kizuita",
          meaning: "Khi định đi ngủ, tôi nhận ra mình chưa làm bài tập."
        },
        {
          direction: "ja-vi",
          kanji: "もうすぐ授業が始まろうとしているとき、先生から今日の授業は休みだと連絡が来た。",
          hiragana: "もうすぐじゅぎょうがはじまろうとしているとき、せんせいからきょうのじゅぎょうはやすみだとれんらくがきた。",
          romaji: "mou sugu jugyou ga hajimarou to shite iru toki, sensei kara kyou no jugyou wa yasumi da to renraku ga kita",
          meaning: "Ngay khi tiết học sắp bắt đầu thì có thông báo từ giáo viên rằng buổi học hôm nay được nghỉ."
        },

        {
          direction: "vi-romaji",
          kanji: "出かけようとしたとき、電話がかかってきた。",
          hiragana: "でかけようとしたとき、でんわがかかってきた。",
          romaji: "dekakeyou to shita toki, denwa ga kakatte kita",
          meaning: "Đúng lúc tôi định ra ngoài thì có điện thoại."
        },
        {
          direction: "vi-romaji",
          kanji: "仕事が終わり、家に帰ろうとした時、村上さんにご飯に行こうと誘われた。",
          hiragana: "しごとがおわり、いえにかえろうとしたとき、むらかみさんにごはんにいこうとさそわれた。",
          romaji: "shigoto ga owari, ie ni kaerou to shita toki, Murakami-san ni gohan ni ikou to sasowareta",
          meaning: "Khi tôi xong việc và định về nhà thì lại được anh Murakami rủ đi ăn cơm."
        },
        {
          direction: "vi-romaji",
          kanji: "病気のせいで、大きく呼吸をしようとしても、うまくできない。",
          hiragana: "びょうきのせいで、おおきくこきゅうをしようとしても、うまくできない。",
          romaji: "byouki no sei de, ookiku kokyuu o shiyou to shite mo, umaku dekinai",
          meaning: "Chỉ tại bị bệnh mà dù tôi có cố hít thở mạnh, cũng không làm được."
        },
        {
          direction: "vi-romaji",
          kanji: "気が付くと夏休みが終わろうとしている。",
          hiragana: "きがつくとなつやすみがおわろうとしている。",
          romaji: "ki ga tsuku to natsuyasumi ga owarou to shite iru",
          meaning: "Khi tôi nhận ra thì kỳ nghỉ hè đã sắp sửa kết thúc."
        }
      ]
    },

    {
      structure: "V意向形 + としない",
      meaning: "Quyết không làm V / Không chịu làm V",
      note: "「Vよう」là động từ ở thể ý chí. Cấu trúc「V意向形＋としない」dùng để diễn tả việc một người khác kiên quyết từ chối làm một hành động hoặc hoàn toàn không có ý định thực hiện hành động đó. Cấu trúc này không dùng để nói về chính bản thân người nói. Ngoài ra còn có các cách nói nhấn mạnh hơn là「Vようともしない」và「Vようとさえしない」, mang nghĩa 'thậm chí còn không chịu/không hề có ý định làm'. Khi thuật lại hành vi trong quá khứ có thể dùng dạng「V意向形＋としなかった」.",

      examples: [
        {
          direction: "ja-vi",
          kanji: "山本さんはとても頑固で、自分のやり方を変えようとしない。",
          hiragana: "やまもとさんはとてもがんこで、じぶんのやりかたをかえようとしない。",
          romaji: "Yamamoto-san wa totemo ganko de, jibun no yarikata o kaeyou to shinai",
          meaning: "Anh Yamamoto rất bướng bỉnh và không chịu thay đổi cách làm của mình."
        },
        {
          direction: "ja-vi",
          kanji: "あの人は、いくら言っても、自分のミスを認めようとしない。",
          hiragana: "あのひとは、いくらいっても、じぶんのミスをみとめようとしない。",
          romaji: "ano hito wa, ikura itte mo, jibun no misu o mitomeyou to shinai",
          meaning: "Người đó dù có nói bao nhiêu lần cũng không chịu thừa nhận lỗi của mình."
        },
        {
          direction: "ja-vi",
          kanji: "父は家事を手伝うことが嫌いで、食べた後の食器を片付けようともしない。",
          hiragana: "ちちはかじをてつだうことがきらいで、たべたあとのしょっきをかたづけようともしない。",
          romaji: "chichi wa kaji o tetsudau koto ga kirai de, tabeta ato no shokki o katazukeyou to mo shinai",
          meaning: "Bố tôi ghét giúp việc nhà, đến cả bát đĩa sau khi ăn xong cũng không chịu dọn."
        },

        {
          direction: "vi-romaji",
          kanji: "父に病院に行くことをすすめているが、父は行こうとしない。",
          hiragana: "ちちにびょういんにいくことをすすめているが、ちちはいこうとしない。",
          romaji: "chichi ni byouin ni iku koto o susumete iru ga, chichi wa ikou to shinai",
          meaning: "Tôi đã khuyên bố đi bệnh viện, nhưng ông ấy nhất quyết không chịu đi."
        },
        {
          direction: "vi-romaji",
          kanji: "彼は病気になっても、たばこを吸うのをやめようとしなかった。",
          hiragana: "かれはびょうきになっても、たばこをすうのをやめようとしなかった。",
          romaji: "kare wa byouki ni natte mo, tabako o suu no o yameyou to shinakatta",
          meaning: "Dù đã bị bệnh, anh ấy vẫn không chịu bỏ thuốc lá."
        },
        {
          direction: "vi-romaji",
          kanji: "チャンスが目の前にあるのに、彼は一歩踏み出そうとしない。",
          hiragana: "チャンスがめのまえにあるのに、かれはいっぽふみだそうとしない。",
          romaji: "chansu ga me no mae ni aru noni, kare wa ippo fumidasou to shinai",
          meaning: "Dù cơ hội đang ở ngay trước mắt, anh ấy vẫn không chịu bước tới."
        }
      ]
    }
  ]
});