const CACHE_NAME = "n3-quiz-v1";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./hoc-lieu.html",
  "./form_luyen_ngu_phap_3_buoc_romaji.html",
  "./manifest.json",
  "./data/danh-sach-data.js",
  "./data/hoc-lieu-data.js",
];

// 1. Cài đặt và lưu sẵn các file lõi
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

// 2. Xóa cache cũ khi bạn đổi phiên bản CACHE_NAME
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// 3. Chặn request để tự động cache toàn bộ file .js trong data/ và tài liệu
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Không cache API tra từ online hoặc domain ngoài (Google Fonts, Drive...)
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          // Lưu HTML theo pathname (bỏ ?phan=...) để mọi tab dùng chung 1 bản cache
          const cacheKey =
            request.mode === "navigate" ? new Request(url.pathname) : request;
          caches.open(CACHE_NAME).then((cache) => cache.put(cacheKey, copy));
        }
        return response;
      })
      .catch(async () => {
        // Mất mạng: tìm trong cache, bỏ qua query string (?phan=...)
        const cached = await caches.match(request, { ignoreSearch: true });
        if (cached) return cached;
        if (request.mode === "navigate") {
          return caches.match("./index.html");
        }
        return new Response("Offline", { status: 503 });
      })
  );
});