/* Ngữ pháp Chương 5 - Bài 2. Câu ja-vi: ví dụ giáo trình; câu vi-romaji: bài dịch từ đáp án tham khảo. */
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  "name": "chương 5 bài 2 ngữ pháp",
  "source": {
    "document": "20260130105932_CHƯƠNG 5 - GHV - N3 (ko doc nghe)(1).pdf",
    "section": "Chương 5 - Bài 2"
  },
  "grammar": [
    {
      "pattern": "～こともある / ～ことがある",
      "meaning": "Thỉnh thoảng có lúc làm hoặc không làm một việc gì đó",
      "meaningAlternatives": [
        "Đôi khi ...",
        "Có khi ...",
        "Thỉnh thoảng ..."
      ],
      "connections": [
        {
          "label": "Động từ khẳng định",
          "answer": "Vる + ことがある / こともある",
          "alternatives": [],
          "romaji": [
            "V ru koto ga aru",
            "V ru koto mo aru"
          ]
        },
        {
          "label": "Động từ phủ định",
          "answer": "Vない + ことがある / こともある",
          "alternatives": [],
          "romaji": [
            "V nai koto ga aru",
            "V nai koto mo aru"
          ]
        }
      ],
      "usage": "Diễn tả hành động hoặc trạng thái đôi khi xảy ra, không phải lúc nào cũng như vậy. Khác với Vたことがある (đã từng).",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "海外での生活に不満はないが、時々国に帰りたいと思うことがある。",
          "hiragana": "かいがいでのせいかつにふまんはないが、ときどきくににかえりたいとおもうことがある。",
          "romaji": "kaigai deno seikatsu ni fuman wa nai ga, tokidoki kuni ni kaeritai to omou koto ga aru.",
          "meaning": "Tôi không bất mãn với cuộc sống ở nước ngoài, nhưng đôi khi cũng muốn về nước."
        },
        {
          "direction": "ja-vi",
          "kanji": "普段は妻がご飯を作るが、たまには私が作ることもある。",
          "hiragana": "ふだんはつまがごはんをつくるが、たまにはわたしがつくることもある。",
          "romaji": "fudan wa tsuma ga gohan o tsukuru ga, tamani wa watashi ga tsukuru koto mo aru.",
          "meaning": "Bình thường vợ tôi nấu cơm, nhưng thỉnh thoảng tôi cũng nấu."
        },
        {
          "direction": "ja-vi",
          "kanji": "教師でも生徒の質問に答えられないことがある。",
          "hiragana": "きょうしでもせいとのしつもんにこたえられないことがある。",
          "romaji": "kyoushi demo seito no shitsumon ni kotaerarenai koto ga aru.",
          "meaning": "Ngay cả giáo viên đôi khi cũng có câu hỏi của học sinh mà không trả lời được."
        },
        {
          "direction": "vi-romaji",
          "kanji": "どんなに仕事ができる人でも、失敗してしまうこともある。",
          "hiragana": "どんなにしごとができるひとでも、しっぱいしてしまうこともある。",
          "romaji": "donna ni shigoto ga dekiru hito demo, shippai shite shimau koto mo aru.",
          "meaning": "Dù là người làm tốt công việc đến mức nào cũng có lúc mắc lỗi."
        },
        {
          "direction": "vi-romaji",
          "kanji": "寝ている時、起きてしまうことがある。",
          "hiragana": "ねているとき、おきてしまうことがある。",
          "romaji": "nete iru toki, okite shimau koto ga aru.",
          "meaning": "Thỉnh thoảng tôi thức dậy khi đang ngủ."
        },
        {
          "direction": "vi-romaji",
          "kanji": "あの時の辛い経験を思い出すことがある。",
          "hiragana": "あのときのつらいけいけんをおもいだすことがある。",
          "romaji": "ano toki no tsurai keiken o omoidasu koto ga aru.",
          "meaning": "Thỉnh thoảng tôi cũng nhớ đến thời gian trải nghiệm khổ cực ấy."
        }
      ]
    },
    {
      "pattern": "～たびに",
      "meaning": "Cứ mỗi lần ... thì lại ...",
      "meaningAlternatives": [
        "Mỗi khi ...",
        "Hễ ... thì ..."
      ],
      "connections": [
        {
          "label": "Động từ",
          "answer": "Vる + たびに",
          "alternatives": [],
          "romaji": [
            "V ru tabi ni"
          ]
        },
        {
          "label": "Danh từ",
          "answer": "N + の + たびに",
          "alternatives": [],
          "romaji": [
            "N no tabi ni"
          ]
        }
      ],
      "usage": "Cứ mỗi lần sự việc hoặc hoạt động được lặp lại thì hành động/trạng thái ở vế sau cũng xuất hiện.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "あの学生は会うたびに日本語が上手になっている。",
          "hiragana": "あのがくせいはあうたびににほんごがじょうずになっている。",
          "romaji": "ano gakusei wa au tabi ni nihongo ga jouzu ni natte iru.",
          "meaning": "Cứ mỗi lần gặp, tôi lại thấy bạn sinh viên ấy giỏi tiếng Nhật hơn."
        },
        {
          "direction": "ja-vi",
          "kanji": "父は出張へ行くたびに、お土産を買ってきてくれる。",
          "hiragana": "ちちはしゅっちょうへいくたびに、おみやげをかってきてくれる。",
          "romaji": "chichi wa shutchou e iku tabi ni, omiyage o katte kite kureru.",
          "meaning": "Mỗi lần đi công tác, bố tôi đều mua quà mang về cho tôi."
        },
        {
          "direction": "ja-vi",
          "kanji": "彼は授業のたびに寝ていて、先生の話を全然聞いていない。",
          "hiragana": "かれはじゅぎょうのたびにねていて、せんせいのはなしをぜんぜんきいていない。",
          "romaji": "kare wa jugyou no tabi ni nete ite, sensei no hanashi o zenzen kiite inai.",
          "meaning": "Cứ đến giờ học là anh ấy lại ngủ và chẳng nghe giáo viên giảng chút nào."
        },
        {
          "direction": "vi-romaji",
          "kanji": "亡くなったお母さんの写真を見るたびに、泣き出してくる。",
          "hiragana": "なくなったおかあさんのしゃしんをみるたびに、なきだしてくる。",
          "romaji": "nakunatta okaasan no shashin o miru tabi ni, nakidashite kuru.",
          "meaning": "Cứ mỗi lần nhìn bức ảnh của người mẹ đã khuất, tôi lại bật khóc."
        },
        {
          "direction": "vi-romaji",
          "kanji": "京都に来るたびに、片思いの彼のことを思い出している。",
          "hiragana": "きょうとにくるたびに、かたおもいのかれのことをおもいだしている。",
          "romaji": "kyouto ni kuru tabi ni, kataomoi no kare no koto o omoidashite iru.",
          "meaning": "Cứ mỗi lần về Kyoto tôi lại nhớ anh chàng mà tôi từng yêu đơn phương."
        },
        {
          "direction": "vi-romaji",
          "kanji": "バイト先で好きな先輩に会うたびに、いつもワクワクしている。",
          "hiragana": "ばいとさきですきなせんぱいにあうたびに、いつもわくわくしている。",
          "romaji": "baitosaki de suki na senpai ni au tabi ni, itsumo wakuwaku shite iru.",
          "meaning": "Cứ mỗi lần gặp senpai mà tôi thích ở chỗ làm thêm, tôi lại hồi hộp."
        }
      ]
    },
    {
      "pattern": "～ごとに",
      "meaning": "Cứ mỗi ... (đơn vị hoặc lần) thì ...",
      "meaningAlternatives": [
        "Mỗi ... một lần ...",
        "Cứ mỗi lần ...",
        "Theo từng ..."
      ],
      "connections": [
        {
          "label": "Danh từ / đơn vị",
          "answer": "N + ごとに",
          "alternatives": [],
          "romaji": [
            "N goto ni"
          ]
        },
        {
          "label": "Động từ",
          "answer": "Vる + ごとに",
          "alternatives": [],
          "romaji": [
            "V ru goto ni"
          ]
        }
      ],
      "usage": "Với danh từ: theo chu kỳ, từng đơn vị thời gian/khoảng cách/nhóm. Với động từ: cứ mỗi lần thực hiện hành động sẽ có sự việc hoặc thay đổi tương ứng.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "借りているマンションは１年ごとに、契約を更新する。",
          "hiragana": "かりているまんしょんはいちねんごとに、けいやくをこうしんする。",
          "romaji": "karite iru manshon wa ichinen goto ni, keiyaku o koushin suru.",
          "meaning": "Căn hộ tôi đang thuê cứ mỗi năm lại gia hạn hợp đồng một lần."
        },
        {
          "direction": "ja-vi",
          "kanji": "グループごとに、話し合った結果を発表してください。",
          "hiragana": "ぐるーぷごとに、はなしあったけっかをはっぴょうしてください。",
          "romaji": "guruupu goto ni, hanashiatta kekka o happyou shite kudasai.",
          "meaning": "Mỗi nhóm hãy trình bày kết quả đã thảo luận."
        },
        {
          "direction": "ja-vi",
          "kanji": "この店では、100円買い物するごとに、1ポイントもらえます。",
          "hiragana": "このみせでは、ひゃくえんかいものするごとに、いちぽいんともらえます。",
          "romaji": "kono mise de wa, hyakuen kaimono suru goto ni, ichipointo moraemasu.",
          "meaning": "Ở cửa hàng này, cứ mua hàng mỗi 100 yên thì sẽ nhận được một điểm."
        },
        {
          "direction": "vi-romaji",
          "kanji": "10分ごとにバスが来る。",
          "hiragana": "じゅっぷんごとにばすがくる。",
          "romaji": "juppun goto ni basu ga kuru.",
          "meaning": "Xe buýt cứ mỗi 10 phút lại có một chuyến."
        },
        {
          "direction": "vi-romaji",
          "kanji": "1時間ごとに携帯のアラームが鳴る。",
          "hiragana": "いちじかんごとにけいたいのあらーむがなる。",
          "romaji": "ichijikan goto ni keitai no araamu ga naru.",
          "meaning": "Chuông điện thoại cứ một tiếng lại kêu một lần."
        },
        {
          "direction": "vi-romaji",
          "kanji": "グループごとにディスカッションの発表をする。",
          "hiragana": "ぐるーぷごとにでぃすかっしょんのはっぴょうをする。",
          "romaji": "guruupu goto ni disukasshon no happyou o suru.",
          "meaning": "Cứ mỗi nhóm sẽ tiến hành trình bày kết quả thảo luận."
        },
        {
          "direction": "vi-romaji",
          "kanji": "彼女は会うごとに日本語が上手になっている。",
          "hiragana": "かのじょはあうごとににほんごがじょうずになっている。",
          "romaji": "kanojo wa au goto ni nihongo ga jouzu ni natte iru.",
          "meaning": "Cứ mỗi lần gặp cô ấy lại thấy tiếng Nhật của cô ấy giỏi lên."
        }
      ]
    },
    {
      "pattern": "～最中に",
      "meaning": "Đang đúng lúc làm gì thì xảy ra chuyện khác",
      "meaningAlternatives": [
        "Ngay giữa lúc ...",
        "Trong lúc đang ...",
        "Đúng khi ..."
      ],
      "connections": [
        {
          "label": "Danh từ",
          "answer": "N + の + 最中（に）",
          "alternatives": [],
          "romaji": [
            "N no saichuu ni"
          ]
        },
        {
          "label": "Động từ",
          "answer": "Vている + 最中（に）",
          "alternatives": [],
          "romaji": [
            "V te iru saichuu ni"
          ]
        },
        {
          "label": "Dạng kết câu",
          "answer": "Nの / Vている + 最中だ（った）",
          "alternatives": [],
          "romaji": [
            "saichuu da",
            "saichuu datta"
          ]
        }
      ],
      "usage": "Diễn tả đang trong quá trình diễn ra một việc thì một việc khác xen vào, thường bất ngờ hoặc gây gián đoạn; cũng dùng ～最中だ để miêu tả đúng lúc đang làm.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "子供の頃、よく父から食事の最中に勉強するなと注意されていた。",
          "hiragana": "こどものころ、よくちちからしょくじのさいちゅうにべんきょうするなとちゅういされていた。",
          "romaji": "kodomo no koro, yoku chichi kara shokuji no saichuu ni benkyou suru na to chuui sarete ita.",
          "meaning": "Hồi nhỏ, tôi thường bị bố nhắc nhở đừng học trong lúc đang ăn."
        },
        {
          "direction": "ja-vi",
          "kanji": "勉強している最中に、友達がゲームをしようと誘ってくる。",
          "hiragana": "べんきょうしているさいちゅうに、ともだちがげーむをしようとさそってくる。",
          "romaji": "benkyou shite iru saichuu ni, tomodachi ga geemu o shiyou to sasotte kuru.",
          "meaning": "Đang lúc tôi học thì bạn đến rủ chơi game."
        },
        {
          "direction": "ja-vi",
          "kanji": "映画を見ている最中に、感動して泣いてしまった。",
          "hiragana": "えいがをみているさいちゅうに、かんどうしてないてしまった。",
          "romaji": "eiga o mite iru saichuu ni, kandou shite naite shimatta.",
          "meaning": "Trong khi xem phim, tôi xúc động đến mức bật khóc."
        },
        {
          "direction": "vi-romaji",
          "kanji": "母と話している最中に、父が話に割り込んできた。",
          "hiragana": "ははとはなしているさいちゅうに、ちちがはなしにわりこんできた。",
          "romaji": "haha to hanashite iru saichuu ni, chichi ga hanashi ni warikonde kita.",
          "meaning": "Tôi đang nói chuyện với mẹ thì bố chen ngang vào."
        },
        {
          "direction": "vi-romaji",
          "kanji": "食事の最中に、携帯を見てはいけないと、母に叱られた。",
          "hiragana": "しょくじのさいちゅうに、けいたいをみてはいけないと、ははにしかられた。",
          "romaji": "shokuji no saichuu ni, keitai o mite wa ikenai to, haha ni shikarareta.",
          "meaning": "Tôi bị mẹ mắng rằng đang ăn thì không được xem điện thoại."
        },
        {
          "direction": "vi-romaji",
          "kanji": "地震があったとき、ちょうどシャワーの最中だった。",
          "hiragana": "じしんがあったとき、ちょうどしゃわーのさいちゅうだった。",
          "romaji": "jishin ga atta toki, choudo shawaa no saichuu datta.",
          "meaning": "Khi xảy ra động đất thì vừa đúng lúc tôi đang tắm."
        }
      ]
    },
    {
      "pattern": "～ところに / ～ところへ / ～ところを / ～ところで",
      "meaning": "Đúng lúc, vào thời điểm, hoặc ngay sau khi một việc xảy ra",
      "meaningAlternatives": [
        "Đang lúc ... thì ...",
        "Vừa ... thì ...",
        "Ngay khi ..."
      ],
      "connections": [
        {
          "label": "Vào đúng thời điểm",
          "answer": "Vる / Vている / Vた + ところに",
          "alternatives": [],
          "romaji": [
            "V ru tokoro ni",
            "V te iru tokoro ni",
            "V ta tokoro ni"
          ]
        },
        {
          "label": "Hướng đến thời điểm/địa điểm",
          "answer": "Vる / Vている / Vた + ところへ",
          "alternatives": [],
          "romaji": [
            "V ru tokoro e",
            "V te iru tokoro e",
            "V ta tokoro e"
          ]
        },
        {
          "label": "Hành động hướng vào chủ thể",
          "answer": "Vる / Vている / Vた + ところを",
          "alternatives": [],
          "romaji": [
            "V ru tokoro o",
            "V te iru tokoro o",
            "V ta tokoro o"
          ]
        },
        {
          "label": "Sau khi đến mốc/hành động hoàn tất",
          "answer": "Vた + ところで",
          "alternatives": [],
          "romaji": [
            "V ta tokoro de"
          ]
        }
      ],
      "usage": "ところに: có sự kiện khác xuất hiện đúng lúc; ところへ: sự việc/ai đó tiến đến; ところを: hành động tác động vào người đúng lúc đang làm; ところで: sau khi đạt tới một mốc hoặc kết thúc hành động. Cách chia trước ところ phản ánh thời điểm.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "ぐっすり寝ているところに、友達から電話がかかってきた。",
          "hiragana": "ぐっすりねているところに、ともだちからでんわがかかってきた。",
          "romaji": "gussuri nete iru tokoro ni, tomodachi kara denwa ga kakatte kita.",
          "meaning": "Đúng lúc tôi đang ngủ say thì có điện thoại từ bạn gọi tới."
        },
        {
          "direction": "ja-vi",
          "kanji": "道が分からなくて困っているところを、知らない人に助けてもらった。",
          "hiragana": "みちがわからなくてこまっているところを、しらないひとにたすけてもらった。",
          "romaji": "michi ga wakaranakute komatte iru tokoro o, shiranai hito ni tasukete moratta.",
          "meaning": "Trong lúc đang lúng túng vì không biết đường, tôi đã được một người lạ giúp đỡ."
        },
        {
          "direction": "ja-vi",
          "kanji": "家に帰ったところで、卵を買い忘れたことに気づいた。",
          "hiragana": "いえにかえったところで、たまごをかいわすれたことにきづいた。",
          "romaji": "ie ni kaetta tokoro de, tamago o kaiwasureta koto ni kizuita.",
          "meaning": "Vừa về đến nhà, tôi nhận ra mình đã quên mua trứng."
        },
        {
          "direction": "vi-romaji",
          "kanji": "寝ているところに、犬が起こして来た。",
          "hiragana": "ねているところに、いぬがおこしてきた。",
          "romaji": "nete iru tokoro ni, inu ga okoshite kita.",
          "meaning": "Đúng lúc đang ngủ thì con chó đánh thức tôi dậy."
        },
        {
          "direction": "vi-romaji",
          "kanji": "お花見をしているところに、雨が降ってきた。",
          "hiragana": "おはなみをしているところに、あめがふってきた。",
          "romaji": "ohanami o shite iru tokoro ni, ame ga futte kita.",
          "meaning": "Vào thời điểm tôi đang ngắm hoa thì trời đổ mưa."
        },
        {
          "direction": "vi-romaji",
          "kanji": "ご飯を食べようとしているところへ、友達から電話がかかってきた。",
          "hiragana": "ごはんをたべようとしているところへ、ともだちからでんわがかかってきた。",
          "romaji": "gohan o tabeyou to shite iru tokoro e, tomodachi kara denwa ga kakatte kita.",
          "meaning": "Đúng lúc tôi định ăn cơm thì bạn gọi điện tới."
        },
        {
          "direction": "vi-romaji",
          "kanji": "彼といるところを母に見られてしまった。",
          "hiragana": "かれといるところをははにみられてしまった。",
          "romaji": "kare to iru tokoro o haha ni mirarete shimatta.",
          "meaning": "Tôi bị mẹ bắt gặp đúng lúc đang ở cùng người yêu."
        },
        {
          "direction": "vi-romaji",
          "kanji": "犯人が家から出てきたところを警察が逮捕した。",
          "hiragana": "はんにんがいえからでてきたところをけいさつがたいほした。",
          "romaji": "hannin ga ie kara dete kita tokoro o keisatsu ga taiho shita.",
          "meaning": "Cảnh sát đã bắt đúng lúc tên tội phạm đi ra khỏi nhà."
        },
        {
          "direction": "vi-romaji",
          "kanji": "彼女は、日本酒を１合飲んだところで倒れてしまった。",
          "hiragana": "かのじょは、にほんしゅをいちごうのんだところでたおれてしまった。",
          "romaji": "kanojo wa, nihonshu o ichigou nonda tokoro de taorete shimatta.",
          "meaning": "Cô ấy vừa uống hết một đơn vị go rượu Nhật thì gục xuống."
        },
        {
          "direction": "vi-romaji",
          "kanji": "N3の文法を教え終わったところで、授業のチャイムが鳴りました。",
          "hiragana": "えぬさんのぶんぽうをおしえおわったところで、じゅぎょうのちゃいむがなりました。",
          "romaji": "enu san no bunpou o oshieowatta tokoro de, jugyou no chaimu ga narimashita.",
          "meaning": "Sau khi dạy xong ngữ pháp N3 thì chuông giờ học reo lên."
        }
      ]
    }
  ]
});
