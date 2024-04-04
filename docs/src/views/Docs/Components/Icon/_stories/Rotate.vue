<template>
  <div style="display: flex; flex-flow: row wrap">
    <div
      v-for="rotate in rotations"
      :key="rotate"
      style="margin: 1rem; text-align: center"
    >
      <UiIcon
        name="check"
        :rotate="rotate"
      />
      <div>{{ rotate }}</div>
    </div>
  </div>
</template>

<script>
import { UiIcon } from '@vuebits/ui'

export default {
  name: 'IconRotate',
  components: {
    UiIcon,
  },
  data() {
    return {
      rotations: ['-', '90', '180', '270'],
    }
  },
}
</script>
