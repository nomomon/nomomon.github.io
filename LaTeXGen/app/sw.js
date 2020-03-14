const FILES_TO_CACHE = [
    'index.html',
    'script.js',
    'style.css',
];
var CACHE_NAME = '0.1'; //version of cache

self.addEventListener('install', event => {
    console.log(event)
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
            }
        }));
        })
    );
});

self.addEventListener('fetch', event =>{
    // console.log(event)
    if (event.request.mode !== 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        var c = event.request.url.split(event.request.refferer).join('')
                        return cache.match(c);
                    });
                })
        );
    }
    if (event.request.mode == 'navigate'){ 
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('index.html');
                    });
                })
        );
    }
});