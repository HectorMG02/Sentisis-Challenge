/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	test: {
		globals: true,
		environment: 'happy-dom',
	},
	resolve: {
		alias: {
			'src/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
});
