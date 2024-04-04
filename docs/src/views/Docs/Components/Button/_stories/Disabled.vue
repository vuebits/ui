<template>
  <div>
    <UiButton dark> I am normal </UiButton>
    <UiButton
      dark
      disabled
    >
      I am disabled
    </UiButton>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'

export default {
  name: 'ButtonDisabled',
  components: {
    UiButton,
  },
}
</script>
