/*
  NGỮ PHÁP - CHƯƠNG 2 BÀI 1
  Nguồn: GUNGUN JOUTATSU N3 - Chương 2, bài 1.
  direction:
    "ja-vi" = hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-ja" = hiện câu Việt, nhập câu Nhật bằng Kanji hoặc Hiragana.
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 2 bài 1",
  grammar: [
    {
      structure: "～によって（1）",
      meaning: "Bằng… / Thông qua...",
      note: "Danh từ (N) chỉ công cụ, phương thức. Không dùng với những công cụ thân quen. ～により là cách nói cứng, lịch sự hơn, thường dùng trong văn viết. Cấu trúc: N / Vること + によって・により; N1 + による + N2.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "毎日日本語を練習することによって、日本語が上達します。",
          hiragana: "まいにちにほんごをれんしゅうすることによって、にほんごがじょうたつします。",
          romaji: "mainichi nihongo o renshuu suru koto ni yotte, nihongo ga joutatsu shimasu",
          meaning: "Thông qua việc luyện tập tiếng Nhật mỗi ngày, tiếng Nhật sẽ tiến bộ."
        },
        {
          direction: "ja-vi",
          kanji: "この薬を飲むことによって、かぜがなおるかもしれない。",
          hiragana: "このくすりをのむことによって、かぜがなおるかもしれない。",
          romaji: "kono kusuri o nomu koto ni yotte, kaze ga naoru kamo shirenai",
          meaning: "Thông qua việc uống thuốc này, có thể bệnh cảm sẽ khỏi."
        },
        {
          direction: "ja-vi",
          kanji: "スマートフォンによって、多くの情報が簡単に手に入るようになった。",
          hiragana: "すまーとふぉんによって、おおくのじょうほうがかんたんにてにはいるようになった。",
          romaji: "sumaatofon ni yotte, ooku no jouhou ga kantan ni te ni hairu you ni natta",
          meaning: "Nhờ điện thoại thông minh, việc có được nhiều thông tin đã trở nên dễ dàng."
        },
        {
          direction: "vi-ja",
          kanji: "インターネットによって、さまざまな情報を得ることができる。",
          hiragana: "いんたーねっとによって、さまざまなじょうほうをえることができる。",
          romaji: "intaanetto ni yotte, samazama na jouhou o eru koto ga dekiru",
          meaning: "Thông qua mạng internet, chúng ta có thể thu thập được rất nhiều thông tin.",
          acceptedJapanese: [
            "インターネットによって、さまざまな情報を得ることができる。",
            "いんたーねっとによって、さまざまなじょうほうをえることができる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "日本人とよく交流することによって、日本語も上達しました。",
          hiragana: "にほんじんとよくこうりゅうすることによって、にほんごもじょうたつしました。",
          romaji: "nihonjin to yoku kouryuu suru koto ni yotte, nihongo mo joutatsu shimashita",
          meaning: "Thông qua việc thường hay giao lưu với người Nhật, tiếng Nhật cũng giỏi lên.",
          acceptedJapanese: [
            "日本人とよく交流することによって、日本語も上達しました。",
            "日本人とよく交流することにより、日本語も上達しました。",
            "にほんじんとよくこうりゅうすることによって、にほんごもじょうたつしました。",
            "にほんじんとよくこうりゅうすることにより、にほんごもじょうたつしました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "アンケートによる調査",
          hiragana: "あんけーとによるちょうさ",
          romaji: "ankeeto ni yoru chousa",
          meaning: "Cuộc điều tra bằng phiếu điều tra.",
          acceptedJapanese: [
            "アンケートによる調査",
            "あんけーとによるちょうさ"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "インターネットによる学習環境",
          hiragana: "いんたーねっとによるがくしゅうかんきょう",
          romaji: "intaanetto ni yoru gakushuu kankyou",
          meaning: "Môi trường học tập thông qua internet.",
          acceptedJapanese: [
            "インターネットによる学習環境",
            "いんたーねっとによるがくしゅうかんきょう"
          ]
        }
      ]
    },
    {
      structure: "～によって（2）",
      meaning: "Vì… / Do...",
      note: "Diễn tả nguyên nhân, lí do dẫn đến một sự việc nào đó. Thường dùng trong văn viết, báo chí, văn bản, thông báo. Cấu trúc: N / Vること + によって; N1 + による + N2.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "今日は台風によって、学校が休みになった。",
          hiragana: "きょうはたいふうによって、がっこうがやすみになった。",
          romaji: "kyou wa taifuu ni yotte, gakkou ga yasumi ni natta",
          meaning: "Hôm nay vì bão nên trường được nghỉ."
        },
        {
          direction: "ja-vi",
          kanji: "今朝の大雨によって、会社に着くのが遅れた。",
          hiragana: "けさのおおあめによって、かいしゃにつくのがおくれた。",
          romaji: "kesa no ooame ni yotte, kaisha ni tsuku no ga okureta",
          meaning: "Do mưa lớn sáng nay nên tôi đến công ty muộn."
        },
        {
          direction: "ja-vi",
          kanji: "彼はたくさんタバコを吸ったことによって、病気になった。",
          hiragana: "かれはたくさんたばこをすったことによって、びょうきになった。",
          romaji: "kare wa takusan tabako o sutta koto ni yotte, byouki ni natta",
          meaning: "Anh ấy bị bệnh do hút rất nhiều thuốc lá."
        },
        {
          direction: "vi-ja",
          kanji: "大雪によって、電車が止まりました。",
          hiragana: "おおゆきによって、でんしゃがとまりました。",
          romaji: "ooyuki ni yotte, densha ga tomarimashita",
          meaning: "Vì tuyết lớn nên tàu bị dừng lại.",
          acceptedJapanese: [
            "大雪によって、電車が止まりました。",
            "おおゆきによって、でんしゃがとまりました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "働いている会社が倒産されたことによって、仕事がなくなりました。",
          hiragana: "はたらいているかいしゃがとうさんされたことによって、しごとがなくなりました。",
          romaji: "hataraite iru kaisha ga tousan sareta koto ni yotte, shigoto ga nakunarimashita",
          meaning: "Công ty nơi tôi làm việc bị phá sản nên là tôi mất việc.",
          acceptedJapanese: [
            "働いている会社が倒産されたことによって、仕事がなくなりました。",
            "はたらいているかいしゃがとうさんされたことによって、しごとがなくなりました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "地震による死者",
          hiragana: "じしんによるししゃ",
          romaji: "jishin ni yoru shisha",
          meaning: "Người chết vì động đất.",
          acceptedJapanese: [
            "地震による死者",
            "じしんによるししゃ"
          ]
        }
      ]
    },
    {
      structure: "～によって（3）",
      meaning: "Tùy vào N / Tùy theo N",
      note: "Tùy vào N mà vế sau sẽ khác hoặc thay đổi. Vế sau thường đi với những từ thể hiện sự không nhất định như いろいろある、違う、さまざまだ、異なる. Cấu trúc: N + によって.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "この店は時間によってメニューが変わる。",
          hiragana: "このみせはじかんによってめにゅーがかわる。",
          romaji: "kono mise wa jikan ni yotte menyuu ga kawaru",
          meaning: "Cửa hàng này thay đổi thực đơn tùy theo thời gian."
        },
        {
          direction: "ja-vi",
          kanji: "行く場所によって、着て行く洋服を考えた方がいい。",
          hiragana: "いくばしょによって、きていくようふくをかんがえたほうがいい。",
          romaji: "iku basho ni yotte, kite iku youfuku o kangaeta hou ga ii",
          meaning: "Tùy nơi sẽ đến mà nên cân nhắc quần áo mặc đi."
        },
        {
          direction: "ja-vi",
          kanji: "言葉や文化は国によって違うので、とても面白い。",
          hiragana: "ことばやぶんかはくにによってちがうので、とてもおもしろい。",
          romaji: "kotoba ya bunka wa kuni ni yotte chigau node, totemo omoshiroi",
          meaning: "Ngôn ngữ và văn hóa khác nhau tùy từng quốc gia nên rất thú vị."
        },
        {
          direction: "vi-ja",
          kanji: "人によって考え方も違います。",
          hiragana: "ひとによってかんがえかたもちがいます。",
          romaji: "hito ni yotte kangaekata mo chigaimasu",
          meaning: "Tùy vào mỗi người mà cách suy nghĩ sẽ khác nhau.",
          acceptedJapanese: [
            "人によって考え方も違います。",
            "考え方は人によって様々です。",
            "ひとによってかんがえかたもちがいます。",
            "かんがえかたはひとによってさまざまです。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "ここからは天候によって、富士山は見えたり、見えなかったりします。",
          hiragana: "ここからはてんこうによって、ふじさんはみえたり、みえなかったりします。",
          romaji: "koko kara wa tenkou ni yotte, fujisan wa mietari, mienakattari shimasu",
          meaning: "Từ vị trí này, tùy vào thời tiết mà có thể nhìn thấy núi Phú Sĩ hoặc là không.",
          acceptedJapanese: [
            "ここからは天候によって、富士山は見えたり、見えなかったりします。",
            "ここからは天気によって、富士山は見えたり、見えなかったりします。",
            "ここからはてんこうによって、ふじさんはみえたり、みえなかったりします。",
            "ここからはてんきによって、ふじさんはみえたり、みえなかったりします。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "努力した分によって、結果も異なります。",
          hiragana: "どりょくしたぶんによって、けっかもことなります。",
          romaji: "doryoku shita bun ni yotte, kekka mo kotonarimasu",
          meaning: "Tùy vào những cái đã nỗ lực mà kết quả cũng sẽ khác.",
          acceptedJapanese: [
            "努力した分によって、結果も異なります。",
            "どりょくしたぶんによって、けっかもことなります。"
          ]
        }
      ]
    },
    {
      structure: "～ことで",
      meaning: "Bằng việc... / Thông qua việc... / Nhờ việc...",
      note: "Diễn tả phương pháp, cách thức, hành động cụ thể dẫn đến kết quả nào đó. Có thể hiểu là: “Thông qua A → đạt được B”. Cấu trúc: Vる + ことで.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "食事の量を減らすことで、1か月に3キロくらい痩せられるはずだ。",
          hiragana: "しょくじのりょうをへらすことで、いっかげつにさんきろくらいやせられるはずだ。",
          romaji: "shokuji no ryou o herasu koto de, ikkagetsu ni san kiro kurai yaserareru hazu da",
          meaning: "Bằng cách giảm lượng thức ăn, chắc là có thể giảm khoảng 3 kg trong một tháng."
        },
        {
          direction: "ja-vi",
          kanji: "毎日お弁当を持って来ることで、生活費を少なくすることができる。",
          hiragana: "まいにちおべんとうをもってくることで、せいかつひをすくなくすることができる。",
          romaji: "mainichi obentou o motte kuru koto de, seikatsuhi o sukunaku suru koto ga dekiru",
          meaning: "Bằng việc mang cơm hộp đến mỗi ngày, có thể giảm chi phí sinh hoạt."
        },
        {
          direction: "ja-vi",
          kanji: "2か所でアルバイトをすることで、大学のお金を払っている。",
          hiragana: "にかしょであるばいとをすることで、だいがくのおかねをはらっている。",
          romaji: "ni kasho de arubaito o suru koto de, daigaku no okane o haratte iru",
          meaning: "Tôi trả tiền học đại học bằng cách làm thêm ở hai nơi."
        },
        {
          direction: "vi-ja",
          kanji: "体を温めることで、風邪を引きにくくなるそうです。",
          hiragana: "からだをあたためることで、かぜをひきにくくなるそうです。",
          romaji: "karada o atatameru koto de, kaze o hikinikuku naru sou desu",
          meaning: "Nghe nói rằng bằng cách làm ấm cơ thể thì sẽ khó bị cảm lạnh hơn.",
          acceptedJapanese: [
            "体を温めることで、風邪を引きにくくなるそうです。",
            "からだをあたためることで、かぜをひきにくくなるそうです。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "ボランティア活動に参加することで、さまざまな経験を得ることができます。",
          hiragana: "ぼらんてぃあかつどうにさんかすることで、さまざまなけいけんをえることができます。",
          romaji: "borantia katsudou ni sanka suru koto de, samazama na keiken o eru koto ga dekimasu",
          meaning: "Thông qua việc tham gia hoạt động tình nguyện mà có thể thu được nhiều kinh nghiệm khác nhau.",
          acceptedJapanese: [
            "ボランティア活動に参加することで、さまざまな経験を得ることができます。",
            "ぼらんてぃあかつどうにさんかすることで、さまざまなけいけんをえることができます。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "人の話を聞くことで、自分の考えが深まることもある。",
          hiragana: "ひとのはなしをきくことで、じぶんのかんがえがふかまることもある。",
          romaji: "hito no hanashi o kiku koto de, jibun no kangae ga fukamaru koto mo aru",
          meaning: "Bằng cách lắng nghe người khác, đôi khi suy nghĩ của bản thân sẽ trở nên sâu sắc hơn.",
          acceptedJapanese: [
            "人の話を聞くことで、自分の考えが深まることもある。",
            "ひとのはなしをきくことで、じぶんのかんがえがふかまることもある。"
          ]
        }
      ]
    },
    {
      structure: "～おかげ",
      meaning: "Nhờ có...",
      note: "Nhờ có một nguyên nhân mà có được kết quả tốt. Chứa cảm xúc cảm ơn, cảm kích. Cụm おかげさまで dùng nhiều trong giao tiếp. おかげか: không biết có phải nhờ... mà có kết quả tốt; おかげで: nhờ... mà có kết quả tốt (chắc chắn). Cấu trúc: 普通形 / Aな・Aなである / Nの・Nである + おかげ.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私が高校を卒業できたのは、先生達のおかげです。",
          hiragana: "わたしがこうこうをそつぎょうできたのは、せんせいたちのおかげです。",
          romaji: "watashi ga koukou o sotsugyou dekita no wa, senseitachi no okage desu",
          meaning: "Tôi có thể tốt nghiệp cấp ba là nhờ các thầy cô."
        },
        {
          direction: "ja-vi",
          kanji: "会社が家から近いおかげで、休憩の時帰ることができる。",
          hiragana: "かいしゃがいえからちかいおかげで、きゅうけいのときかえることができる。",
          romaji: "kaisha ga ie kara chikai okage de, kyuukei no toki kaeru koto ga dekiru",
          meaning: "Nhờ công ty gần nhà nên lúc nghỉ tôi có thể về nhà."
        },
        {
          direction: "ja-vi",
          kanji: "いつもより早く寝たおかげか、今日はとても調子がいい。",
          hiragana: "いつもよりはやくねたおかげか、きょうはとてもちょうしがいい。",
          romaji: "itsumo yori hayaku neta okage ka, kyou wa totemo choushi ga ii",
          meaning: "Không biết có phải nhờ ngủ sớm hơn mọi ngày không mà hôm nay tôi thấy rất khỏe."
        },
        {
          direction: "vi-ja",
          kanji: "Thanh先生が丁寧に教えてくれたおかげで、N3の文法について詳しく理解できました。",
          hiragana: "Thanhせんせいがていねいにおしえてくれたおかげで、N3のぶんぽうについてくわしくりかいできました。",
          romaji: "Thanh sensei ga teinei ni oshiete kureta okage de, N3 no bunpou ni tsuite kuwashiku rikai dekimashita",
          meaning: "Nhờ có cô Thanh giảng giải một cách cẩn thận cho tôi, mà tôi đã hiểu chi tiết ngữ pháp N3.",
          acceptedJapanese: [
            "Thanh先生が丁寧に教えてくれたおかげで、N3の文法について詳しく理解できました。",
            "Thanhせんせいがていねいにおしえてくれたおかげで、N3のぶんぽうについてくわしくりかいできました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "彼が励ましてくれたおかげで、元気が出た。",
          hiragana: "かれがはげましてくれたおかげで、げんきがでた。",
          romaji: "kare ga hagemashite kureta okage de, genki ga deta",
          meaning: "Nhờ có anh ấy động viên tôi, mà tôi đã phấn chấn hơn.",
          acceptedJapanese: [
            "彼が励ましてくれたおかげで、元気が出た。",
            "かれがはげましてくれたおかげで、げんきがでた。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "薬のおかげか風邪が治りました。",
          hiragana: "くすりのおかげかかぜがなおりました。",
          romaji: "kusuri no okage ka kaze ga naorimashita",
          meaning: "Không biết có phải là nhờ thuốc mà mình đã khỏi bệnh cảm hay không.",
          acceptedJapanese: [
            "薬のおかげか風邪が治りました。",
            "くすりのおかげかかぜがなおりました。"
          ]
        }
      ]
    },
    {
      structure: "～せい",
      meaning: "Chỉ tại… / Tại vì...",
      note: "Đưa ra nguyên nhân. Thường dẫn tới kết quả xấu, không tích cực. Cấu trúc: 普通形 / Aな・Aなである / Nの・Nである + せい.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "暑くなってきたせいでよく喉が乾き、水ばかりを飲んでいる。",
          hiragana: "あつくなってきたせいでよくのどがかわき、みずばかりをのんでいる。",
          romaji: "atsuku natte kita sei de yoku nodo ga kawaki, mizu bakari o nonde iru",
          meaning: "Chỉ tại trời ngày càng nóng nên tôi thường khát cổ và toàn uống nước."
        },
        {
          direction: "ja-vi",
          kanji: "今日の試合で負けたのはみんなのせいじゃなくて、全部私のせいだ。",
          hiragana: "きょうのしあいでまけたのはみんなのせいじゃなくて、ぜんぶわたしのせいだ。",
          romaji: "kyou no shiai de maketa no wa minna no sei janakute, zenbu watashi no sei da",
          meaning: "Thua trận hôm nay không phải lỗi của mọi người mà hoàn toàn là lỗi của tôi."
        },
        {
          direction: "ja-vi",
          kanji: "この村は不便なせいか、最近は住む人が全然いなくなった。",
          hiragana: "このむらはふべんなせいか、さいきんはすむひとがぜんぜんいなくなった。",
          romaji: "kono mura wa fuben na sei ka, saikin wa sumu hito ga zenzen inaku natta",
          meaning: "Không biết có phải vì ngôi làng này bất tiện không mà gần đây chẳng còn ai sống ở đây."
        },
        {
          direction: "vi-ja",
          kanji: "新型コロナウイルスのせいで、日本に行けなくなった。",
          hiragana: "しんがたころなういるすのせいで、にほんにいけなくなった。",
          romaji: "shingata korona uirusu no sei de, nihon ni ikenaku natta",
          meaning: "Chỉ tại virus Corona mà mình không thể đi Nhật được.",
          acceptedJapanese: [
            "新型コロナウイルスのせいで、日本に行けなくなった。",
            "しんがたころなういるすのせいで、にほんにいけなくなった。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "タピオカを飲んだせいか、夜眠れなかった。",
          hiragana: "たぴおかをのんだせいか、よるねむれなかった。",
          romaji: "tapioka o nonda sei ka, yoru nemurenakatta",
          meaning: "Không biết có phải là vì uống trà sữa không mà bây giờ mình bị mất ngủ.",
          acceptedJapanese: [
            "タピオカを飲んだせいか、夜眠れなかった。",
            "たぴおかをのんだせいか、よるねむれなかった。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "気のせいか、今日のパンはいつもより小さい。",
          hiragana: "きのせいか、きょうのぱんはいつもよりちいさい。",
          romaji: "ki no sei ka, kyou no pan wa itsumo yori chiisai",
          meaning: "Không biết có phải do cảm giác hay không mà bánh mỳ hôm nay nhỏ hơn mọi khi.",
          acceptedJapanese: [
            "気のせいか、今日のパンはいつもより小さい。",
            "きのせいか、きょうのぱんはいつもよりちいさい。"
          ]
        }
      ]
    },
    {
      structure: "～ことから",
      meaning: "Xuất phát từ... / Vì lý do...",
      note: "Dùng để diễn đạt nguồn gốc tên gọi của một sự vật, sự việc; hoặc đưa ra cơ sở của một phán đoán, hay lý do cho một việc nào đó. Cấu trúc: 普通形 / Aな・Aなである / Nである + ことから.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "安全な人生を送ってほしいことから、子供に「AN」と名付けました。",
          hiragana: "あんぜんなじんせいをおくってほしいことから、こどもに「AN」となづけました。",
          romaji: "anzen na jinsei o okutte hoshii koto kara, kodomo ni AN to nazukemashita",
          meaning: "Vì mong con có một cuộc đời an toàn nên tôi đặt tên con là “AN”."
        },
        {
          direction: "ja-vi",
          kanji: "道が濡れていることから、昨晩雨が降ったことが分かる。",
          hiragana: "みちがぬれていることから、さくばんあめがふったことがわかる。",
          romaji: "michi ga nurete iru koto kara, sakuban ame ga futta koto ga wakaru",
          meaning: "Từ việc đường đang ướt, có thể biết rằng tối qua đã mưa."
        },
        {
          direction: "ja-vi",
          kanji: "彼女は時間があっても勉強しなかったことから、今回の試験の点数が悪くなったそうです。",
          hiragana: "かのじょはじかんがあってもべんきょうしなかったことから、こんかいのしけんのてんすうがわるくなったそうです。",
          romaji: "kanojo wa jikan ga atte mo benkyou shinakatta koto kara, konkai no shiken no tensuu ga waruku natta sou desu",
          meaning: "Nghe nói vì cô ấy dù có thời gian cũng không học nên điểm kỳ thi lần này đã kém."
        },
        {
          direction: "vi-ja",
          kanji: "うちの犬は、春に生まれたことから「春」という名前になった。",
          hiragana: "うちのいぬは、はるにうまれたことから「はる」というなまえになった。",
          romaji: "uchi no inu wa, haru ni umareta koto kara 'Haru' to iu namae ni natta",
          meaning: "Vì chú cún nhà tôi được sinh ra vào mùa xuân nên nó được đặt tên là \"Haru (Mùa xuân)\".",
          acceptedJapanese: [
            "うちの犬は、春に生まれたことから「春」という名前になった。",
            "うちのいぬは、はるにうまれたことから「はる」というなまえになった。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "彼女はとても賢く美しいことから、皆の注目を集めている。",
          hiragana: "かのじょはとてもかしこくうつくしいことから、みんなのちゅうもくをあつめている。",
          romaji: "kanojo wa totemo kashikoku utsukushii koto kara, minna no chuumoku o atsumete iru",
          meaning: "Vì cô ấy rất thông minh và xinh đẹp nên thu hút được sự chú ý của mọi người.",
          acceptedJapanese: [
            "彼女はとても賢く美しいことから、皆の注目を集めている。",
            "かのじょはとてもかしこくうつくしいことから、みんなのちゅうもくをあつめている。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "その男の子は、彼女に顔がそっくりだったことから、彼女の弟だとわかった。",
          hiragana: "そのおとこのこは、かのじょにかおがそっくりだったことから、かのじょのおとうとだとわかった。",
          romaji: "sono otoko no ko wa, kanojo ni kao ga sokkuri datta koto kara, kanojo no otouto da to wakatta",
          meaning: "Vì cậu bé đó có khuôn mặt giống hệt cô ấy nên tôi biết được rằng đó là em trai của cô ấy.",
          acceptedJapanese: [
            "その男の子は、彼女に顔がそっくりだったことから、彼女の弟だとわかった。",
            "そのおとこのこは、かのじょにかおがそっくりだったことから、かのじょのおとうとだとわかった。"
          ]
        }
      ]
    }
  ]
});


/*
  NGỮ PHÁP - CHƯƠNG 2 BÀI 2
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 2 bài 2",
  grammar: [
    {
      structure: "～そうにない / ～そうもない / ～そうにもない",
      meaning: "Khó mà V / Chẳng có vẻ gì sẽ V",
      note: "Dạng phủ định của Vます＋そうです (sắp V đến nơi). Dùng để nói về một sự việc ít hoặc gần như không có khả năng sẽ xảy ra. Thường đi với động từ chỉ khả năng, trạng thái hoàn thành, cử động, thay đổi. Cấu trúc: Vます + そうにない / そうもない / そうにもない.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "あんなに高価なかばんは、とても買えそうにない。",
          hiragana: "あんなにこうかなかばんは、とてもかえそうにない。",
          romaji: "anna ni kouka na kaban wa, totemo kae sou ni nai",
          meaning: "Một chiếc túi đắt như vậy thì có vẻ khó mà mua nổi."
        },
        {
          direction: "ja-vi",
          kanji: "またお金を使ってしまった。このままでは、年末までに100万円貯金できそうにない。",
          hiragana: "またおかねをつかってしまった。このままでは、ねんまつまでにひゃくまんえんちょきんできそうにない。",
          romaji: "mata okane o tsukatte shimatta. kono mama de wa, nenmatsu made ni hyakuman en chokin deki sou ni nai",
          meaning: "Lại tiêu tiền mất rồi. Cứ thế này thì có vẻ khó mà tiết kiệm được một triệu yên trước cuối năm."
        },
        {
          direction: "ja-vi",
          kanji: "彼は学校の成績も悪かったし、真面目じゃないし、いい会社には就職できそうにないね。",
          hiragana: "かれはがっこうのせいせきもわるかったし、まじめじゃないし、いいかいしゃにはしゅうしょくできそうにないね。",
          romaji: "kare wa gakkou no seiseki mo warukatta shi, majime janai shi, ii kaisha ni wa shuushoku deki sou ni nai ne",
          meaning: "Thành tích ở trường của anh ấy cũng kém, lại không nghiêm túc nên có vẻ khó xin được việc ở công ty tốt."
        },
        {
          direction: "vi-ja",
          kanji: "この本は出てくる言葉が難しくて読めそうもない。",
          hiragana: "このほんはでてくることばがむずかしくてよめそうもない。",
          romaji: "kono hon wa detekuru kotoba ga muzukashikute yome sou mo nai",
          meaning: "Cuốn sách này có nhiều từ ngữ khó nên có vẻ tôi khó mà đọc được.",
          acceptedJapanese: [
            "この本は出てくる言葉が難しくて読めそうもない。",
            "このほんはでてくることばがむずかしくてよめそうもない。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "明日の試合で、勝てそうにありません。",
          hiragana: "あしたのしあいで、かてそうにありません。",
          romaji: "ashita no shiai de, kate sou ni arimasen",
          meaning: "Trong trận đấu ngày mai, tôi khó có thể thắng được.",
          acceptedJapanese: [
            "明日の試合で、勝てそうにありません。",
            "明日の試合で、勝てそうもありません。",
            "あしたのしあいで、かてそうにありません。",
            "あしたのしあいで、かてそうもありません。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "しばらく雨が止みそうにないから、家でゆっくりしていよう。",
          hiragana: "しばらくあめがやみそうにないから、いえでゆっくりしていよう。",
          romaji: "shibaraku ame ga yami sou ni nai kara, ie de yukkuri shite iyou",
          meaning: "Vì trời chẳng có vẻ gì là sẽ tạnh ngay, thế nên thong thả nghỉ ngơi ở nhà thôi.",
          acceptedJapanese: [
            "しばらく雨が止みそうにないから、家でゆっくりしていよう。",
            "しばらくあめがやみそうにないから、いえでゆっくりしていよう。"
          ]
        }
      ]
    },
    {
      structure: "～がる",
      meaning: "Biểu hiện cảm xúc, mong muốn của người khác",
      note: "Miêu tả trạng thái cơ thể, nguyện vọng, mong muốn, cảm xúc của người khác, không phải của mình. Thường dùng ở dạng ～がっている. Cấu trúc: Vたい / Aい / Aな + がる.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼女が寒がっていたので、僕のコートを貸してあげた。",
          hiragana: "かのじょがさむがっていたので、ぼくのこーとをかしてあげた。",
          romaji: "kanojo ga samugatte ita node, boku no kooto o kashite ageta",
          meaning: "Vì cô ấy tỏ ra lạnh nên tôi đã cho cô ấy mượn áo khoác của mình."
        },
        {
          direction: "ja-vi",
          kanji: "彼女は仕事中に話しかけられるのをとても嫌がっている。",
          hiragana: "かのじょはしごとちゅうにはなしかけられるのをとてもいやがっている。",
          romaji: "kanojo wa shigotochuu ni hanashikakerareru no o totemo iyagatte iru",
          meaning: "Cô ấy rất ghét bị bắt chuyện trong lúc làm việc."
        },
        {
          direction: "ja-vi",
          kanji: "私がどこへ行くときも、息子は一緒に行きたがる。",
          hiragana: "わたしがどこへいくときも、むすこはいっしょにいきたがる。",
          romaji: "watashi ga doko e iku toki mo, musuko wa issho ni ikitagaru",
          meaning: "Mỗi khi tôi đi đâu, con trai tôi cũng muốn đi cùng."
        },
        {
          direction: "vi-ja",
          kanji: "田舎に住む祖母が、久しぶりに孫に会いたがっている。",
          hiragana: "いなかにすむそぼが、ひさしぶりにまごにあいたがっている。",
          romaji: "inaka ni sumu sobo ga, hisashiburi ni mago ni aitagatte iru",
          meaning: "Người bà sống ở quê đang muốn gặp cháu của mình.",
          acceptedJapanese: [
            "田舎に住む祖母が、久しぶりに孫に会いたがっている。",
            "いなかにすむそぼが、ひさしぶりにまごにあいたがっている。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "猫は眠たがっている。",
          hiragana: "ねこはねむたがっている。",
          romaji: "neko wa nemutagatte iru",
          meaning: "Con mèo đang muốn ngủ.",
          acceptedJapanese: [
            "猫は眠たがっている。",
            "ねこはねむたがっている。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "ホラー映画を観て、妹は一人で眠れないと怖がっている。",
          hiragana: "ほらーえいがをみて、いもうとはひとりでねむれないとこわがっている。",
          romaji: "horaa eiga o mite, imouto wa hitori de nemurenai to kowagatte iru",
          meaning: "Sau khi xem phim kinh dị thì em gái tôi sợ rằng em ấy không thể ngủ một mình.",
          acceptedJapanese: [
            "ホラー映画を観て、妹は一人で眠れないと怖がっている。",
            "ほらーえいがをみて、いもうとはひとりでねむれないとこわがっている。"
          ]
        }
      ]
    },
    {
      structure: "～始める",
      meaning: "Bắt đầu...",
      note: "Bắt đầu làm một hành động hoặc bắt đầu diễn ra hiện tượng gì đó. Thường dùng cho hành động, động tác, thói quen, hiện tượng tự nhiên diễn ra liên tục. Cấu trúc: Vます + 始める.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私は20歳の時から、タバコを吸い始めました。",
          hiragana: "わたしははたちのときから、たばこをすいはじめました。",
          romaji: "watashi wa hatachi no toki kara, tabako o suihajimemashita",
          meaning: "Tôi bắt đầu hút thuốc từ năm 20 tuổi."
        },
        {
          direction: "ja-vi",
          kanji: "先週から、日本へ留学するために日本語センターに通い始めました。",
          hiragana: "せんしゅうから、にほんへりゅうがくするためににほんごせんたーにかよいはじめました。",
          romaji: "senshuu kara, nihon e ryuugaku suru tame ni nihongo sentaa ni kayoihajimemashita",
          meaning: "Từ tuần trước tôi bắt đầu đi học ở trung tâm tiếng Nhật để du học Nhật."
        },
        {
          direction: "ja-vi",
          kanji: "息子は夕方になって、やっと勉強をし始めた。",
          hiragana: "むすこはゆうがたになって、やっとべんきょうをしはじめた。",
          romaji: "musuko wa yuugata ni natte, yatto benkyou o shihajimeta",
          meaning: "Đến chiều tối con trai tôi cuối cùng cũng bắt đầu học."
        },
        {
          direction: "vi-ja",
          kanji: "3月末になって桜が咲き始める。",
          hiragana: "さんがつまつになってさくらがさきはじめる。",
          romaji: "sangatsu matsu ni natte sakura ga sakihajimeru",
          meaning: "Sang đến cuối tháng 3, hoa anh đào bắt đầu nở.",
          acceptedJapanese: [
            "3月末になって桜が咲き始める。",
            "さんがつまつになってさくらがさきはじめる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "雨が降り始める。",
          hiragana: "あめがふりはじめる。",
          romaji: "ame ga furihajimeru",
          meaning: "Trời bắt đầu mưa.",
          acceptedJapanese: [
            "雨が降り始める。",
            "あめがふりはじめる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "雪が降り始める。",
          hiragana: "ゆきがふりはじめる。",
          romaji: "yuki ga furihajimeru",
          meaning: "Tuyết bắt đầu rơi.",
          acceptedJapanese: [
            "雪が降り始める。",
            "ゆきがふりはじめる。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "日本語を勉強し始めたのは2年前です。",
          hiragana: "にほんごをべんきょうしはじめたのはにねんまえです。",
          romaji: "nihongo o benkyou shihajimeta no wa ni nen mae desu",
          meaning: "Tôi bắt đầu học tiếng Nhật từ 2 năm trước.",
          acceptedJapanese: [
            "日本語を勉強し始めたのは2年前です。",
            "にほんごをべんきょうしはじめたのはにねんまえです。"
          ]
        }
      ]
    },
    {
      structure: "～終わる",
      meaning: "V xong / Kết thúc V",
      note: "Kết thúc hoặc làm xong một hành động đã diễn ra liên tục trước đó. Cấu trúc: Vます + 終わる.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "今日はレポートを書き終わるまで寝ないつもりだ。",
          hiragana: "きょうはれぽーとをかきおわるまでねないつもりだ。",
          romaji: "kyou wa repooto o kakiowaru made nenai tsumori da",
          meaning: "Hôm nay tôi định không ngủ cho đến khi viết xong báo cáo."
        },
        {
          direction: "ja-vi",
          kanji: "まだ私が話し終わっていないのに、彼が話し始めた。",
          hiragana: "まだわたしがはなしおわっていないのに、かれがはなしはじめた。",
          romaji: "mada watashi ga hanashiowatte inai noni, kare ga hanashihajimeta",
          meaning: "Tôi vẫn chưa nói xong mà anh ấy đã bắt đầu nói."
        },
        {
          direction: "ja-vi",
          kanji: "彼が歌い終わってから、次は私が歌わなければならない。",
          hiragana: "かれがうたいおわってから、つぎはわたしがうたわなければならない。",
          romaji: "kare ga utaiowatte kara, tsugi wa watashi ga utawanakereba naranai",
          meaning: "Sau khi anh ấy hát xong thì tiếp theo tôi phải hát."
        },
        {
          direction: "vi-ja",
          kanji: "書き終わる",
          hiragana: "かきおわる",
          romaji: "kakiowaru",
          meaning: "Viết xong.",
          acceptedJapanese: ["書き終わる", "かきおわる"]
        },
        {
          direction: "vi-ja",
          kanji: "飲み終わる",
          hiragana: "のみおわる",
          romaji: "nomiowaru",
          meaning: "Uống xong.",
          acceptedJapanese: ["飲み終わる", "のみおわる"]
        },
        {
          direction: "vi-ja",
          kanji: "本を読み終わる",
          hiragana: "ほんをよみおわる",
          romaji: "hon o yomiowaru",
          meaning: "Đọc xong sách.",
          acceptedJapanese: ["本を読み終わる", "ほんをよみおわる"]
        }
      ]
    },
    {
      structure: "～続ける",
      meaning: "Duy trì / Liên tục / Tiếp tục...",
      note: "Tiếp tục hoặc duy trì thực hiện một hành động hay thói quen nào đó. Cấu trúc: Vます + 続ける.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "この財布は10年前に母からもらい、その時からずっと使い続けている。",
          hiragana: "このさいふはじゅうねんまえにははからもらい、そのときからずっとつかいつづけている。",
          romaji: "kono saifu wa juu nen mae ni haha kara morai, sono toki kara zutto tsukaitsudzukete iru",
          meaning: "Chiếc ví này tôi nhận từ mẹ 10 năm trước và đã dùng liên tục từ đó đến nay."
        },
        {
          direction: "ja-vi",
          kanji: "N4のクラスが終わった後も、自分で日本語を勉強し続けるつもりです。",
          hiragana: "N4のくらすがおわったあとも、じぶんでにほんごをべんきょうしつづけるつもりです。",
          romaji: "N4 no kurasu ga owatta ato mo, jibun de nihongo o benkyou shitsudzukeru tsumori desu",
          meaning: "Sau khi lớp N4 kết thúc, tôi vẫn định tiếp tục tự học tiếng Nhật."
        },
        {
          direction: "ja-vi",
          kanji: "彼は休憩時間が終わった後も、ゲームをし続けている。",
          hiragana: "かれはきゅうけいじかんがおわったあとも、げーむをしつづけている。",
          romaji: "kare wa kyuukei jikan ga owatta ato mo, geemu o shitsudzukete iru",
          meaning: "Dù giờ nghỉ đã kết thúc, anh ấy vẫn tiếp tục chơi game."
        },
        {
          direction: "vi-ja",
          kanji: "留学から帰っても、日本語の勉強をし続けたいと思います。",
          hiragana: "りゅうがくからかえっても、にほんごのべんきょうをしつづけたいとおもいます。",
          romaji: "ryuugaku kara kaette mo, nihongo no benkyou o shitsudzuketai to omoimasu",
          meaning: "Dù có trở về nước sau khi đi du học thì tôi vẫn sẽ tiếp tục việc học tiếng Nhật.",
          acceptedJapanese: [
            "留学から帰っても、日本語の勉強をし続けたいと思います。",
            "りゅうがくからかえっても、にほんごのべんきょうをしつづけたいとおもいます。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "何事も、やり続けることで成果が見えてくるだろう。",
          hiragana: "なにごとも、やりつづけることでせいかがみえてくるだろう。",
          romaji: "nanigoto mo, yaritsudzukeru koto de seika ga miete kuru darou",
          meaning: "Chuyện gì thì chuyện, bằng việc chúng ta duy trì làm thì chắc hẳn sẽ nhìn thấy thành quả.",
          acceptedJapanese: [
            "何事も、やり続けることで成果が見えてくるだろう。",
            "なにごとも、やりつづけることでせいかがみえてくるだろう。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "登山で休みなく歩き続けたので、とても疲れてしまった。",
          hiragana: "とざんでやすみなくあるきつづけたので、とてもつかれてしまった。",
          romaji: "tozan de yasumi naku arukitsudzuketa node, totemo tsukarete shimatta",
          meaning: "Trong lúc leo núi, tôi cứ liên tục đi bộ mà không nghỉ nên rất mệt.",
          acceptedJapanese: [
            "登山で休みなく歩き続けたので、とても疲れてしまった。",
            "とざんでやすみなくあるきつづけたので、とてもつかれてしまった。"
          ]
        }
      ]
    },
    {
      structure: "～直す",
      meaning: "Làm lại... theo hướng sửa sai, cải thiện, làm cho đúng hơn",
      note: "Diễn tả hành động làm lại từ đầu sau khi đã thử nhưng thất bại, sai hoặc chưa tốt. Cấu trúc: Vます + 直す. 持ち直す mang nghĩa hồi phục/chuyển biến tốt từ trạng thái xấu, ví dụ 病気が持ち直す, 景気が持ち直す, 気持ちを持ち直す.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "家が古くなってきたので、建て直すことにしました。",
          hiragana: "いえがふるくなってきたので、たてなおすことにしました。",
          romaji: "ie ga furuku natte kita node, tatenaosu koto ni shimashita",
          meaning: "Vì ngôi nhà đã cũ nên tôi quyết định xây lại."
        },
        {
          direction: "ja-vi",
          kanji: "本当に仕事を辞めるかどうか、もう一度考え直してみなさい？",
          hiragana: "ほんとうにしごとをやめるかどうか、もういちどかんがえなおしてみなさい？",
          romaji: "hontou ni shigoto o yameru ka dou ka, mou ichido kangaenaoshite minasai",
          meaning: "Hãy thử suy nghĩ lại một lần nữa xem có thực sự nghỉ việc hay không."
        },
        {
          direction: "ja-vi",
          kanji: "今年に入って母の病気は進んでいたが、最近少し持ち直した。",
          hiragana: "ことしにはいってははのびょうきはすすんでいたが、さいきんすこしもちなおした。",
          romaji: "kotoshi ni haitte haha no byouki wa susunde ita ga, saikin sukoshi mochinaoshita",
          meaning: "Từ đầu năm bệnh của mẹ tiến triển xấu, nhưng gần đây đã hồi phục đôi chút."
        },
        {
          direction: "vi-ja",
          kanji: "このレポートは間違いが多いので、書き直してください。",
          hiragana: "このれぽーとはまちがいがおおいので、かきなおしてください。",
          romaji: "kono repooto wa machigai ga ooi node, kakinaoshite kudasai",
          meaning: "Vì bản báo cáo này nhiều lỗi sai nên bạn hãy viết lại đi!",
          acceptedJapanese: [
            "このレポートは間違いが多いので、書き直してください。",
            "このれぽーとはまちがいがおおいので、かきなおしてください。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "雨に濡れてしまった洗濯物は、洗い直してください。",
          hiragana: "あめにぬれてしまったせんたくものは、あらいなおしてください。",
          romaji: "ame ni nurete shimatta sentakumono wa, arainaoshite kudasai",
          meaning: "Quần áo phơi mà bị ẩm vì mưa thì hãy giặt lại nhé!",
          acceptedJapanese: [
            "雨に濡れてしまった洗濯物は、洗い直してください。",
            "あめにぬれてしまったせんたくものは、あらいなおしてください。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "失敗しても、何度でもやり直せばいいのだ。",
          hiragana: "しっぱいしても、なんどでもやりなおせばいいのだ。",
          romaji: "shippai shite mo, nando demo yarinaoseba ii no da",
          meaning: "Dù thất bại, chỉ cần làm lại bao nhiêu lần cũng được.",
          acceptedJapanese: [
            "失敗しても、何度でもやり直せばいいのだ。",
            "しっぱいしても、なんどでもやりなおせばいいのだ。"
          ]
        }
      ]
    },
    {
      structure: "～として",
      meaning: "Với tư cách, vai trò / Như là...",
      note: "N1 chỉ tư cách, vai trò, chức danh, nghề nghiệp, danh nghĩa. Khi N1 chỉ sở thích... mang nét nghĩa “như là...”. Có cả dạng としても và としては. Cấu trúc: N1 + として; N1 + としての + N2.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私はベトナムが好きで、趣味としてベトナム語を勉強している。",
          hiragana: "わたしはべとなむがすきで、しゅみとしてべとなむごをべんきょうしている。",
          romaji: "watashi wa Betonamu ga suki de, shumi to shite Betonamugo o benkyou shite iru",
          meaning: "Tôi thích Việt Nam và học tiếng Việt như một sở thích."
        },
        {
          direction: "ja-vi",
          kanji: "私は今ベトナムで、日本語の教師として働いている。",
          hiragana: "わたしはいまべとなむで、にほんごのきょうしとしてはたらいている。",
          romaji: "watashi wa ima Betonamu de, nihongo no kyoushi to shite hataraite iru",
          meaning: "Hiện tại tôi đang làm việc ở Việt Nam với tư cách là giáo viên tiếng Nhật."
        },
        {
          direction: "ja-vi",
          kanji: "私は子供に、勉強について親としての考えを言った。",
          hiragana: "わたしはこどもに、べんきょうについておやとしてのかんがえをいった。",
          romaji: "watashi wa kodomo ni, benkyou ni tsuite oya to shite no kangae o itta",
          meaning: "Tôi đã nói với con suy nghĩ của mình trong vai trò là cha mẹ về việc học."
        },
        {
          direction: "ja-vi",
          kanji: "彼は俳優だが、歌手としても有名だ。",
          hiragana: "かれははいゆうだが、かしゅとしてもゆうめいだ。",
          romaji: "kare wa haiyuu da ga, kashu to shite mo yuumei da",
          meaning: "Anh ấy là diễn viên nhưng cũng nổi tiếng với tư cách ca sĩ."
        },
        {
          direction: "ja-vi",
          kanji: "その男は一流の作家だが、映画監督としてはまだまだだ。",
          hiragana: "そのおとこはいちりゅうのさっかだが、えいがかんとくとしてはまだまだだ。",
          romaji: "sono otoko wa ichiryuu no sakka da ga, eiga kantoku to shite wa mada mada da",
          meaning: "Người đàn ông đó là nhà văn hàng đầu nhưng với tư cách đạo diễn phim thì vẫn còn non."
        },
        {
          direction: "vi-ja",
          kanji: "日本語の先生として働いています。",
          hiragana: "にほんごのせんせいとしてはたらいています。",
          romaji: "nihongo no sensei to shite hataraite imasu",
          meaning: "Tôi đang làm việc với tư cách là một giáo viên tiếng Nhật.",
          acceptedJapanese: [
            "日本語の先生として働いています。",
            "にほんごのせんせいとしてはたらいています。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "留学生として日本に来ました。",
          hiragana: "りゅうがくせいとしてにほんにきました。",
          romaji: "ryuugakusei to shite nihon ni kimashita",
          meaning: "Tôi đến Nhật với tư cách là một du học sinh.",
          acceptedJapanese: [
            "留学生として日本に来ました。",
            "りゅうがくせいとしてにほんにきました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "社長としての立場",
          hiragana: "しゃちょうとしてのたちば",
          romaji: "shachou to shite no tachiba",
          meaning: "Vị trí với tư cách là một giám đốc.",
          acceptedJapanese: ["社長としての立場", "しゃちょうとしてのたちば"]
        },
        {
          direction: "vi-ja",
          kanji: "親としての考え",
          hiragana: "おやとしてのかんがえ",
          romaji: "oya to shite no kangae",
          meaning: "Suy nghĩ trong vai trò là bố mẹ.",
          acceptedJapanese: ["親としての考え", "おやとしてのかんがえ"]
        },
        {
          direction: "vi-ja",
          kanji: "趣味としてピアノ習っています。",
          hiragana: "しゅみとしてぴあのならっています。",
          romaji: "shumi to shite piano naratte imasu",
          meaning: "Tôi đang học piano như là sở thích của mình.",
          acceptedJapanese: [
            "趣味としてピアノ習っています。",
            "しゅみとしてぴあのならっています。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "ズン先生は趣味としてレッスンの動画を作り始めました。",
          hiragana: "ずんせんせいはしゅみとしてれっすんのどうがをつくりはじめました。",
          romaji: "Zun sensei wa shumi to shite ressun no douga o tsukurihajimemashita",
          meaning: "Thầy Dũng đã bắt đầu làm clip bài giảng như là một sở thích.",
          acceptedJapanese: [
            "ズン先生は趣味としてレッスンの動画を作り始めました。",
            "ずんせんせいはしゅみとしてれっすんのどうがをつくりはじめました。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "京都は観光地として知られています。",
          hiragana: "きょうとはかんこうちとしてしられています。",
          romaji: "Kyouto wa kankouchi to shite shirarete imasu",
          meaning: "Kyoto được biết đến như là một địa điểm tham quan du lịch.",
          acceptedJapanese: [
            "京都は観光地として知られています。",
            "きょうとはかんこうちとしてしられています。"
          ]
        }
      ]
    }
  ]
});


/*
  NGỮ PHÁP - CHƯƠNG 2 BÀI 3
*/

window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "chương 2 bài 3",
  grammar: [
    {
      structure: "～てもおかしくない / ～ても不思議じゃない",
      meaning: "Dù có V thì cũng không lạ / Không có gì bất ngờ",
      note: "Dùng khi nói về một điều “đương nhiên có thể nghĩ đến” hoặc “có khả năng cao xảy ra”. Khi vế trước có từ để hỏi như いつ・だれ・どこ, mang ý nghĩa hành động đó có thể xảy ra vào bất cứ lúc nào, với bất cứ ai, ở bất cứ nơi nào. Cấu trúc: Vても / Aいくても / Aな・Nでも + おかしくない・不思議じゃない.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "この映画はとても面白かったから、これからもっと人気が出ても不思議ではない。",
          hiragana: "このえいがはとてもおもしろかったから、これからもっとにんきがでてもふしぎではない。",
          romaji: "kono eiga wa totemo omoshirokatta kara, kore kara motto ninki ga dete mo fushigi de wa nai",
          meaning: "Bộ phim này rất hay nên từ giờ có nổi tiếng hơn nữa cũng không có gì lạ."
        },
        {
          direction: "ja-vi",
          kanji: "日本は地震がたくさん起こる国なので、いつ、どこで大きな地震があっても不思議ではない。",
          hiragana: "にほんはじしんがたくさんおこるくになので、いつ、どこでおおきなじしんがあってもふしぎではない。",
          romaji: "nihon wa jishin ga takusan okoru kuni na node, itsu, doko de ookina jishin ga atte mo fushigi de wa nai",
          meaning: "Nhật Bản là đất nước thường xảy ra động đất nên động đất lớn xảy ra lúc nào, ở đâu cũng không có gì lạ."
        },
        {
          direction: "ja-vi",
          kanji: "この交差点は周りが見えにくいのに車の量が多くて、いつ事故がおきてもおかしくない。",
          hiragana: "このこうさてんはまわりがみえにくいのにくるまのりょうがおおくて、いつじこがおきてもおかしくない。",
          romaji: "kono kousaten wa mawari ga mienikui noni kuruma no ryou ga ookute, itsu jiko ga okite mo okashikunai",
          meaning: "Ngã tư này khó quan sát xung quanh mà lượng xe lại nhiều nên tai nạn xảy ra bất cứ lúc nào cũng không lạ."
        },
        {
          direction: "vi-ja",
          kanji: "そう言われたら、彼が怒ってもおかしくない。",
          hiragana: "そういわれたら、かれがおこってもおかしくない。",
          romaji: "sou iwaretara, kare ga okotte mo okashikunai",
          meaning: "Bị nói như thế thì anh ấy nổi giận cũng chẳng có gì là lạ.",
          acceptedJapanese: [
            "そう言われたら、彼が怒ってもおかしくない。",
            "そういわれたら、かれがおこってもおかしくない。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "彼女のお父さんはフィリピン人だから、彼女の名前がカタカナでも不思議ではない。",
          hiragana: "かのじょのおとうさんはふぃりぴんじんだから、かのじょのなまえがかたかなでもふしぎではない。",
          romaji: "kanojo no otousan wa Firipinjin da kara, kanojo no namae ga katakana demo fushigi de wa nai",
          meaning: "Bố cô ấy là người Philippines nên tên cô ấy viết bằng katakana cũng không có gì lạ.",
          acceptedJapanese: [
            "彼女のお父さんはフィリピン人だから、彼女の名前がカタカナでも不思議ではない。",
            "かのじょのおとうさんはふぃりぴんじんだから、かのじょのなまえがかたかなでもふしぎではない。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "あれだけ努力してきたから、合格してもおかしくない。",
          hiragana: "あれだけどりょくしてきたから、ごうかくしてもおかしくない。",
          romaji: "are dake doryoku shite kita kara, goukaku shite mo okashikunai",
          meaning: "Vì đã cố gắng đến thế, nên đỗ cũng là điều dễ hiểu.",
          acceptedJapanese: [
            "あれだけ努力してきたから、合格してもおかしくない。",
            "あれだけどりょくしてきたから、ごうかくしてもおかしくない。"
          ]
        }
      ]
    },
    {
      structure: "～ことか",
      meaning: "Vô cùng… / Rất…",
      note: "Nhấn mạnh mức độ: vô cùng đến mức khó có thể diễn tả nổi. Thường đi với từ để hỏi như どんなに～ことか、どれほど～ことか hoặc なんと…ことか. Cấu trúc: 普通形 / Aな + ことか.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "彼の行動によって、どれだけの命が救われたことか。",
          hiragana: "かれのこうどうによって、どれだけのいのちがすくわれたことか。",
          romaji: "kare no koudou ni yotte, dore dake no inochi ga sukuwareta koto ka",
          meaning: "Biết bao nhiêu sinh mạng đã được cứu nhờ hành động của anh ấy!"
        },
        {
          direction: "ja-vi",
          kanji: "上司との飲み会は、気を使うだけだが、友人との飲み会はなんて楽しいことか。",
          hiragana: "じょうしとののみかいは、きをつかうだけだが、ゆうじんとののみかいはなんてたのしいことか。",
          romaji: "joushi to no nomikai wa, ki o tsukau dake da ga, yuujin to no nomikai wa nante tanoshii koto ka",
          meaning: "Tiệc nhậu với cấp trên chỉ khiến phải giữ ý, còn tiệc với bạn bè thì vui biết bao!"
        },
        {
          direction: "ja-vi",
          kanji: "あの子とのおしゃべりで私の心はどれほど癒されたことか。",
          hiragana: "あのことのおしゃべりでわたしのこころはどれほどいやされたことか。",
          romaji: "ano ko to no oshaberi de watashi no kokoro wa dore hodo iyasareta koto ka",
          meaning: "Trò chuyện với đứa trẻ đó đã xoa dịu lòng tôi biết bao."
        },
        {
          direction: "vi-ja",
          kanji: "どれだけ心配したことか。",
          hiragana: "どれだけしんぱいしたことか。",
          romaji: "dore dake shinpai shita koto ka",
          meaning: "Mình đã lo lắng biết bao nhiêu!",
          acceptedJapanese: [
            "どれだけ心配したことか。",
            "どれだけしんぱいしたことか。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "N1に合格できたらどんなにうれしいことか。",
          hiragana: "N1にごうかくできたらどんなにうれしいことか。",
          romaji: "N1 ni goukaku dekitara donna ni ureshii koto ka",
          meaning: "Nếu mà đỗ được N1 thì vui sướng biết bao nhiêu.",
          acceptedJapanese: [
            "N1に合格できたらどんなにうれしいことか。",
            "N1にごうかくできたらどんなにうれしいことか。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "1点足りなく試験に落ちたのは何と残念なことか。",
          hiragana: "いってんたりなくしけんにおちたのはなんとざんねんなことか。",
          romaji: "itten tarinaku shiken ni ochita no wa nanto zannen na koto ka",
          meaning: "Việc trượt kỳ thi chỉ vì thiếu 1 điểm là vô cùng đáng tiếc.",
          acceptedJapanese: [
            "1点足りなく試験に落ちたのは何と残念なことか。",
            "いってんたりなくしけんにおちたのはなんとざんねんなことか。"
          ]
        }
      ]
    },
    {
      structure: "～だろう",
      meaning: "Có lẽ... / Chắc hẳn là...",
      note: "Dùng khi người nói dự đoán, suy đoán một điều có thể xảy ra với xác suất cao. Thường dùng kèm たぶん, きっと. Trong văn nói có thể kèm ね・な ở cuối câu. だろう là thể thường của でしょう; nếu dùng nguyên dạng có thể tạo cảm giác suồng sã, thô. Không thích hợp khi nói về hành động có chủ ý của bản thân trong tương lai. Cấu trúc: 普通形 / Aな・N + だろう.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "ベトナム語を話しているから、あの人たちはきっとベトナム人だろう。",
          hiragana: "べとなむごをはなしているから、あのひとたちはきっとべとなむじんだろう。",
          romaji: "Betonamugo o hanashite iru kara, ano hitotachi wa kitto Betonamujin darou",
          meaning: "Vì họ đang nói tiếng Việt nên chắc hẳn họ là người Việt Nam."
        },
        {
          direction: "ja-vi",
          kanji: "プレゼントを渡したら、両親はきっと喜ぶだろうな。",
          hiragana: "ぷれぜんとをわたしたら、りょうしんはきっとよろこぶだろうな。",
          romaji: "purezento o watashitara, ryoushin wa kitto yorokobu darou na",
          meaning: "Nếu tặng quà thì bố mẹ chắc hẳn sẽ vui nhỉ."
        },
        {
          direction: "ja-vi",
          kanji: "彼女はあまり絵が上手いとは言えないから、美術大学に入るのは無理だろうな。",
          hiragana: "かのじょはあまりえがうまいとはいえないから、びじゅつだいがくにはいるのはむりだろうな。",
          romaji: "kanojo wa amari e ga umai to wa ienai kara, bijutsu daigaku ni hairu no wa muri darou na",
          meaning: "Không thể nói cô ấy vẽ giỏi nên chắc việc vào đại học mỹ thuật là khó."
        },
        {
          direction: "vi-ja",
          kanji: "ダイエットは大変だろうな。",
          hiragana: "だいえっとはたいへんだろうな。",
          romaji: "daietto wa taihen darou na",
          meaning: "Ăn kiêng chắc là vất vả/ cực lắm nhỉ!",
          acceptedJapanese: [
            "ダイエットは大変だろうな。",
            "だいえっとはたいへんだろうな。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "明日、遊園地は混んでいるだろうね。",
          hiragana: "あした、ゆうえんちはこんでいるだろうね。",
          romaji: "ashita, yuuenchi wa konde iru darou ne",
          meaning: "Ngày mai, khu vui chơi chắc là phải đông lắm nhỉ!",
          acceptedJapanese: [
            "明日、遊園地は混んでいるだろうね。",
            "あした、ゆうえんちはこんでいるだろうね。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "JLPTのN1はきっととても難しいだろう。",
          hiragana: "JLPTのN1はきっととてもむずかしいだろう。",
          romaji: "JLPT no N1 wa kitto totemo muzukashii darou",
          meaning: "Kỳ thi JLPT N1 chắc là khó lắm nhỉ.",
          acceptedJapanese: [
            "JLPTのN1はきっととても難しいだろう。",
            "JLPTのN1はきっととてもむずかしいだろう。"
          ]
        }
      ]
    },
    {
      structure: "～だろうか",
      meaning: "Không biết / Liệu có... không nhỉ?",
      note: "Diễn đạt cảm giác hoài nghi hoặc lo lắng, không biết sự việc có trở thành như vậy hay không, hoặc có đúng như vậy hay không. Đứng cuối câu. Cấu trúc: 普通形 / Aな・N + だろうか.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "山下さんは最近顔色が悪い。病気だろうか。",
          hiragana: "やましたさんはさいきんかおいろがわるい。びょうきだろうか。",
          romaji: "Yamashita san wa saikin kaoiro ga warui. byouki darou ka",
          meaning: "Dạo gần đây sắc mặt anh Yamashita không tốt. Không biết có phải bị bệnh không."
        },
        {
          direction: "ja-vi",
          kanji: "どんな言葉を使えば、こちらの気持ちが伝わるだろうか。",
          hiragana: "どんなことばをつかえば、こちらのきもちがつたわるだろうか。",
          romaji: "donna kotoba o tsukaeba, kochira no kimochi ga tsutawaru darou ka",
          meaning: "Không biết dùng những lời nào thì tình cảm của mình mới truyền đạt được."
        },
        {
          direction: "ja-vi",
          kanji: "彼、忙しそうにしているけど、何か手伝ったほうがいいだろうか。",
          hiragana: "かれ、いそがしそうにしているけど、なにかてつだったほうがいいだろうか。",
          romaji: "kare, isogashisou ni shite iru kedo, nanika tetsudatta hou ga ii darou ka",
          meaning: "Anh ấy có vẻ bận, không biết mình có nên giúp gì không nhỉ."
        },
        {
          direction: "vi-ja",
          kanji: "彼にできるだろうか。",
          hiragana: "かれにできるだろうか。",
          romaji: "kare ni dekiru darou ka",
          meaning: "Không biết anh ấy có làm được không nhỉ?",
          acceptedJapanese: [
            "彼にできるだろうか。",
            "かれにできるだろうか。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "彼女はこのプレゼントを喜んでくれるだろうか。",
          hiragana: "かのじょはこのぷれぜんとをよろこんでくれるだろうか。",
          romaji: "kanojo wa kono purezento o yorokonde kureru darou ka",
          meaning: "Không biết cô ấy có vui với món quà này không nhỉ?",
          acceptedJapanese: [
            "彼女はこのプレゼントを喜んでくれるだろうか。",
            "かのじょはこのぷれぜんとをよろこんでくれるだろうか。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "本当にこの選択は正しいだろうか。",
          hiragana: "ほんとうにこのせんたくはただしいだろうか。",
          romaji: "hontou ni kono sentaku wa tadashii darou ka",
          meaning: "Liệu lựa chọn này có thực sự đúng không nhỉ?",
          acceptedJapanese: [
            "本当にこの選択は正しいだろうか。",
            "ほんとうにこのせんたくはただしいだろうか。"
          ]
        }
      ]
    },
    {
      structure: "～には",
      meaning: "Để V...",
      note: "Dùng để nói rằng để đáp ứng hoặc thực hiện được điều gì đó thì cần một điều kiện nào đó; hoặc đưa ra đánh giá cho việc thực hiện hành động. Cấu trúc: Vる + には、....",
      examples: [
        {
          direction: "ja-vi",
          kanji: "車を運転するには、免許を取らなければならない。",
          hiragana: "くるまをうんてんするには、めんきょをとらなければならない。",
          romaji: "kuruma o unten suru ni wa, menkyo o toranakereba naranai",
          meaning: "Để lái ô tô thì phải lấy bằng lái."
        },
        {
          direction: "ja-vi",
          kanji: "外国語を勉強するには辞書が不可欠です。",
          hiragana: "がいこくごをべんきょうするにはじしょがふかけつです。",
          romaji: "gaikokugo o benkyou suru ni wa jisho ga fukaketsu desu",
          meaning: "Để học ngoại ngữ thì từ điển là thứ không thể thiếu."
        },
        {
          direction: "ja-vi",
          kanji: "この部屋は二人で住むには狭すぎると思う。",
          hiragana: "このへやはふたりですむにはせますぎるとおもう。",
          romaji: "kono heya wa futari de sumu ni wa semasugiru to omou",
          meaning: "Tôi nghĩ căn phòng này quá chật để hai người sống."
        },
        {
          direction: "vi-ja",
          kanji: "海外に行くには、パスポートが必要です。",
          hiragana: "かいがいにいくには、ぱすぽーとがひつようです。",
          romaji: "kaigai ni iku ni wa, pasupooto ga hitsuyou desu",
          meaning: "Để đi nước ngoài thì cần phải có hộ chiếu.",
          acceptedJapanese: [
            "海外に行くには、パスポートが必要です。",
            "かいがいにいくには、ぱすぽーとがひつようです。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "この部屋は二人で住むには狭すぎます。",
          hiragana: "このへやはふたりですむにはせますぎます。",
          romaji: "kono heya wa futari de sumu ni wa semasugimasu",
          meaning: "Căn phòng này quá là chật để cho 2 người sống.",
          acceptedJapanese: [
            "この部屋は二人で住むには狭すぎます。",
            "このへやはふたりですむにはせますぎます。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "この辞書は日本語を学ぶにはとってもいいです。",
          hiragana: "このじしょはにほんごをまなぶにはとってもいいです。",
          romaji: "kono jisho wa nihongo o manabu ni wa tottemo ii desu",
          meaning: "Quyển từ điển này rất là tốt cho việc học tiếng Nhật.",
          acceptedJapanese: [
            "この辞書は日本語を学ぶにはとってもいいです。",
            "このじしょはにほんごをまなぶにはとってもいいです。"
          ]
        }
      ]
    },
    {
      structure: "～Vると / Vてはいけないから・ので",
      meaning: "Vì... thì không được, nên... / Để không V thì...",
      note: "Dùng để nêu một sự việc hoặc tình huống xấu có khả năng xảy ra, từ đó đưa ra biện pháp, cách thức để tránh điều đó ở vế sau. Cấu trúc: Vるといけないから・ので / Vてはいけないから・ので.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "寝坊するといけないから、いつも目覚まし時計を2個セットしている。",
          hiragana: "ねぼうするといけないから、いつもめざましどけいをにこせっとしている。",
          romaji: "nebou suru to ikenai kara, itsumo mezamashidokei o niko setto shite iru",
          meaning: "Vì không được ngủ quên nên tôi luôn đặt hai chiếc đồng hồ báo thức."
        },
        {
          direction: "ja-vi",
          kanji: "データが間違っていてはいけないから、何度も調査結果を確認しました。",
          hiragana: "でーたがまちがっていてはいけないから、なんどもちょうさけっかをかくにんしました。",
          romaji: "deeta ga machigatte ite wa ikenai kara, nando mo chousa kekka o kakunin shimashita",
          meaning: "Vì dữ liệu không được sai nên tôi đã kiểm tra kết quả khảo sát nhiều lần."
        },
        {
          direction: "vi-ja",
          kanji: "道に迷ってはいけないので、地図を持って行きましょう。",
          hiragana: "みちにまよってはいけないので、ちずをもっていきましょう。",
          romaji: "michi ni mayotte wa ikenai node, chizu o motte ikimashou",
          meaning: "Để không lạc đường thì mang theo bản đồ đi nhé!",
          acceptedJapanese: [
            "道に迷ってはいけないので、地図を持って行きましょう。",
            "みちにまよってはいけないので、ちずをもっていきましょう。"
          ]
        },
        {
          direction: "vi-ja",
          kanji: "遅れてはいけないので、早めに家を出ます。",
          hiragana: "おくれてはいけないので、はやめにいえをでます。",
          romaji: "okurete wa ikenai node, hayame ni ie o demasu",
          meaning: "Vì không được đến muộn nên tôi sẽ rời khỏi nhà sớm.",
          acceptedJapanese: [
            "遅れてはいけないので、早めに家を出ます。",
            "おくれてはいけないので、はやめにいえをでます。"
          ]
        }
      ]
    }
  ]
});
