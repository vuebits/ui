<template>
  <div>
    <UiIcon
      name="check"
      spin
    />
    <UiIcon
      name="spinner"
      spin
    />
    <UiIcon
      name="cog"
      spin
    />
    <UiIcon spin> Hello! </UiIcon>
  </div>
</template>

<script>
import { UiIcon } from '@vuebits/ui'

export default {
  name: 'IconSpin',
  components: {
    UiIcon,
  },
}
</script>
