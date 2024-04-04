<template>
  <div :class="$bem({})">
    <PageHeader> Quick start </PageHeader>
    <p class="docs--p">Add library to your Vue 2 app in entry file (eg. main.js):</p>
    <CodeBlock
      language="js"
      code="
import Vue from 'vue';
import App from './App.vue';
import Ui from '@vuebits/ui';

Vue.use(Ui);

new Vue({
  render: h => h(App)
}).$mount('#app');
      "
    />
    <p class="docs--p">Import stylesheet file:</p>
    <CodeBlock
      language="scss"
      code="@import '~@vuebits/ui/dist/lib;"
    />
    <CodeBlock
      language="html"
      code="
<template>
  <UiButton
    bordered
    rounded
    elevated
    @click='alert'
  >
    Click me!
  </UiButton>
</template>

<script>
import {
  UiButton
} from '@vuebits/ui';

export default {
  name: 'ExampleComponent',
  components: {
    UiButton
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
import { defineComponent } from 'vue'
import { PageHeader, CodeBlock } from '@/components'

export default defineComponent({
  name: 'DocsGettingStartedQuickStart',
  components: {
    PageHeader,
    CodeBlock,
  },
})
</script>

<style lang="scss"></style>
