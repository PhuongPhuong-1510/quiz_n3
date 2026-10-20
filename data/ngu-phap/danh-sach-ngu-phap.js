/* Chỉ thêm tên file ngữ pháp vào danh sách này. */
const GRAMMAR_DATA_FILES = [
  "chuong-1-bai-1.js",
  "chuong-1-bai-2.js",
  "chuong-1-bai-3.js",
  "chuong-2-bai-1.js",
  "chuong-2-bai-2.js",
  "chuong-2-bai-3.js",
  "chuong-3-bai-1.js",
  "chuong-3-bai-2.js",




];

GRAMMAR_DATA_FILES.forEach((fileName) => {
  document.write('<script src="./data/ngu-phap/' + fileName + '"><\/script>');
});
