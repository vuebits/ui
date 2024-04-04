<template>
  <div style="display: flex; gap: 100px">
    <UiDatepicker
      v-model="date1"
      :disable-after="date2"
    />
    <UiDatepicker
      v-model="date2"
      :disable-before="date1"
    />
  </div>
</template>

<script>
import { UiDatepicker } from '@vuebits/ui'
import { ref } from 'vue'

export default {
  name: 'DatepickerDateRange',
  components: {
    UiDatepicker,
  },
  setup() {
    const date1 = ref(null)
    const date2 = ref(null)
    return {
      date1,
      date2,
    }
  },
}
</script>
