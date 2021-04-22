import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '@/index';
import router from './router';

const config = {
  bem: {
    hyphenate: true
  },
  locale: 'en'
};

createApp(App)
  .use(createUI(config))
  .use(router)
  .mount('#app');
