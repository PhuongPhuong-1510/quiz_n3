/*
  NGỮ PHÁP - MẪU DỮ LIỆU LUYỆN 3 BƯỚC

  Giữ nguyên phần dữ liệu cũ: name / grammar[] / structure / meaning / note / examples[]
  Bổ sung `recall` để tạo các bước:
  1. Hiện mẫu tiếng Nhật; bạn tự nhập nghĩa tiếng Việt.
  2. Tự nhập cách kết hợp / thể động từ cần dùng.
  3. Tự chia từ gốc trong câu và điền phần đã biến đổi.

  `romaji` của mỗi connection/fill: đáp án đánh máy Latin trên điện thoại.
  `meaningAlternatives`: các nghĩa Việt đồng nghĩa được hệ thống chấp nhận.
  Nếu người học diễn đạt đúng mà máy không nhận, nút xác nhận nghĩa sẽ cho qua.
  Không dùng `patternAlternatives` để hỏi tên mẫu: tên Nhật đã hiển thị sẵn.
  Mẫu không có `recall`: vẫn có bước nghĩa + cách nối từ trường structure cũ;
  muốn nhập Romaji cho cách nối của bộ cũ thì thêm `structureRomaji`.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "ngữ pháp mẫu - học 3 bước",
  grammar: [
    {
      structure: "Vます bỏ ます + 始める",
      meaning: "bắt đầu làm gì, bắt đầu thực hiện một hành động",
      note: "Ghép với thân ます của động từ. 食べます → 食べ始める.",
      recall: {
        pattern: "～始める",
        meaningAlternatives: ["bắt đầu làm", "bắt đầu một hành động", "bắt đầu thực hiện việc gì"],
        connections: [
          {
            label: "Động từ",
            question: "～始める nối với động từ ở dạng nào? Nhập công thức hoặc Romaji.",
            answer: "Vます bỏ ます + 始める",
            alternatives: ["Vます形 bỏ ます + 始める", "Vます + 始める"],
            romaji: ["V masu bo masu + hajimeru", "V masu-stem + hajimeru"]
          }
        ],
        fills: [
          {
            label: "Tự chia động từ",
            question: "Động từ gốc 食べる (taberu). Điền dạng 'bắt đầu ăn':\n子どもがご飯を（　　　）。",
            answer: "食べ始めた",
            romaji: "tabehajimeta"
          },
          {
            label: "Tự chia động từ",
            question: "Động từ gốc 降る (furu). Điền dạng 'bắt đầu mưa':\n雨が（　　　）。",
            answer: "降り始めた",
            romaji: "furihajimeta"
          }
        ],
        contrast: "～始める = bắt đầu; ～終わる = làm xong."
      },
      examples: [
        {
          direction: "ja-vi",
          kanji: "雨が降り始めました。",
          hiragana: "あめがふりはじめました。",
          romaji: "ame ga furihajimemashita",
          meaning: "Trời bắt đầu mưa."
        },
        {
          direction: "vi-romaji",
          kanji: "子どもがご飯を食べ始めた。",
          hiragana: "こどもがごはんをたべはじめた。",
          romaji: "kodomo ga gohan o tabehajimeta",
          meaning: "Đứa trẻ bắt đầu ăn cơm."
        }
      ]
    },
    {
      structure: "N + 向け（の / に）",
      meaning: "dành cho, hướng tới nhóm đối tượng cụ thể",
      note: "向け chỉ đối tượng mục tiêu của sản phẩm hoặc hoạt động.",
      recall: {
        pattern: "～向け",
        meaningAlternatives: ["dành cho", "hướng đến đối tượng", "hướng tới"],
        connections: [
          {
            label: "Danh từ",
            question: "～向け đứng sau loại từ nào? Nhập công thức.",
            answer: "N + 向け",
            alternatives: ["N向け"],
            romaji: ["N + muke", "N muke"]
          },
          {
            label: "Bổ nghĩa danh từ",
            question: "Nếu thêm danh từ phía sau, dùng cấu trúc nào?",
            answer: "N + 向けの + N",
            alternatives: ["N向けのN"],
            romaji: "N + muke no + N"
          }
        ],
        fills: [
          {
            question: "Động từ không cần chia; hãy điền phần nối thích hợp:\n初心者（　　　）教科書です。",
            answer: "向けの",
            romaji: "muke no"
          }
        ],
        contrast: "向け = được nhắm tới đối tượng; 向き = phù hợp với đối tượng."
      },
      examples: [
        {
          direction: "ja-vi",
          kanji: "これは初心者向けの教科書です。",
          hiragana: "これはしょしんしゃむけのきょうかしょです。",
          romaji: "kore wa shoshinsha muke no kyoukasho desu",
          meaning: "Đây là giáo trình dành cho người mới bắt đầu."
        },
        {
          direction: "vi-romaji",
          kanji: "これは子ども向けの本です。",
          hiragana: "これはこどもむけのほんです。",
          romaji: "kore wa kodomo muke no hon desu",
          meaning: "Đây là sách dành cho trẻ em."
        }
      ]
    }
  ]
});
