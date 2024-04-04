<template>
  <div :class="$bem({})">
    <PageHeader> Configuration </PageHeader>
    <p class="docs--p">
      If you want to customize your library you can pass config along with ui. For example:
    </p>
    <CodeBlock
      language="js"
      code="
import Vue from 'vue';
import App from './App.vue';
import Ui from '@vuebits/ui';

const uiOptions = {
  bem: {
    hyphenate: true
  }
};

Vue.use(Ui, uiOptions);

new Vue({
  render: h => h(App)
}).$mount('#app');
      "
    />
    <p class="docs--p">
      You can also overwrite scss variables used in library. For this purpose import scss styles
      in your app instead of css:
    </p>
    <CodeBlock
      language="scss"
      code="@import '~@vuebits/ui/styles';"
    />
    <p class="docs--p">
      And configure your <code>vue.config.json</code> file in the following way:
    </p>
    <CodeBlock
      language="js"
      code="
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '~@/assets/styles/config.scss';
        `
      }
    }
  }
};
      "
    />
    <p class="docs--p">
      and import library config in
      <code>/src/assets/styles/config.scss</code> file:
    </p>
    <CodeBlock
      language="scss"
      code="@import '~@vuebits/ui/styles/config';"
    />
    <p class="docs--p">
      Now you can set your own scss variables that will overwrite variables used in library, for
      example:
    </p>
    <CodeBlock
      language="scss"
      code="
// margins, paddings etc.
$sp: 7px;

// borders
$border-radius-main: $sp;
$border-radius-large: 3 * $sp;
$border-width: 3px;

// z-index
$layer-modal: 100000;
$layer-dropdown: 2;
$layer-toolbar: 10;
$layer-notifications: 10000000;

// button sizes
$button-size-sm: 2rem;
$button-size-md: 6rem;
$button-size-lg: 8rem;

$color-white: #FFF;
$color-green-peppermint: #EFF8EB;

$colors: (
  'white': $color-white,
  'primary': $color-green-peppermint,
);

// animation times
$animation-time-short: 100ms;
$animation-time: 300ms;
$animation-time-long: 600ms;
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PageHeader, CodeBlock } from '@/components'

export default defineComponent({
  name: 'DocsGettingStartedConfiguration',
  components: {
    PageHeader,
    CodeBlock,
  },
})
</script>

<style lang="scss"></style>
