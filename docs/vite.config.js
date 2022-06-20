import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import envCompatible from 'vite-plugin-env-compatible';
import { injectHtml } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import plainText from 'vite-plugin-plain-text';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_APP_BASE_URL,
  server: {
    port: 8080,
    strictPort: false,
    https: false,
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@vuebits/ui',
        replacement: path.resolve(__dirname, '../lib/src'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.json',
      '.vue',
    ],
    dedupe: ['vue'],
  },
  plugins: [
    vue(),
    viteCommonjs(),
    envCompatible(),
    injectHtml(),
    plainText(/\/COMPONENT$/),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:color';
          @import '@/assets/styles/config.scss';
          @import '../lib/styles/config.scss';
        `,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
