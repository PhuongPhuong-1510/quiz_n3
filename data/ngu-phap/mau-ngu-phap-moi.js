/*
  MẪU MỞ RỘNG

  Dùng cùng schema chuẩn. Có thể khai báo nhiều cách nối trong `connections`.
  Mỗi cách nối là một bước nhập và kiểm tra riêng.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "Ngữ pháp mẫu mở rộng",
  source: {
    document: "tai-lieu-chuong/ten-tai-lieu.pdf",
    section: "Chương X - Bài Y"
  },
  grammar: [
    {
      pattern: "～始める",
      meaning: "Bắt đầu làm gì",
      meaningAlternatives: ["bắt đầu thực hiện một hành động"],
      connections: [
        {
          label: "Động từ",
          answer: "Vます bỏ ます + 始める",
          alternatives: ["Thân ます + 始める"],
          romaji: ["V masu stem + hajimeru"]
        }
      ],
      usage: "Diễn tả thời điểm một hành động hoặc hiện tượng bắt đầu và tiếp tục diễn ra.",
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
      pattern: "～向け",
      meaning: "Dành cho, hướng tới một nhóm đối tượng",
      meaningAlternatives: ["hướng đến đối tượng"],
      connections: [
        {
          label: "Đứng cuối cụm",
          answer: "N + 向け",
          alternatives: ["N向け"],
          romaji: ["N muke"]
        },
        {
          label: "Bổ nghĩa danh từ",
          answer: "N1 + 向けの + N2",
          alternatives: ["N1向けのN2"],
          romaji: ["N1 muke no N2"]
        }
      ],
      usage: "Chỉ đối tượng mục tiêu mà sản phẩm, tài liệu hoặc hoạt động được thiết kế hướng tới.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "これは初心者向けの教科書です。",
          hiragana: "これはしょしんしゃむけのきょうかしょです。",
          romaji: "kore wa shoshinsha muke no kyoukasho desu",
          meaning: "Đây là giáo trình dành cho người mới bắt đầu."
        }
      ]
    }
  ]
});
