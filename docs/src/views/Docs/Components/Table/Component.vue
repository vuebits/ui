<template>
  <div :class="$bem({})">
    <PageHeader>
      Table
    </PageHeader>
    <TableExample />
    <ComponentApi :component="component" />
    <Story
      file-name="Columns"
      component-name="Table"
      title="Columns"
    >
      <TableColumns />
    </Story>
    <Story
      file-name="ItemsPlaceholder"
      component-name="Table"
      title="Items Placeholder"
    >
      <TableItemsPlaceholder />
    </Story>
    <Story
      file-name="HoveredRow"
      component-name="Table"
      title="Hovered Row"
    >
      <TableHoveredRow />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTable } from '@vuebits/ui';
import TableExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
  Story,
} from '@/components';
import {
  TableColumns,
  TableItemsPlaceholder,
  TableHoveredRow,
} from './_stories';
export default defineComponent({
  name: 'DocsComponentsTable',
  components: {
    PageHeader,
    ComponentApi,
    TableExample,
    Story,
    TableColumns,
    TableItemsPlaceholder,
    TableHoveredRow,
  },
  data () {
    return {
      component: VTable,
    };
  },
});
</script>

<style lang="scss">
</style>
