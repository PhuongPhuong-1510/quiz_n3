/* Thêm tên file bài đọc con vào đây. */
const READING_DATA_FILES = [
  "hoc-dich-the-van.js",
  "doc-bao.js",
  "email-thu-thong-bao.js",
  "doan-van-1.js",
  "doan-van-2.js",
  "trung-van-1.js",
  "trung-van-2.js",
  "trung-van-3.js",
  "truong-van-1.js",
  "truong-van-2.js",
  "truong-van-3.js",
  "tim-kiem-thong-tin.js"
];

READING_DATA_FILES.forEach((fileName) => {
  document.write('<script src="./data/doc-hieu/' + fileName + '"><\/script>');
});