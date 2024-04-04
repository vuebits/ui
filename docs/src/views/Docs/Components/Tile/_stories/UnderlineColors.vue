<template>
  <div>
    <span
      v-for="color in colors"
      :key="color"
    >
      <UiTile
        :underline-color="color"
        dark
      >
        I am {{ color }}
      </UiTile>
    </span>
  </div>
</template>

<script>
import { UiTile } from '@vuebits/ui'
import { colors } from '@/helpers/story-params'

export default {
  name: 'TileUnderlineColors',
  components: {
    UiTile,
  },
  data() {
    return {
      colors,
    }
  },
}
</script>
