importScripts("./offline-files.js");

const CACHE_NAME = self.OFFLINE_VERSION || "n3-quiz-v1";
const ALL_FILES = self.OFFLINE_FILES || [];

async function notifyPages(data) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clients) client.postMessage(data);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      let done = 0;
      const total = ALL_FILES.length;
      const BATCH_SIZE = 5;

      for (let i = 0; i < total; i += BATCH_SIZE) {
        const batch = ALL_FILES.slice(i, i + BATCH_SIZE);
        await Promise.allSettled(
          batch.map(async (url) => {
            try {
              const res = await fetch(url, { cache: "no-cache" });
              if (res.ok) await cache.put(url, res);
            } catch (_) {}
            done++;
          })
        );
        await notifyPages({ type: "OFFLINE_PROGRESS", done, total });
      }

      await notifyPages({ type: "OFFLINE_DONE", done, total });
    })()
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