/* Ngữ pháp Chương 5 - Bài 3. Câu ja-vi: ví dụ giáo trình; câu vi-romaji: bài dịch từ đáp án tham khảo. */
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  "name": "chương 5 bài 3 ngữ pháp",
  "source": {
    "document": "20260130105932_CHƯƠNG 5 - GHV - N3 (ko doc nghe)(1).pdf",
    "section": "Chương 5 - Bài 3"
  },
  "grammar": [
    {
      "pattern": "～というと / ～といえば / ～といったら",
      "meaning": "Nếu nói đến, nhắc đến ... thì nghĩ ngay đến ...",
      "meaningAlternatives": [
        "Nói tới ...",
        "Nhắc đến ...",
        "Nếu nói về ..."
      ],
      "connections": [
        {
          "label": "Danh từ: というと",
          "answer": "N + というと",
          "alternatives": [],
          "romaji": [
            "N to iu to"
          ]
        },
        {
          "label": "Danh từ: といえば",
          "answer": "N + といえば",
          "alternatives": [],
          "romaji": [
            "N to ieba"
          ]
        },
        {
          "label": "Danh từ: といったら",
          "answer": "N + といったら",
          "alternatives": [],
          "romaji": [
            "N to ittara"
          ]
        }
      ],
      "usage": "Nêu liên tưởng tiêu biểu, điển hình khi nhắc tới một danh từ/chủ đề; trong nghĩa này ba dạng có thể thay cho nhau.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "夏といえば、すぐにかき氷が頭に浮かんでくる。",
          "hiragana": "なつといえば、すぐにかきごおりがあたまにうかんでくる。",
          "romaji": "natsu to ieba, suguni kakigoori ga atama ni ukande kuru.",
          "meaning": "Nhắc đến mùa hè là tôi nghĩ ngay đến đá bào."
        },
        {
          "direction": "ja-vi",
          "kanji": "便利なものというと、やはりスマートフォンだろう。",
          "hiragana": "べんりなものというと、やはりすまーとふぉんだろう。",
          "romaji": "benri na mono to iu to, yahari sumaatofon darou.",
          "meaning": "Nói đến vật tiện lợi, chắc hẳn phải là điện thoại thông minh."
        },
        {
          "direction": "ja-vi",
          "kanji": "日本語といったら、やはり漢字が一番難しい。",
          "hiragana": "にほんごといったら、やはりかんじがいちばんむずかしい。",
          "romaji": "nihongo to ittara, yahari kanji ga ichiban muzukashii.",
          "meaning": "Nói đến tiếng Nhật, khó nhất quả nhiên là chữ Hán."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本の花といえば、桜の花でしょう。",
          "hiragana": "にほんのはなといえば、さくらのはなでしょう。",
          "romaji": "nihon no hana to ieba, sakura no hana deshou.",
          "meaning": "Nếu nói đến hoa của Nhật Bản thì hẳn là hoa anh đào."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本のアニメといったら、ドラえもんです。",
          "hiragana": "にほんのあにめといったら、どらえもんです。",
          "romaji": "nihon no anime to ittara, Doraemon desu.",
          "meaning": "Nếu nói đến phim hoạt hình Nhật Bản thì phải nói tới Doraemon."
        },
        {
          "direction": "vi-romaji",
          "kanji": "ベトナム料理といえば、フォーが有名です。",
          "hiragana": "べとなむりょうりといえば、ふぉーがゆうめいです。",
          "romaji": "betonamu ryouri to ieba, foo ga yuumei desu.",
          "meaning": "Nếu nói tới đồ ăn Việt Nam thì phở rất nổi tiếng."
        }
      ]
    },
    {
      "pattern": "～というより（も）",
      "meaning": "Đúng hơn là ...; nói ... thì ... đúng hơn",
      "meaningAlternatives": [
        "Không hẳn là ... mà là ...",
        "... thì đúng hơn",
        "Thay vì nói ... nên nói ..."
      ],
      "connections": [
        {
          "label": "Động từ / tính từ い",
          "answer": "V / Aい (thể thông thường) + というより（も）",
          "alternatives": [],
          "romaji": [
            "V to iu yori mo",
            "A i to iu yori mo"
          ]
        },
        {
          "label": "Danh từ / tính từ な",
          "answer": "N / Aな (bỏ な) + というより（も）",
          "alternatives": [
            "N + だ + というより（も）",
            "Aな (bỏ な) + だ + というより（も）"
          ],
          "romaji": [
            "N to iu yori mo",
            "A na to iu yori mo"
          ]
        }
      ],
      "usage": "Khi cách nói ở vế trước chưa thật chính xác, dùng vế sau để diễn đạt phù hợp hơn. Thường đi kèm むしろ. Ở danh từ/tính từ な, phần だ phụ thuộc cách nói, không bắt buộc trong mọi ngữ cảnh.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "あれは、走っているというより、歩いているといったほうがいい速さだ。",
          "hiragana": "あれは、はしっているというより、あるいているといったほうがいいはやさだ。",
          "romaji": "are wa, hashitte iru to iu yori, aruite iru to itta hou ga ii hayasa da.",
          "meaning": "Tốc độ đó gọi là đang chạy thì không đúng bằng gọi là đang đi bộ."
        },
        {
          "direction": "ja-vi",
          "kanji": "刺身が好きじゃないというより食べられないんです。",
          "hiragana": "さしみがすきじゃないというよりたべられないんです。",
          "romaji": "sashimi ga suki ja nai to iu yori taberarenai ndesu.",
          "meaning": "Không hẳn là tôi không thích sashimi, mà đúng hơn là tôi không ăn được."
        },
        {
          "direction": "ja-vi",
          "kanji": "日本に行く目的は日本の生活を経験することというよりも、お金を稼ぐことです。",
          "hiragana": "にほんにいくもくてきはにほんのせいかつをけいけんすることというよりも、おかねをかせぐことです。",
          "romaji": "nihon ni iku mokuteki wa nihon no seikatsu o keiken suru koto to iu yori mo, okane o kasegu koto desu.",
          "meaning": "Mục đích đi Nhật không hẳn là trải nghiệm cuộc sống Nhật, mà đúng hơn là kiếm tiền."
        },
        {
          "direction": "vi-romaji",
          "kanji": "会社に行きたくないというより、上司に会いたくない。",
          "hiragana": "かいしゃにいきたくないというより、じょうしにあいたくない。",
          "romaji": "kaisha ni ikitakunai to iu yori, joushi ni aitakunai.",
          "meaning": "Không hẳn là không muốn đi làm mà đúng hơn là không muốn gặp cấp trên."
        },
        {
          "direction": "vi-romaji",
          "kanji": "結婚したいというより、子供が欲しい。",
          "hiragana": "けっこんしたいというより、こどもがほしい。",
          "romaji": "kekkon shitai to iu yori, kodomo ga hoshii.",
          "meaning": "Không hẳn là muốn kết hôn mà đúng hơn là muốn có con."
        },
        {
          "direction": "vi-romaji",
          "kanji": "私はAさんが好きというより、尊敬しています。",
          "hiragana": "わたしはえーさんがすきというより、そんけいしています。",
          "romaji": "watashi wa ee-san ga suki to iu yori, sonkei shite imasu.",
          "meaning": "Không hẳn là tôi thích anh A mà đúng hơn là kính trọng anh ấy."
        }
      ]
    },
    {
      "pattern": "～といっても",
      "meaning": "Dù nói là ... nhưng thực ra thì ...",
      "meaningAlternatives": [
        "Tuy nói là ...",
        "Dù bảo rằng ...",
        "Mặc dù nói ... nhưng ..."
      ],
      "connections": [
        {
          "label": "Động từ / tính từ い",
          "answer": "V / Aい (thể thông thường) + といっても",
          "alternatives": [],
          "romaji": [
            "V to itte mo",
            "A i to itte mo"
          ]
        },
        {
          "label": "Danh từ / tính từ な",
          "answer": "N / Aな + （だ） + といっても",
          "alternatives": [],
          "romaji": [
            "N da to itte mo",
            "A na da to itte mo"
          ]
        }
      ],
      "usage": "Đưa ra lời giải thích, điều chỉnh kỳ vọng: tình hình thực tế không hoàn toàn như người nghe hình dung từ vế trước.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "ベトナム語が話せるといっても、少しだけです。",
          "hiragana": "べとなむごがはなせるといっても、すこしだけです。",
          "romaji": "betonamugo ga hanaseru to ittemo, sukoshi dake desu.",
          "meaning": "Dù nói là biết nói tiếng Việt, nhưng tôi chỉ nói được một chút thôi."
        },
        {
          "direction": "ja-vi",
          "kanji": "iPhoneが高いといっても、買えない値段ではない。",
          "hiragana": "あいふぉんがたかいといっても、かえないねだんではない。",
          "romaji": "aifon ga takai to ittemo, kaenai nedan de wa nai.",
          "meaning": "Dù iPhone đắt, nhưng không phải là mức giá không thể mua nổi."
        },
        {
          "direction": "ja-vi",
          "kanji": "先生といっても、生徒の質問に全部答えられるわけではない。",
          "hiragana": "せんせいといっても、せいとのしつもんにぜんぶこたえられるわけではない。",
          "romaji": "sensei to ittemo, seito no shitsumon ni zenbu kotaerareru wake de wa nai.",
          "meaning": "Dù là giáo viên nhưng không có nghĩa là trả lời được tất cả câu hỏi của học sinh."
        },
        {
          "direction": "vi-romaji",
          "kanji": "N1に合格したといっても、日常会話は自信がありません。",
          "hiragana": "えぬいちにごうかくしたといっても、にちじょうかいわはじしんがありません。",
          "romaji": "enu ichi ni goukaku shita to itte mo, nichijou kaiwa wa jishin ga arimasen.",
          "meaning": "Dù nói là đã đỗ N1 nhưng tôi không tự tin trong hội thoại hằng ngày đâu."
        },
        {
          "direction": "vi-romaji",
          "kanji": "社長といっても、小さな会社なので、大したことはありません。",
          "hiragana": "しゃちょうといっても、ちいさなかいしゃなので、たいしたことはありません。",
          "romaji": "shachou to itte mo, chiisana kaisha na node, taishita koto wa arimasen.",
          "meaning": "Mặc dù là giám đốc nhưng công ty nhỏ nên cũng chẳng có gì to tát."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本に３年間いたといっても、日本語が少ししか喋れません。いつも英語を使っていたから。",
          "hiragana": "にほんにさんねんかんいたといっても、にほんごがすこししかしゃべれません。いつもえいごをつかっていたから。",
          "romaji": "nihon ni sannenkan ita to itte mo, nihongo ga sukoshi shika shaberemasen. itsumo eigo o tsukatte ita kara.",
          "meaning": "Dù nói đã ở Nhật ba năm nhưng tôi chỉ nói được chút tiếng Nhật vì luôn dùng tiếng Anh."
        }
      ]
    },
    {
      "pattern": "～と言われている",
      "meaning": "Người ta thường nói rằng ...; được cho là ...",
      "meaningAlternatives": [
        "Được nói rằng ...",
        "Nhiều người cho rằng ...",
        "Người ta cho là ..."
      ],
      "connections": [
        {
          "label": "Động từ / tính từ い",
          "answer": "V / Aい (thể thông thường) + と言われている",
          "alternatives": [],
          "romaji": [
            "V to iwarete iru",
            "A i to iwarete iru"
          ]
        },
        {
          "label": "Danh từ / tính từ な",
          "answer": "N / Aな + だ + と言われている",
          "alternatives": [],
          "romaji": [
            "N da to iwarete iru",
            "A na da to iwarete iru"
          ]
        }
      ],
      "usage": "Trình bày quan điểm, nhận định, giả thuyết được nhiều người nhắc đến; mang sắc thái thông tin khách quan theo nguồn chung, không khẳng định nhất thiết đúng.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "日本語を勉強するベトナム人は、これからも増えると言われている。",
          "hiragana": "にほんごをべんきょうするべとなむじんは、これからもふえるといわれている。",
          "romaji": "nihongo o benkyou suru betonamujin wa, korekara mo fueru to iwarete iru.",
          "meaning": "Người ta nói số người Việt học tiếng Nhật sẽ còn tăng trong thời gian tới."
        },
        {
          "direction": "ja-vi",
          "kanji": "現代はみんな運動不足だと言われている。",
          "hiragana": "げんだいはみんなうんどうぶそくだといわれている。",
          "romaji": "gendai wa minna undoubusoku da to iwarete iru.",
          "meaning": "Người ta nói rằng con người ngày nay đều thiếu vận động."
        },
        {
          "direction": "ja-vi",
          "kanji": "この作業は、人間の手で細かい調整をする必要があり、それは機械ではできないと言われている。",
          "hiragana": "このさぎょうは、にんげんのてでこまかいちょうせいをするひつようがあり、それはきかいではできないといわれている。",
          "romaji": "kono sagyou wa, ningen no te de komakai chousei o suru hitsuyou ga ari, sore wa kikai de wa dekinai to iwarete iru.",
          "meaning": "Người ta nói công việc này cần được điều chỉnh tỉ mỉ bằng tay người, máy móc không làm được."
        },
        {
          "direction": "vi-romaji",
          "kanji": "一般的に、日本は安全だと言われています。",
          "hiragana": "いっぱんてきに、にほんはあんぜんだといわれています。",
          "romaji": "ippanteki ni, nihon wa anzen da to iwarete imasu.",
          "meaning": "Nói chung, người ta nói rằng Nhật Bản rất an toàn."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本人にとって、ベトナム語の発音は難しいと言われている。",
          "hiragana": "にほんじんにとって、べとなむごのはつおんはむずかしいといわれている。",
          "romaji": "nihonjin ni totte, betonamugo no hatsuon wa muzukashii to iwarete iru.",
          "meaning": "Người ta nói rằng phát âm tiếng Việt rất khó đối với người Nhật."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本人はよく謙遜すると言われている。",
          "hiragana": "にほんじんはよくけんそんするといわれている。",
          "romaji": "nihonjin wa yoku kenson suru to iwarete iru.",
          "meaning": "Người Nhật thường được nói là khiêm tốn."
        }
      ]
    },
    {
      "pattern": "～ということだ",
      "meaning": "Nghe nói là ... (truyền đạt thông tin đã nghe)",
      "meaningAlternatives": [
        "Theo thông tin là ...",
        "Có tin rằng ...",
        "Được biết rằng ..."
      ],
      "connections": [
        {
          "label": "Động từ / tính từ い",
          "answer": "V / Aい (thể thông thường) + ということだ",
          "alternatives": [],
          "romaji": [
            "V to iu koto da",
            "A i to iu koto da"
          ]
        },
        {
          "label": "Danh từ / tính từ な",
          "answer": "N / Aな + だ + ということだ",
          "alternatives": [],
          "romaji": [
            "N da to iu koto da",
            "A na da to iu koto da"
          ]
        }
      ],
      "usage": "Thuật lại thông tin nghe được từ người khác/tin tức, thường có nguồn như ～によると. Sách so sánh mẫu này với cách truyền đạt ～そうだ.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "先生によると、次の試験は前回よりも難しいということだ。",
          "hiragana": "せんせいによると、つぎのしけんはぜんかいよりもむずかしいということだ。",
          "romaji": "sensei ni yoru to, tsugi no shiken wa zenkai yori mo muzukashii to iu koto da.",
          "meaning": "Theo giáo viên, đề thi tới sẽ khó hơn lần trước."
        },
        {
          "direction": "ja-vi",
          "kanji": "今も寒いが、午後はもっと寒くなるということだ。",
          "hiragana": "いまもさむいが、ごごはもっとさむくなるということだ。",
          "romaji": "ima mo samui ga, gogo wa motto samuku naru to iu koto da.",
          "meaning": "Nghe nói hiện tại trời đã lạnh nhưng buổi chiều sẽ còn lạnh hơn."
        },
        {
          "direction": "ja-vi",
          "kanji": "来月から、この店は全席禁煙になるということだ。",
          "hiragana": "らいげつから、このみせはぜんせききんえんになるということだ。",
          "romaji": "raigetsu kara, kono mise wa zensekikin'en ni naru to iu koto da.",
          "meaning": "Nghe nói từ tháng sau, cửa hàng này sẽ cấm hút thuốc ở tất cả chỗ ngồi."
        },
        {
          "direction": "vi-romaji",
          "kanji": "天気予報によると、今日の夜は雨が降るということだ。",
          "hiragana": "てんきよほうによると、きょうのよるはあめがふるということだ。",
          "romaji": "tenki yohou ni yoru to, kyou no yoru wa ame ga furu to iu koto da.",
          "meaning": "Theo dự báo thời tiết thì tối nay trời mưa."
        },
        {
          "direction": "vi-romaji",
          "kanji": "ニュースによると、犯人が捕まったということだ。",
          "hiragana": "にゅーすによると、はんにんがつかまったということだ。",
          "romaji": "nyuusu ni yoru to, hannin ga tsukamatta to iu koto da.",
          "meaning": "Theo tin tức thì tên tội phạm đã bị bắt."
        },
        {
          "direction": "vi-romaji",
          "kanji": "Thanh先生は優しいということだ。",
          "hiragana": "たんせんせいはやさしいということだ。",
          "romaji": "Tan-sensei wa yasashii to iu koto da.",
          "meaning": "Nghe nói cô Thanh rất hiền."
        }
      ]
    },
    {
      "pattern": "～とは / ～というのは",
      "meaning": "... nghĩa là ...; ... được định nghĩa là ...",
      "meaningAlternatives": [
        "Gọi là ...",
        "... chính là ...",
        "... có nghĩa là ..."
      ],
      "connections": [
        {
          "label": "Danh từ: とは",
          "answer": "N + とは、...",
          "alternatives": [],
          "romaji": [
            "N to wa"
          ]
        },
        {
          "label": "Danh từ: というのは",
          "answer": "N + というのは、...",
          "alternatives": [],
          "romaji": [
            "N to iu no wa"
          ]
        },
        {
          "label": "Đuôi câu định nghĩa",
          "answer": "... + ことだ / のことだ / という意味だ / の略だ",
          "alternatives": [],
          "romaji": [
            "koto da",
            "no koto da",
            "to iu imi da",
            "no ryaku da"
          ]
        }
      ],
      "usage": "Dùng để giải thích hoặc định nghĩa một danh từ, khái niệm. Cuối câu thường có ～ことだ、～のことだ、～という意味だ、～の略だ.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "私にとって幸せとは、人を幸せにすることだ。",
          "hiragana": "わたしにとってしあわせとは、ひとをしあわせにすることだ。",
          "romaji": "watashi ni totte shiawase to wa, hito o shiawase ni suru koto da.",
          "meaning": "Đối với tôi, hạnh phúc là khiến người khác hạnh phúc."
        },
        {
          "direction": "ja-vi",
          "kanji": "言葉とは、相手に自分の気持ちを伝えるもののことだ。",
          "hiragana": "ことばとは、あいてにじぶんのきもちをつたえるもののことだ。",
          "romaji": "kotoba to wa, aite ni jibun no kimochi o tsutaeru mono no koto da.",
          "meaning": "Ngôn từ là thứ dùng để truyền đạt cảm xúc của mình cho đối phương."
        },
        {
          "direction": "ja-vi",
          "kanji": "氷とは、水が固体に変わった状態のことである。",
          "hiragana": "こおりとは、みずがこたいにかわったじょうたいのことである。",
          "romaji": "koori to wa, mizu ga kotai ni kawatta joutai no koto de aru.",
          "meaning": "Băng là trạng thái thể rắn mà nước biến thành."
        },
        {
          "direction": "vi-romaji",
          "kanji": "ボールペンとは、ボールポイントペンの略だ。",
          "hiragana": "ぼーるぺんとは、ぼーるぽいんとぺんのりゃくだ。",
          "romaji": "boorupen to wa, boorupointopen no ryaku da.",
          "meaning": "Bút bi là cách viết tắt của “ballpoint pen”."
        },
        {
          "direction": "vi-romaji",
          "kanji": "私にとって思いやりとは、生きていく上で欠かせないことだ。",
          "hiragana": "わたしにとっておもいやりとは、いきていくうえでかかせないことだ。",
          "romaji": "watashi ni totte omoiyari to wa, ikite iku ue de kakasenai koto da.",
          "meaning": "Đối với tôi, sự quan tâm chu đáo là thứ không thể thiếu trong cuộc sống."
        },
        {
          "direction": "vi-romaji",
          "kanji": "東大とは、あの有名な東京大学のことだ。",
          "hiragana": "とうだいとは、あのゆうめいなとうきょうだいがくのことだ。",
          "romaji": "toudai to wa, ano yuumei na toukyou daigaku no koto da.",
          "meaning": "Todai chính là trường Đại học Tokyo rất nổi tiếng."
        }
      ]
    }
  ]
});
