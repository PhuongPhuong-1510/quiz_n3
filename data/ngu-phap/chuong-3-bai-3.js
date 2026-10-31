/*
  NGỮ PHÁP: CHƯƠNG 3 BÀI 3
  Nội dung: trang 200–206.

  Thêm tên file vào ngu-phap/danh-sach-ngu-phap.js.

  direction:
    "ja-vi": hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-romaji": hiện câu Việt, nhập câu bằng Romaji.

  Quy ước:
    V: động từ.
    Aい: tính từ đuôi い.
    Aな: tính từ đuôi な.
    N: danh từ.

  Các câu luyện dịch có thể có nhiều cách diễn đạt đúng.
  Phần dưới sử dụng đáp án tham khảo của sách.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "chương 3 bài 3",
  grammar: [
    {
      structure: "～ほか／～ほかに／～ほかは",
      meaning: "Ngoài… ra còn…; ngoại trừ… thì…",
      note: "Trang 200.\n\n1. Cách nối:\n• V thể thông thường + ほか／ほかに／ほかは.\n• Aい thể thông thường + ほか／ほかに／ほかは.\n• Aな + な／である + ほか／ほかに／ほかは.\n• N + の／である + ほか／ほかに／ほかは.\n• Với dạng phủ định hoặc quá khứ, dùng dạng bổ nghĩa thích hợp: 貯金がないほかは, 参加したほかに…\n\n2. ～ほか／～ほかに: ngoài A ra còn B.\n• Bổ sung sự vật, hành động, lựa chọn hoặc đặc điểm bên cạnh điều đã nêu.\n• Vế sau thường có も: 健康管理のほかに、ストレス解消も大切だ.\n• に có thể được lược bỏ trong nhiều câu.\n\n3. ～ほかは: ngoại trừ A thì B.\n• Đưa A ra làm ngoại lệ hoặc điểm riêng để nhận xét phần còn lại.\n• Thường gặp: ～ほかは問題ない／不満はない／完璧だ.\n• Ví dụ: 残業が多いほかは不満がない = Ngoài việc tăng ca nhiều thì không có gì bất mãn.\n\n4. ～ほかに kết hợp phủ định:\n• 私のほかにだれもいない = Ngoài tôi ra không có ai.\n• だれも phải đi với phủ định để mang nghĩa không có ai.\n\n5. Dễ nhầm:\n• ～ほかに thiên về bổ sung; ～ほかは thiên về nêu ngoại lệ, đối chiếu.\n• Không thay hai dạng cho nhau một cách máy móc.\n• Nối danh từ: 肉のほかに; không dùng 肉なほかに.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "この町は、交通が少し不便なほかは、自然も多くて静かないい町です。",
          hiragana: "このまちは、こうつうがすこしふべんなほかは、しぜんもおおくてしずかないいまちです。",
          romaji: "kono machi wa, koutsuu ga sukoshi fuben na hoka wa, shizen mo ookute shizuka na ii machi desu",
          meaning: "Ngoài việc giao thông hơi bất tiện, thị trấn này có nhiều thiên nhiên và là một nơi yên tĩnh, dễ sống."
        },
        {
          direction: "ja-vi",
          kanji: "会場では、日本料理や雑誌などの販売のほか、浴衣のレンタルも行っている。",
          hiragana: "かいじょうでは、にほんりょうりやざっしなどのはんばいのほか、ゆかたのれんたるもおこなっている。",
          romaji: "kaijou de wa, nihon ryouri ya zasshi nado no hanbai no hoka, yukata no rentaru mo okonatte iru",
          meaning: "Tại địa điểm tổ chức, ngoài bán món Nhật, tạp chí và các mặt hàng khác, còn có dịch vụ cho thuê yukata."
        },
        {
          direction: "ja-vi",
          kanji: "今の仕事は、残業が多いほかは特に不満な点はない。",
          hiragana: "いまのしごとは、ざんぎょうがおおいほかはとくにふまんなてんはない。",
          romaji: "ima no shigoto wa, zangyou ga ooi hoka wa toku ni fuman na ten wa nai",
          meaning: "Công việc hiện tại, ngoài việc tăng ca nhiều thì không có điểm nào đặc biệt khiến tôi bất mãn."
        },
        {
          direction: "vi-romaji",
          kanji: "健康管理のほかに、ストレス解消も大切です。",
          hiragana: "けんこうかんりのほかに、すとれすかいしょうもたいせつです。",
          romaji: "kenkou kanri no hoka ni, sutoresu kaishou mo taisetsu desu",
          meaning: "Ngoài việc quản lý sức khỏe, giải tỏa căng thẳng cũng rất quan trọng."
        },
        {
          direction: "vi-romaji",
          kanji: "揚げ春巻きを作りたいんですが、挽肉のほかに何を買ったらいい？",
          hiragana: "あげはるまきをつくりたいんですが、ひきにくのほかになにをかったらいい？",
          romaji: "ageharumaki o tsukuritai n desu ga, hikiniku no hoka ni nani o kattara ii",
          meaning: "Tôi muốn làm nem rán, ngoài thịt xay ra thì nên mua thêm gì?"
        },
        {
          direction: "vi-romaji",
          kanji: "教室には私のほかに、だれもいません。",
          hiragana: "きょうしつにはわたしのほかに、だれもいません。",
          romaji: "kyoushitsu ni wa watashi no hoka ni, dare mo imasen",
          meaning: "Trong lớp học, ngoài tôi ra không có ai cả."
        },
        {
          direction: "vi-romaji",
          kanji: "山本先生は、話がちょっと長いほかは、とてもいい先生だ。",
          hiragana: "やまもとせんせいは、はなしがちょっとながいほかは、とてもいいせんせいだ。",
          romaji: "Yamamoto sensei wa, hanashi ga chotto nagai hoka wa, totemo ii sensei da",
          meaning: "Thầy Yamamoto, ngoài việc nói hơi dài thì là một giáo viên rất tốt."
        },
        {
          direction: "vi-romaji",
          kanji: "彼は、貯金がないほかは完璧な人間だ。",
          hiragana: "かれは、ちょきんがないほかはかんぺきなにんげんだ。",
          romaji: "kare wa, chokin ga nai hoka wa kanpeki na ningen da",
          meaning: "Anh ấy, ngoài việc không có tiền tiết kiệm thì là một người hoàn hảo."
        }
      ]
    },
    {
      structure: "～一方で",
      meaning: "Một mặt… mặt khác…; trong khi…; đồng thời…",
      note: "Trang 201. Đọc: いっぽうで.\n\n1. Cách nối:\n• V thể thông thường + 一方で.\n• Aい thể thông thường + 一方で.\n• Aな + な／である + 一方で.\n• N + である + 一方で là cách nối rõ ràng, thường dùng khi nói về vai trò hoặc tư cách.\n• Một số cách dùng có Nの一方で; không áp dụng の thay である tùy ý trong mọi câu.\n• Có thể lược bỏ で: ～一方、…\n\n2. Nghĩa đối chiếu: một mặt A, mặt khác B.\n• So sánh hai mặt của cùng một đối tượng hoặc hai đối tượng khác nhau.\n• Hai vế thường có sự tương phản: thời gian chờ dài nhưng thời gian khám ngắn; ngày thường rảnh nhưng cuối tuần bận.\n• Chủ ngữ của hai vế có thể giống hoặc khác nhau.\n\n3. Nghĩa song song: vừa A, đồng thời còn B.\n• Dùng khi một người có hai công việc, vai trò hoặc hoạt động song song.\n• Không bắt buộc hai hành động diễn ra đúng cùng một khoảnh khắc.\n• Ví dụ: ban ngày làm việc, buổi tối đi học vẫn dùng được 一方で.\n\n4. Dễ nhầm:\n• ～一方で: đối chiếu hoặc trình bày hai mặt, hai hoạt động.\n• Vる一方だ: ngày càng…, cứ tiếp tục theo một chiều; là mẫu khác.\n• ～ながら thường nhấn mạnh hai hành động do cùng một chủ thể thực hiện đồng thời hơn.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "この病院は、待たされる時間がとても長い一方で、診察の時間はとても短い。",
          hiragana: "このびょういんは、またされるじかんがとてもながいいっぽうで、しんさつのじかんはとてもみじかい。",
          romaji: "kono byouin wa, matasareru jikan ga totemo nagai ippou de, shinsatsu no jikan wa totemo mijikai",
          meaning: "Ở bệnh viện này, thời gian phải chờ rất lâu, trong khi thời gian khám lại rất ngắn."
        },
        {
          direction: "ja-vi",
          kanji: "一人暮らしは、気楽な一方で、けがや病気をしたときに大変な面がある。",
          hiragana: "ひとりぐらしは、きらくないっぽうで、けがやびょうきをしたときにたいへんなめんがある。",
          romaji: "hitorigurashi wa, kiraku na ippou de, kega ya byouki o shita toki ni taihen na men ga aru",
          meaning: "Sống một mình tuy thoải mái nhưng cũng có mặt khó khăn khi bị thương hoặc bị bệnh."
        },
        {
          direction: "ja-vi",
          kanji: "彼女は犬や猫などの動物を守る活動をする一方で、女優としても活躍している。",
          hiragana: "かのじょはいぬやねこなどのどうぶつをまもるかつどうをするいっぽうで、じょゆうとしてもかつやくしている。",
          romaji: "kanojo wa inu ya neko nado no doubutsu o mamoru katsudou o suru ippou de, joyuu to shite mo katsuyaku shite iru",
          meaning: "Cô ấy vừa tham gia hoạt động bảo vệ động vật như chó mèo, vừa hoạt động tích cực với vai trò diễn viên."
        },
        {
          direction: "ja-vi",
          kanji: "ホテルで正社員として働いている一方で、夜はアルバイトもしています。",
          hiragana: "ほてるでせいしゃいんとしてはたらいているいっぽうで、よるはあるばいともしています。",
          romaji: "hoteru de seishain to shite hataraite iru ippou de, yoru wa arubaito mo shite imasu",
          meaning: "Tôi làm nhân viên chính thức tại khách sạn, đồng thời buổi tối còn làm thêm."
        },
        {
          direction: "ja-vi",
          kanji: "この選手は、試合で負けが続く一方で、後輩の選手は最近試合で勝ち続けている。",
          hiragana: "このせんしゅは、しあいでまけがつづくいっぽうで、こうはいのせんしゅはさいきんしあいでかちつづけている。",
          romaji: "kono senshu wa, shiai de make ga tsuzuku ippou de, kouhai no senshu wa saikin shiai de kachitsuzukete iru",
          meaning: "Trong khi vận động viên này liên tục thua trận, vận động viên đàn em gần đây lại liên tục giành chiến thắng."
        },
        {
          direction: "vi-romaji",
          kanji: "私の家は、今、支出が多い一方で、収入があまり多くない。",
          hiragana: "わたしのいえは、いま、ししゅつがおおいいっぽうで、しゅうにゅうがあまりおおくない。",
          romaji: "watashi no ie wa, ima, shishutsu ga ooi ippou de, shuunyuu ga amari ookunai",
          meaning: "Gia đình tôi hiện chi tiêu nhiều, trong khi thu nhập lại không được bao nhiêu."
        },
        {
          direction: "vi-romaji",
          kanji: "この仕事は、平日はとても暇な一方で、土日や祝日はとても忙しい。",
          hiragana: "このしごとは、へいじつはとてもひまないっぽうで、どにちやしゅくじつはとてもいそがしい。",
          romaji: "kono shigoto wa, heijitsu wa totemo hima na ippou de, donichi ya shukujitsu wa totemo isogashii",
          meaning: "Công việc này ngày thường rất rảnh, nhưng thứ Bảy, Chủ nhật và ngày lễ lại rất bận."
        },
        {
          direction: "vi-romaji",
          kanji: "彼は、日中働いている一方で、夜は学校に通っている。",
          hiragana: "かれは、にっちゅうはたらいているいっぽうで、よるはがっこうにかよっている。",
          romaji: "kare wa, nicchuu hataraite iru ippou de, yoru wa gakkou ni kayotte iru",
          meaning: "Anh ấy ban ngày đi làm, đồng thời buổi tối đi học."
        },
        {
          direction: "vi-romaji",
          kanji: "私は日本語の教師である一方で、母親でもある。",
          hiragana: "わたしはにほんごのきょうしであるいっぽうで、ははおやでもある。",
          romaji: "watashi wa nihongo no kyoushi de aru ippou de, hahaoya de mo aru",
          meaning: "Tôi là giáo viên tiếng Nhật, đồng thời cũng là một người mẹ."
        }
      ]
    },
    {
      structure: "～だけでなく、～も",
      meaning: "Không chỉ… mà còn…",
      note: "Trang 202.\n\n1. Cách nối:\n• V thể thông thường + だけでなく.\n• Aい thể thông thường + だけでなく.\n• Aな + な／である + だけでなく.\n• N + だけでなく; cũng có thể dùng Nであるだけでなく khi trình bày một nhận định.\n• Ví dụ: 食べるだけでなく／早いだけでなく／親切なだけでなく／日本だけでなく.\n\n2. Cách dùng:\n• Nêu A rồi bổ sung B để mở rộng phạm vi, đặc điểm, hành động hoặc nguyên nhân.\n• Vế sau thường có も; tùy câu cũng có thể dùng まで hoặc さえ để nhấn mạnh.\n• Dùng được với cả nội dung tích cực và tiêu cực.\n• Hai phần nên có quan hệ song song về ý nghĩa: hai nơi tồn tại, hai ưu điểm, hai hậu quả…\n\n3. Dạng thường gặp:\n• Aだけでなく、Bも～: không chỉ A mà cả B.\n• Vるだけでなく、Vることもできる: không chỉ làm A mà còn có thể làm B.\n• ～からだけでなく、～から: không chỉ vì A mà còn vì B.\n• Hội thoại: ～だけじゃなく.\n\n4. Lưu ý:\n• 見るだけだ = chỉ xem.\n• 見るだけでなく、触ることもできる = không chỉ xem mà còn được chạm vào.\n• Đừng bỏ ない／なく nếu muốn giữ nghĩa không chỉ.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "子どもを甘やかすだけでなく時には厳しく接するのも親の役目というものだ。",
          hiragana: "こどもをあまやかすだけでなくときにはきびしくせっするのもおやのやくめというものだ。",
          romaji: "kodomo o amayakasu dake de naku toki ni wa kibishiku sessuru no mo oya no yakume to iu mono da",
          meaning: "Vai trò của cha mẹ không chỉ là nuông chiều con mà đôi khi còn phải nghiêm khắc với con."
        },
        {
          direction: "ja-vi",
          kanji: "この動物園では、動物を見るだけでなく、触ることもできる。",
          hiragana: "このどうぶつえんでは、どうぶつをみるだけでなく、さわることもできる。",
          romaji: "kono doubutsuen de wa, doubutsu o miru dake de naku, sawaru koto mo dekiru",
          meaning: "Ở sở thú này, không chỉ được nhìn động vật mà còn có thể chạm vào chúng."
        },
        {
          direction: "ja-vi",
          kanji: "山田さんが最近甘い物をよく食べているのは、禁煙したからだけでなく、ストレスもたまっているからだろう。",
          hiragana: "やまださんがさいきんあまいものをよくたべているのは、きんえんしたからだけでなく、すとれすもたまっているからだろう。",
          romaji: "Yamada-san ga saikin amai mono o yoku tabete iru no wa, kin'en shita kara dake de naku, sutoresu mo tamatte iru kara darou",
          meaning: "Có lẽ gần đây Yamada hay ăn đồ ngọt không chỉ vì đã bỏ thuốc mà còn vì đang tích tụ căng thẳng."
        },
        {
          direction: "vi-romaji",
          kanji: "この木は、日本にだけでなく、中国や韓国にもある。",
          hiragana: "このきは、にほんにだけでなく、ちゅうごくやかんこくにもある。",
          romaji: "kono ki wa, Nihon ni dake de naku, Chuugoku ya Kankoku ni mo aru",
          meaning: "Loài cây này không chỉ có ở Nhật Bản mà còn có ở Trung Quốc và Hàn Quốc."
        },
        {
          direction: "vi-romaji",
          kanji: "彼は仕事が早いだけでなく、丁寧だ。",
          hiragana: "かれはしごとがはやいだけでなく、ていねいだ。",
          romaji: "kare wa shigoto ga hayai dake de naku, teinei da",
          meaning: "Anh ấy không chỉ làm việc nhanh mà còn rất cẩn thận."
        },
        {
          direction: "vi-romaji",
          kanji: "試合に負けただけでなく、けがもしてしまった。",
          hiragana: "しあいにまけただけでなく、けがもしてしまった。",
          romaji: "shiai ni maketa dake de naku, kega mo shite shimatta",
          meaning: "Tôi không chỉ thua trận mà còn bị chấn thương nữa."
        }
      ]
    },
    {
      structure: "～ばかりでなく／～ばかりではなく",
      meaning: "Không chỉ… mà còn…",
      note: "Trang 203.\n\n1. Cách nối:\n• V thể thông thường + ばかりでなく.\n• Aい thể thông thường + ばかりでなく.\n• Aな + な／である + ばかりでなく.\n• N + ばかりでなく; cũng có dạng Nであるばかりでなく.\n• Có thể thêm は: ～ばかりではなく.\n\n2. Cách dùng:\n• Bổ sung B bên cạnh A, tương tự ～だけでなく.\n• Thường gặp trong cách trình bày tương đối trang trọng hoặc văn viết.\n• Vế sau thường dùng も, まで, さえ.\n• も: cũng; まで／さえ: nhấn mạnh đến cả, thậm chí.\n• Có thể bổ sung ưu điểm, khuyết điểm, hành động hoặc phạm vi.\n\n3. So sánh:\n• 日本語だけでなく、英語も話せる.\n• 日本語ばかりでなく、英語も話せる.\n• Hai câu đều có nghĩa: không chỉ nói được tiếng Nhật mà còn nói được tiếng Anh.\n\n4. Dễ nhầm:\n• Nばかり／Vてばかりいる: chỉ toàn…, cứ làm…; là cách dùng khác.\n• Vたばかり: vừa mới làm; là mẫu khác.\n• きれいなばかりでなく là cách nối đúng với tính từ な.\n• Trong 家まで送る, まで chỉ đích đến tận nhà; không phải trợ từ nhấn mạnh thêm một đối tượng trong phép liệt kê.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "グエンさんは日本語ばかりでなく、英語も話せる。",
          hiragana: "ぐえんさんはにほんごばかりでなく、えいごもはなせる。",
          romaji: "Guen-san wa nihongo bakari de naku, eigo mo hanaseru",
          meaning: "Anh/chị Nguyễn không chỉ nói được tiếng Nhật mà còn nói được tiếng Anh."
        },
        {
          direction: "ja-vi",
          kanji: "彼女の部屋はきれいなばかりでなく、いいにおいがする。",
          hiragana: "かのじょのへやはきれいなばかりでなく、いいにおいがする。",
          romaji: "kanojo no heya wa kirei na bakari de naku, ii nioi ga suru",
          meaning: "Phòng của cô ấy không chỉ sạch đẹp mà còn có mùi thơm dễ chịu."
        },
        {
          direction: "ja-vi",
          kanji: "このレストランは料理ばかりでなく、お酒もおいしい。",
          hiragana: "このれすとらんはりょうりばかりでなく、おさけもおいしい。",
          romaji: "kono resutoran wa ryouri bakari de naku, osake mo oishii",
          meaning: "Nhà hàng này không chỉ có món ăn ngon mà đồ uống có cồn cũng ngon."
        },
        {
          direction: "vi-romaji",
          kanji: "彼女は英語ばかりでなく日本語も話せます。",
          hiragana: "かのじょはえいごばかりでなくにほんごもはなせます。",
          romaji: "kanojo wa eigo bakari de naku nihongo mo hanasemasu",
          meaning: "Cô ấy không chỉ nói được tiếng Anh mà còn nói được tiếng Nhật."
        },
        {
          direction: "vi-romaji",
          kanji: "彼女は外見が綺麗なばかりでなく、心もとても優しいです。",
          hiragana: "かのじょはがいけんがきれいなばかりでなく、こころもとてもやさしいです。",
          romaji: "kanojo wa gaiken ga kirei na bakari de naku, kokoro mo totemo yasashii desu",
          meaning: "Cô ấy không chỉ có ngoại hình xinh đẹp mà tâm hồn cũng rất nhân hậu."
        },
        {
          direction: "vi-romaji",
          kanji: "彼はおごってくれたばかりでなく、家まで送ってくれました。",
          hiragana: "かれはおごってくれたばかりでなく、いえまでおくってくれました。",
          romaji: "kare wa ogotte kureta bakari de naku, ie made okutte kuremashita",
          meaning: "Anh ấy không chỉ khao tôi mà còn đưa tôi về tận nhà."
        }
      ]
    },
    {
      structure: "～はずだ",
      meaning: "Chắc là…; theo lẽ thì…; đáng lẽ…",
      note: "Trang 204.\n\n1. Cách nối:\n• V thể thông thường + はずだ.\n• Aい thể thông thường + はずだ.\n• Aな + な + はずだ; cũng có dạng Aなであるはずだ.\n• N + の + はずだ; cũng có dạng Nであるはずだ.\n• Lịch sự: ～はずです.\n• Ví dụ: 来るはずだ／来たはずだ／高いはずだ／元気なはずだ／学生のはずだ.\n\n2. Cách dùng:\n• Đưa ra kết luận hợp lý dựa trên dữ kiện, kiến thức hoặc điều đã biết.\n• Không phải lúc nào cũng thể hiện sự thật chắc chắn tuyệt đối; kết luận vẫn có thể sai.\n• Ví dụ: sống ở Mỹ 10 năm → theo lẽ thì tiếng Anh phải giỏi.\n• Tùy ngữ cảnh có thể dịch chắc là, hẳn là, theo lẽ thì hoặc đáng lẽ.\n\n3. Phân biệt thời:\n• 来るはずだ: theo dự kiến hoặc suy luận thì sẽ đến.\n• 来たはずだ: theo suy luận thì đã đến rồi.\n• 来るはずだった: đã được dự kiến sẽ đến; tùy ngữ cảnh có thể hàm ý thực tế không đến.\n\n4. So với ～に違いない:\n• はずだ nhấn mạnh kết luận phù hợp với căn cứ hoặc diễn biến đã biết.\n• に違いない nhấn mạnh sự tin chắc của người nói.\n• Hai mẫu có vùng nghĩa gần nhau nhưng không thay thế được trong mọi tình huống.\n\n5. Lưu ý:\n• Dùng 日本人のはずだ, không dùng 日本人なはずだ.\n• Dùng 上手なはずだ, không dùng 上手のはずだ.\n• Đây là phán đoán hoặc dự kiến, không phải lời ra lệnh hay nghĩa vụ như ～べきだ.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼なら約束は絶対に守るはずだ。",
          hiragana: "かれならやくそくはぜったいにまもるはずだ。",
          romaji: "kare nara yakusoku wa zettai ni mamoru hazu da",
          meaning: "Nếu là anh ấy thì chắc chắn sẽ giữ lời hứa."
        },
        {
          direction: "ja-vi",
          kanji: "彼はアメリカに10年住んでいたので、英語が上手なはずだ。",
          hiragana: "かれはあめりかにじゅうねんすんでいたので、えいごがじょうずなはずだ。",
          romaji: "kare wa Amerika ni juu nen sunde ita node, eigo ga jouzu na hazu da",
          meaning: "Anh ấy đã sống ở Mỹ 10 năm nên chắc là giỏi tiếng Anh."
        },
        {
          direction: "ja-vi",
          kanji: "キッチンからカレーのにおいがするから、今日の晩ご飯は絶対カレーのはずだ。",
          hiragana: "きっちんからかれーのにおいがするから、きょうのばんごはんはぜったいかれーのはずだ。",
          romaji: "kicchin kara karee no nioi ga suru kara, kyou no bangohan wa zettai karee no hazu da",
          meaning: "Có mùi cà ri từ bếp bay ra nên bữa tối hôm nay chắc chắn là cà ri."
        },
        {
          direction: "vi-romaji",
          kanji: "朝から何回電話しても出ないから、彼女は今出かけているはずだ。",
          hiragana: "あさからなんかいでんわしてもでないから、かのじょはいまでかけているはずだ。",
          romaji: "asa kara nankai denwa shite mo denai kara, kanojo wa ima dekakete iru hazu da",
          meaning: "Từ sáng gọi điện bao nhiêu lần cũng không bắt máy, chắc là cô ấy đang đi vắng."
        },
        {
          direction: "vi-romaji",
          kanji: "こんな時間になったから、彼女はもう寝ているはずだ。",
          hiragana: "こんなじかんになったから、かのじょはもうねているはずだ。",
          romaji: "konna jikan ni natta kara, kanojo wa mou nete iru hazu da",
          meaning: "Đã muộn thế này rồi, chắc là cô ấy đã ngủ."
        },
        {
          direction: "vi-romaji",
          kanji: "彼女はハノイ出身だから、ハノイに詳しいはずだ。",
          hiragana: "かのじょははのいしゅっしんだから、はのいにくわしいはずだ。",
          romaji: "kanojo wa Hanoi shusshin da kara, Hanoi ni kuwashii hazu da",
          meaning: "Vì cô ấy quê ở Hà Nội nên chắc là hiểu rõ về Hà Nội."
        }
      ]
    },
    {
      structure: "～はずがない／～わけがない",
      meaning: "Không thể nào…; làm sao có thể…; chắc chắn không…",
      note: "Trang 205.\n\n1. Cách nối với はずがない:\n• V thể thông thường + はずがない.\n• Aい thể thông thường + はずがない.\n• Aな + な／である + はずがない.\n• N + の／である + はずがない.\n\n2. Cách nối với わけがない:\n• V thể thông thường + わけがない.\n• Aい thể thông thường + わけがない.\n• Aな + な／である + わけがない.\n• N + の／である + わけがない; hội thoại cũng gặp Nなわけがない.\n\n3. Cách dùng:\n• Phủ định mạnh khả năng hoặc tính hợp lý của một sự việc.\n• はずがない: dựa vào điều đã biết, người nói cho rằng sự việc không thể xảy ra.\n• わけがない: người nói bác bỏ mạnh, cho rằng không có lý nào lại như thế.\n• Hai mẫu thường thay thế được khi cùng mang nghĩa không thể nào, nhưng sắc thái và ngữ cảnh vẫn cần được xét.\n• Đây là phán đoán của người nói, không bảo đảm sự việc thực tế luôn đúng như vậy.\n\n4. Dạng lịch sự:\n• ～はずがありません.\n• ～わけがありません.\n• Hội thoại có thể nói ～はずない／～わけない.\n\n5. Phân biệt vị trí phủ định:\n• 来ないはずだ: theo suy luận thì sẽ không đến.\n• 来るはずがない: không thể nào đến được; phủ định mạnh khả năng đến.\n• 来たはずがない: không thể nào đã đến.\n\n6. Dễ nhầm:\n• ～わけがない = không thể nào.\n• ～わけではない = không hẳn là, không có nghĩa là; thường là phủ định một cách hiểu hoặc khái quát.\n• ～ないわけがない = không có lý nào lại không…, tức rất chắc là có.\n• Trong 料理ができるはずがない, できるはずがない = không thể nào có khả năng làm được.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "全然勉強していない彼が、N3に合格できるはずがない。",
          hiragana: "ぜんぜんべんきょうしていないかれが、えぬさんにごうかくできるはずがない。",
          romaji: "zenzen benkyou shite inai kare ga, enu san ni goukaku dekiru hazu ga nai",
          meaning: "Anh ấy hoàn toàn không học hành gì thì không thể nào đỗ N3 được."
        },
        {
          direction: "ja-vi",
          kanji: "彼女は恋人と別れたばかりなので、元気なわけがない。",
          hiragana: "かのじょはこいびととわかれたばかりなので、げんきなわけがない。",
          romaji: "kanojo wa koibito to wakareta bakari na node, genki na wake ga nai",
          meaning: "Cô ấy vừa chia tay người yêu nên làm sao có thể vui vẻ, phấn chấn được."
        },
        {
          direction: "ja-vi",
          kanji: "あんなに日本語が上手な人が、外国人のはずがない。",
          hiragana: "あんなににほんごがじょうずなひとが、がいこくじんのはずがない。",
          romaji: "anna ni nihongo ga jouzu na hito ga, gaikokujin no hazu ga nai",
          meaning: "Một người nói tiếng Nhật giỏi đến thế thì không thể nào là người nước ngoài được."
        },
        {
          direction: "vi-romaji",
          kanji: "とても優しいタインちゃんだから、そんなひどいことを言ったわけがない。",
          hiragana: "とてもやさしいたいんちゃんだから、そんなひどいことをいったわけがない。",
          romaji: "totemo yasashii Tain-chan da kara, sonna hidoi koto o itta wake ga nai",
          meaning: "Bé Thanh hiền lành như thế thì không thể nào đã nói điều quá đáng như vậy."
        },
        {
          direction: "vi-romaji",
          kanji: "とても優しいタインちゃんだから、そんなひどいことを言ったはずがない。",
          hiragana: "とてもやさしいたいんちゃんだから、そんなひどいことをいったはずがない。",
          romaji: "totemo yasashii Tain-chan da kara, sonna hidoi koto o itta hazu ga nai",
          meaning: "Bé Thanh hiền lành như thế thì chắc chắn không thể đã nói điều quá đáng như vậy."
        },
        {
          direction: "vi-romaji",
          kanji: "家事に手を出したことがない彼は、料理ができるはずがない。",
          hiragana: "かじにてをだしたことがないかれは、りょうりができるはずがない。",
          romaji: "kaji ni te o dashita koto ga nai kare wa, ryouri ga dekiru hazu ga nai",
          meaning: "Anh ấy chưa từng động tay vào việc nhà thì làm sao có thể nấu ăn được."
        },
        {
          direction: "vi-romaji",
          kanji: "あんなに実力がある田中さんは、試験に落ちるはずがない。",
          hiragana: "あんなにじつりょくがあるたなかさんは、しけんにおちるはずがない。",
          romaji: "anna ni jitsuryoku ga aru Tanaka-san wa, shiken ni ochiru hazu ga nai",
          meaning: "Anh Tanaka có thực lực đến thế thì không thể nào trượt kỳ thi được."
        }
      ]
    }
  ]
});