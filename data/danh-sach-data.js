/*
  DANH SÁCH TỔNG
  Tự động chỉ nạp đúng phần dữ liệu cần thiết theo tham số ?phan= để giảm tải trên điện thoại.
*/
(function () {
  const phan = new URLSearchParams(location.search).get("phan");

  const VOCAB = "./data/tu-vung/danh-sach-tu-vung.js";
  const SENTENCE = "./data/cau-vi-du/danh-sach-cau-vi-du.js";
  const GRAMMAR = "./data/ngu-phap/danh-sach-ngu-phap.js";

  let sectionLists;
  if (!phan || phan === "tuvung") {
    sectionLists = [VOCAB];
  } else if (phan === "cau") {
    // Cần thêm VOCAB cho tính năng tra từ và sửa từ sai trong câu
    sectionLists = [VOCAB, SENTENCE];
  } else if (phan === "nguphap") {
    sectionLists = [VOCAB, GRAMMAR];
  } else {
    // Tab trắc nghiệm (?phan=tracnghiem) hoặc trang khác cần đủ cả 3 phần
    sectionLists = [VOCAB, SENTENCE, GRAMMAR];
  }

  sectionLists.forEach((listFile) => {
    document.write('<script src="' + listFile + '"><\/script>');
  });
})();