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
  name: 'TableColumns',
  components: {
    UiTable,
  },
  data() {
    return {
      headers: [
        {
          for: 'col1',
          label: 'Col 1',
          width: 200,
          strong: true,
        },
        {
          for: 'col2',
          label: 'Col 2',
          width: 900,
          align: 'center',
        },
        {
          for: 'col3',
          label: 'Col 3',
          width: 300,
          align: 'right',
        },
      ],
    }
  },
  computed: {
    items() {
      return [
        {
          col1: this.headers[0],
          col2: this.headers[1],
          col3: this.headers[2],
        },
      ]
    },
  },
})
</script>
