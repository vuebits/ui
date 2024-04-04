<template>
  <div>
    <UiIcon
      name="check"
      pulse
    />
    <UiIcon
      name="spinner"
      pulse
    />
    <UiIcon
      name="cog"
      pulse
    />
    <UiIcon pulse> Hello! </UiIcon>
  </div>
</template>

<script>
import { UiIcon } from '@vuebits/ui'

export default {
  name: 'IconPulse',
  components: {
    UiIcon,
  },
}
</script>
