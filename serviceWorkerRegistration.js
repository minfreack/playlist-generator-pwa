import { Workbox } from 'workbox-window';

export default function registerServiceWorker(){
	if ('serviceWorker' in navigator) {
		const wb = new Workbox('sw.js');
		wb.register();
	}
}