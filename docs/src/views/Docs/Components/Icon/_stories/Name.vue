<template>
  <div style="display: flex; flex-flow: row wrap">
    <div
      v-for="icon in icons"
      :key="icon"
      style="margin: 1rem; padding: 1rem; text-align: center"
    >
      <UiIcon :name="icon" />
      <div>{{ icon }}</div>
    </div>
  </div>
</template>

<script>
import { UiIcon } from '@vuebits/ui'
import { icons } from '@/helpers/story-params'

export default {
  name: 'IconName',
  components: {
    UiIcon,
  },
  data() {
    return {
      icons,
    }
  },
}
</script>
