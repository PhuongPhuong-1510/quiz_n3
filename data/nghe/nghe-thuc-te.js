window.LISTENING_SETS = window.LISTENING_SETS || [];

const THU_MUC_NGHE_GOC = "../../../tài liệu/nghe";

function themChuongNghe(chapterNumber, fileNames) {
  window.LISTENING_SETS.push({
    name: `Chương ${chapterNumber}`,
    tracks: fileNames.map((fileName) => {
      const practiceMatch = fileName.match(/ren(\d+)/i);
      const title = practiceMatch
        ? `Rèn luyện ${Number(practiceMatch[1])}`
        : fileName.includes("LT2")
          ? "Luyện tập 2"
          : fileName.replace(/\.mp4$/i, "");
      return {
        title,
        lesson: `Bài nghe Chương ${chapterNumber}`,
        file: `${THU_MUC_NGHE_GOC}/chuong${chapterNumber}/${fileName}`,
        transcript: "",
        translation: ""
      };
    })
  });
}

themChuongNghe(1, [
  "N3-Nghe-Buoi1-ren1.mp4",
  "N3-Nghe-Buoi1-ren2.mp4",
  "N3-Nghe-Buoi1-ren3.mp4",
  "N3-Nghe-Buoi1-ren4.mp4"
]);

themChuongNghe(2, [
  "N3-Nghe-Buoi2-ren1.mp4",
  "N3-Nghe-Buoi2-ren2.mp4"
]);

themChuongNghe(3, [
  "N3-Nghe-Buoi3-LT2.mp4",
  "N3-Nghe-Buoi3-ren1.mp4",
  "N3-Nghe-Buoi3-ren2.mp4",
  "N3-Nghe-Buoi3-ren3.mp4",
  "N3-Nghe-Buoi3-ren4.mp4"
]);

themChuongNghe(4, [
  "N3-Nghe-Buoi4-ren1.mp4",
  "N3-Nghe-Buoi4-ren2.mp4",
  "N3-Nghe-Buoi4-ren3.mp4",
  "N3-Nghe-Buoi4-ren4.mp4",
  "N3-Nghe-Buoi4-ren5.mp4",
  "N3-Nghe-Buoi4-ren6.mp4",
  "N3-Nghe-Buoi4-ren7.mp4",
  "N3-Nghe-Buoi4-ren8.mp4",
  "N3-Nghe-Buoi4-ren9.mp4",
  "N3-Nghe-Buoi4-ren10.mp4",
  "N3-Nghe-Buoi4-ren11.mp4"
]);

themChuongNghe(5, [
  "N3-Nghe-Buoi5-ren1.mp4",
  "N3-Nghe-Buoi5-ren2.mp4",
  "N3-Nghe-Buoi5-ren3.mp4",
  "N3-Nghe-Buoi5-ren4.mp4",
  "N3-Nghe-Buoi5-ren5.mp4",
  "N3-Nghe-Buoi5-ren6.mp4",
  "N3-Nghe-Buoi5-ren7.mp4",
  "N3-Nghe-Buoi5-ren8.mp4",
  "N3-Nghe-Buoi5-ren9.mp4",
  "N3-Nghe-Buoi5-ren10.mp4",
  "N3-Nghe-Buoi5-ren11.mp4"
]);

themChuongNghe(6, [
  "N3-Nghe-Buoi6-ren1.mp4",
  "N3-Nghe-Buoi6-ren2.mp4",
  "N3-Nghe-Buoi6-ren3.mp4",
  "N3-Nghe-Buoi6-ren4.mp4",
  "N3-Nghe-Buoi6-ren5.mp4",
  "N3-Nghe-Buoi6-ren6.mp4",
  "N3-Nghe-Buoi6-ren7.mp4",
  "N3-Nghe-Buoi6-ren8.mp4",
  "N3-Nghe-Buoi6-ren9.mp4",
  "N3-Nghe-Buoi6-ren10.mp4",
  "N3-Nghe-Buoi6-ren11.mp4",
  "N3-Nghe-Buoi6-ren12.mp4",
  "N3-Nghe-Buoi6-ren13.mp4"
]);

themChuongNghe(7, [
  "N3-Nghe-Buoi7-ren1.mp4",
  "N3-Nghe-Buoi7-ren2.mp4",
  "N3-Nghe-Buoi7-ren3.mp4",
  "N3-Nghe-Buoi7-ren4.mp4",
  "N3-Nghe-Buoi7-ren5.mp4",
  "N3-Nghe-Buoi7-ren6.mp4"
]);

themChuongNghe(8, [
  "N3-Nghe-Buoi8-ren1.mp4",
  "N3-Nghe-Buoi8-ren2.mp4",
  "N3-Nghe-Buoi8-ren3.mp4",
  "N3-Nghe-Buoi8-ren4.mp4",
  "N3-Nghe-Buoi8-ren5.mp4",
  "N3-Nghe-Buoi8-ren6.mp4"
]);

themChuongNghe(9, [
  "N3-Nghe-Buoi9-ren1.mp4",
  "N3-Nghe-Buoi9-ren2.mp4",
  "N3-Nghe-Buoi9-ren3.mp4",
  "N3-Nghe-Buoi9-ren4.mp4",
  "N3-Nghe-Buoi9-ren5.mp4",
  "N3-Nghe-Buoi9-ren6.mp4"
]);
