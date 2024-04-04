<template>
  <div>
    <UiButton bordered> I am not rounded </UiButton>
    <UiButton
      bordered
      rounded
    >
      I am rounded
    </UiButton>
    <UiButton
      bordered
      rounded-lg
    >
      I am rounded large
    </UiButton>
    <UiButton
      bordered
      round
    >
      I am round
    </UiButton>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'

export default {
  name: 'ButtonRoundings',
  components: {
    UiButton,
  },
}
</script>
