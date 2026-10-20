/* Thêm tên file bài đọc con vào đây. */
const READING_DATA_FILES = [
  "chuong-1-mau.js"
];

READING_DATA_FILES.forEach((fileName) => {
  document.write('<script src="./data/doc-hieu/' + fileName + '"><\/script>');
});
