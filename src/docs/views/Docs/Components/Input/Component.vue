<template>
  <div :class="$bem({})">
    <PageHeader>
      Input
    </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VInput } from '@/components';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsInput',
  components: {
    PageHeader,
    ComponentApi,
    Example
  },
  data () {
    return {
      component: VInput
    };
  }
});
</script>

<style lang="scss">
</style>
