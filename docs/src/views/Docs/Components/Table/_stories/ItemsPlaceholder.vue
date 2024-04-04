<template>
  <UiTable
    :headers="headers"
    :items="[]"
    loading
    padding="sm"
  >
    <template #loading> Loading... </template>
  </UiTable>
  <UiTable
    :headers="headers"
    :items="[]"
    padding="sm"
  >
    <template #no-items> Table is empty </template>
  </UiTable>
</template>

<script>
import { defineComponent } from 'vue'
import { UiTable } from '@vuebits/ui'

export default defineComponent({
  name: 'TableItemsPlaceholder',
  components: {
    UiTable,
  },
  data() {
    return {
      headers: [
        {
          for: 'col1',
          label: 'Col 1',
        },
        {
          for: 'col2',
          label: 'Col 2',
        },
        {
          for: 'col3',
          label: 'Col 3',
        },
      ],
    }
  },
})
</script>
