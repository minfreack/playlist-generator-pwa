const cacheName = 'cache';
const contentToCache = [
	'dist/index.html',
	'app.js',
	'sw.js',
	'manifest.webmanifest',
];

// self.addEventListener('install', (e) => {
// 	console.log(e + 'Install');
// 	e.waitUntil((async () => {
// 		const cache = await caches.open(cacheName);
// 		console.log('Service worker cachingall');
// 		await cache.addAll(contentToCache);
// 	})());
// });

self.addEventListener('install', (evt) => {
	console.log('Service Worker INstall');
	evt.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(contentToCache);
		})
	);
});


self.addEventListener('fetch', (e) => {
	e.respondWith((async () => {
		const r = await caches.match(e.request);
		console.log(`Fetching resource: ${e.request.url}`);
		if (r) return r;
		const response = await fetch(e.request);
		const cache = await caches.open(cacheName);
		console.log(`Caching new re: ${e.request.url}`);
		cache.put(e.request, response.clone());
		console.log('No entro');
		return response;
	})());
});
// self.addEventListener('fetch', (evt) => {
// 	evt.respondWith(
// 		caches.match(evt.request)
// 			.then(() => {
// 				return fetch(evt.request)
// 					.catch(() => caches.match('offline.html'));
// 			})
// 	);
// });

// self.addEventListener('activate', (evt) => {
// 	console.log('Service Worker Activate');
// 	evt.waitUntil(
// 		caches.keys().then((keyList) => {
// 			return Promise.all(keyList.map((key => {
// 				if (key !== cacheName){
// 					console.log('Service Worker Removing old cache');
// 					return caches.delete(key);
// 				}
// 			})));
// 		})
// 	);
// });