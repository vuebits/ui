<template>
  <div :class="$bem({})">
    <PageHeader>
      Table
    </PageHeader>
    <TableExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTable } from '@/components';
import TableExample from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';
export default defineComponent({
  name: 'DocsComponentsTable',
  components: {
    PageHeader,
    ComponentApi,
    TableExample
  },
  data () {
    return {
      component: VTable
    };
  }
});
</script>

<style lang="scss">
</style>
