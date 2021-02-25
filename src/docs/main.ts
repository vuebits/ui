import { createApp } from 'vue';
import App from './App.vue';
import { createBem } from '@vuebits/bem';
import './plugins/icons';
import router from './router';

createApp(App)
  .use(createBem({ hyphenate: true }))
  .use(router)
  .mount('#app');
