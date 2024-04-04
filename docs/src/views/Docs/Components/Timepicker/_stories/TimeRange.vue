<template>
  <div style="display: flex">
    <div style="margin-right: 40px">
      <h3 style="margin-bottom: 20px">Time from</h3>
      <UiTimepicker
        v-model="timeFrom"
        :disable-after="timeTo"
        show-seconds
      />
      {{ timeFrom }}
    </div>
    <div>
      <h3 style="margin-bottom: 20px">Time to</h3>
      <UiTimepicker
        v-model="timeTo"
        :disable-before="timeFrom"
        show-seconds
      />
      {{ timeTo }}
    </div>
    <UiButton
      hoverable
      @click="reset"
    >
      Reset
    </UiButton>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { UiTimepicker, UiButton } from '@vuebits/ui'

export default defineComponent({
  name: 'TimepickerTimeRange',
  components: {
    UiTimepicker,
    UiButton,
  },
  data() {
    return {
      timeFrom: null,
      timeTo: null,
    }
  },
  methods: {
    reset() {
      this.timeFrom = null
      this.timeTo = null
    },
  },
})
</script>
