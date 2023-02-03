/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	test: {
		globals: true,
		environment: 'happy-dom',
		coverage: {
			provider: 'istanbul' // or 'c8'
		  },
	},
	resolve: {
		alias: {
			'src/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
});
