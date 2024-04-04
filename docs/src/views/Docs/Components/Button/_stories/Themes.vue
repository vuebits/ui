<template>
  <div>
    <div
      v-for="theme in themes"
      :key="theme"
    >
      <UiButton :theme="theme"> I am {{ theme }} </UiButton>
    </div>
  </div>
</template>

<script>
import { UiButton } from '@vuebits/ui'

export default {
  name: 'Buttonthemes',
  components: {
    UiButton,
  },
  data() {
    return {
      themes: ['primary', 'secondary'],
    }
  },
}
</script>
