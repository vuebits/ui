<template>
  <div :class="$bem({})">
    <PageHeader>
      Simple grid
    </PageHeader>
    <Example />
    <ComponentApi :component="componentSimpleGrid" />
    <ComponentApi :component="componentSimpleGridItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VSimpleGrid,
  VSimpleGridItem,
} from '@vuebits/ui';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsSimpleGrid',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data () {
    return {
      componentSimpleGrid: VSimpleGrid,
      componentSimpleGridItem: VSimpleGridItem,
    };
  },
});
</script>

<style lang="scss">
</style>
