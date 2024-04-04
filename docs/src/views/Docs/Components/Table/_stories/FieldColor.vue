<template>
  <UiTable
    :headers="headers"
    :items="items"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { UiTable } from '@vuebits/ui'

export default defineComponent({
  name: 'TableFieldColor',
  components: {
    UiTable,
  },
  data() {
    return {
      headers: [
        {
          for: 'name',
          label: 'Name',
          strong: true,
          color: (_value, item) => (item.value > 0 ? 'primary' : null),
        },
        {
          for: 'value',
          label: 'Value',
          color: (value) => (value > 0 ? 'success' : value < 0 ? 'error' : null),
        },
      ],
    }
  },
  computed: {
    items() {
      return [
        {
          name: 'Item 1',
          value: 0,
        },
        {
          name: 'Item 2',
          value: -34,
        },
        {
          name: 'Item 3 (highlighted because the item value is positive)',
          value: 435,
        },
      ]
    },
  },
})
</script>
