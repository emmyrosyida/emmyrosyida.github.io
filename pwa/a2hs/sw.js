self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/pwa/a2hs/',
       '/pwa/a2hs/index.html',
       '/pwa/a2hs/index.js',
       '/pwa/a2hs/style.css',
       '/pwa/a2hs/images/yellow.jpg',
       '/pwa/a2hs/images/green.jpg',
       '/pwa/a2hs/images/pink.jpg',
       '/pwa/a2hs/images/blue.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
