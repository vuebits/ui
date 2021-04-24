<h1 align="center">Vuebits UI</h1>

<p align="center">
  <a href="https://vuejs.org/">
    <img alt="Vuebits UI" src="https://user-images.githubusercontent.com/18534115/109525516-e1248880-7ab1-11eb-8a22-1e1d16c19362.png" height="192">
  </a>
</p>


<h4 align="center">Vue 3 components library</h4>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick start](#quick-start)
- 
## Documentation
To check out docs, visit [vuebits-ui.github.io](https://vue-crud.github.io/) page.

## Features
- 35+ UI components,
- directives,
- customizable styles (sass variables),
- internationalization,
- support for font awesome icons,
- typescript support,
- helper css classes,
- ... and more

## Installation

`npm i @vuebits/ui` / `yarn add @vuebits/ui`

## Quick start

Add library to your Vue 3 app in entry file (eg. main.js):

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '@vuebits/ui';

(async () => {
  const app = createApp(App);
  app
    .use(createUI({}))
    .mount('#app');
})();
```

Import stylesheet file:

```scss
@import '~@vuebits/ui/styles';
```

Install fontawesome icons in your project:

```bash
npm i @fortawesome/fontawesome-free
```

and import icons in your styles:

```scss
@import '~@fortawesome/fontawesome-free/css/all.css';
```

## License
[MIT](https://opensource.org/licenses/MIT)
