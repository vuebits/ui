<template>
  <div :class="$bem({})">
    <PageHeader>
      Tabs
    </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTabs } from '@/components';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsTabs',
  components: {
    PageHeader,
    ComponentApi,
    Example
  },
  data () {
    return {
      component: VTabs
    };
  }
});
</script>

<style lang="scss">
</style>
