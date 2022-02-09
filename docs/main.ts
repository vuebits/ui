import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '@vuebits/ui';
import router from './router';
import {
  asset,
} from './plugins';

const config = {
  locale: 'en',
  icons: {
    prefix: 'fa-',
    type: 'fa',
    values: {
      error: 'exclamation-triangle',
      spinner: 'circle-notch',
      check: 'check',
      previous: 'chevron-left',
      next: 'chevron-right',
      expand: 'chevron-down',
      collapse: 'chevron-up',
      file: 'file-import',
      close: 'times',
      hamburger: 'bars',
    },
  },
};

createApp(App)
  .use(createUI(config))
  .use(router)
  .use(asset)
  .mount('#app');
