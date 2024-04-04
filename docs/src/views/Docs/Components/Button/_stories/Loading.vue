<template>
  <div>
    <UiButton dark> I am normal </UiButton>
    <UiButton
      dark
      loading
    >
      I am loading
    </UiButton>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'

export default {
  name: 'ButtonLoading',
  components: {
    UiButton,
  },
}
</script>
