/* Ngữ pháp Chương 6 - Bài 1, sáu cấu trúc; examples: ja-vi bài gốc, vi-romaji đáp án trang 157 */
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  "name": "chương 6 bài 1",
  "source": {
    "document": "tai-lieu-chuong/20260224074655_CHƯƠNG 6 - GHV (N3 ko doc nghe).pdf",
    "section": "Chương 6 - Bài 1"
  },
  "grammar": [
    {
      "pattern": "～でしかない",
      "meaning": "Chỉ là..., không hơn gì...",
      "meaningAlternatives": [
        "chẳng qua chỉ là",
        "đơn thuần chỉ là"
      ],
      "connections": [
        {
          "label": "Danh từ",
          "answer": "N + でしかない",
          "alternatives": [
            "N + でしかありません"
          ],
          "romaji": [
            "N + de shika nai"
          ]
        },
        {
          "label": "Tính từ đuôi な",
          "answer": "Aな (bỏ な) + でしかない",
          "alternatives": [
            "Aな + でしかない (bỏ な)"
          ],
          "romaji": [
            "na adjective + de shika nai"
          ]
        }
      ],
      "usage": "Dùng để đánh giá một đối tượng không hơn mức vừa nêu, có thể mang sắc thái xem nhẹ, phủ định; cũng có thể chỉ một bản chất đơn thuần.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "あいつは全然勉強ができないから、今回試験に合格したのは偶然でしかないと思う。",
          "hiragana": "あいつはぜんぜんべんきょうができないから、こんかいしけんにごうかくしたのはぐうぜんでしかないとおもう。",
          "romaji": "aitsu wa zenzen benkyou ga dekinai kara, konkai shiken ni goukaku shitano ha guuzen de shikanai to omou.",
          "meaning": "Vì tên đó chẳng học được mấy nên tôi cho rằng việc thi đỗ lần này chỉ là do ngẫu nhiên."
        },
        {
          "direction": "ja-vi",
          "kanji": "自分は会社の中で特別な立場ではなく、たくさんいる社員の一人でしかない。",
          "hiragana": "じぶんはかいしゃのなかでとくべつなたちばではなく、たくさんいるしゃいんのひとりでしかない。",
          "romaji": "jibun wa kaishano naka de tokubetsu na tachiba de wa naku, takusan iru shain no hitori de shikanai.",
          "meaning": "Tôi không có vị trí đặc biệt trong công ty, chỉ là một trong số rất nhiều nhân viên."
        },
        {
          "direction": "ja-vi",
          "kanji": "あの先生はいつも難しいテストを出すから、次のテストも不安でしかない。",
          "hiragana": "あのせんせいはいつもむずかしいてすとをだすから、つぎのてすともふあんでしかない。",
          "romaji": "ano sensei wa itsumo muzukashii tesuto o dasu kara, tsugi no tesutomo fuan de shikanai.",
          "meaning": "Giáo viên đó luôn ra đề khó nên tôi chỉ cảm thấy lo cho bài kiểm tra tới."
        },
        {
          "direction": "vi-romaji",
          "kanji": "疲れていたから欠席したというのは、言い訳でしかない。",
          "hiragana": "つかれていたからけっせきしたというのは、いいわけでしかない。",
          "romaji": "tsu kare teita kara kesseki shitato iu no ha, iiwake de shikanai.",
          "meaning": "Vắng mặt vì mệt mỏi chỉ là cái cớ mà thôi."
        },
        {
          "direction": "vi-romaji",
          "kanji": "彼女とは先週別れたから、今はもう他人でしかない。",
          "hiragana": "かのじょとはせんしゅうわかれたから、いまはもうたにんでしかない。",
          "romaji": "kanojo to ha senshuu wakare ta kara, ima wa mou tanin de shikanai.",
          "meaning": "Tôi đã chia tay cô ấy tuần trước nên giờ cô ấy chỉ còn là người dưng."
        },
        {
          "direction": "vi-romaji",
          "kanji": "私にとって、彼は友達でしかない。",
          "hiragana": "わたしにとって、かれはともだちでしかない。",
          "romaji": "watashi ni totte, kare watomodachi de shikanai.",
          "meaning": "Đối với tôi, anh ấy chỉ là bạn bè thôi."
        }
      ]
    },
    {
      "pattern": "～はもちろん～も",
      "meaning": "Không chỉ... mà... cũng; ... là đương nhiên, ... cũng",
      "meaningAlternatives": [
        "không những mà còn",
        "dĩ nhiên là..., ... cũng"
      ],
      "connections": [
        {
          "label": "Danh từ",
          "answer": "N1 + はもちろん + N2 + も",
          "alternatives": [
            "N1 はもちろん、N2 も"
          ],
          "romaji": [
            "N1 wa mochiron, N2 mo"
          ]
        }
      ],
      "usage": "Nhấn mạnh rằng đối tượng thứ nhất là hiển nhiên, và đối tượng thứ hai cũng như vậy. Vế sau thường sử dụng も; trong một số câu có thể dùng trợ từ phù hợp khác.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "彼は日本語はもちろん、フランス語も話せる。",
          "hiragana": "かれはにほんごはもちろん、ふらんすごもはなせる。",
          "romaji": "kare wa nihongo wa mochiron, furansugo mo hana seru.",
          "meaning": "Anh ấy nói được cả tiếng Nhật lẫn tiếng Pháp."
        },
        {
          "direction": "ja-vi",
          "kanji": "日本のアニメは、日本人にはもちろん世界中の人から人気だ。",
          "hiragana": "にほんのあにめは、にほんじんにはもちろんせかいじゅうのひとからにんきだ。",
          "romaji": "nihon no anime wa, nihonjin ni wa mochiron sekaijuu no hito kara ni nkida.",
          "meaning": "Anime Nhật Bản không chỉ phổ biến với người Nhật mà còn được người trên khắp thế giới yêu thích."
        },
        {
          "direction": "ja-vi",
          "kanji": "彼女は平日はもちろん、休日も働いてる。",
          "hiragana": "かのじょはへいじつはもちろん、きゅうじつもはたらいてる。",
          "romaji": "kanojo wa heijitsu wa mochiron, kyuujitsu mo hataraiteru.",
          "meaning": "Cô ấy làm việc cả ngày thường lẫn ngày nghỉ."
        },
        {
          "direction": "vi-romaji",
          "kanji": "フォーはベトナム人はもちろん、外国人にも愛されている。",
          "hiragana": "ふぉーはべとなむひとはもちろん、がいこくじんにもあいされている。",
          "romaji": "foo wa betonamu hito wa mochiron, gaikokujin ni mo ai sareteiru.",
          "meaning": "Phở không chỉ được người Việt Nam mà còn được cả người nước ngoài yêu thích."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本語の先生だから、日本語はもちろん、教え方も上手じゃなくてはいけません。",
          "hiragana": "にほんごのせんせいだから、にほんごはもちろん、おしえかたもじょうずじゃなくてはいけません。",
          "romaji": "nihongo no sensei da kara, nihongo wa mochiron, oshiekata mo jouzu janakute wa ikemasen.",
          "meaning": "Vì là giáo viên tiếng Nhật nên không chỉ tiếng Nhật, mà cách dạy cũng phải giỏi."
        },
        {
          "direction": "vi-romaji",
          "kanji": "私の旦那は仕事はもちろん、子供の面倒も積極的に手伝ってくれる。",
          "hiragana": "わたしのだんなはしごとはもちろん、こどものめんどうもせっきょくてきにてつだってくれる。",
          "romaji": "watashi no danna wa shigoto wa mochiron, kodomo no mendou mo sekkyokuteki ni tetsudattekureru.",
          "meaning": "Chồng tôi không chỉ đi làm mà còn tích cực giúp tôi chăm sóc con cái."
        }
      ]
    },
    {
      "pattern": "～くらい／ほど～はない",
      "meaning": "Chẳng có gì... bằng...",
      "meaningAlternatives": [
        "không có ... nào bằng",
        "... nhất"
      ],
      "connections": [
        {
          "label": "Động từ",
          "answer": "Vる + くらい／ほど + ... + はない",
          "alternatives": [
            "V từ điển + くらい + ... + はない"
          ],
          "romaji": [
            "V ru + kurai/hodo + ... + wa nai"
          ]
        },
        {
          "label": "Danh từ",
          "answer": "N + くらい／ほど + ... + はない",
          "alternatives": [
            "N + ぐらい／ほど + ... + はない"
          ],
          "romaji": [
            "N + kurai/hodo + ... + wa nai"
          ]
        }
      ],
      "usage": "Cấu trúc so sánh ở mức cao nhất theo đánh giá chủ quan: không có đối tượng nào hơn hoặc bằng đối tượng đã nêu.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "サッカーをするくらい楽しいことはないと思う。",
          "hiragana": "さっかーをするくらいたのしいことはないとおもう。",
          "romaji": "sakkaa o suru kurai tanoshii koto hanai to omou.",
          "meaning": "Tôi nghĩ chẳng có gì vui bằng chơi bóng đá."
        },
        {
          "direction": "ja-vi",
          "kanji": "彼はいつも「勉強するほどつまらないものはない」と言っている。",
          "hiragana": "かれはいつも「べんきょうするほどつまらないものはない」といっている。",
          "romaji": "kare wa itsumo\" benkyousuru hodo tsumaranai mo no hanai\" toitteiru.",
          "meaning": "Anh ấy luôn nói rằng chẳng có gì chán bằng việc học."
        },
        {
          "direction": "ja-vi",
          "kanji": "彼と一緒にいる時間くらい幸せな時間はない。",
          "hiragana": "かれといっしょにいるじかんくらいしあわせなじかんはない。",
          "romaji": "kare to issho ni iru jikan kurai shiawase na jikan hanai.",
          "meaning": "Chẳng có lúc nào hạnh phúc bằng thời gian ở bên anh ấy."
        },
        {
          "direction": "vi-romaji",
          "kanji": "家族ほど大切なものはない。",
          "hiragana": "かぞくほどたいせつなものはない。",
          "romaji": "kazoku hodo taisetsu namo no hanai.",
          "meaning": "Trên đời này chẳng có gì quan trọng bằng gia đình."
        },
        {
          "direction": "vi-romaji",
          "kanji": "好きな人と一緒にいるくらい幸せなことはない。",
          "hiragana": "すきなひとといっしょにいるくらいしあわせなことはない。",
          "romaji": "suki na hito to issho ni iru kurai shiawase nako to hanai.",
          "meaning": "Chẳng có điều gì hạnh phúc bằng việc ở bên người mình yêu."
        },
        {
          "direction": "vi-romaji",
          "kanji": "全力で頑張らなかったことほど後悔することはない。",
          "hiragana": "ぜんりょくでがんばらなかったことほどこうかいすることはない。",
          "romaji": "zenryoku de ganbaranakattako to hodo koukai suruko to hanai.",
          "meaning": "Chẳng điều gì khiến mình hối hận bằng việc đã không cố gắng hết sức."
        }
      ]
    },
    {
      "pattern": "～ほど～ない",
      "meaning": "Không... bằng...",
      "meaningAlternatives": [
        "không đến mức bằng",
        "kém hơn"
      ],
      "connections": [
        {
          "label": "Danh từ + tính từ phủ định",
          "answer": "N + ほど + Aくない／Aではない",
          "alternatives": [
            "N + ほど + ... + ない"
          ],
          "romaji": [
            "N + hodo + adjective negative"
          ]
        },
        {
          "label": "Danh từ + phủ định rút gọn",
          "answer": "N + ほどではない",
          "alternatives": [
            "N + ほどではありません"
          ],
          "romaji": [
            "N + hodo dewa nai"
          ]
        }
      ],
      "usage": "So sánh hai đối tượng và cho biết đối tượng đang nói đến không đạt mức độ bằng đối tượng được đặt trước ほど.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "東京の冬も寒いが、北海道ほど寒くないです。",
          "hiragana": "とうきょうのふゆもさむいが、ほっかいどうほどさむくないです。",
          "romaji": "toukyou no fuyu mo samui ga, hokkaidou hodo samukunai de su.",
          "meaning": "Mùa đông ở Tokyo cũng lạnh nhưng không lạnh bằng Hokkaido."
        },
        {
          "direction": "ja-vi",
          "kanji": "このラーメンは美味しいが、あの店ほどではない。",
          "hiragana": "このらーめんはおいしいが、あのみせほどではない。",
          "romaji": "kono raamen wa oishii ga, ano mise hododehanai.",
          "meaning": "Món ramen này ngon nhưng không ngon bằng quán kia."
        },
        {
          "direction": "vi-romaji",
          "kanji": "あの子もきれいですが、私ほどではない。",
          "hiragana": "あのこもきれいですが、わたしほどではない。",
          "romaji": "anoko mo kirei de suga, watashi hododehanai.",
          "meaning": "Con bé ấy cũng xinh nhưng không bằng tôi."
        },
        {
          "direction": "vi-romaji",
          "kanji": "お父さんも厳しいですが、お母さんほど厳しくないです。",
          "hiragana": "おとうさんもきびしいですが、おかあさんほどきびしくないです。",
          "romaji": "otousan mo kibishii de suga, okaasan hodo kibishikunai de su.",
          "meaning": "Bố tôi cũng nghiêm khắc nhưng không bằng mẹ tôi."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本も好きですが、ベトナムほどではないです。",
          "hiragana": "にほんもすきですが、べとなむほどではないです。",
          "romaji": "nihon mo suki de suga, betonamu hododehanai de su.",
          "meaning": "Tôi cũng thích Nhật Bản nhưng không bằng Việt Nam."
        }
      ]
    },
    {
      "pattern": "～代わりに（１）",
      "meaning": "Thay vì một sự vật/hành động thì dùng hoặc làm thứ khác",
      "meaningAlternatives": [
        "thay cho một việc bằng việc khác",
        "thay vì... thì..."
      ],
      "connections": [
        {
          "label": "Danh từ chỉ sự vật",
          "answer": "N + の + 代わりに",
          "alternatives": [
            "Nの代わりに"
          ],
          "romaji": [
            "N no kawari ni"
          ]
        },
        {
          "label": "Động từ",
          "answer": "Vる + 代わりに",
          "alternatives": [
            "V thể từ điển + 代わりに"
          ],
          "romaji": [
            "V ru + kawari ni"
          ]
        }
      ],
      "usage": "Dùng một vật hoặc thực hiện một hành động khác thay cho lựa chọn ban đầu. Với danh từ trong nghĩa này, giáo trình giới hạn danh từ chỉ sự vật.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "ジュースを飲む代わりに、水を飲んだら1か月で4キロやせた。",
          "hiragana": "じゅーすをのむかわりに、みずをのんだらいっかげつでよんきろやせた。",
          "romaji": "juusu o nomu kawari ni, mizu o nondara ikkagetsu de yonkiro yaseta.",
          "meaning": "Thay vì uống nước trái cây, tôi uống nước lọc và giảm 4 kg trong một tháng."
        },
        {
          "direction": "ja-vi",
          "kanji": "土曜日の代わりに月曜日に休んでもいいですか。",
          "hiragana": "どようびのかわりにげつようびにやすんでもいいですか。",
          "romaji": "doyoubi no kawari ni getsuyoubi ni yasundemoii de suka.",
          "meaning": "Tôi có thể nghỉ thứ Hai thay cho thứ Bảy không?"
        },
        {
          "direction": "ja-vi",
          "kanji": "今朝からずっと雨が降っていて、今日は外で運動するかわりに、家で本を読みました。",
          "hiragana": "けさからずっとあめがふっていて、きょうはそとでうんどうするかわりに、いえでほんをよみました。",
          "romaji": "kesa kara zutto ame ga futteite, kyou wa sotode undou suru kawari ni, ie de hon o yomimashita.",
          "meaning": "Trời mưa từ sáng nên hôm nay tôi đọc sách ở nhà thay vì tập thể dục bên ngoài."
        },
        {
          "direction": "vi-romaji",
          "kanji": "現金の代わりに、クレジットカードで支払います。",
          "hiragana": "げんきんのかわりに、くれじっとかーどでしはらいます。",
          "romaji": "genkin no kawari ni, kurejittokaado de shihara ima su.",
          "meaning": "Tôi thanh toán bằng thẻ tín dụng thay cho tiền mặt."
        },
        {
          "direction": "vi-romaji",
          "kanji": "このフォーには、牛肉の代わりに鶏肉を入れました。",
          "hiragana": "このふぉーには、ぎゅうにくのかわりにとりにくをいれました。",
          "romaji": "kono foo ni wa, gyuuniku no kawari ni to ri ni kuoiremashita.",
          "meaning": "Thay vì thịt bò, tôi đã cho thịt gà vào món phở này."
        },
        {
          "direction": "vi-romaji",
          "kanji": "新しい家具を買う代わりに、古い家具を修理します。",
          "hiragana": "あたらしいかぐをかうかわりに、ふるいかぐをしゅうりします。",
          "romaji": "atarashii kagu o kau kawari ni, furu i kagu o shuuri shimasu.",
          "meaning": "Thay vì mua nội thất mới, tôi sửa lại nội thất cũ."
        }
      ]
    },
    {
      "pattern": "～代わりに（２）",
      "meaning": "Làm thay cho một người khác",
      "meaningAlternatives": [
        "thay mặt ai đó",
        "thực hiện thay ai đó"
      ],
      "connections": [
        {
          "label": "Danh từ chỉ người",
          "answer": "N (người) + の + 代わりに",
          "alternatives": [
            "Nの代わりに"
          ],
          "romaji": [
            "N no kawari ni"
          ]
        }
      ],
      "usage": "Diễn tả việc một người thay thế người khác để thực hiện một việc. Khác nghĩa (1), trường hợp này kết hợp với danh từ chỉ người.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "田中先生の代わりに、今日は私がこのクラスの授業をすることになった。",
          "hiragana": "たなかせんせいのかわりに、きょうはわたしがこのくらすのじゅぎょうをすることになった。",
          "romaji": "tanakasensei no kawari ni, kyou wa watashi ga kono kurasu no jugyou o suruko to ninatta.",
          "meaning": "Hôm nay tôi được giao dạy lớp này thay thầy Tanaka."
        },
        {
          "direction": "ja-vi",
          "kanji": "体調が悪い同僚の代わりに、私が仕事をしました。",
          "hiragana": "たいちょうがわるいどうりょうのかわりに、わたしがしごとをしました。",
          "romaji": "taichou ga warui douryou no kawari ni, watashi ga shigoto o shimashita.",
          "meaning": "Tôi đã làm việc thay người đồng nghiệp đang không khỏe."
        },
        {
          "direction": "ja-vi",
          "kanji": "病気の祖母の代わりに、私が毎日買い物に行く。",
          "hiragana": "びょうきのそぼのかわりに、わたしがまいにちかいものにいく。",
          "romaji": "byouki no sobo no kawari ni, watashi ga mainichi kaimono ni iku.",
          "meaning": "Tôi đi mua sắm hằng ngày thay cho bà đang ốm."
        },
        {
          "direction": "vi-romaji",
          "kanji": "部長の代わりに、私が会議に出ます。",
          "hiragana": "ぶちょうのかわりに、わたしがかいぎにでます。",
          "romaji": "buchou no kawari ni, watashi ga kaigi ni demasu.",
          "meaning": "Tôi sẽ thay trưởng phòng đi họp."
        },
        {
          "direction": "vi-romaji",
          "kanji": "母の代わりに、私が夕食を作りました。",
          "hiragana": "ははのかわりに、わたしがゆうしょくをつくりました。",
          "romaji": "hahano kawari ni, watashi ga yuushoku o tsukurimashita.",
          "meaning": "Tôi đã nấu cơm tối thay mẹ."
        },
        {
          "direction": "vi-romaji",
          "kanji": "友達の代わりに、私が荷物を受け取った。",
          "hiragana": "ともだちのかわりに、わたしがにもつをうけとった。",
          "romaji": "tomodachi no kawari ni, watashi ga nimotsu o uke to tta.",
          "meaning": "Tôi đã nhận hành lý thay cho bạn mình."
        }
      ]
    }
  ]
});
