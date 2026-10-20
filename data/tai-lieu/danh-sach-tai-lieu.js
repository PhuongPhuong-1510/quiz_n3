/* Thêm tên file tài liệu con vào đây. */
const DOCUMENT_DATA_FILES = [
  "tai-lieu-thuc-te.js"
];

DOCUMENT_DATA_FILES.forEach((fileName) => {
  document.write('<script src="./data/tai-lieu/' + fileName + '"><\/script>');
});
