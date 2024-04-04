<template>
  <UiDatepicker
    v-model="selectedDate"
    :holidays="holidays"
  />
</template>

<script>
import { UiDatepicker } from '@vuebits/ui'
import { ref } from 'vue'

export default {
  name: 'DatepickerHolidays',
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
    const holidays = [
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
      holidays,
    }
  },
}
</script>
