/*
  CHƯƠNG 4 BÀI 1 — NGỮ PHÁP
  Trang 14–19.
  5 nhóm ngữ pháp, 29 mục luyện tập.

  Thêm tên file vào ngu-phap/danh-sach-ngu-phap.js.

  direction:
    "ja-vi": hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-romaji": hiện câu Việt, nhập câu bằng Romaji.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "chương 4 bài 1",
  grammar: [
    {
      structure: "Nに関して／Nに関しては／Nに関するN",
      meaning: "Về…; liên quan đến…",
      note: "Trang 14. 関して đọc かんして; 関する đọc かんする.\n\n1. Cách nối:\n• Nに関して + vị ngữ.\n• Nに関しては + nhận xét về chủ đề đó.\n• Nに関するN: bổ nghĩa cho danh từ phía sau.\n• Nに関してのN cũng được dùng như trong ví dụ sách.\n\n2. Cách dùng:\n• Nêu chủ đề, lĩnh vực hoặc vấn đề được nói đến, điều tra, giải thích hay đánh giá.\n• Gần nghĩa ～について nhưng thường trang trọng hơn, hay gặp trong văn bản, thông báo hoặc công việc.\n\n3. Phân biệt dạng nối:\n• 事件に関して調査する: điều tra về vụ việc.\n• 事件に関する情報: thông tin liên quan đến vụ việc.\n• Không dùng 事件に関して情報 nếu muốn trực tiếp bổ nghĩa cho 情報 mà không có の.\n\n4. に関しては:\n• は đưa vấn đề đó làm chủ đề hoặc giới hạn phạm vi nhận xét: riêng về… thì…\n• Không phải câu nào cũng bắt buộc có は.\n\n5. Các từ trong bài:\n• 調査しております là cách nói khiêm nhường, trang trọng của 調査しています.\n• 意見がございましたら là cách nói lịch sự của 意見があったら.\n• コメント欄: phần bình luận.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "12月に行われるJLPTに関しての情報を調べる。",
          hiragana: "じゅうにがつにおこなわれるじぇーえるぴーてぃーにかんしてのじょうほうをしらべる。",
          romaji: "juunigatsu ni okonawareru jee eru pii tii ni kanshite no jouhou o shiraberu",
          meaning: "Tìm hiểu thông tin về kỳ thi JLPT được tổ chức vào tháng Mười hai."
        },
        {
          direction: "ja-vi",
          kanji: "全社員に睡眠時間に関してのアンケートを取った。",
          hiragana: "ぜんしゃいんにすいみんじかんにかんしてのあんけーとをとった。",
          romaji: "zenshain ni suimin jikan ni kanshite no ankeeto o totta",
          meaning: "Tôi đã khảo sát toàn bộ nhân viên về thời gian ngủ."
        },
        {
          direction: "ja-vi",
          kanji: "彼のこの問題に関しての考えは、私の考えに似ている。",
          hiragana: "かれのこのもんだいにかんしてのかんがえは、わたしのかんがえににている。",
          romaji: "kare no kono mondai ni kanshite no kangae wa, watashi no kangae ni nite iru",
          meaning: "Suy nghĩ của anh ấy về vấn đề này giống với suy nghĩ của tôi."
        },
        {
          direction: "vi-romaji",
          kanji: "今回の事件に関しては現在調査しております。",
          hiragana: "こんかいのじけんにかんしてはげんざいちょうさしております。",
          romaji: "konkai no jiken ni kanshite wa genzai chousa shite orimasu",
          meaning: "Hiện chúng tôi đang điều tra về vụ việc lần này."
        },
        {
          direction: "vi-romaji",
          kanji: "授業に関する意見がございましたら、コメント欄に書き込んでください。",
          hiragana: "じゅぎょうにかんするいけんがございましたら、こめんとらんにかきこんでください。",
          romaji: "jugyou ni kansuru iken ga gozaimashitara, komento ran ni kakikonde kudasai",
          meaning: "Nếu có ý kiến về bài học, xin hãy ghi vào phần bình luận."
        }
      ]
    },
    {
      structure: "Nにわたって／Nにわたり／NにわたるN",
      meaning: "Trong suốt…; trải dài…; trên toàn phạm vi…",
      note: "Trang 15.\n\n1. Cách nối:\n• Nにわたって + vị ngữ.\n• Nにわたり + vị ngữ: cách nối thường dùng trong văn viết.\n• NにわたるN／NにわたったN: bổ nghĩa cho danh từ phía sau.\n• N thường chỉ thời gian, khoảng cách, không gian hoặc phạm vi.\n\n2. Cách dùng:\n• Nhấn mạnh sự việc trải rộng hoặc kéo dài trên toàn bộ phạm vi đó.\n• 20年間にわたって: kéo dài suốt 20 năm.\n• 10キロにわたって: trải dài 10 km.\n• 全世界にわたって: trên toàn thế giới.\n\n3. Lưu ý về tính liên tục:\n• Có thể là trạng thái được duy trì hoặc hoạt động diễn ra trong cả giai đoạn.\n• Không bắt buộc một hành động diễn ra không ngừng từng giây.\n\n4. Phân biệt:\n• まで chỉ điểm kết thúc; にわたって nhấn mạnh toàn bộ độ dài, phạm vi.\n• 1週間にわたるコンサート: buổi hoặc chuỗi biểu diễn kéo dài một tuần.\n• 1週間後のコンサート: buổi biểu diễn sau một tuần, khác nghĩa.\n\n5. にわたった có thể dùng khi nhìn lại phạm vi của một sự việc đã diễn ra, như trong câu 三日間にわたった試験.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "三日間にわたった試験が昨日終わった。",
          hiragana: "みっかかんにわたったしけんがきのうおわった。",
          romaji: "mikkakan ni watatta shiken ga kinou owatta",
          meaning: "Kỳ thi kéo dài ba ngày đã kết thúc hôm qua."
        },
        {
          direction: "ja-vi",
          kanji: "先週から一週間にわたり、晴れの日が続いている。",
          hiragana: "せんしゅうからいっしゅうかんにわたり、はれのひがつづいている。",
          romaji: "senshuu kara isshuukan ni watari, hare no hi ga tsuzuite iru",
          meaning: "Từ tuần trước đến nay, trời liên tục nắng suốt một tuần."
        },
        {
          direction: "ja-vi",
          kanji: "この道の渋滞は10キロにわたって続いている。",
          hiragana: "このみちのじゅうたいはじゅっきろにわたってつづいている。",
          romaji: "kono michi no juutai wa jukkiro ni watatte tsuzuite iru",
          meaning: "Tình trạng tắc đường trên con đường này kéo dài tới 10 km."
        },
        {
          direction: "vi-romaji",
          kanji: "このアイドルグループは20年間にわたって愛されている。",
          hiragana: "このあいどるぐるーぷはにじゅうねんかんにわたってあいされている。",
          romaji: "kono aidoru guruupu wa nijuu nenkan ni watatte aisarete iru",
          meaning: "Nhóm nhạc thần tượng này được yêu mến suốt 20 năm."
        },
        {
          direction: "vi-romaji",
          kanji: "新型コロナウイルスは全世界にわたって流行っている。",
          hiragana: "しんがたころなういるすはぜんせかいにわたってはやっている。",
          romaji: "shingata korona uirusu wa zensekai ni watatte hayatte iru",
          meaning: "Virus corona chủng mới đang lây lan trên toàn thế giới."
        },
        {
          direction: "vi-romaji",
          kanji: "1週間にわたったコンサートは無事に終わりました。",
          hiragana: "いっしゅうかんにわたったこんさーとはぶじにおわりました。",
          romaji: "isshuukan ni watatta konsaato wa buji ni owarimashita",
          meaning: "Chương trình biểu diễn kéo dài một tuần đã kết thúc suôn sẻ."
        }
      ]
    },
    {
      structure: "Nを通して／Nを通じて（trung gian, phương thức）",
      meaning: "Thông qua…; qua trung gian…",
      note: "Trang 16. 通して đọc とおして; 通じて đọc つうじて.\n\n1. Cách nối:\n• Nを通して + vị ngữ.\n• Nを通じて + vị ngữ.\n• Nを通してのN: bổ nghĩa cho danh từ.\n• N có thể là người trung gian, phương tiện, hoạt động hoặc trải nghiệm.\n\n2. Cách dùng:\n• Một người, phương tiện hoặc trải nghiệm làm cầu nối giúp sự việc khác xảy ra.\n• 彼女を通して知り合う: quen biết thông qua cô ấy.\n• 交流会を通じて理解が深まる: hiểu nhau hơn thông qua buổi giao lưu.\n\n3. 通して và 通じて:\n• Trong nhiều câu có thể thay thế nhau.\n• 通して thường làm rõ phương tiện hoặc trung gian được sử dụng.\n• 通じて thường mang sắc thái trang trọng hơn, nhưng không nên xem đây là ranh giới tuyệt đối.\n\n4. Dễ nhầm:\n• 学生生活を通して ở ví dụ nhấn mạnh trải nghiệm đời sinh viên giúp học được nhiều điều.\n• Mẫu giống hình thức ở mục 4 nhưng mục 4 nhấn mạnh toàn bộ khoảng thời gian.\n• Không dịch mọi を通して thành xuyên qua theo nghĩa di chuyển vật lý.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私は学生生活を通して、色々なことを学んだ。",
          hiragana: "わたしはがくせいせいかつをとおして、いろいろなことをまなんだ。",
          romaji: "watashi wa gakusei seikatsu o tooshite, iroiro na koto o mananda",
          meaning: "Tôi đã học được nhiều điều thông qua đời sống sinh viên."
        },
        {
          direction: "ja-vi",
          kanji: "このような交流会を通じて、国と国との理解が深まって行くことを願っています。",
          hiragana: "このようなこうりゅうかいをつうじて、くにとくにとのりかいがふかまっていくことをねがっています。",
          romaji: "kono you na kouryuukai o tsuujite, kuni to kuni to no rikai ga fukamatte iku koto o negatte imasu",
          meaning: "Tôi mong rằng thông qua những buổi giao lưu như thế này, sự thấu hiểu giữa các quốc gia sẽ ngày càng sâu sắc."
        },
        {
          direction: "ja-vi",
          kanji: "電話を通しての声は少し聞きづらい。",
          hiragana: "でんわをとおしてのこえはすこしききづらい。",
          romaji: "denwa o tooshite no koe wa sukoshi kikizurai",
          meaning: "Giọng nói qua điện thoại hơi khó nghe."
        },
        {
          direction: "vi-romaji",
          kanji: "彼女の話を通して、彼氏が今浮気していることを知りました。",
          hiragana: "かのじょのはなしをとおして、かれしがいまうわきしていることをしりました。",
          romaji: "kanojo no hanashi o tooshite, kareshi ga ima uwaki shite iru koto o shirimashita",
          meaning: "Qua câu chuyện của cô ấy, tôi biết bạn trai mình đang ngoại tình."
        },
        {
          direction: "vi-romaji",
          kanji: "彼女を通して、私は彼と知り合いました。",
          hiragana: "かのじょをとおして、わたしはかれとしりあいました。",
          romaji: "kanojo o tooshite, watashi wa kare to shiriaimashita",
          meaning: "Thông qua cô ấy, tôi đã quen biết anh ấy."
        },
        {
          direction: "vi-romaji",
          kanji: "このアプリを通じて、日本人の友達がたくさんできました。",
          hiragana: "このあぷりをつうじて、にほんじんのともだちがたくさんできました。",
          romaji: "kono apuri o tsuujite, nihonjin no tomodachi ga takusan dekimashita",
          meaning: "Thông qua ứng dụng này, tôi đã có nhiều người bạn Nhật."
        }
      ]
    },
    {
      structure: "Khoảng thời gian + を通して／を通じて",
      meaning: "Trong suốt…; suốt cả…",
      note: "Trang 17.\n\n1. Cách nối:\n• Danh từ chỉ khoảng thời gian + を通して／を通じて.\n• 1年を通して／年間を通じて／夏休みを通して.\n\n2. Cách dùng:\n• Diễn tả trạng thái hoặc hoạt động được duy trì trong toàn bộ một khoảng thời gian.\n• Có thể là hoạt động lặp lại trong cả giai đoạn, không nhất thiết diễn ra liên tục từng giây.\n• 年間を通じて結婚式が行われる: đám cưới được tổ chức vào các thời điểm trong suốt năm.\n\n3. Phân biệt với mục 3:\n• アプリを通じて友達ができる: ứng dụng là phương tiện.\n• 1年を通じて寒い: một năm là khoảng thời gian.\n\n4. So với にわたって:\n• を通して nhấn mạnh toàn bộ khoảng thời gian.\n• にわたって nhấn mạnh độ dài hoặc phạm vi trải rộng, dùng được cho cả không gian.\n• Có những câu gần nghĩa nhưng không thể thay thế mọi trường hợp.\n\n5. Điều chỉnh đáp án bài tập thứ hai:\n• Sách in N3に合格するのに、3ヶ月を通して一生懸命勉強する.\n• Đề Việt nói đã học nên dữ liệu dùng 勉強しました; đồng thời dùng ために để mục đích rõ ràng hơn.\n• Mẫu trọng tâm 3か月を通して được giữ nguyên.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私の部屋はこの3カ月を通じてずっと暖房が付いている。",
          hiragana: "わたしのへやはこのさんかげつをつうじてずっとだんぼうがついている。",
          romaji: "watashi no heya wa kono sankagetsu o tsuujite zutto danbou ga tsuite iru",
          meaning: "Phòng tôi bật sưởi suốt ba tháng này."
        },
        {
          direction: "ja-vi",
          kanji: "夏休みを通して息子に英語を教えてあげた。",
          hiragana: "なつやすみをとおしてむすこにえいごをおしえてあげた。",
          romaji: "natsuyasumi o tooshite musuko ni eigo o oshiete ageta",
          meaning: "Tôi đã dạy tiếng Anh cho con trai trong suốt kỳ nghỉ hè."
        },
        {
          direction: "ja-vi",
          kanji: "このホテルでは、年間を通じていつも結婚式が行われている。",
          hiragana: "このほてるでは、ねんかんをつうじていつもけっこんしきがおこなわれている。",
          romaji: "kono hoteru de wa, nenkan o tsuujite itsumo kekkonshiki ga okonawarete iru",
          meaning: "Khách sạn này thường xuyên tổ chức đám cưới suốt cả năm."
        },
        {
          direction: "vi-romaji",
          kanji: "この国は、1年を通してずっと寒い。",
          hiragana: "このくには、いちねんをとおしてずっとさむい。",
          romaji: "kono kuni wa, ichi nen o tooshite zutto samui",
          meaning: "Đất nước này lạnh suốt cả năm."
        },
        {
          direction: "vi-romaji",
          kanji: "N3に合格するために、3か月を通して一生懸命勉強しました。",
          hiragana: "えぬさんにごうかくするために、さんかげつをとおしていっしょうけんめいべんきょうしました。",
          romaji: "enu san ni goukaku suru tame ni, sankagetsu o tooshite isshoukenmei benkyou shimashita",
          meaning: "Để đỗ N3, tôi đã học chăm chỉ suốt ba tháng."
        },
        {
          direction: "vi-romaji",
          kanji: "この公園は、1年を通していつでも花が楽しめる。",
          hiragana: "このこうえんは、いちねんをとおしていつでもはながたのしめる。",
          romaji: "kono kouen wa, ichi nen o tooshite itsu de mo hana ga tanoshimeru",
          meaning: "Ở công viên này, có thể thưởng thức hoa vào bất cứ thời điểm nào trong năm."
        }
      ]
    },
    {
      structure: "Nを込めて／Nを込めたN",
      meaning: "Gửi gắm…; dồn cả…; bằng tất cả…",
      note: "Trang 18. 込めて đọc こめて.\n\n1. Cách nối:\n• Nを込めて + hành động.\n• Nを込めた + danh từ.\n• Ví dụ: 心を込めて作る／気持ちを込めた曲.\n\n2. Cách dùng:\n• Gửi gắm tình cảm, suy nghĩ, mong muốn hoặc sức lực vào hành động, sản phẩm.\n• Không chỉ nói có cảm xúc, mà nói làm một việc với cảm xúc được đặt vào đó.\n\n3. Danh từ hay dùng:\n• 心: tấm lòng.\n• 真心: lòng chân thành.\n• 感謝の気持ち: lòng biết ơn.\n• 愛: tình yêu.\n• 願い: mong ước.\n• 力: sức lực.\n• Cũng có thể dùng với cảm xúc tiêu cực như 怒り／恨み tùy ngữ cảnh.\n\n4. Phân biệt:\n• 感謝して手紙を書く: viết thư với tâm trạng biết ơn.\n• 感謝の気持ちを込めて手紙を書く: gửi gắm lòng biết ơn vào lá thư.\n• Không dùng Nを込める cho mọi hành động có cảm xúc; cần có ý đưa, dồn hoặc gửi gắm điều đó vào việc làm.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "愛を込めて作ったチョコレートを彼に渡した。",
          hiragana: "あいをこめてつくったちょこれーとをかれにわたした。",
          romaji: "ai o komete tsukutta chokoreeto o kare ni watashita",
          meaning: "Tôi đưa anh ấy sô-cô-la được làm bằng tất cả tình yêu."
        },
        {
          direction: "ja-vi",
          kanji: "母に感謝の思いを込めて手紙を書いた。",
          hiragana: "ははにかんしゃのおもいをこめててがみをかいた。",
          romaji: "haha ni kansha no omoi o komete tegami o kaita",
          meaning: "Tôi viết thư cho mẹ, gửi gắm lòng biết ơn."
        },
        {
          direction: "ja-vi",
          kanji: "当店のお菓子は、真心を込めて、一つ一つ手作りです。",
          hiragana: "とうてんのおかしは、まごころをこめて、ひとつひとつてづくりです。",
          romaji: "touten no okashi wa, magokoro o komete, hitotsu hitotsu tezukuri desu",
          meaning: "Bánh kẹo của cửa hàng chúng tôi được làm thủ công từng chiếc bằng cả tấm lòng."
        },
        {
          direction: "vi-romaji",
          kanji: "母の日に感謝の気持ちを込めてプレゼントをした。",
          hiragana: "ははのひにかんしゃのきもちをこめてぷれぜんとをした。",
          romaji: "haha no hi ni kansha no kimochi o komete purezento o shita",
          meaning: "Tôi tặng quà vào Ngày của Mẹ với tất cả lòng biết ơn."
        },
        {
          direction: "vi-romaji",
          kanji: "恋人への気持ちを込めた曲を制作した。",
          hiragana: "こいびとへのきもちをこめたきょくをせいさくした。",
          romaji: "koibito e no kimochi o kometa kyoku o seisaku shita",
          meaning: "Tôi sáng tác một bài hát gửi gắm tình cảm dành cho người yêu."
        },
        {
          direction: "vi-romaji",
          kanji: "心を込めて仕事をしています。",
          hiragana: "こころをこめてしごとをしています。",
          romaji: "kokoro o komete shigoto o shite imasu",
          meaning: "Tôi làm việc bằng tất cả tấm lòng."
        }
      ]
    }
  ]
});