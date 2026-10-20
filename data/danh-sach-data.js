/*
  DANH SÁCH TỔNG
  File HTML chỉ nạp file này. Mỗi phần tự quản lý danh sách dữ liệu của nó.
*/
const DATA_SECTION_LISTS = [
  "./data/tu-vung/danh-sach-tu-vung.js",
  "./data/cau-vi-du/danh-sach-cau-vi-du.js",
  "./data/ngu-phap/danh-sach-ngu-phap.js"
];

DATA_SECTION_LISTS.forEach((listFile) => {
  document.write('<script src="' + listFile + '"><\/script>');
});
