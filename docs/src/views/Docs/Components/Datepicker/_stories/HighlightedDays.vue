<template>
  <UiDatepicker
    v-model="selectedDate"
    :highlighted-dates="highlightedDates"
  />
</template>

<script>
import { UiDatepicker } from '@vuebits/ui'
import { ref } from 'vue'

export default {
  name: 'DatepickerHighlightedDates',
  components: {
    UiDatepicker,
  },
  setup() {
    const selectedDate = ref(null)
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()
    const currentDate = today.getDate()
    const dateByTodayOffset = (offset) => {
      return new Date(currentYear, currentMonth, currentDate + offset)
    }
    const highlightedDates = [
      dateByTodayOffset(-12),
      dateByTodayOffset(-5),
      dateByTodayOffset(-3),
      dateByTodayOffset(-1),
      dateByTodayOffset(0),
      dateByTodayOffset(2),
      dateByTodayOffset(7),
    ]
    return {
      selectedDate,
      highlightedDates,
    }
  },
}
</script>
