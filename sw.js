const CACHE_NAME = "n3-quiz-v2";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./hoc-lieu.html",
  "./form_luyen_ngu_phap_3_buoc_romaji.html",
  "./manifest.json",
  "./data/danh-sach-data.js",
  "./data/hoc-lieu-data.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) {
    return;
  }

  const cacheKey =
    request.mode === "navigate" ? new Request(url.pathname) : request;

  // Đọc ngay từ Cache (không chờ mạng), nếu có mạng sẽ tự cập nhật ngầm cho lần sau
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(cacheKey, { ignoreSearch: true });

      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            cache.put(cacheKey, response.clone());
          }
          return response;
        })
        .catch(() => null);

      if (cached) {
        event.waitUntil(networkFetch);
        return cached;
      }

      const fresh = await networkFetch;
      if (fresh) return fresh;
      if (request.mode === "navigate") return cache.match("./index.html");
      return new Response("Offline", { status: 503 });
    })
  );
});