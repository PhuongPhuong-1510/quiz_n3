/* Chỉ thêm tên file câu ví dụ vào danh sách này. */
const SENTENCE_DATA_FILES = [
  "chuong-1-bai-1-cau-vi-du-tu-vung.js",
  "chuong-1-bai-2-cau-vi-du-tu-vung.js",
  "chuong-1-bai-3-cau-vi-du-tu-vung.js",
  "chuong2.js",
  "c3bai1-trang-151.js",
  "c3bai1-trang-152.js",
  "c3bai1-trang-153.js",
  "c3bai1-trang-154.js",
  "c3bai1-trang-155.js",
  "c3bai1-trang-156.js",
  "c3bai1-trang-157.js",
  "c3bai1-trang-158.js",
  "c3bai2-trang-172.js",
  "c3bai2-trang-173.js",
  "c3bai2-trang-174.js",
  "c3bai2-trang-175.js",
  "c3bai2-trang-176.js",
  "c3bai2-trang-177.js",
  "c3bai2-trang-178.js",
  "c3bai2-trang-179.js",
  "c3bai3-trang-193.js",
  "c3bai3-trang-194.js",
  "c3bai3-trang-195.js",
  "c3bai3-trang-196.js",
  "c3bai3-trang-197.js",
  "c3bai3-trang-198.js",
  "c3bai3-trang-199.js",
  "c4bai1-trang-6.js",
  "c4bai1-trang-7.js",
  "c4bai1-trang-8.js",
  "c4bai1-trang-9.js",
  "c4bai1-trang-10.js",
  "c4bai1-trang-11.js",
  "c4bai1-trang-12.js",
  "c4bai1-trang-13.js",
  "c4bai2-trang-26.js",
  "c4bai2-trang-27.js",
  "c4bai2-trang-28.js",
  "c4bai2-trang-29.js",
  "c4bai2-trang-30.js",
  "c4bai2-trang-31.js",
  "c4bai2-trang-32.js",
  "c4bai3-trang-45.js",
  "c4bai3-trang-46.js",
  "c4bai3-trang-47.js",
  "c4bai3-trang-48.js",
  "c4bai3-trang-49.js",
  "c4bai3-trang-50.js",
  "c4bai3-trang-51.js"


  
];

SENTENCE_DATA_FILES.forEach((fileName) => {
  document.write('<script src="./data/cau-vi-du/' + fileName + '"><\/script>');
});
