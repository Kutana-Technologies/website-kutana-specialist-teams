import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        capabilities: resolve(__dirname, 'capabilities.html'),
        'how-it-works': resolve(__dirname, 'how-it-works.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
