import { createApp } from 'vue'
import App from './App.vue'
import { createUI } from '@vuebits/ui'
import router from './router'
import { asset } from './plugins'
import { CustomOptions } from '../../lib/src/models'

const config: CustomOptions = {
  locale: 'en',
  icons: {
    format: 'font',
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
      upload: 'file-import',
      close: 'times',
      menu: 'bars',
    },
  },
}

createApp(App).use(createUI(config)).use(router).use(asset).mount('#app')
