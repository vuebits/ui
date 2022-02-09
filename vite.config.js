import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
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
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './styles/config.scss';
        `,
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Vuebits UI',
      fileName: (format) => `vuebits-ui.${format}.js`,
      formats: [
        'es',
        'cjs',
        'umd',
      ],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
