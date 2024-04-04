<template>
  <div>
    <span
      v-for="size in sizes"
      :key="size"
    >
      <UiButton
        :size="size"
        dark
      >
        I am {{ size }}
      </UiButton>
    </span>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'
import { sizes } from '@/helpers/story-params'

export default {
  name: 'ButtonSizes',
  components: {
    UiButton,
  },
  data() {
    return {
      sizes,
    }
  },
}
</script>
