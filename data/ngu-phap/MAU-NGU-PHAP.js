/*
  FILE MẪU NGỮ PHÁP CHUẨN

  Thêm tên file bài học vào danh-sach-ngu-phap.js.
  Không gộp cách nối và cách dùng vào `note`.

  direction:
    "ja-vi"      = hiện câu Kanji, nhập Romaji và nghĩa Việt.
    "vi-romaji"  = hiện nghĩa Việt, nhập câu bằng Romaji.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];

window.GRAMMAR_SETS.push({
  name: "Ngữ pháp mẫu",
  source: {
    document: "tai-lieu-chuong/ten-tai-lieu.pdf",
    section: "Chương X - Bài Y"
  },
  grammar: [
    {
      pattern: "～ことができる",
      meaning: "Có thể làm gì",
      meaningAlternatives: ["có khả năng làm", "làm được"],
      connections: [
        {
          label: "Động từ",
          answer: "Vる + ことができる",
          alternatives: ["V thể từ điển + ことができる"],
          romaji: ["V ru + koto ga dekiru"]
        }
      ],
      usage: "Diễn tả khả năng thực hiện một hành động hoặc điều kiện cho phép thực hiện hành động đó.",
      examples: [
        {
          direction: "ja-vi",
          kanji: "私は日本語を話すことができます。",
          hiragana: "わたしはにほんごをはなすことができます。",
          romaji: "watashi wa nihongo o hanasu koto ga dekimasu",
          meaning: "Tôi có thể nói tiếng Nhật."
        },
        {
          direction: "vi-romaji",
          kanji: "ここで写真を撮ることができます。",
          hiragana: "ここでしゃしんをとることができます。",
          romaji: "koko de shashin o toru koto ga dekimasu",
          meaning: "Có thể chụp ảnh ở đây."
        }
      ]
    }
  ]
});
