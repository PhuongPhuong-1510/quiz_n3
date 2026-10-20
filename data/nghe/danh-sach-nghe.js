/*
  Thêm tên file bài nghe con vào mảng này sau khi đã chép MP3/MP4 vào
  thư mục tai-lieu-nghe theo chương.
*/
const LISTENING_DATA_FILES = [
  "nghe-thuc-te.js"
];

LISTENING_DATA_FILES.forEach((fileName) => {
  document.write('<script src="./data/nghe/' + fileName + '"><\/script>');
});
