self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', (event) => {
  // Simple network-first fetch strategy
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
