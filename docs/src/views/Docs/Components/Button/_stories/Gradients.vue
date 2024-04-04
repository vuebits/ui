<template>
  <div>
    <span
      v-for="gradient in gradients"
      :key="gradient"
    >
      <UiButton
        :gradient="gradient"
        dark
      >
        I am {{ gradient }}
      </UiButton>
    </span>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'
import { gradients } from '@/helpers/story-params'

export default {
  name: 'ButtonGradients',
  components: {
    UiButton,
  },
  data() {
    return {
      gradients,
    }
  },
}
</script>
