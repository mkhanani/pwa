var cacheName ='petstore-v1';
var cacheFiles = [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'images/yarn.jpg',
    'images/cat-bed.jpg',
    'images/cat-food.jpg',
    'images/cat-scratching-post.jpg',
    'images/kitty-litter.jpg',
    'images/icon-512.png'
];
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});
self.addEventListener('fetch', function(e) {
    e.respondWith(
        //check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: ' + e.request.url);
            // 'r' is the matching file if it exists in the cache
            return r
        })
    );
});
