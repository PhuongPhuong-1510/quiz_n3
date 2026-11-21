window.READING_SETS = window.READING_SETS || [];
window.READING_SETS.push({
  "name": "Tìm kiếm thông tin",
  "readings": [
    {
      "title": "Tờ rơi giảm giá theo khung giờ tại siêu thị 'Asahiya'",
      "lesson": "Bài 1",
      "passage": "田中さんはいつも近所のスーパー「朝日屋」のチラシを見て、タイムサービスの時に買いに行きます。\n\n【本日のお買い得品】朝日屋元町店　9月1日（水）\n・卵（10個）1パック：200円\n・牛乳 1本：200円\n・トマト 3個：200円\n・キャベツ 1玉：160円\n・リンゴ 3個：400円\n・ビール 5缶：800円\n・ラーメン 1袋：90円\n・牛肉 100グラム：200円\n\n＊AM タイムサービス（午前10時〜12時）：全品レジで1割引き\n＊PM タイムサービス（午後5時〜7時）：肉・野菜は全品レジで2割引き",
      "translation": "Anh Tanaka luôn xem tờ rơi của siêu thị gần nhà \"Asahiya\" và đi mua sắm vào khung giờ giảm giá.\n\n[Mặt hàng giá tốt hôm nay] Chi nhánh Asahiya Motomachi — Thứ Tư ngày 1/9\n・Trứng (10 quả) 1 vỉ: 200 yên\n・Sữa tươi 1 hộp: 200 yên\n・Cà chua 3 quả: 200 yên\n・Bắp cải 1 cái: 160 yên\n・Táo 3 quả: 400 yên\n・Bia 5 lon: 800 yên\n・Mì gói 1 gói: 90 yên\n・Thịt bò 100 gram: 200 yên\n\n* Giờ vàng buổi sáng (10:00–12:00): Giảm 10% toàn bộ mặt hàng tại quầy thu ngân\n* Giờ vàng buổi chiều (17:00–19:00): Giảm 20% toàn bộ thịt và rau củ tại quầy thu ngân",
      "questions": [
        {
          "prompt": "問1：一番お得な買い物をするのは、どの人か。",
          "choices": [
            "朝11時に、卵1パックと牛乳3本を買う人",
            "朝11時に、牛乳1本とリンゴ6個を買う人",
            "夕方6時に、牛肉300グラムとトマト6個を買う人",
            "夕方6時に、ビール10缶と牛肉400グラムを買う人"
          ],
          "answer": 2,
          "explanation": "Đáp án 3 đúng: (1) Tổng 800 yên giảm 10% → tiết kiệm 80 yên. (2) Tổng 1.000 yên giảm 10% → tiết kiệm 100 yên. (3) Thịt bò 600 + cà chua 400 = 1.000 yên, đều là thịt & rau giảm 20% → tiết kiệm 200 yên (nhiều nhất!). (4) Bia 1.600 yên không giảm, thịt bò 800 yên giảm 20% → tiết kiệm 160 yên."
        },
        {
          "prompt": "問2：午後7時に卵1パックと牛乳1本とトマト3個を買うと、レジで払うお金はいくらか。",
          "choices": [
            "480円",
            "540円",
            "560円",
            "600円"
          ],
          "answer": 2,
          "explanation": "Đáp án 3 đúng: 7 giờ tối vẫn thuộc khung PM (17:00–19:00), chỉ giảm 20% cho thịt và rau củ. Trứng 200 yên + sữa 200 yên (không giảm) + cà chua 200×0,8 = 160 yên. Tổng = 560 yên."
        }
      ]
    },
    {
      "title": "Chương trình khuyến mãi mùa hè của cửa hàng giày ABC",
      "lesson": "Bài 2",
      "passage": "ABC靴店サマーセール！　8/31（日）まで\n\n＊8/1（金）〜8/8（金）\nウォーキングシューズを2足以上で合計9000円（税込）以上お買い上げいただくと、レジでさらに20%OFF！\n\n＊8/9（土）〜8/17（日）\nサンダルを2足以上で合計4000円（税込）以上お買い上げいただくと、レジでさらに10%OFF！",
      "translation": "Khuyến mãi mùa hè cửa hàng giày ABC! Đến hết Chủ nhật 31/8\n\n* Từ 1/8 (Thứ Sáu) đến 8/8 (Thứ Sáu):\nMua từ 2 đôi giày đi bộ (walking shoes) trở lên với tổng hóa đơn từ 9.000 yên (đã gồm thuế) trở lên, giảm thêm 20% tại quầy thu ngân!\n\n* Từ 9/8 (Thứ Bảy) đến 17/8 (Chủ Nhật):\nMua từ 2 đôi dép sandal trở lên với tổng hóa đơn từ 4.000 yên (đã gồm thuế) trở lên, giảm thêm 10% tại quầy thu ngân!",
      "questions": [
        {
          "prompt": "問1：この店で8月5日に3000円（税込）のサンダルを2足買うと、レジで払う金額はいくらか。",
          "choices": [
            "5400円",
            "6000円",
            "4800円",
            "4000円"
          ],
          "answer": 1,
          "explanation": "Đáp án 2 đúng: Ngày 5/8 không thuộc đợt giảm giá sandal (9/8–17/8), nên không được giảm giá. Tổng tiền phải trả là 3.000 × 2 = 6.000 yên."
        },
        {
          "prompt": "問2：Aさんは8月8日にこの店でウォーキングシューズを2足買い、合計金額は税込で9000円になった。Aさんがレジで払う金額はいくらか。",
          "choices": [
            "9000円",
            "8100円",
            "7200円",
            "3600円"
          ],
          "answer": 2,
          "explanation": "Đáp án 3 đúng: Ngày 8/8 thuộc đợt sale giày đi bộ (1/8–8/8), đủ 2 đôi và đạt 9.000 yên nên được giảm 20%: 9.000 × 0,8 = 7.200 yên."
        }
      ]
    },
    {
      "title": "Chọn khách sạn cho chuyến tham quan thành Matsumoto cùng bạn bè",
      "lesson": "Bài 3",
      "passage": "マリアさんは、女友だち3人と、来週水曜日から一泊で松本城を見学に行く計画です。松本城の入場券は600円です。旅行会社がホテルを4つ選んでくれました。\n\n【A：旅館松本屋】\n・宿泊費（1人）：8,000円\n・割引：4人以上の場合、1人1,000円割引\n・サービス：女性客には、名物の「そば」をお土産サービス\n\n【B：キャッスルホテル】\n・宿泊費（1人）：7,000円\n・割引：平日の宿泊は、1人600円割引\n・サービス：女性客には、コーヒーとケーキをサービス\n\n【C：ホテルアルプス】\n・宿泊費（1人）：7,500円\n・割引：平日の宿泊は、1人1,000円割引\n・サービス：食事の時、飲み物を1品サービス\n\n【D：しなのや】\n・宿泊費（1人）：7,000円\n・割引：3人以上の場合、1人500円割引\n・サービス：松本城の入場券をサービス",
      "translation": "Maria dự định cùng 3 người bạn nữ đi tham quan thành Matsumoto 1 đêm từ thứ Tư tuần sau. Vé vào cửa thành Matsumoto là 600 yên. Công ty du lịch đã chọn giúp 4 khách sạn.\n\n[A: Lữ quán Matsumotoya]\n・Giá phòng (1 người): 8.000 yên\n・Giảm giá: Nhóm từ 4 người trở lên giảm 1.000 yên/người\n・Dịch vụ: Tặng quà lưu niệm mì soba đặc sản cho khách nữ\n\n[B: Castle Hotel]\n・Giá phòng (1 người): 7.000 yên\n・Giảm giá: Nghỉ ngày thường giảm 600 yên/người\n・Dịch vụ: Tặng cà phê và bánh ngọt cho khách nữ\n\n[C: Hotel Alps]\n・Giá phòng (1 người): 7.500 yên\n・Giảm giá: Nghỉ ngày thường giảm 1.000 yên/người\n・Dịch vụ: Tặng 1 đồ uống trong bữa ăn\n\n[D: Shinanoya]\n・Giá phòng (1 người): 7.000 yên\n・Giảm giá: Nhóm từ 3 người trở lên giảm 500 yên/người\n・Dịch vụ: Tặng vé vào cửa thành Matsumoto",
      "questions": [
        {
          "prompt": "問1：宿泊する曜日によって費用が違うのはどれか。",
          "choices": [
            "AとB",
            "AとC",
            "BとC",
            "BとD"
          ],
          "answer": 2,
          "explanation": "Đáp án 3 đúng: Chỉ khách sạn B và C có ưu đãi giảm giá khi nghỉ vào ngày thường (平日), nên chi phí thay đổi tùy theo thứ trong tuần."
        },
        {
          "prompt": "問2：費用（宿泊費、入場料）が一番安くなるのは、どこに泊まった場合か。",
          "choices": [
            "A：旅館松本屋",
            "B：キャッスルホテル",
            "C：ホテルアルプス",
            "D：しなのや"
          ],
          "answer": 3,
          "explanation": "Đáp án 4 đúng (4 người, thứ Tư là ngày thường, vé vào cửa 600 yên): A = 8000−1000+600 = 7600 yên; B = 7000−600+600 = 7000 yên; C = 7500−1000+600 = 7100 yên; D = 7000−500+0 (miễn phí vé) = 6500 yên (rẻ nhất)."
        }
      ]
    },
    {
      "title": "Chọn lớp học thể thao tại Hội quán Trung tâm cho sinh viên Wang",
      "lesson": "Bài 4",
      "passage": "ワンさんは大学生（20歳）です。○○市に住んでいます。健康のために授業がない土曜日の午前に何か運動をしたいと考えています。1ヶ月にかかるお金は2000円以内を希望し、運動に使う道具は借りたいと思っています。\n\n【中央会館スポーツ教室】\n\n① サッカー教室\n・時間：毎週金曜日の午後7時〜9時\n・場所：中央会館グラウンド\n・対象：小学校6年生まで（定員20人）\n・費用：無料\n・用意するもの：運動用の靴\n・申込方法：中央会館まで往復はがきで\n・締切：2月4日（水）中央会館着\n\n② 水泳教室\n・時間：毎週土曜日の午前9時〜10時\n・場所：市民プール\n・対象：50歳以上（定員25人）\n・費用：無料（※プール利用券2500円が別に必要）\n・用意するもの：水着\n・申込方法：市民会館まで電話（02-22-3333）\n・締切：2月16日（月）\n\n③ テニス教室\n・時間：毎週土曜日の午前9時〜11時\n・場所：市民会館\n・対象：小学5年生以上\n・費用：1500円（1ヶ月）\n・用意するもの：ラケットと運動用の靴（ラケットは貸し出し可）\n・申込方法：市民会館まで電話（02-22-3333）\n・締切：2月28日（土）\n\n④ ランニング教室\n・時間：毎週土曜日の午後6時〜7時\n・場所：中央会館\n・対象：15歳以上の人（定員20人）\n・費用：1200円（1ヶ月）\n・用意するもの：タオル\n・申込方法：中央会館まで電話（02-22-4444）\n・締切：2月10日（火）",
      "translation": "Wang là sinh viên đại học (20 tuổi), sống tại thành phố OO. Vì sức khỏe, bạn ấy muốn tập một môn thể thao vào sáng thứ Bảy khi không có tiết học. Wang mong muốn chi phí trong vòng 2.000 yên/tháng và có thể mượn dụng cụ tập.\n\n[Các lớp học thể thao Hội quán Trung tâm]\n① Lớp bóng đá: Tối thứ Sáu 19:00–21:00 | Đối tượng: đến lớp 6 tiểu học | Miễn phí | Hạn đăng ký: 4/2.\n② Lớp bơi lội: Sáng thứ Bảy 9:00–10:00 | Đối tượng: từ 50 tuổi trở lên | Miễn phí học nhưng cần vé hồ bơi 2.500 yên | Hạn đăng ký: 16/2.\n③ Lớp tennis: Sáng thứ Bảy 9:00–11:00 | Đối tượng: từ lớp 5 tiểu học trở lên | Học phí: 1.500 yên/tháng | Chuẩn bị: vợt và giày thể thao (vợt có cho mượn) | Gọi điện tới Hội quán công dân | Hạn đăng ký: 28/2.\n④ Lớp chạy bộ: Tối thứ Bảy 18:00–19:00 | Đối tượng: từ 15 tuổi trở lên | Học phí: 1.200 yên/tháng | Hạn đăng ký: 10/2.",
      "questions": [
        {
          "prompt": "問1：ワンさんが申し込むことができるスポーツ教室はどれか。",
          "choices": [
            "サッカー教室",
            "テニス教室",
            "水泳教室",
            "ランニング教室"
          ],
          "answer": 1,
          "explanation": "Đáp án 2 đúng: Lớp tennis thỏa mãn toàn bộ điều kiện: sáng thứ Bảy (9:00–11:00), đối tượng từ lớp 5 trở lên (20 tuổi phù hợp), phí 1.500 yên (<= 2.000 yên) và có cho mượn vợt."
        },
        {
          "prompt": "問2：ワンさんは何月何日までに申し込みをしなければならないか。",
          "choices": [
            "2月4日",
            "2月15日",
            "2月10日",
            "2月28日"
          ],
          "answer": 3,
          "explanation": "Đáp án 4 đúng: Hạn chót đăng ký của lớp tennis (テニス教室) là ngày 28 tháng 2 (2月28日)."
        }
      ]
    },
    {
      "title": "Hướng dẫn đăng ký Câu lạc bộ Thể thao 'Ikiiki' thành phố Hanayama",
      "lesson": "Bài 5",
      "passage": "花山市営体育館・スポーツクラブ「いきいき」ご利用案内\nご自分の生活時間に合わせて利用できます。あなたも運動を始めませんか。\n\n【ご利用時間】\n・月曜日：休館\n・火〜土曜日：7:00〜23:00\n・日・祝日：7:00〜21:00\n※受付は終了時間1時間前までです。\n\n【ご利用料金】（※18歳未満の方と65歳以上の方には全タイプの月会費から500円を割引きます）\n・Aタイプ：月会費 8,500円（火〜日、全時間）\n・Bタイプ：月会費 7,500円（火〜金、全時間）\n・Cタイプ：月会費 4,500円（火〜金、7:00〜10:00）\n・Dタイプ：月会費 5,500円（火〜金、18:00〜23:00）\n・Eタイプ：月会費 6,000円（土・日、全時間）\n※初回の月は、上記の月会費以外に、入会登録料として1,080円が必要となります。\n※利用料金にはマシーンルーム、スタジオレッスン、プール、サウナ、シャワールームのご利用が含まれます。\n※レンタルロッカーは月1,000円でご利用になれます。\n※タオル、シューズ、ウエア、水着、水泳用キャップは各200円で貸し出します。\n\n【申し込み方法】\n① 開館日、開館時間に身分証明書と現金またはクレジットカードをご持参ください。\n② 下記のサイトから申し込むこともできます。その場合、初回ご利用時に身分証明書と会員番号を受付にお出しください。（www.hanayamashisportsclubikiiki.com）\n※毎月10日までにお申し込みの場合は、申し込んだ月からご利用になれます。10日を過ぎますと、翌月からのご利用となります。",
      "translation": "Hướng dẫn sử dụng Nhà thi đấu công lập & CLB Thể thao \"Ikiiki\" TP. Hanayama\nBạn có thể sử dụng phù hợp với lịch sinh hoạt của mình. Hãy bắt đầu vận động nhé!\n\n[Giờ mở cửa]\n・Thứ Hai: Nghỉ | Thứ Ba–Thứ Bảy: 7:00–23:00 | Chủ Nhật & Lễ: 7:00–21:00 (Tiếp nhận đến trước giờ đóng cửa 1 tiếng).\n\n[Phí hội viên hàng tháng] (Người dưới 18 tuổi và từ 65 tuổi trở lên được giảm 500 yên cho mọi gói)\n・Gói A: 8.500 yên (Thứ Ba–Chủ Nhật, mọi khung giờ)\n・Gói B: 7.500 yên (Thứ Ba–Thứ Sáu, mọi khung giờ)\n・Gói C: 4.500 yên (Thứ Ba–Thứ Sáu, 7:00–10:00)\n・Gói D: 5.500 yên (Thứ Ba–Thứ Sáu, 18:00–23:00)\n・Gói E: 6.000 yên (Thứ Bảy & Chủ Nhật, mọi khung giờ)\n* Tháng đầu tiên cần thêm phí đăng ký nhập hội 1.080 yên.\n* Phí hội viên đã bao gồm phòng máy tập, lớp studio, hồ bơi, xông hơi, phòng tắm.\n* Tủ khóa (locker) cho thuê: 1.000 yên/tháng. Khăn, giày, đồ tập, đồ bơi, mũ bơi thuê 200 yên/món.\n\n[Cách đăng ký]\n① Mang giấy tờ tùy thân và tiền mặt hoặc thẻ tín dụng trực tiếp đến quầy vào ngày/giờ mở cửa.\n② Đăng ký qua trang web; khi đó, lần đầu đến tập cần xuất trình giấy tờ tùy thân và mã hội viên tại quầy lễ tân.\n* Đăng ký trước ngày 10 hằng tháng sẽ được sử dụng ngay từ tháng đăng ký; sau ngày 10 sẽ sử dụng từ tháng kế tiếp.",
      "questions": [
        {
          "prompt": "問1：今年18才になった大学1年生のキムさんは、平日も土日も毎日利用して、マシーンを使った運動と水泳をしたいと考えている。また、タオルやウエアなど必要な物は自分で準備するが、ロッカーは借りるつもりだ。キムさんは、入会時にいくら払うことになるか。",
          "choices": [
            "10580円",
            "10080円",
            "9500円",
            "8500円"
          ],
          "answer": 0,
          "explanation": "Đáp án 1 đúng: Kim đã tròn 18 tuổi (không còn là 18歳未満 nên không được giảm 500 yên). Tập cả ngày thường lẫn cuối tuần → Gói A (8.500 yên, đã gồm máy tập và hồ bơi) + Phí đăng ký lần đầu (1.080 yên) + Thuê tủ locker (1.000 yên) = 10.580 yên."
        },
        {
          "prompt": "問2：30才で会社員のエリーさんは来月から通おうと思っている。申し込みはインターネットを使うつもりだが、その場合エリーさんがしなければならないことはなにか。",
          "choices": [
            "来月10日までに申し込んで、今月中に身分証明書と会員番号を受付に持って行く。",
            "来月10日までに申し込んで、運動を始める日に身分証明書と会員番号を受付に見せる。",
            "来月10日までに申し込んで、身分証明書とクレジットカードを受付に出す。",
            "来月の10日を過ぎてから申し込んで、会員番号をもらっておく。"
          ],
          "answer": 1,
          "explanation": "Đáp án 2 đúng: Muốn tập từ tháng sau thì đăng ký chậm nhất đến ngày 10 tháng sau, và vì đăng ký qua mạng nên ngày đầu tiên đến tập phải xuất trình giấy tờ tùy thân cùng mã hội viên tại quầy."
        }
      ]
    },
    {
      "title": "So sánh 4 địa điểm tổ chức tiệc tăng hai đám cưới",
      "lesson": "Bài 6",
      "passage": "【① イタリアンレストラン】\n・利用料金：5,000円\n・利用人数：30人以上50人以下\n・料理：イタリアコース料理（ピザ・スパゲッティ・デザートなど）、ビールおよびソフトドリンク飲み放題無料\n・形式：着席ビュッフェ\n・その他：ケーキ、ワインなどの持ち込み可（持ち込み料金：一つにつき1,000円）\n\n【② エグゼール】\n・利用料金：4,500円\n・利用人数：30人以上60人以下\n・料理：和食＆洋食（15種類以上）食べ放題、ソフトドリンク飲み放題無料。アルコール飲み放題は1,500円追加（ビール、日本酒、ワイン）\n・形式：着席ビュッフェ\n・その他：ケーキ、ワインなどの持ち込み不可\n\n【③ 棒棒店】\n・利用料金：3,500円\n・利用人数：35人以上50人以下\n・料理：中華料理（15種類以上）食べ放題。追加料金1,500円で、ソフトドリンクとアルコール飲み放題（ビール、サワー）\n・形式：立食ビュッフェ\n・その他：ケーキ、ワインなどの持ち込み可（持ち込み料金なし）\n\n【④ 大韓食堂】\n・利用料金：5,000円\n・利用人数：30人以上50人以下\n・料理：韓国料理コース、ソフトドリンクとアルコール飲み放題無料（ビール、日本酒、マッコリ）\n・形式：着席ビュッフェ\n・その他：ケーキ、ワインなどの持ち込み可（持ち込み料金なし）",
      "translation": "[① Nhà hàng Ý]\n・Giá: 5.000 yên | Số khách: 30–50 người | Món ăn: Set món Ý (pizza, mì Ý, tráng miệng...), miễn phí uống không giới hạn bia và nước ngọt | Hình thức: Buffet ngồi | Khác: Được mang bánh kem, rượu vang vào (phí mang vào: 1.000 yên/món).\n\n[② Exele]\n・Giá: 4.500 yên | Số khách: 30–60 người | Món ăn: Buffet tự chọn món Nhật & Âu (>15 món), miễn phí nước ngọt không giới hạn; thêm 1.500 yên để uống đồ có cồn (bia, sake, vang) | Hình thức: Buffet ngồi | Khác: Không được mang bánh kem, rượu vang vào.\n\n[③ Quán Banban]\n・Giá: 3.500 yên | Số khách: 35–50 người | Món ăn: Buffet món Hoa (>15 món); thêm 1.500 yên cho nước ngọt và đồ uống có cồn (bia, sour) | Hình thức: Buffet đứng | Khác: Được mang bánh kem, rượu vang vào miễn phí.\n\n[④ Quán ăn Daikan]\n・Giá: 5.000 yên | Số khách: 30–50 người | Món ăn: Set món Hàn, miễn phí nước ngọt và đồ uống có cồn không giới hạn (bia, sake, makgeolli) | Hình thức: Buffet ngồi | Khác: Được mang bánh kem, rượu vang vào miễn phí.",
      "questions": [
        {
          "prompt": "問1：木村さんは、友達の結婚式の二次会会場を探している。人数は30人で、ソフトドリンク飲み放題を含めて、料金は一人5000円以下にしたい。木村さんの希望に合う会場はいくつか。",
          "choices": [
            "1つ",
            "2つ",
            "3つ",
            "4つ"
          ],
          "answer": 2,
          "explanation": "Đáp án 3 đúng: Các địa điểm phù hợp gồm ① (30–50 người, 5000 yên gồm nước ngọt), ② (30–60 người, 4500 yên gồm nước ngọt), ④ (30–50 người, 5000 yên gồm nước ngọt). ③ bị loại vì yêu cầu từ 35 người trở lên. Tổng cộng có 3 nơi."
        },
        {
          "prompt": "問2：田中さんはいくつかの条件がある。\n・人数：40人\n・ワインが好きなので、ワインがお店にあるか、持ち込めるお店がいい。\n・座って食べられるお店がいい。\n・料金は一人5000円以下（持ち込み料も含めて安く抑えたい）。\n田中さんの条件に合う会場はどれか。",
          "choices": [
            "① イタリアンレストラン",
            "② エグゼール",
            "③ 棒棒店",
            "④ 大韓食堂"
          ],
          "answer": 3,
          "explanation": "Đáp án 4 đúng: ② thêm gói rượu vang thành 6.000 yên (> 5.000 yên) và không cho mang vào; ③ là buffet đứng (立食); ① mang rượu vang vào bị thu thêm 1.000 yên/chai; chỉ ④ thỏa mãn trọn vẹn 40 người, buffet ngồi, giá 5.000 yên và được mang rượu vang vào miễn phí."
        }
      ]
    }
  ]
});
