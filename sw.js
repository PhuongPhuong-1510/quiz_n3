importScripts("./offline-files.js");

const DATA_CACHE = self.OFFLINE_VERSION || "n3-data-v1";
const PDF_CACHE = "n3-pdfs-v1";

const ALL_FILES = self.OFFLINE_FILES || [];
const DATA_FILES = ALL_FILES.filter((u) => !u.toLowerCase().endsWith(".pdf"));
const PDF_FILES = ALL_FILES.filter((u) => u.toLowerCase().endsWith(".pdf"));

let isCachingPdfs = false;

async function notifyPages(data) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clients) client.postMessage(data);
}

// Chỉ tải những file PDF chưa có trong PDF_CACHE
async function cacheMissingPdfs() {
  if (isCachingPdfs || !PDF_FILES.length) return;
  isCachingPdfs = true;

  try {
    const cache = await caches.open(PDF_CACHE);
    const total = PDF_FILES.length;
    const missing = [];

    for (const url of PDF_FILES) {
      const exists = await cache.match(url, { ignoreSearch: true });
      if (!exists) missing.push(url);
    }

    // Nếu máy đã lưu đủ 100% PDF rồi thì kết thúc im lặng, không làm phiền người dùng
    if (!missing.length) return;

    let done = total - missing.length;
    let failed = 0;

    for (const url of missing) {
      try {
        const res = await fetch(url);
        if (res.ok && res.status === 200) {
          await cache.put(url, res);
        } else {
          failed++;
        }
      } catch (_) {
        failed++;
      }
      done++;
      await notifyPages({ type: "PDF_PROGRESS", done, total, failed });
    }

    await notifyPages({ type: "PDF_DONE", done, total, failed });
  } finally {
    isCachingPdfs = false;
  }
}

// Bước install chỉ tải HTML + file dữ liệu .js (rất nhẹ, xong trong vài giây)
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(DATA_CACHE);
      const BATCH_SIZE = 10;
      for (let i = 0; i < DATA_FILES.length; i += BATCH_SIZE) {
        const batch = DATA_FILES.slice(i, i + BATCH_SIZE);
        await Promise.allSettled(
          batch.map(async (url) => {
            try {
              const res = await fetch(url, { cache: "no-cache" });
              if (res.ok && res.status === 200) await cache.put(url, res);
            } catch (_) {}
          })
        );
      }
    })()
  );
  self.skipWaiting();
});

// Giữ lại cả DATA_CACHE mới nhất lẫn PDF_CACHE cố định
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== DATA_CACHE && k !== PDF_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Nhận lệnh kích hoạt tải ngầm PDF từ trang web
self.addEventListener("message", (event) => {
  if (event.data?.type === "START_PDF_CACHE") {
    event.waitUntil(cacheMissingPdfs());
  }
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) {
    return;
  }

  const pathnameLower = url.pathname.toLowerCase();
  const isPdf = pathnameLower.endsWith(".pdf");
  const isStaticData = pathnameLower.includes("/data/") && pathnameLower.endsWith(".js");
  const isMainPage =
    request.mode === "navigate" && request.destination === "document" && !isPdf;
  const targetCacheName = isPdf ? PDF_CACHE : DATA_CACHE;
  const cacheKey = isMainPage || isPdf ? new Request(url.pathname) : request;

  event.respondWith(
    (async () => {
      const cache = await caches.open(targetCacheName);
      const cached =
        (await cache.match(cacheKey, { ignoreSearch: true })) ||
        (await cache.match(url.pathname, { ignoreSearch: true }));

      if (cached) {
        // PDF và file dữ liệu .js trong /data/ đã gắn theo OFFLINE_VERSION
        // -> trả ngay từ cache, không tải lại ngầm gây lag trên điện thoại
        if (!isPdf && !isStaticData) {
          event.waitUntil(
            fetch(request)
              .then((res) =>
                res && res.status === 200 ? cache.put(cacheKey, res.clone()) : null
              )
              .catch(() => null)
          );
        }
        return cached;
      }

      try {
        const fresh = await fetch(request);
        // Chỉ lưu response 200 (tránh lỗi Cache API với 206 Partial Content của PDF)
        if (fresh && fresh.status === 200) {
          cache.put(cacheKey, fresh.clone());
        }
        return fresh;
      } catch (_) {
        if (isMainPage) {
          const dataCache = await caches.open(DATA_CACHE);
          return dataCache.match("./index.html");
        }
        return new Response("File này chưa được tải về máy để xem offline.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    })()
  );
});