<template>
  <div :class="$bem({})">
    <PageHeader>
      Checkbox
    </PageHeader>
    <Example />
    <ComponentApi :component="componentGrid" />
    <ComponentApi :component="componentGridItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VGrid,
  VGridItem,
} from '@vuebits/ui';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsGrid',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data () {
    return {
      componentGrid: VGrid,
      componentGridItem: VGridItem,
    };
  },
});
</script>

<style lang="scss">
</style>
