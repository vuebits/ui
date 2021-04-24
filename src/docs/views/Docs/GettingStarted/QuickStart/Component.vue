<template>
  <div :class="$bem({})">
    <PageHeader>
      Quick start
    </PageHeader>
    <p class="docs--p">
      Add library to your Vue 3 app in entry file (eg. main.js):
    </p>
    <CodeBlock
      language="js"
      code="
import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '@vuebits/ui';

(async () => {
  const app = createApp(App);
  app
    .use(createUI({}))
    .mount('#app');
})();
      "
    />
    <p class="docs--p">
      Import stylesheet file:
    </p>
    <CodeBlock
      language="scss"
      code="@import '~@vuebits/ui/dist/vuebits-ui;"
    />
    <p class="docs--p">
      Install fontawesome icons in your project:
    </p>
    <CodeBlock
      language="bash"
      code="npm i @fortawesome/fontawesome-free"
    />
    <p class="docs--p">
      and import icons in your styles:
    </p>
    <CodeBlock
      language="scss"
      code="@import '~@fortawesome/fontawesome-free/css/all.css';"
    />
    <p class="docs--p">
      Now you can use components from library in your .vue files:
    </p>
    <CodeBlock
      language="html"
      code="
<template>
  <VButton
    bordered
    rounded
    elevated
    @click='alert'
  >
    Click me!
  </VButton>
</template>

<script>
import {
  VButton
} from '@vuebits/ui';

export default {
  name: 'ExampleComponent',
  components: {
    VButton
  },
  methods: {
    alert () {
      alert('Hello world!');
    }
  }
};
</script>
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  PageHeader,
  CodeBlock
} from '@/docs/components';

export default defineComponent({
  name: 'DocsGettingStartedQuickStart',
  components: {
    PageHeader,
    CodeBlock
  }
});
</script>

<style lang="scss">
</style>
