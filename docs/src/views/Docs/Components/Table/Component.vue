<template>
  <div :class="$bem({})">
    <PageHeader> Table </PageHeader>
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
      file-name="FieldColor"
      component-name="Table"
      title="Field Color"
    >
      <TableFieldColor />
    </Story>
    <Story
      file-name="ItemsPlaceholder"
      component-name="Table"
      title="Items Placeholder"
    >
      <TableItemsPlaceholder />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiTable } from '@vuebits/ui'
import TableExample from './Example.vue'
import { PageHeader, ComponentApi, Story } from '@/components'
import { TableColumns, TableFieldColor, TableItemsPlaceholder } from './_stories'
export default defineComponent({
  name: 'DocsComponentsTable',
  components: {
    PageHeader,
    ComponentApi,
    TableExample,
    Story,
    TableColumns,
    TableFieldColor,
    TableItemsPlaceholder,
  },
  data() {
    return {
      component: UiTable,
    }
  },
})
</script>

<style lang="scss"></style>
