<template>
  <div style="display: flex; flex-flow: row wrap">
    <div
      v-for="flip in flips"
      :key="flip"
      style="margin: 1rem; text-align: center"
    >
      <UiIcon
        name="check"
        :flip="flip"
      />
      <div>{{ flip }}</div>
    </div>
  </div>
</template>

<script>
import { UiIcon } from '@vuebits/ui'

export default {
  name: 'IconFlip',
  components: {
    UiIcon,
  },
  data() {
    return {
      flips: ['-', 'horizontal', 'vertical', 'both'],
    }
  },
}
</script>
