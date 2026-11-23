const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT_FILES = [
  "index.html",
  "hoc-lieu.html",
  "form_luyen_ngu_phap_3_buoc_romaji.html",
  "manifest.json",
];
const SCAN_DIRS = ["data", "tai-lieu-chuong", "tmp/pdfs"];
const IGNORE_EXT = new Set([".mp4", ".webm", ".mov"]);

const files = new Set(["./"]);
const versionHash = crypto.createHash("sha256");

function addFile(file, publicPath) {
  files.add(publicPath);
  if (path.extname(file).toLowerCase() !== ".pdf") {
    versionHash.update(publicPath);
    versionHash.update(fs.readFileSync(file));
  }
}

for (const file of ROOT_FILES) {
  if (fs.existsSync(file)) addFile(file, "./" + encodeURIComponent(file));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (IGNORE_EXT.has(ext)) continue;
      // Mã hóa từng đoạn đường dẫn để không lỗi với tên tiếng Việt có dấu / dấu cách
      const rel = full.split(path.sep).map(encodeURIComponent).join("/");
      addFile(full, "./" + rel);
    }
  }
}

SCAN_DIRS.forEach(walk);

const version = "n3-quiz-" + versionHash.digest("hex").slice(0, 12);
const content =
  `self.OFFLINE_VERSION = ${JSON.stringify(version)};\n` +
  `self.OFFLINE_FILES = ${JSON.stringify([...files], null, 2)};\n`;

fs.writeFileSync("offline-files.js", content, "utf8");
console.log(`Đã tạo offline-files.js với ${files.size} file (${version}).`);
