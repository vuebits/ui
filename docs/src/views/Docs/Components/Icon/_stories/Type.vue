<template>
  <UiIcon
    name="github"
    type="fab"
  />
</template>

<script>
import { UiIcon } from '@vuebits/ui'
import { icons } from '@/helpers/story-params'

export default {
  name: 'IconType',
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
