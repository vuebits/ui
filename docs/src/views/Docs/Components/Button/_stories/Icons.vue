<template>
  <div>
    <UiButton
      dark
      right-icon="home"
    >
      I have right icon
    </UiButton>
    <UiButton
      dark
      left-icon="home"
    >
      I have left icon
    </UiButton>
    <UiButton
      dark
      right-icon="home"
      left-icon="home"
    >
      I have both icon
    </UiButton>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'

export default {
  name: 'ButtonIcons',
  components: {
    UiButton,
  },
}
</script>
