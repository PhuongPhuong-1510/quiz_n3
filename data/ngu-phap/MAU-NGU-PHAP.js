/*
  FILE MẪU NGỮ PHÁP
  Thêm tên file mới vào ngu-phap/danh-sach-ngu-phap.js.
  direction:
    "ja-vi" = hiện câu Nhật, nhập Romaji và nghĩa Việt.
    "vi-romaji" = hiện câu Việt, nhập câu bằng Romaji.
*/
window.GRAMMAR_SETS = window.GRAMMAR_SETS || [];
window.GRAMMAR_SETS.push({
  name: "Ngữ pháp mẫu",
  grammar: [
    {
      structure: "Vる + ことができます",
      meaning: "Có thể làm gì",
      note: "Dùng để nói về khả năng hoặc điều kiện cho phép.",
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
