<template>
  <div>
    <span
      v-for="color in colors"
      :key="color"
    >
      <UiButton
        :color="color"
        dark
      >
        I am {{ color }}
      </UiButton>
    </span>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'
import { colors } from '@/helpers/story-params'

export default {
  name: 'ButtonColors',
  components: {
    UiButton,
  },
  data() {
    return {
      colors,
    }
  },
}
</script>
