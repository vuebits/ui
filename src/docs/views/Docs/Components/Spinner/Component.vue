<template>
  <div :class="$bem({})">
    <PageHeader>
      Spinner
    </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VSpinner } from '@/components';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsSpinner',
  components: {
    PageHeader,
    ComponentApi,
    Example
  },
  data () {
    return {
      component: VSpinner
    };
  }
});
</script>

<style lang="scss">
</style>
