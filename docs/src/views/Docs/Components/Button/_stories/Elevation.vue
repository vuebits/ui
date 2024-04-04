<template>
  <div>
    <UiButton dark> I am normal </UiButton>
    <UiButton
      dark
      elevated
    >
      I am elevated
    </UiButton>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'

export default {
  name: 'ButtonElevation',
  components: {
    UiButton,
  },
}
</script>
