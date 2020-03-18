const FILES_TO_CACHE = [
    'index.html',
    'script.js',
    'style.css',
    'katex/lm-bold-italic.woff',
    'katex/lm-bold.woff',
    'katex/lm-italic.woff',
    'katex/lm-regular.woff',
    'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js',
    'https://fonts.googleapis.com/css?family=Noto+Sans&display=swap',
    'https://fonts.googleapis.com/css?family=Sen&display=swap',
    '/home/fontawesome/pro.min.css',
    'https://kit-pro.fontawesome.com/releases/v5.12.1/webfonts/pro-fa-solid-900-5.12.1.woff2'
];
var CACHE_NAME = '0.4'; //version of cache

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