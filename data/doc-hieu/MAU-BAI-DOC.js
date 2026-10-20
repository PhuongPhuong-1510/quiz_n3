/*
  questions có thể để [] nếu bài chỉ dùng để đọc.
  answer là vị trí đáp án đúng, bắt đầu từ 0.
*/
window.READING_SETS = window.READING_SETS || [];
window.READING_SETS.push({
  name: "Chương 2",
  readings: [
    {
      title: "Tên bài đọc",
      lesson: "Bài 1",
      passage: "Nội dung tiếng Nhật...",
      translation: "Bản dịch tiếng Việt...",
      questions: [
        {
          prompt: "Câu hỏi...",
          choices: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
          answer: 0,
          explanation: "Giải thích đáp án nếu cần."
        }
      ]
    }
  ]
});
