/* Ngữ pháp Chương 5 - Bài 1. Câu ja-vi: ví dụ giáo trình; câu vi-romaji: bài dịch từ đáp án tham khảo. */
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  "name": "chương 5 bài 1 ngữ pháp",
  "source": {
    "document": "20260130105932_CHƯƠNG 5 - GHV - N3 (ko doc nghe)(1).pdf",
    "section": "Chương 5 - Bài 1"
  },
  "grammar": [
    {
      "pattern": "～てからでなければ / ～てからでないと",
      "meaning": "Phải làm việc trước rồi mới có thể làm việc sau; nếu chưa làm thì không thể hoặc có thể gặp hậu quả xấu",
      "meaningAlternatives": [
        "Chỉ sau khi ... thì mới ...",
        "Nếu không ... thì không ... được",
        "Nếu không làm ... thì ..."
      ],
      "connections": [
        {
          "label": "Điều kiện với からでないと",
          "answer": "V1て + からでないと + V2",
          "alternatives": [
            "V1 thể て + からでないと + mệnh đề sau"
          ],
          "romaji": [
            "V1 te kara de nai to"
          ]
        },
        {
          "label": "Điều kiện với からでなければ",
          "answer": "V1て + からでなければ + V2",
          "alternatives": [
            "V1 thể て + からでなければ + mệnh đề sau"
          ],
          "romaji": [
            "V1 te kara de nakereba"
          ]
        }
      ],
      "usage": "Hành động ở vế sau chỉ thực hiện được sau khi hành động ở vế trước hoàn tất; cũng dùng để nói hậu quả nếu điều kiện chưa được đáp ứng. Lưu ý ví dụ ④ và đáp án ③ ở trang 81/86 trong sách có cách diễn đạt chưa nhất quán về logic điều kiện; giữ nguyên theo nguồn.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "私は子供たちが学校に行ってからでないと、自由に過ごせない。",
          "hiragana": "わたしはこどもたちががっこうにいってからでないと、じゆうにすごせない。",
          "romaji": "watashi wa kodomotachi ga gakkou ni itte kara de nai to, jiyuu ni sugosenai.",
          "meaning": "Chỉ sau khi bọn trẻ đến trường tôi mới có thể thoải mái dành thời gian cho mình."
        },
        {
          "direction": "ja-vi",
          "kanji": "私の家では、お祈りをしてからでないと、食事を始めることができない。",
          "hiragana": "わたしのいえでは、おいのりをしてからでないと、しょくじをはじめることができない。",
          "romaji": "watashi no ie de wa, oinori o shite kara de nai to, shokuji o hajimeru koto ga dekinai.",
          "meaning": "Ở nhà tôi, phải cầu nguyện xong rồi mới được bắt đầu ăn."
        },
        {
          "direction": "ja-vi",
          "kanji": "このことは課長に聞いてからでないと、決められない。",
          "hiragana": "このことはかちょうにきいてからでないと、きめられない。",
          "romaji": "kono koto wa kachou ni kiite kara de nai to, kimerarenai.",
          "meaning": "Vấn đề này phải hỏi trưởng phòng rồi mới quyết định được."
        },
        {
          "direction": "ja-vi",
          "kanji": "勉強してからでないと、試験に落ちるよ。",
          "hiragana": "べんきょうしてからでないと、しけんにおちるよ。",
          "romaji": "benkyou shite kara de nai to, shiken ni ochiru yo.",
          "meaning": "Nếu không học thì sẽ trượt kỳ thi. (Giữ nguyên câu sách; cấu trúc điều kiện không nhất quán.)"
        },
        {
          "direction": "vi-romaji",
          "kanji": "明日のことは、明日になってからでなければわからない。",
          "hiragana": "あしたのことは、あしたになってからでなければわからない。",
          "romaji": "ashita no koto wa, ashita ni natte kara de nakereba wakaranai.",
          "meaning": "Chuyện của ngày mai thì phải đến mai mới biết được."
        },
        {
          "direction": "vi-romaji",
          "kanji": "美味しくなさそうでも、食べてからでないと味はわからない。",
          "hiragana": "おいしくなさそうでも、たべてからでないとあじはわからない。",
          "romaji": "oishiku nasasou demo, tabete kara de nai to aji wa wakaranai.",
          "meaning": "Tuy trông có vẻ không ngon nhưng phải ăn rồi mới biết được mùi vị."
        },
        {
          "direction": "vi-romaji",
          "kanji": "宿題をしてからでないと、先生に怒られます。",
          "hiragana": "しゅくだいをしてからでないと、せんせいにおこられます。",
          "romaji": "shukudai o shite kara de nai to, sensei ni okoraremasu.",
          "meaning": "Nếu không làm bài tập về nhà thì sẽ bị giáo viên mắng. (Đáp án sách; cách nối chưa nhất quán về logic.)"
        }
      ]
    },
    {
      "pattern": "～てはじめて",
      "meaning": "Chỉ sau khi làm gì thì mới biết, hiểu hoặc nhận ra điều gì đó",
      "meaningAlternatives": [
        "Kể từ sau khi ... thì mới ...",
        "Mãi đến khi ... mới ..."
      ],
      "connections": [
        {
          "label": "Động từ",
          "answer": "Vて + はじめて + mệnh đề kết quả",
          "alternatives": [
            "V thể て + はじめて"
          ],
          "romaji": [
            "V te hajimete"
          ]
        }
      ],
      "usage": "Sau khi trực tiếp trải nghiệm một việc, người nói lần đầu hiểu ra/nhận thấy một điều; vế sau hay dùng 分かる、知る、気がつく、理解する.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "この本を３回読んではじめて、内容を理解することができた。",
          "hiragana": "このほんをさんかいよんではじめて、ないようをりかいすることができた。",
          "romaji": "kono hon o sankai yonde hajimete, naiyou o rikai suru koto ga dekita.",
          "meaning": "Chỉ sau khi đọc quyển sách này ba lần, tôi mới hiểu được nội dung."
        },
        {
          "direction": "ja-vi",
          "kanji": "失ってはじめて、彼女の大切さが身に染みて分かった。",
          "hiragana": "うしなってはじめて、かのじょのたいせつさがみにしみてわかった。",
          "romaji": "ushinatte hajimete, kanojo no taisetsusa ga mi ni shimite wakatta.",
          "meaning": "Chỉ khi đánh mất cô ấy, tôi mới thấm thía cô ấy quý giá đến mức nào."
        },
        {
          "direction": "ja-vi",
          "kanji": "会社員になってはじめてお金を稼ぐ大切さを学んだ。",
          "hiragana": "かいしゃいんになってはじめておかねをかせぐたいせつさをまなんだ。",
          "romaji": "kaishain ni natte hajimete okane o kasegu taisetsusa o mananda.",
          "meaning": "Chỉ sau khi trở thành nhân viên công ty, tôi mới học được tầm quan trọng của việc kiếm tiền."
        },
        {
          "direction": "vi-romaji",
          "kanji": "一人暮らしをしてはじめて、親のありがたみを感じました。",
          "hiragana": "ひとりぐらしをしてはじめて、おやのありがたみをかんじました。",
          "romaji": "hitorigurashi o shite hajimete, oya no arigatami o kanjimashita.",
          "meaning": "Chỉ khi bắt đầu cuộc sống một mình tôi mới cảm nhận được công ơn của bố mẹ."
        },
        {
          "direction": "vi-romaji",
          "kanji": "怪我をしてはじめて、健康であることの大切さがわかりました。",
          "hiragana": "けがをしてはじめて、けんこうであることのたいせつさがわかりました。",
          "romaji": "kega o shite hajimete, kenkou de aru koto no taisetsusa ga wakarimashita.",
          "meaning": "Chỉ khi bị thương mới hiểu ra được tầm quan trọng của sức khỏe."
        },
        {
          "direction": "vi-romaji",
          "kanji": "彼と別れてはじめてこんな気持ちになった、辛いよ。",
          "hiragana": "かれとわかれてはじめてこんなきもちになった、つらいよ。",
          "romaji": "kare to wakarete hajimete konna kimochi ni natta, tsurai yo.",
          "meaning": "Từ sau khi chia tay người yêu, đây là lần đầu tiên mình có cảm xúc như thế này, đau khổ quá."
        }
      ]
    },
    {
      "pattern": "～てもらってもいいですか",
      "meaning": "Bạn có thể làm việc gì đó giúp tôi được không?",
      "meaningAlternatives": [
        "Có thể ... giúp tôi không?",
        "Tôi nhờ bạn ... được không?"
      ],
      "connections": [
        {
          "label": "Đề nghị thông thường",
          "answer": "Vて + もらってもいいですか",
          "alternatives": [
            "Vてもらえますか",
            "Vてくれますか"
          ],
          "romaji": [
            "V te moratte mo ii desu ka"
          ]
        },
        {
          "label": "Đề nghị thân mật",
          "answer": "Vて + もらってもいい？",
          "alternatives": [],
          "romaji": [
            "V te moratte mo ii"
          ]
        },
        {
          "label": "Đề nghị rất lịch sự",
          "answer": "Vて + いただいてもよろしいですか",
          "alternatives": [
            "Vていただいてもよろしいでしょうか"
          ],
          "romaji": [
            "V te itadaite mo yoroshii desu ka"
          ]
        }
      ],
      "usage": "Dùng để nhờ người khác làm giúp. Với cấp trên nên chọn cách diễn đạt lịch sự hơn; khi hướng dẫn hay yêu cầu công việc cần thiết, ～てください/お～ください thường phù hợp hơn.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "今日、私のかわりに、犬の散歩に行ってもらってもいい？腰が痛くて…。",
          "hiragana": "きょう、わたしのかわりに、いぬのさんぽにいってもらってもいい？こしがいたくて…。",
          "romaji": "kyou, watashi no kawari ni, inu no sanpo ni itte moratte mo ii? koshi ga itakute...",
          "meaning": "Hôm nay con đi dạo cùng chó thay mẹ được không? Mẹ đau lưng quá..."
        },
        {
          "direction": "ja-vi",
          "kanji": "コンタクトを落としちゃって…。悪いんだけど、一緒に探してもらってもいい？",
          "hiragana": "こんたくとをおとしちゃって…。わるいんだけど、いっしょにさがしてもらってもいい？",
          "romaji": "kontakuto o otoshichatte... waruin dakedo, issho ni sagashite moratte mo ii?",
          "meaning": "Tớ làm rơi kính áp tròng mất rồi... Xin lỗi, cậu tìm cùng tớ được không?"
        },
        {
          "direction": "ja-vi",
          "kanji": "すみません。このパン、交換してもらってもいいですか。賞味期限が切れていたんです。",
          "hiragana": "すみません。このぱん、こうかんしてもらってもいいですか。しょうみきげんがきれていたんです。",
          "romaji": "sumimasen. kono pan, koukan shite moratte mo ii desu ka. shoumikigen ga kirete itan desu.",
          "meaning": "Xin lỗi, có thể đổi chiếc bánh mì này giúp tôi không? Nó đã hết hạn dùng ngon nhất rồi."
        },
        {
          "direction": "vi-romaji",
          "kanji": "すみません。もう一度言ってもらってもいいですか。",
          "hiragana": "すみません。もういちどいってもらってもいいですか。",
          "romaji": "sumimasen. mou ichido itte moratte mo ii desu ka.",
          "meaning": "Xin lỗi. Bạn có thể nói lại một lần nữa cho mình được không?"
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本語で作文を書いたんですが、見てもらってもいいですか。",
          "hiragana": "にほんごでさくぶんをかいたんですが、みてもらってもいいですか。",
          "romaji": "nihongo de sakubun o kaita n desu ga, mite moratte mo ii desu ka.",
          "meaning": "Tớ đã viết một bài văn bằng tiếng Nhật, cậu có thể xem nó giúp tớ không?"
        },
        {
          "direction": "vi-romaji",
          "kanji": "これをベトナム語に翻訳してもらってもいいですか。",
          "hiragana": "これをべとなむごにほんやくしてもらってもいいですか。",
          "romaji": "kore o betonamugo ni hon'yaku shite moratte mo ii desu ka.",
          "meaning": "Bạn có thể dịch giúp mình cái này sang tiếng Việt không?"
        }
      ]
    },
    {
      "pattern": "～てよかった",
      "meaning": "May mà ...; thật tốt vì đã ...",
      "meaningAlternatives": [
        "Thật may là ...",
        "Mừng vì ...",
        "Đã ... thì tốt quá"
      ],
      "connections": [
        {
          "label": "Động từ",
          "answer": "Vて + よかった",
          "alternatives": [
            "Vて + よかったです"
          ],
          "romaji": [
            "V te yokatta"
          ]
        },
        {
          "label": "Tính từ い",
          "answer": "Aい (bỏ い) + くて + よかった",
          "alternatives": [
            "Aくて + よかった"
          ],
          "romaji": [
            "A kute yokatta"
          ]
        },
        {
          "label": "Danh từ / tính từ な",
          "answer": "N / Aな + で + よかった",
          "alternatives": [],
          "romaji": [
            "N de yokatta",
            "A na de yokatta"
          ]
        }
      ],
      "usage": "Thể hiện cảm giác nhẹ nhõm, biết ơn hoặc vui vì hành động/trạng thái đã xảy ra, thường dịch “may mà”; よかったです là thể lịch sự.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "今日は晴れてよかったね。これで安心してハイキングに行けるね。",
          "hiragana": "きょうははれてよかったね。これであんしんしてはいきんぐにいけるね。",
          "romaji": "kyou wa harete yokatta ne. kore de anshin shite haikingu ni ikeru ne.",
          "meaning": "Hôm nay trời nắng thật may. Giờ thì có thể yên tâm đi leo núi rồi."
        },
        {
          "direction": "ja-vi",
          "kanji": "映画館で安く映画を見られたときは、学生でよかったと思いました。",
          "hiragana": "えいがかんでやすくえいがをみられたときは、がくせいでよかったとおもいました。",
          "romaji": "eigakan de yasuku eiga o mirareta toki wa, gakusei de yokatta to omoimashita.",
          "meaning": "Khi được xem phim giá rẻ ở rạp, tôi nghĩ thật tốt vì mình là sinh viên."
        },
        {
          "direction": "ja-vi",
          "kanji": "日本に来て、日本文化への理解が深まりました。日本に来てよかったです。",
          "hiragana": "にほんにきて、にほんぶんかへのりかいがふかまりました。にほんにきてよかったです。",
          "romaji": "nihon ni kite, nihon bunka e no rikai ga fukamarimashita. nihon ni kite yokatta desu.",
          "meaning": "Đến Nhật tôi hiểu sâu hơn về văn hóa Nhật. Thật tốt vì đã đến Nhật."
        },
        {
          "direction": "vi-romaji",
          "kanji": "被害が少なくてよかった。",
          "hiragana": "ひがいがすくなくてよかった。",
          "romaji": "higai ga sukunakute yokatta.",
          "meaning": "May mà thiệt hại ít."
        },
        {
          "direction": "vi-romaji",
          "kanji": "探していたものが見つかってよかった。",
          "hiragana": "さがしていたものがみつかってよかった。",
          "romaji": "sagashite ita mono ga mitsukatte yokatta.",
          "meaning": "Thật may vì tìm thấy thứ đang tìm kiếm."
        },
        {
          "direction": "vi-romaji",
          "kanji": "彼の企画は目立ってよかった。",
          "hiragana": "かれのきかくはめだってよかった。",
          "romaji": "kare no kikaku wa medatte yokatta.",
          "meaning": "Thật may là dự án của anh ấy đã thu hút được sự chú ý."
        }
      ]
    },
    {
      "pattern": "～てしかたがない / ～てしょうがない",
      "meaning": "Rất, vô cùng; không chịu nổi vì cảm xúc hoặc trạng thái quá mạnh",
      "meaningAlternatives": [
        "Rất ...",
        "... không chịu nổi",
        "Vô cùng ..."
      ],
      "connections": [
        {
          "label": "Động từ / trạng thái",
          "answer": "Vて + しかたがない / しょうがない",
          "alternatives": [],
          "romaji": [
            "V te shikata ga nai",
            "V te shou ga nai"
          ]
        },
        {
          "label": "Mong muốn",
          "answer": "Vたい (bỏ い) + くて + しかたがない / しょうがない",
          "alternatives": [
            "Vたくて + しょうがない"
          ],
          "romaji": [
            "V takute shou ga nai"
          ]
        },
        {
          "label": "Tính từ い",
          "answer": "Aい (bỏ い) + くて + しかたがない / しょうがない",
          "alternatives": [],
          "romaji": [
            "A kute shikata ga nai"
          ]
        },
        {
          "label": "Tính từ な",
          "answer": "Aな + で + しかたがない / しょうがない",
          "alternatives": [],
          "romaji": [
            "A na de shou ga nai"
          ]
        }
      ],
      "usage": "Diễn tả cảm xúc, mong muốn hoặc cảm giác mạnh khó kiểm soát. しょうがない thường mang sắc thái khẩu ngữ hơn しかたがない.",
      "examples": [
        {
          "direction": "ja-vi",
          "kanji": "友達の誕生日パーティーに来たが、つまらないので帰りたくてしょうがない。",
          "hiragana": "ともだちのたんじょうびぱーてぃーにきたが、つまらないのでかえりたくてしょうがない。",
          "romaji": "tomodachi no tanjoubi paatii ni kita ga, tsumaranai node kaeritakute shou ga nai.",
          "meaning": "Đã đến tiệc sinh nhật bạn nhưng chán quá nên chỉ muốn về ngay."
        },
        {
          "direction": "ja-vi",
          "kanji": "彼女に会えると思うと、嬉しくてしかたがない。",
          "hiragana": "かのじょにあえるとおもうと、うれしくてしかたがない。",
          "romaji": "kanojo ni aeru to omou to, ureshikute shikata ga nai.",
          "meaning": "Nghĩ đến việc được gặp cô ấy là tôi vui không chịu nổi."
        },
        {
          "direction": "ja-vi",
          "kanji": "最近はあまり寝れなくて、会社に行くのが嫌でしかたがない。",
          "hiragana": "さいきんはあまりねれなくて、かいしゃにいくのがいやでしかたがない。",
          "romaji": "saikin wa amari nerenakute, kaisha ni iku no ga iya de shikata ga nai.",
          "meaning": "Gần đây tôi ngủ không được nhiều nên ngại đến công ty vô cùng."
        },
        {
          "direction": "vi-romaji",
          "kanji": "家族に会いたくてしょうがない。",
          "hiragana": "かぞくにあいたくてしょうがない。",
          "romaji": "kazoku ni aitakute shou ga nai.",
          "meaning": "Mình rất muốn gặp gia đình."
        },
        {
          "direction": "vi-romaji",
          "kanji": "日本に行くことが楽しみでしかたがない。",
          "hiragana": "にほんにいくことがたのしみでしかたがない。",
          "romaji": "nihon ni iku koto ga tanoshimi de shikata ga nai.",
          "meaning": "Tôi rất mong chờ việc đi Nhật."
        },
        {
          "direction": "vi-romaji",
          "kanji": "疲れてしょうがない。",
          "hiragana": "つかれてしょうがない。",
          "romaji": "tsukarete shou ga nai.",
          "meaning": "Rất mệt."
        }
      ]
    }
  ]
});
