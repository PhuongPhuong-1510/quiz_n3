# Cấu trúc dữ liệu ngữ pháp

Mỗi mẫu ngữ pháp phải tách riêng kiến thức, không gộp mọi nội dung vào `note`.

```js
{
  pattern: "～始める",
  meaning: "Bắt đầu làm gì",
  meaningAlternatives: ["bắt đầu thực hiện một hành động"],
  connections: [
    {
      label: "Động từ",
      answer: "Vます bỏ ます + 始める",
      alternatives: ["Thân ます + 始める"],
      romaji: []
    }
  ],
  usage: "Diễn tả thời điểm một hành động hoặc hiện tượng bắt đầu.",
  examples: []
}
```

## Ý nghĩa các trường

- `pattern`: mẫu tiếng Nhật được đưa ra trước khi làm bài.
- `meaning`: nghĩa chính, viết ngắn gọn.
- `meaningAlternatives`: các cách diễn đạt tiếng Việt tương đương được chấp nhận.
- `connections`: từng công thức nối hoặc cách chia; mỗi phần tử là một bước kiểm tra riêng.
- `usage`: tối đa hai ý giải thích cách dùng, không chép ví dụ hoặc phần so sánh dài vào đây.
- `examples`: câu áp dụng. Mỗi câu phải có `direction`, `kanji`, `hiragana`, `romaji` và `meaning`.

Mỗi bộ bài học phải có `source.document` và `source.section` để biết kiến thức được đối chiếu từ tài liệu nào.
