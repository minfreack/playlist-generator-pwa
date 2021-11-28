importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');


workbox.precaching.precacheAndRoute([
 	'dist/index.html',
 	'app.js',
 	'sw.js',
	'manifest.json',
]);


//const cacheName = 'cache';
//const contentToCache = [
//	'dist/index.html',
//	'app.js',
//	'sw.js',
//	'manifest.webmanifest',
//];

// workbox.routing.setCatchHandler(async context=>{
// 	console.log(context);
// 	if (context.request.url.pathname === 'src/Images/robot.png'){
// 		return workbox.precaching.matchPrecache('src/Images/test.png');
// 	}
// 	return Response.error();
// });

workbox.routing.registerRoute(
 	new RegExp('\\.html'),
	new workbox.strategies.CacheFirst({
		cacheName: 'html-cache'
	})
);
workbox.routing.registerRoute(
 	new RegExp('\\.json'),
 	new workbox.strategies.NetworkFirst({
		 cacheName: 'json-cache'
	 })
);



// self.addEventListener('install', (e) => {
// 	console.log(e + 'Install');
// 	e.waitUntil((async () => {
// 		const cache = await caches.open(cacheName);
// 		console.log('Service worker cachingall');
// 		await cache.addAll(contentToCache);
// 	})());
// });

//self.addEventListener('install', (evt) => {
//	console.log('Service Worker INstall');
//	evt.waitUntil(
//		caches.open(cacheName).then((cache) => {
//			return cache.addAll(contentToCache);
//		})
//	);
//});


//self.addEventListener('fetch', (e) => {
//	e.respondWith((async () => {
//		const r = await caches.match(e.request);
//		console.log(`Fetching resource: ${e.request.url}`);
//		if (r) return r;
//		const response = await fetch(e.request);
//		const cache = await caches.open(cacheName);
//		console.log(`Caching new re: ${e.request.url}`);
//		cache.put(e.request, response.clone());
//		console.log('No entro');
//		return response;
//	})());
//});
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