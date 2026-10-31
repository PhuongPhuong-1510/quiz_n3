/*
  CHƯƠNG 4 BÀI 3 — NGỮ PHÁP
  Trang 52–58.
  6 nhóm ngữ pháp, 37 mục luyện tập.

  Bao gồm cụm 食べかけのパン trong phần giải thích.
  Các đoạn hội thoại giữ đủ lượt A và B trong cùng một mục.
  Thêm tên file vào ngu-phap/danh-sach-ngu-phap.js.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "chương 4 bài 3",
  grammar: [
    {
      structure: "Vます bỏ ます + かける／かけのN／かけだ",
      meaning: "Đang làm dở…; mới bắt đầu…; đang dần…",
      note: "Trang 52.\n\n1. Cách nối:\n• Thân động từ dạng ます + かける.\n• Thân động từ dạng ます + かけのN.\n• Thân động từ dạng ます + かけだ.\n• 食べる → 食べかける／食べかけのパン.\n• やる → やりかけのレポート.\n\n2. Hành động có ý chí:\n• Đã bắt đầu nhưng chưa hoàn thành, còn dang dở.\n• 食べかけのパン: bánh mì đang ăn dở.\n• やりかけのレポート: báo cáo đang làm dở.\n\n3. Thay đổi không do ý chí:\n• Một quá trình mới diễn ra một phần hoặc đang tiến tới trạng thái mới.\n• 溶けかけている: đang bắt đầu tan.\n• 腐りかけだ: đang có dấu hiệu thối.\n• 枯れかけている: đang héo dần.\n\n4. Phân biệt:\n• Vている có nhiều nghĩa, không nhất thiết còn dang dở.\n• Vかけ nhấn mạnh chưa hoàn thành hoặc mới chuyển trạng thái một phần.\n• Trước danh từ phải thêm の: 食べかけのパン.\n\n5. かける chia như động từ nhóm 2: かけた／かけている／かけない.\n6. Có giữ cả cụm 食べかけのパン trong phần giải thích của sách.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "食べかけのパン",
          hiragana: "たべかけのぱん",
          romaji: "tabekake no pan",
          meaning: "Bánh mì đang ăn dở."
        },
        {
          direction: "ja-vi",
          kanji: "ケーキを食べかけて、ダイエット中なのを思い出してやめた。",
          hiragana: "けーきをたべかけて、だいえっとちゅうなのをおもいだしてやめた。",
          romaji: "keeki o tabekakete, daiettochuu na no o omoidashite yameta",
          meaning: "Tôi mới ăn bánh được một chút thì nhớ ra mình đang ăn kiêng nên dừng lại."
        },
        {
          direction: "ja-vi",
          kanji: "さっき買ったばかりのアイスがもう溶けかけている。",
          hiragana: "さっきかったばかりのあいすがもうとけかけている。",
          romaji: "sakki katta bakari no aisu ga mou tokekakete iru",
          meaning: "Kem vừa mua lúc nãy mà đã bắt đầu tan."
        },
        {
          direction: "ja-vi",
          kanji: "若い学生たちと話をして、忘れかけていた自分の夢を思い出した。",
          hiragana: "わかいがくせいたちとはなしをして、わすれかけていたじぶんのゆめをおもいだした。",
          romaji: "wakai gakuseitachi to hanashi o shite, wasurekakete ita jibun no yume o omoidashita",
          meaning: "Trò chuyện với các sinh viên trẻ, tôi nhớ lại ước mơ mà mình đã gần quên."
        },
        {
          direction: "vi-romaji",
          kanji: "やりかけのレポートを終わらせてから、遊びに行くつもりだ。",
          hiragana: "やりかけのれぽーとをおわらせてから、あそびにいくつもりだ。",
          romaji: "yarikake no repooto o owarasete kara, asobi ni iku tsumori da",
          meaning: "Tôi định hoàn thành báo cáo đang làm dở rồi mới đi chơi."
        },
        {
          direction: "vi-romaji",
          kanji: "このマンゴは腐りかけだ。",
          hiragana: "このまんごはくさりかけだ。",
          romaji: "kono mango wa kusarikake da",
          meaning: "Quả xoài này đang bắt đầu thối."
        },
        {
          direction: "vi-romaji",
          kanji: "花が枯れかけているから、替えよう。",
          hiragana: "はながかれかけているから、かえよう。",
          romaji: "hana ga karekakete iru kara, kaeyou",
          meaning: "Hoa đang héo dần rồi, thay đi thôi."
        }
      ]
    },
    {
      structure: "Vます bỏ ます + かける（suýt, sắp xảy ra）",
      meaning: "Suýt…; gần như…; sắp sửa…",
      note: "Trang 53.\n\n1. Cách nối:\n• Thân động từ dạng ます + かける.\n• 死ぬ → 死にかける.\n• 落ちる → 落ちかける.\n• 溺れる → 溺れかける.\n\n2. Cách dùng:\n• Đang ở sát thời điểm một hành động hoặc trạng thái xảy ra.\n• Với sự việc nguy hiểm và câu kể lại như 落ちかけた, thường hiểu là suýt xảy ra nhưng đã tránh được.\n• Không nên hiểu thành quy tắc tuyệt đối rằng mọi Vかける đều khẳng định sự việc cuối cùng không xảy ra; cần xem thì và ngữ cảnh.\n\n3. Phân biệt với mục 1:\n• 食べかけ: đã ăn một phần, còn dang dở.\n• 死にかけ: ở trạng thái gần chết, không phải đã chết một phần.\n• Ý nghĩa phụ thuộc tính chất của động từ.\n\n4. Thường gặp:\n• あきらめかけていた: đã gần bỏ cuộc.\n• 車にひかれかけた: suýt bị ô tô đâm hoặc cán.\n• Thể bị động được chia trước: ひく → ひかれる → ひかれかける.\n\n5. Đoạn hội thoại ở ga được giữ đủ cả A và B.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "日本に旅行に行ったとき、財布を落としてしまって、あきらめかけていたんですが、誰かが交番に届けてくれていました。",
          hiragana: "にほんにりょこうにいったとき、さいふをおとしてしまって、あきらめかけていたんですが、だれかがこうばんにとどけてくれていました。",
          romaji: "Nihon ni ryokou ni itta toki, saifu o otoshite shimatte, akiramekakete ita n desu ga, dareka ga kouban ni todokete kurete imashita",
          meaning: "Khi đi du lịch Nhật, tôi đánh rơi ví và đã gần bỏ cuộc, nhưng có người đã mang nó đến đồn cảnh sát giúp tôi."
        },
        {
          direction: "ja-vi",
          kanji: "A：この前、駅のホームで他の人とぶつかって、線路に落ちかけたんです。\nB：うわあ、危なかったですね。線路のそばは、歩かないほうがいいですね。",
          hiragana: "A：このまえ、えきのほーむでほかのひととぶつかって、せんろにおちかけたんです。\nB：うわあ、あぶなかったですね。せんろのそばは、あるかないほうがいいですね。",
          romaji: "A: kono mae, eki no hoomu de hoka no hito to butsukatte, senro ni ochikaketa n desu. B: uwaa, abunakatta desu ne. senro no soba wa, arukanai hou ga ii desu ne",
          meaning: "A: Hôm trước, tôi va vào người khác ở sân ga và suýt rơi xuống đường ray.\nB: Ôi, nguy hiểm quá. Không nên đi sát đường ray nhỉ."
        },
        {
          direction: "vi-romaji",
          kanji: "一度、病気で死にかけたことがあります。",
          hiragana: "いちど、びょうきでしにかけたことがあります。",
          romaji: "ichido, byouki de shinikaketa koto ga arimasu",
          meaning: "Tôi từng có một lần suýt chết vì bệnh."
        },
        {
          direction: "vi-romaji",
          kanji: "子供の頃、プールで溺れかけた私を父が助けてくれた。",
          hiragana: "こどものころ、ぷーるでおぼれかけたわたしをちちがたすけてくれた。",
          romaji: "kodomo no koro, puuru de oborekaketa watashi o chichi ga tasukete kureta",
          meaning: "Hồi nhỏ, bố đã cứu tôi khi tôi suýt chết đuối trong bể bơi."
        },
        {
          direction: "vi-romaji",
          kanji: "昨日、道で車にひかれかけた。",
          hiragana: "きのう、みちでくるまにひかれかけた。",
          romaji: "kinou, michi de kuruma ni hikarekaketa",
          meaning: "Hôm qua tôi suýt bị ô tô đâm ngoài đường."
        }
      ]
    },
    {
      structure: "Vます bỏ ます + きる／きれる／きれない",
      meaning: "Làm hết…; làm đến cùng…; không thể làm hết…",
      note: "Trang 54.\n\n1. Cách nối:\n• Thân động từ dạng ます + きる.\n• 使う → 使いきる.\n• 読む → 読みきる.\n• やる → やりきる.\n\n2. Cách dùng:\n• Hoàn thành trọn vẹn một hành động hoặc dùng hết toàn bộ lượng có sẵn.\n• 食べきる: ăn hết.\n• 覚えきる: nhớ hết.\n• やりきる: làm đến cùng.\n\n3. Cách chia:\n• きる trong mẫu này chia như động từ nhóm 1: きります／きった／きらない.\n• Thể khả năng: きれる; phủ định khả năng: きれない.\n• 読みきれなかった: đã không thể đọc hết.\n\n4. Phân biệt:\n• 読み終わる nhấn mạnh đọc xong.\n• 読みきる nhấn mạnh đọc hết toàn bộ, làm trọn vẹn, đôi khi hàm ý vượt qua giới hạn hoặc khó khăn.\n• 食べない: không ăn.\n• 食べきれない: không thể ăn hết.\n\n5. 売りきれる là từ ghép quen dùng, nghĩa là bán hết, hết hàng. Không dịch thành không thể bán trong ví dụ.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "一人暮らしなので、調味料を買ってもいつも使いきれないで捨ててしまう。",
          hiragana: "ひとりぐらしなので、ちょうみりょうをかってもいつもつかいきれないですててしまう。",
          romaji: "hitorigurashi na node, choumiryou o katte mo itsumo tsukaikirenaide sutete shimau",
          meaning: "Vì sống một mình, tôi thường không dùng hết gia vị đã mua rồi phải bỏ đi."
        },
        {
          direction: "ja-vi",
          kanji: "A店のいちごケーキは大人気で、いつも開店してすぐに売りきれてしまう。",
          hiragana: "えーてんのいちごけーきはだいにんきで、いつもかいてんしてすぐにうりきれてしまう。",
          romaji: "ee ten no ichigo keeki wa daininki de, itsumo kaiten shite sugu ni urikirete shimau",
          meaning: "Bánh dâu của cửa hàng A rất được yêu thích nên luôn bán hết ngay sau khi mở cửa."
        },
        {
          direction: "ja-vi",
          kanji: "先生から面白い小説を借りたけど、長すぎて読みきれなかった。",
          hiragana: "せんせいからおもしろいしょうせつをかりたけど、ながすぎてよみきれなかった。",
          romaji: "sensei kara omoshiroi shousetsu o karita kedo, nagasugite yomikirenakatta",
          meaning: "Tôi mượn một cuốn tiểu thuyết thú vị từ giáo viên nhưng dài quá nên không đọc hết được."
        },
        {
          direction: "vi-romaji",
          kanji: "夏休みの間に、N2までの単語を全て覚えきった。",
          hiragana: "なつやすみのあいだに、えぬにまでのたんごをすべておぼえきった。",
          romaji: "natsuyasumi no aida ni, enu ni made no tango o subete oboekitta",
          meaning: "Trong kỳ nghỉ hè, tôi đã nhớ hết từ vựng đến trình độ N2."
        },
        {
          direction: "vi-romaji",
          kanji: "こんな量のご飯、一人では食べきれない。",
          hiragana: "こんなりょうのごはん、ひとりではたべきれない。",
          romaji: "konna ryou no gohan, hitori de wa tabekirenai",
          meaning: "Lượng cơm nhiều thế này thì một mình tôi không ăn hết nổi."
        },
        {
          direction: "vi-romaji",
          kanji: "どんなことでも、最後まであきらめないで、やりきることが大切だ。",
          hiragana: "どんなことでも、さいごまであきらめないで、やりきることがたいせつだ。",
          romaji: "donna koto de mo, saigo made akiramenaide, yarikiru koto ga taisetsu da",
          meaning: "Dù làm việc gì, điều quan trọng là không bỏ cuộc mà làm đến cùng."
        }
      ]
    },
    {
      structure: "Vます bỏ ます + きる（trạng thái cực độ）",
      meaning: "Hoàn toàn…; hết sức…; đến mức cực độ…",
      note: "Trang 55.\n\n1. Cách nối:\n• Thân động từ dạng ます + きる.\n• 疲れる → 疲れきる.\n• 信頼する → 信頼しきる.\n• 分かる → 分かりきる.\n\n2. Cách dùng:\n• Đẩy trạng thái, cảm xúc hoặc mức độ nhận thức đến giới hạn cao.\n• 疲れきっている: kiệt sức hoàn toàn.\n• 信頼しきっている: hoàn toàn tin tưởng.\n• 分かりきったこと: chuyện đã rõ ràng, hiển nhiên.\n\n3. Phân biệt với mục 3:\n• 食べきる: hoàn thành toàn bộ hành động ăn.\n• 疲れきる: trạng thái mệt đạt mức cực độ.\n• Không dịch mọi Vきる thành làm xong.\n\n4. Đây là cách kết hợp cần học theo từ, không ghép tùy ý với mọi động từ cảm xúc.\n5. Trong đáp án 疲れきってる, てる là dạng hội thoại rút gọn của ている. Dữ liệu dùng dạng đầy đủ 疲れきっている để luyện chuẩn.\n6. Giữ đủ lượt hỏi đáp ở ví dụ về chữ Hán.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼女は仕事が終わり、疲れきっていたはずなのに、少しもそんな様子を見せなかった。",
          hiragana: "かのじょはしごとがおわり、つかれきっていたはずなのに、すこしもそんなようすをみせなかった。",
          romaji: "kanojo wa shigoto ga owari, tsukarekItte ita hazu na no ni, sukoshi mo sonna yousu o misenakatta".toLowerCase(),
          meaning: "Sau khi xong việc, đáng lẽ cô ấy phải kiệt sức, nhưng lại không hề tỏ ra như vậy."
        },
        {
          direction: "ja-vi",
          kanji: "信頼しきっていた人に利用されていたことを知って、ショックで涙も出ない。",
          hiragana: "しんらいしきっていたひとにりようされていたことをしって、しょっくでなみだもでない。",
          romaji: "shinrai shikitte ita hito ni riyou sarete ita koto o shitte, shokku de namida mo denai",
          meaning: "Biết mình bị người hoàn toàn tin tưởng lợi dụng, tôi sốc đến mức không khóc nổi."
        },
        {
          direction: "ja-vi",
          kanji: "A：漢字って難しい？\nB：難しいよ。どうしてそんなわかりきったことを聞くの？",
          hiragana: "A：かんじってむずかしい？\nB：むずかしいよ。どうしてそんなわかりきったことをきくの？",
          romaji: "A: kanji tte muzukashii. B: muzukashii yo. doushite sonna wakarikitta koto o kiku no",
          meaning: "A: Chữ Hán có khó không?\nB: Khó chứ. Sao lại hỏi chuyện hiển nhiên như vậy?"
        },
        {
          direction: "vi-romaji",
          kanji: "母親は毎日、家事や子育てが忙しく、疲れきっている。",
          hiragana: "ははおやはまいにち、かじやこそだてがいそがしく、つかれきっている。",
          romaji: "hahaoya wa mainichi, kaji ya kosodate ga isogashiku, tsukarekItte iru".toLowerCase(),
          meaning: "Mẹ hằng ngày bận việc nhà và chăm con đến mức kiệt sức."
        },
        {
          direction: "vi-romaji",
          kanji: "きっと合格していると思って安心しきっていたら、不合格だった。",
          hiragana: "きっとごうかくしているとおもってあんしんしきっていたら、ふごうかくだった。",
          romaji: "kitto goukaku shite iru to omotte anshin shikitte itara, fugoukaku datta",
          meaning: "Tôi nghĩ chắc mình đã đỗ và hoàn toàn yên tâm, nhưng kết quả lại trượt."
        }
      ]
    },
    {
      structure: "～まま／Vるままに",
      meaning: "Giữ nguyên…; vẫn… như vậy; làm theo…",
      note: "Trang 56.\n\n1. Nghĩa giữ nguyên trạng thái:\n• Vた + まま: giữ nguyên trạng thái sau hành động.\n• Vない + まま: chưa làm hoặc không làm mà cứ như vậy.\n• Aい + まま.\n• Aな + な + まま.\n• Nの + まま.\n• Có thể nối bằng まま／ままで hoặc kết thúc bằng ままだ tùy câu.\n\n2. Ví dụ trạng thái:\n• 口を開けたまま寝る: ngủ mà vẫn há miệng.\n• 化粧をしないまま出る: ra ngoài khi chưa trang điểm.\n• きれいなままだ: vẫn xinh đẹp như trước.\n• 昔のまま: vẫn như ngày xưa.\n\n3. Nghĩa làm theo:\n• V thể từ điển + まま（に）.\n• Thường dùng với động từ bị động: 言われるままに／指示されるままに.\n• Diễn tả làm theo lời nói, chỉ dẫn hoặc sự dẫn dắt, thường không tự điều chỉnh hay chống lại.\n\n4. Phân biệt:\n• マスクをかけたまま: vẫn đeo khẩu trang.\n• 誘われるまま: theo lời mời của người khác.\n• Hai nghĩa không nên dịch giống nhau một cách máy móc.\n\n5. まま tự nó khá trung tính; cảm giác tốt hoặc xấu phụ thuộc nội dung. So với っぱなし, nó không nhất thiết hàm ý bỏ mặc hay quên xử lý.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "五年ぶりに、お母さんが作った料理を食べることができた。母の味は昔のままで美味しかった。",
          hiragana: "ごねんぶりに、おかあさんがつくったりょうりをたべることができた。ははのあじはむかしのままでおいしかった。",
          romaji: "go nen buri ni, okaasan ga tsukutta ryouri o taberu koto ga dekita. haha no aji wa mukashi no mama de oishikatta",
          meaning: "Sau năm năm, tôi mới được ăn món mẹ nấu. Hương vị vẫn như xưa và rất ngon."
        },
        {
          direction: "ja-vi",
          kanji: "コロナに感染する心配があるから、学校でマスクをかけたまま、授業に出ることになった。",
          hiragana: "ころなにかんせんするしんぱいがあるから、がっこうでますくをかけたまま、じゅぎょうにでることになった。",
          romaji: "korona ni kansen suru shinpai ga aru kara, gakkou de masuku o kaketa mama, jugyou ni deru koto ni natta",
          meaning: "Vì lo nhiễm virus corona nên có quyết định rằng phải đeo khẩu trang khi tham gia giờ học ở trường."
        },
        {
          direction: "ja-vi",
          kanji: "彼女に誘われるまま、パーティーに来た。",
          hiragana: "かのじょにさそわれるまま、ぱーてぃーにきた。",
          romaji: "kanojo ni sasowareru mama, paatii ni kita",
          meaning: "Tôi theo lời cô ấy mời mà đến bữa tiệc."
        },
        {
          direction: "vi-romaji",
          kanji: "同窓会で久しぶりに初恋の彼女に会ったら、相変わらずきれいなままだった。",
          hiragana: "どうそうかいでひさしぶりにはつこいのかのじょにあったら、あいかわらずきれいなままだった。",
          romaji: "dousoukai de hisashiburi ni hatsukoi no kanojo ni attara, aikawarazu kirei na mama datta",
          meaning: "Gặp lại cô gái mối tình đầu sau lâu ngày ở buổi họp lớp, cô ấy vẫn xinh đẹp như trước."
        },
        {
          direction: "vi-romaji",
          kanji: "化粧をしないまま外に出るのは、自信がありません。",
          hiragana: "けしょうをしないままそとにでるのは、じしんがありません。",
          romaji: "keshou o shinai mama soto ni deru no wa, jishin ga arimasen",
          meaning: "Tôi không tự tin ra ngoài khi chưa trang điểm."
        },
        {
          direction: "vi-romaji",
          kanji: "うちの旦那は口を開けたまま寝る癖がある。",
          hiragana: "うちのだんなはくちをあけたままねるくせがある。",
          romaji: "uchi no danna wa kuchi o aketa mama neru kuse ga aru",
          meaning: "Chồng tôi có thói quen há miệng khi ngủ."
        },
        {
          direction: "vi-romaji",
          kanji: "社長に指示されるまま、夜遅くまで残業しました。",
          hiragana: "しゃちょうにしじされるまま、よるおそくまでざんぎょうしました。",
          romaji: "shachou ni shiji sareru mama, yoru osoku made zangyou shimashita",
          meaning: "Tôi làm theo chỉ thị của giám đốc và tăng ca đến tận đêm khuya."
        },
        {
          direction: "vi-romaji",
          kanji: "うちの旦那は娘に言われるままに、なんでも買ってあげてしまうので、本当に困っていますよ。",
          hiragana: "うちのだんなはむすめにいわれるままに、なんでもかってあげてしまうので、ほんとうにこまっていますよ。",
          romaji: "uchi no danna wa musume ni iwareru mama ni, nande mo katte agete shimau node, hontou ni komatte imasu yo",
          meaning: "Chồng tôi cứ mua mọi thứ con gái đòi nên tôi thật sự rất khổ tâm."
        }
      ]
    },
    {
      structure: "Vます bỏ ます + っぱなし",
      meaning: "Cứ để nguyên…; cứ… suốt",
      note: "Trang 57.\n\n1. Cách nối:\n• Thân động từ dạng ます + っぱなし.\n• っぱなしだ／っぱなしで.\n• っぱなしにする／っぱなしになる.\n• っぱなしのN.\n• つける → つけっぱなし; 働く → 働きっぱなし.\n\n2. Nghĩa bỏ nguyên trạng thái:\n• Làm một hành động rồi không xử lý bước đáng lẽ cần làm tiếp theo.\n• 借りっぱなし: mượn mà chưa trả.\n• つけっぱなし: bật mà để nguyên, chưa tắt.\n• Thường có sắc thái quên, bỏ mặc hoặc không hài lòng.\n\n3. Nghĩa liên tục:\n• Một hành động hoặc trạng thái cứ tiếp diễn.\n• 働きっぱなし: làm việc suốt.\n• 言われっぱなし: cứ bị nói, bị nhắc suốt.\n• 勝ちっぱなし: thắng liên tục.\n\n4. Sắc thái:\n• Bài nhấn mạnh cách dùng tiêu cực, như mệt mỏi hoặc phàn nàn.\n• Tuy nhiên không phải mọi っぱなし đều tự mang nghĩa xấu; 勝ちっぱなし có thể tích cực tùy người nói và ngữ cảnh.\n\n5. So với まま:\n• まま mô tả trạng thái không thay đổi, tương đối trung tính.\n• っぱなし thường nhấn mạnh bỏ nguyên trạng thái đáng lẽ phải xử lý, hoặc hành động kéo dài.\n• テレビをつけっぱなしで寝る thường gợi ý đáng lẽ nên tắt tivi.\n\n6. あいつ là cách gọi rất thân mật hoặc thiếu thiện cảm. Trong đáp án cuối, người nói tỏ ra khó chịu với người thắng liên tục.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼からお金を借りっぱなしだったことを今思い出した。",
          hiragana: "かれからおかねをかりっぱなしだったことをいまおもいだした。",
          romaji: "kare kara okane o karippanashi datta koto o ima omoidashita",
          meaning: "Giờ tôi mới nhớ ra mình đã mượn tiền anh ấy mà chưa trả."
        },
        {
          direction: "ja-vi",
          kanji: "人手が足りなくて先週からずっと働きっぱなしだ。",
          hiragana: "ひとでがたりなくてせんしゅうからずっとはたらきっぱなしだ。",
          romaji: "hitode ga tarinakute senshuu kara zutto hatarakippanashi da",
          meaning: "Vì thiếu người nên từ tuần trước đến giờ tôi làm việc suốt."
        },
        {
          direction: "ja-vi",
          kanji: "夫は何度注意してもテレビをつけっぱなしで寝てしまう。",
          hiragana: "おっとはなんどちゅういしてもてれびをつけっぱなしでねてしまう。",
          romaji: "otto wa nando chuui shite mo terebi o tsukeppanashi de nete shimau",
          meaning: "Dù nhắc bao nhiêu lần, chồng tôi vẫn ngủ mà để tivi bật."
        },
        {
          direction: "vi-romaji",
          kanji: "エアコンを入れっぱなしで外出したら、母に怒られた。",
          hiragana: "えあこんをいれっぱなしでがいしゅつしたら、ははにおこられた。",
          romaji: "eakon o ireppanashi de gaishutsu shitara, haha ni okorareta",
          meaning: "Tôi ra ngoài mà để điều hòa bật nên bị mẹ mắng."
        },
        {
          direction: "vi-romaji",
          kanji: "母に結婚のことを言われっぱなしです。",
          hiragana: "ははにけっこんのことをいわれっぱなしです。",
          romaji: "haha ni kekkon no koto o iwareppanashi desu",
          meaning: "Tôi bị mẹ nhắc suốt về chuyện kết hôn."
        },
        {
          direction: "vi-romaji",
          kanji: "あいつは勝ちっぱなしで嫌だ。",
          hiragana: "あいつはかちっぱなしでいやだ。",
          romaji: "aitsu wa kachippanashi de iya da",
          meaning: "Tên đó cứ thắng suốt, thật đáng ghét."
        }
      ]
    }
  ]
});