/* Danh sách tổng cho ba phần: tài liệu, đọc hiểu và nghe. */
[
  "./data/tai-lieu/danh-sach-tai-lieu.js",
  "./data/doc-hieu/danh-sach-doc-hieu.js",
  "./data/nghe/danh-sach-nghe.js"
].forEach((fileName) => {
  document.write('<script src="' + fileName + '"><\/script>');
});
