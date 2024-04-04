import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import envCompatible from 'vite-plugin-env-compatible'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteCommonjs from 'vite-plugin-commonjs'
import plainText from 'vite-plugin-plain-text'

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
    extensions: ['.mjs', '.js', '.ts', '.json', '.vue'],
    dedupe: ['vue'],
  },
  plugins: [
    vue(),
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin(),
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
})
