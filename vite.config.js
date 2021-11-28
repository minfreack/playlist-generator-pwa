import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// eslint-disable-next-line no-undef
import { VitePWA } from 'vite-plugin-pwa';
//const CopyPlugin = require('copy-webpack-plugin');


// https://vitejs.dev/config/
export default defineConfig({
	external: ['react', 'react-dom', 'prop-types', 'styled-components'],
	plugins: [reactRefresh(),
		VitePWA({
			mode: 'development',
			base: '/',
			srcDir: 'src',
			filename: 'sw.ts',
			includeAssets: ['/favicon.png'],
			strategies: 'injectManifest',
			manifest: {
				name: 'Test Project',
				short_name: 'Test',
				theme_color: '#ffffff',
				start_url: '/',
				display: 'standalone',
				background_color: '#ffffff',
				icons: [
					{
						src: 'icon-192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'icon-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		})]
});
