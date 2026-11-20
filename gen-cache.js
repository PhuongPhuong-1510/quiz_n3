const fs = require("fs");
const path = require("path");

const ROOT_FILES = [
  "index.html",
  "hoc-lieu.html",
  "form_luyen_ngu_phap_3_buoc_romaji.html",
  "manifest.json",
];
const SCAN_DIRS = ["data", "tai-lieu-chuong", "tmp/pdfs"];
const IGNORE_EXT = new Set([".mp4", ".webm", ".mov"]);

const files = new Set(["./"]);

for (const file of ROOT_FILES) {
  if (fs.existsSync(file)) files.add("./" + encodeURIComponent(file));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (IGNORE_EXT.has(ext)) continue;
      // Mã hóa từng đoạn đường dẫn để không lỗi với tên tiếng Việt có dấu / dấu cách
      const rel = full.split(path.sep).map(encodeURIComponent).join("/");
      files.add("./" + rel);
    }
  }
}

SCAN_DIRS.forEach(walk);

const version = "n3-quiz-" + Date.now();
const content =
  `self.OFFLINE_VERSION = ${JSON.stringify(version)};\n` +
  `self.OFFLINE_FILES = ${JSON.stringify([...files], null, 2)};\n`;

fs.writeFileSync("offline-files.js", content, "utf8");
console.log(`Đã tạo offline-files.js với ${files.size} file (${version}).`);