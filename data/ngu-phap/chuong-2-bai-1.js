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
