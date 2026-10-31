/*
  NGỮ PHÁP: CHƯƠNG 3 BÀI 2
  Nội dung: trang 180–186.

  Thêm tên file vào ngu-phap/danh-sach-ngu-phap.js.

  direction:
    "ja-vi": hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-romaji": hiện câu Việt, nhập câu bằng Romaji.

  Tổng: 6 nhóm ngữ pháp, 37 mục luyện tập.
  - 18 mục ví dụ, trong đó có 2 đoạn hội thoại.
  - 19 câu bài tập, dùng đáp án tham khảo trang 186.

  Các câu dịch có thể có nhiều đáp án đúng.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "chương 3 bài 2",
  grammar: [
    {
      structure: "～ということだ／Aということは、Bということだ",
      meaning: "Có nghĩa là…; tức là…; nói như vậy nghĩa là…",
      note: "Trang 180.\n\n1. Cách nối:\n• Mệnh đề thể thông thường + ということだ.\n• V: 辞めたいということだ／別れるということだ.\n• Aい: 難しいということだ.\n• Aな: 必要だということだ.\n• N: 学生だということだ.\n• Khi giải thích một khái niệm bằng một hành động, thường dùng Vることだ: 幸せになるということは、今あるものに気づくということだ.\n\n2. Nghĩa trong bài:\n• Giải thích ý nghĩa của một phát ngôn, khái niệm hoặc sự việc.\n• Dùng để xác nhận điều mình hiểu từ lời người khác: 仕事を辞めたいということですか = Ý anh là muốn nghỉ việc sao?\n• Aということは、Bということだ = A có nghĩa là B.\n\n3. Cách nói trong hội thoại:\n• ～っていうこと／～ってこと.\n• それって、別れるってこと？ = Như vậy là muốn chia tay sao?\n• ということですか là cách hỏi lịch sự; ってこと？ là cách nói thân mật.\n\n4. Dễ nhầm:\n• ～ということだ còn có cách dùng truyền đạt thông tin nghe được, nhưng các ví dụ ở trang này tập trung vào nghĩa giải thích, diễn giải.\n• ～ことになる thường diễn tả kết quả suy ra hoặc quyết định do hoàn cảnh; không đồng nhất với việc giải thích nghĩa.\n• Trong 食べるということは、命をいただくということだ, いただく mang nghĩa khiêm nhường, thể hiện sự trân trọng đối với sự sống được tiếp nhận qua thức ăn.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "A：部長、これ以上、頑張れません。\nB：それは、仕事を辞めたいということですか。",
          hiragana: "A：ぶちょう、これいじょう、がんばれません。\nB：それは、しごとをやめたいということですか。",
          romaji: "A: buchou, kore ijou, ganbaremasen. B: sore wa, shigoto o yametai to iu koto desu ka",
          meaning: "A: Trưởng phòng, tôi không thể cố gắng thêm nữa.\nB: Ý anh/chị là muốn nghỉ việc sao?"
        },
        {
          direction: "ja-vi",
          kanji: "A：私たち、もう会わないほうがいいかも。\nB：それって、別れるってこと？",
          hiragana: "A：わたしたち、もうあわないほうがいいかも。\nB：それって、わかれるってこと？",
          romaji: "A: watashitachi, mou awanai hou ga ii kamo. B: sore tte, wakareru tte koto",
          meaning: "A: Có lẽ chúng ta không nên gặp nhau nữa.\nB: Ý là chia tay sao?"
        },
        {
          direction: "ja-vi",
          kanji: "食べるということは、命をいただくということだ。",
          hiragana: "たべるということは、いのちをいただくということだ。",
          romaji: "taberu to iu koto wa, inochi o itadaku to iu koto da",
          meaning: "Ăn có nghĩa là tiếp nhận sự sống."
        },
        {
          direction: "vi-romaji",
          kanji: "私にとって幸せとは、人を幸せにするということだ。",
          hiragana: "わたしにとってしあわせとは、ひとをしあわせにするということだ。",
          romaji: "watashi ni totte shiawase to wa, hito o shiawase ni suru to iu koto da",
          meaning: "Với tôi, hạnh phúc có nghĩa là làm cho người khác hạnh phúc."
        },
        {
          direction: "vi-romaji",
          kanji: "大人になるということは、自分の責任は自分で取るということです。",
          hiragana: "おとなになるということは、じぶんのせきにんはじぶんでとるということです。",
          romaji: "otona ni naru to iu koto wa, jibun no sekinin wa jibun de toru to iu koto desu",
          meaning: "Trưởng thành có nghĩa là tự mình chịu trách nhiệm về những việc thuộc trách nhiệm của mình."
        },
        {
          direction: "vi-romaji",
          kanji: "幸せになるということは「あるものに気づくこと」ということだ。",
          hiragana: "しあわせになるということは「あるものにきづくこと」ということだ。",
          romaji: "shiawase ni naru to iu koto wa, aru mono ni kizuku koto to iu koto da",
          meaning: "Trở nên hạnh phúc có nghĩa là nhận ra những điều mình đang có."
        }
      ]
    },
    {
      structure: "～という点で／～という点が",
      meaning: "Ở điểm là…; xét về khía cạnh…",
      note: "Trang 181. 点 đọc là てん.\n\n1. Cách nối:\n• V thể thông thường + という点で.\n• Aい thể thông thường + という点で.\n• Aな + だ + という点で.\n• N + だ + という点で khi N là vị ngữ của nhận định được nêu.\n• Với danh từ chỉ khía cạnh có thể nói Nという点で: 安全性という点で = xét về tính an toàn.\n\n2. Cách dùng:\n• Chọn một khía cạnh của sự vật hoặc sự việc để đánh giá, so sánh hay nêu đặc điểm.\n• Không khẳng định đối tượng tốt hoặc xấu về mọi mặt, chỉ đánh giá theo khía cạnh được nhắc đến.\n• Ví dụ: 丈夫だという点で評価が高い = được đánh giá cao ở độ bền.\n\n3. Vai trò của trợ từ:\n• ～という点で: xét về điểm đó, dựa trên khía cạnh đó.\n• ～という点が: chính đặc điểm đó là chủ ngữ được đánh giá hoặc nhắc đến.\n• Ví dụ: 面白いという点が評価されている = được đánh giá cao ở điểm thú vị.\n\n4. Lược bỏ という:\n• Có thể nói 火事になる心配がない点で thay cho 火事になる心配がないという点で.\n• Khi nối trực tiếp: Aな + な点で; Nの点で là một cách nói khác tùy danh từ và ngữ cảnh.\n• Không bỏ という một cách máy móc mà giữ nguyên だ ngay trước 点.\n\n5. Dễ nhầm:\n• 点 ở đây là khía cạnh, đặc điểm, không phải điểm số.\n• ～について chỉ chủ đề: về…; ～という点で giới hạn góc nhìn đánh giá: xét ở điểm…",
      examples: [
        {
          direction: "ja-vi",
          kanji: "エアコンは、消し忘れても火事になる心配がない点で、お年寄りにも安心だ。",
          hiragana: "えあこんは、けしわすれてもかじになるしんぱいがないてんで、おとしよりにもあんしんだ。",
          romaji: "eakon wa, keshiwasurete mo kaji ni naru shinpai ga nai ten de, otoshiyori ni mo anshin da",
          meaning: "Theo nhận định trong câu, điều hòa khiến người cao tuổi yên tâm ở điểm không phải lo hỏa hoạn dù quên tắt."
        },
        {
          direction: "ja-vi",
          kanji: "山登りは楽しいですが、自然を相手にするという点で、危険もあります。",
          hiragana: "やまのぼりはたのしいですが、しぜんをあいてにするというてんで、きけんもあります。",
          romaji: "yamanobori wa tanoshii desu ga, shizen o aite ni suru to iu ten de, kiken mo arimasu",
          meaning: "Leo núi rất vui, nhưng cũng có nguy hiểm ở khía cạnh phải đối mặt với thiên nhiên."
        },
        {
          direction: "ja-vi",
          kanji: "この映画は、悪い人が登場しないのに面白いという点が評価されている。",
          hiragana: "このえいがは、わるいひとがとうじょうしないのにおもしろいというてんがひょうかされている。",
          romaji: "kono eiga wa, warui hito ga toujou shinai no ni omoshiroi to iu ten ga hyouka sarete iru",
          meaning: "Bộ phim này được đánh giá cao ở điểm vẫn thú vị dù không có nhân vật phản diện xuất hiện."
        },
        {
          direction: "vi-romaji",
          kanji: "A社のパソコンより、B社のパソコンのほうが丈夫だという点で評価が高い。",
          hiragana: "えーしゃのぱそこんより、びーしゃのぱそこんのほうがじょうぶだというてんでひょうかがたかい。",
          romaji: "ee sha no pasokon yori, bii sha no pasokon no hou ga joubu da to iu ten de hyouka ga takai",
          meaning: "So với máy tính của công ty A, máy tính của công ty B được đánh giá cao hơn về độ bền."
        },
        {
          direction: "vi-romaji",
          kanji: "窓が西向きという点で、この部屋を借りるのを迷っている。",
          hiragana: "まどがにしむきというてんで、このへやをかりるのをまよっている。",
          romaji: "mado ga nishimuki to iu ten de, kono heya o kariru no o mayotte iru",
          meaning: "Tôi đang phân vân có nên thuê căn phòng này không vì cửa sổ hướng Tây."
        },
        {
          direction: "vi-romaji",
          kanji: "この町は人が優しいという点で、他のどこよりも好きだ。",
          hiragana: "このまちはひとがやさしいというてんで、ほかのどこよりもすきだ。",
          romaji: "kono machi wa hito ga yasashii to iu ten de, hoka no doko yori mo suki da",
          meaning: "Tôi thích thị trấn này hơn bất cứ nơi nào khác ở điểm người dân rất tốt bụng."
        }
      ]
    },
    {
      structure: "～としたら",
      meaning: "Giả sử…; nếu cho rằng…; nếu là… thì…",
      note: "Trang 182.\n\n1. Cách nối:\n• V thể thông thường + としたら.\n• Aい thể thông thường + としたら.\n• Aな + だ + としたら.\n• N + だ + としたら.\n• Ví dụ: 当たったとしたら／正しいとしたら／事実だとしたら／私があなた だとしたら.\n\n2. Cách dùng:\n• Tạm đặt một tình huống hoặc thông tin làm giả định rồi suy nghĩ về kết quả, đánh giá hoặc mong muốn.\n• Có thể dùng cho chuyện khó xảy ra, trái thực tế, hoặc điều chưa biết có đúng hay không.\n• Không nhất thiết mọi câu đều nói về việc không thể xảy ra.\n• Thường đi cùng もし: もし生まれ変わるとしたら…\n\n3. Dạng quá khứ trong giả định:\n• 宝くじが当たったとしたら thường dịch là giả sử trúng xổ số, không nhất thiết nói việc đã xảy ra trong quá khứ.\n• Cần xét toàn bộ ngữ cảnh thay vì chỉ dựa vào đuôi た.\n\n4. Vế sau:\n• Có thể là phán đoán, lời khuyên, ý định, mong muốn hoặc câu hỏi.\n• Ví dụ: 確認を急ぐべきだ／旅行をプレゼントしたい／何をしたいですか.\n\n5. So sánh:\n• ～としたら nhấn mạnh việc giả định, nếu cho rằng điều đó đúng.\n• ～たら là điều kiện rộng hơn, còn dùng cho mốc thời gian thực tế: đến nơi rồi thì…\n• ～としても là nhượng bộ: dù có giả định như vậy thì kết luận phía sau vẫn giữ nguyên.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "その本の内容が全て正しいとしたら、彼の説明が間違っているということになるね。",
          hiragana: "そのほんのないようがすべてただしいとしたら、かれのせつめいがまちがっているということになるね。",
          romaji: "sono hon no naiyou ga subete tadashii to shitara, kare no setsumei ga machigatte iru to iu koto ni naru ne",
          meaning: "Nếu toàn bộ nội dung cuốn sách đó đều đúng thì có nghĩa là lời giải thích của anh ấy sai nhỉ."
        },
        {
          direction: "ja-vi",
          kanji: "その事柄が事実だとしたら、事実確認を急ぐべきだ。",
          hiragana: "そのことがらがじじつだとしたら、じじつかくにんをいそぐべきだ。",
          romaji: "sono kotogara ga jijitsu da to shitara, jijitsu kakunin o isogu beki da",
          meaning: "Nếu chuyện đó là thật thì cần nhanh chóng xác minh sự thật."
        },
        {
          direction: "ja-vi",
          kanji: "宝くじが当たったとしたら、家族に海外旅行をプレゼントしたい。",
          hiragana: "たからくじがあたったとしたら、かぞくにかいがいりょこうをぷれぜんとしたい。",
          romaji: "takarakuji ga atatta to shitara, kazoku ni kaigai ryokou o purezento shitai",
          meaning: "Giả sử trúng xổ số, tôi muốn tặng gia đình một chuyến du lịch nước ngoài."
        },
        {
          direction: "vi-romaji",
          kanji: "もしも生まれ変わるとしたら、何になりたいですか。",
          hiragana: "もしもうまれかわるとしたら、なにになりたいですか。",
          romaji: "moshimo umarekawaru to shitara, nani ni naritai desu ka",
          meaning: "Giả sử được sinh ra lần nữa, bạn muốn trở thành gì?"
        },
        {
          direction: "vi-romaji",
          kanji: "もし私があなただったとしたら、試験に落ちたと思いますけどね。",
          hiragana: "もしわたしがあなただったとしたら、しけんにおちたとおもいますけどね。",
          romaji: "moshi watashi ga anata datta to shitara, shiken ni ochita to omoimasu kedo ne",
          meaning: "Giả sử tôi ở vào vị trí của bạn, tôi nghĩ mình đã trượt kỳ thi rồi."
        },
        {
          direction: "vi-romaji",
          kanji: "明日地球が終わるとしたら、今日は何をしたいですか。",
          hiragana: "あしたちきゅうがおわるとしたら、きょうはなにをしたいですか。",
          romaji: "ashita chikyuu ga owaru to shitara, kyou wa nani o shitai desu ka",
          meaning: "Giả sử ngày mai Trái Đất kết thúc, hôm nay bạn muốn làm gì?"
        }
      ]
    },
    {
      structure: "～としても",
      meaning: "Cho dù…; ngay cả nếu…; giả sử có… thì vẫn…",
      note: "Trang 183.\n\n1. Cách nối:\n• V thể thông thường + としても.\n• Aい thể thông thường + としても.\n• Aな + だ + としても.\n• N + だ + としても.\n• Ví dụ: 走るとしても／きれいだとしても／親だとしても.\n\n2. Cách dùng:\n• Đặt một điều kiện làm giả định nhưng khẳng định rằng kết luận, đánh giá hoặc quan điểm phía sau vẫn không thay đổi.\n• Thường dùng khi kết quả trái với điều người nghe có thể mong đợi từ điều kiện phía trước.\n• Ví dụ: dù chạy thì có lẽ vẫn không kịp; dù có tiền cũng có thứ không mua được.\n\n3. Từ thường đi cùng:\n• たとえ／仮に／もし／もしも.\n• たとえ親だとしても… = Cho dù là cha mẹ đi nữa…\n• Không bắt buộc phải có những từ này.\n\n4. Hội thoại:\n• ～としたって là dạng thân mật: 親だとしたって…\n\n5. Phân biệt:\n• ～としたら: giả sử A thì B; tập trung suy nghĩ kết quả khi A đúng.\n• ～としても: dù A đúng thì B vẫn giữ nguyên.\n• ～ても cũng diễn tả nhượng bộ, thường gọn và dùng rộng hơn; ～としても nhấn mạnh việc tạm chấp nhận giả định.\n\n6. Lưu ý đáp án:\n• Câu bài tập về còn 5 phút, đáp án sách dùng 間に合わないかもしれない = có lẽ không kịp, nhẹ hơn cách diễn đạt không thể kịp trong đề tiếng Việt.\n• Phần luyện dưới đây giữ đáp án sách và dịch nghĩa theo đúng câu Nhật.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "たとえ冗談だとしても、女性にそんなことは言ってはいけない。",
          hiragana: "たとえじょうだんだとしても、じょせいにそんなことはいってはいけない。",
          romaji: "tatoe joudan da to shite mo, josei ni sonna koto wa itte wa ikenai",
          meaning: "Cho dù chỉ là nói đùa, cũng không được nói điều như vậy với phụ nữ."
        },
        {
          direction: "ja-vi",
          kanji: "たとえきれいだとしても、性格が悪ければ付き合おうとは思わない。",
          hiragana: "たとえきれいだとしても、せいかくがわるければつきあおうとはおもわない。",
          romaji: "tatoe kirei da to shite mo, seikaku ga warukereba tsukiaou to wa omowanai",
          meaning: "Cho dù xinh đẹp, nếu tính cách xấu thì tôi cũng không có ý định hẹn hò."
        },
        {
          direction: "ja-vi",
          kanji: "N1を持っていたとしても、会話が上手だとは限らない。",
          hiragana: "えぬいちをもっていたとしても、かいわがじょうずだとはかぎらない。",
          romaji: "enu ichi o motte ita to shite mo, kaiwa ga jouzu da to wa kagiranai",
          meaning: "Cho dù có chứng chỉ N1 cũng chưa chắc đã giỏi giao tiếp."
        },
        {
          direction: "vi-romaji",
          kanji: "後5分しかない。今走るとしても間に合わないかもしれない。",
          hiragana: "あとごふんしかない。いまはしるとしてもまにあわないかもしれない。",
          romaji: "ato gofun shika nai. ima hashiru to shite mo maniawanai kamo shirenai",
          meaning: "Chỉ còn 5 phút. Bây giờ cho dù có chạy thì có lẽ cũng không kịp."
        },
        {
          direction: "vi-romaji",
          kanji: "たとえどんなにお金があるとしても買えないものがある。",
          hiragana: "たとえどんなにおかねがあるとしてもかえないものがある。",
          romaji: "tatoe donna ni okane ga aru to shite mo kaenai mono ga aru",
          meaning: "Cho dù có nhiều tiền đến đâu thì vẫn có những thứ không mua được."
        },
        {
          direction: "vi-romaji",
          kanji: "親だとしても許可なしに子どもの日記を読んではいけないです。",
          hiragana: "おやだとしてもきょかなしにこどものにっきをよんではいけないです。",
          romaji: "oya da to shite mo kyoka nashi ni kodomo no nikki o yonde wa ikenai desu",
          meaning: "Cho dù là cha mẹ cũng không được đọc nhật ký của con khi chưa được cho phép."
        }
      ]
    },
    {
      structure: "V thể ý chí + とする",
      meaning: "Định làm…; cố làm…; sắp sửa…",
      note: "Trang 184.\n\n1. Cách tạo thể ý chí:\n• Nhóm 1: chuyển âm cuối sang hàng お rồi thêm う: 行く → 行こう; 読む → 読もう; 帰る → 帰ろう.\n• Nhóm 2: bỏ る thêm よう: 見る → 見よう; 寝る → 寝よう.\n• Bất quy tắc: する → しよう; 来る → 来よう（こよう）.\n• Ghép với とする: 見ようとする／帰ろうとする／しようとする.\n\n2. Động từ có ý chí:\n• Diễn tả định bắt đầu hoặc đang cố thực hiện một hành động.\n• Không bảo đảm hành động đã hoàn thành hoặc thành công.\n• Ví dụ: 見ようとしたが見られなかった = Định xem nhưng không xem được.\n• 呼吸をしようとしてもできない = Cố hít thở nhưng không làm được.\n\n3. Động từ chỉ diễn biến không do ý chí:\n• Diễn tả một sự việc sắp xảy ra, đang ở ngay trước thời điểm bắt đầu hoặc kết thúc.\n• Ví dụ: 授業が始まろうとしている = Giờ học sắp bắt đầu.\n• 夏休みが終わろうとしている = Kỳ nghỉ hè sắp kết thúc.\n• Thể ý chí ở đây không mang nghĩa sự vật có mong muốn hay ý định.\n\n4. Dạng thường gặp:\n• ～ようとしたら: khi vừa định làm thì…\n• ～ようとしたとき: đúng lúc định làm…\n• ～ようとしている: đang cố, đang định, hoặc sắp sửa…\n• ～ようとしても: dù cố làm…\n\n5. Dễ nhầm:\n• Vるつもりだ: kế hoạch, ý định đã có.\n• Vようとする: nhấn mạnh thời điểm bắt đầu, sự cố gắng hoặc việc sắp xảy ra.\n• Vるようにする: cố gắng tạo thói quen hoặc sắp xếp để làm được; là mẫu khác.\n\n6. Lưu ý câu trong sách:\n• Ví dụ đầu dùng 見れなかった, cách nói lược ら thường gặp trong hội thoại.\n• Dạng chuẩn nên dùng khi viết hoặc làm bài thi là 見られなかった.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "テレビを見ようとしたら、父が帰ってきて見れなかった。",
          hiragana: "てれびをみようとしたら、ちちがかえってきてみれなかった。",
          romaji: "terebi o miyou to shitara, chichi ga kaette kite mirenakatta",
          meaning: "Khi tôi vừa định xem tivi thì bố về nên không xem được."
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
          meaning: "Ngay khi buổi học sắp bắt đầu, giáo viên thông báo rằng hôm nay được nghỉ học."
        },
        {
          direction: "vi-romaji",
          kanji: "出かけようとしたとき、電話がかかってきた。",
          hiragana: "でかけようとしたとき、でんわがかかってきた。",
          romaji: "dekakeyou to shita toki, denwa ga kakatte kita",
          meaning: "Đúng lúc tôi định ra ngoài thì có điện thoại gọi đến."
        },
        {
          direction: "vi-romaji",
          kanji: "仕事が終わり、家に帰ろうとした時、村上さんにご飯に行こうと誘われた。",
          hiragana: "しごとがおわり、いえにかえろうとしたとき、むらかみさんにごはんにいこうとさそわれた。",
          romaji: "shigoto ga owari, ie ni kaerou to shita toki, Murakami-san ni gohan ni ikou to sasowareta",
          meaning: "Khi xong việc và định về nhà, tôi được anh Murakami rủ đi ăn."
        },
        {
          direction: "vi-romaji",
          kanji: "病気のせいで、大きく呼吸をしようとしても、うまくできない。",
          hiragana: "びょうきのせいで、おおきくこきゅうをしようとしても、うまくできない。",
          romaji: "byouki no sei de, ookiku kokyuu o shiyou to shite mo, umaku dekinai",
          meaning: "Vì bị bệnh nên dù cố hít thở sâu, tôi cũng không làm được như ý."
        },
        {
          direction: "vi-romaji",
          kanji: "気が付くと夏休みが終わろうとしている。",
          hiragana: "きがつくとなつやすみがおわろうとしている。",
          romaji: "ki ga tsuku to natsuyasumi ga owarou to shite iru",
          meaning: "Đến khi nhận ra thì kỳ nghỉ hè đã sắp kết thúc."
        }
      ]
    },
    {
      structure: "V thể ý chí + としない",
      meaning: "Không chịu làm…; không có ý định làm…",
      note: "Trang 185.\n\n1. Cách tạo:\n• V thể ý chí + としない.\n• 行く → 行こうとしない: không chịu đi.\n• 認める → 認めようとしない: không chịu thừa nhận.\n• やめる → やめようとしない: không chịu bỏ, không chịu dừng.\n• Thể quá khứ: ～ようとしなかった.\n\n2. Cách dùng:\n• Mô tả một người không tỏ ý định thực hiện hành động, không chịu bắt đầu hoặc không chịu cố gắng làm.\n• Trong bài này thường mang sắc thái người nói không hài lòng, trách móc hoặc ngạc nhiên trước thái độ của người khác.\n• Ví dụ: いくら言っても認めようとしない = Nói bao nhiêu cũng không chịu thừa nhận.\n\n3. Chủ thể:\n• Cách dùng đang học chủ yếu nhận xét ý chí hoặc thái độ quan sát được ở người khác.\n• Khi muốn trực tiếp nói quyết định của bản thân, dùng ～ないつもりだ／～つもりはない／～ないことにする tùy ý nghĩa.\n• Không nên học thành quy tắc tuyệt đối rằng mẫu này không bao giờ xuất hiện với ngôi thứ nhất; vẫn có thể gặp khi tự nhìn lại hoặc miêu tả bản thân từ góc nhìn khách quan.\n\n4. Dạng nhấn mạnh:\n• ～ようともしない: đến việc định làm, thử làm cũng không.\n• ～ようとさえしない: thậm chí không có ý định hoặc không chịu thử làm.\n• Ví dụ: 片付けようともしない = Đến việc dọn dẹp cũng không chịu làm.\n\n5. Dễ nhầm:\n• ～ない: chỉ nêu việc không làm.\n• ～できない: không có khả năng hoặc không có điều kiện làm.\n• ～ようとしない: không chịu làm, không có biểu hiện muốn làm; không đồng nghĩa với không làm được.\n• ～ないようにする: cố tránh không làm; là mẫu khác.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "山本さんはとても頑固で、自分のやり方を変えようとしない。",
          hiragana: "やまもとさんはとてもがんこで、じぶんのやりかたをかえようとしない。",
          romaji: "Yamamoto-san wa totemo ganko de, jibun no yarikata o kaeyou to shinai",
          meaning: "Anh Yamamoto rất cứng đầu, không chịu thay đổi cách làm của mình."
        },
        {
          direction: "ja-vi",
          kanji: "あの人は、いくら言っても、自分のミスを認めようとしない。",
          hiragana: "あのひとは、いくらいっても、じぶんのみすをみとめようとしない。",
          romaji: "ano hito wa, ikura itte mo, jibun no misu o mitomeyou to shinai",
          meaning: "Người đó, dù nói bao nhiêu cũng không chịu thừa nhận lỗi của mình."
        },
        {
          direction: "ja-vi",
          kanji: "父は家事を手伝うことが嫌いで、食べた後の食器を片付けようともしない。",
          hiragana: "ちちはかじをてつだうことがきらいで、たべたあとのしょっきをかたづけようともしない。",
          romaji: "chichi wa kaji o tetsudau koto ga kirai de, tabeta ato no shokki o katazukeyou to mo shinai",
          meaning: "Bố tôi không thích giúp việc nhà, đến bát đĩa sau khi ăn cũng không chịu dọn."
        },
        {
          direction: "vi-romaji",
          kanji: "父に病院に行くことをすすめているが、父は行こうとしない。",
          hiragana: "ちちにびょういんにいくことをすすめているが、ちちはいこうとしない。",
          romaji: "chichi ni byouin ni iku koto o susumete iru ga, chichi wa ikou to shinai",
          meaning: "Tôi đang khuyên bố đi bệnh viện nhưng bố không chịu đi."
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
          hiragana: "ちゃんすがめのまえにあるのに、かれはいっぽふみだそうとしない。",
          romaji: "chansu ga me no mae ni aru no ni, kare wa ippo fumidasou to shinai",
          meaning: "Dù cơ hội ở ngay trước mắt, anh ấy vẫn không chịu bước tới."
        }
      ]
    }
  ]
});