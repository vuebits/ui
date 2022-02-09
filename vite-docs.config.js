import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import envCompatible from 'vite-plugin-env-compatible';
import { injectHtml } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

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
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'docs'),
      },
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.json',
      '.vue',
    ],
  },
  plugins: [
    vue(),
    viteCommonjs(),
    envCompatible(),
    injectHtml(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:color';
          @import '@/assets/styles/config.scss';
          @import './styles/config.scss';
        `,
      },
    },
  },
  build: {
    outDir: 'dist-docs',
  },
});
