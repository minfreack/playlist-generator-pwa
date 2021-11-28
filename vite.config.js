import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// eslint-disable-next-line no-undef
import { VitePWA } from 'vite-plugin-pwa';
//const CopyPlugin = require('copy-webpack-plugin');


// https://vitejs.dev/config/
export default defineConfig({
	external: ['react', 'react-dom', 'prop-types', 'styled-components'],
	plugins: [reactRefresh(),
		]
});
