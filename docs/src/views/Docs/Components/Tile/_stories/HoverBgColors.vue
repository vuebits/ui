<template>
  <div>
    <span
      v-for="color in colors"
      :key="color"
    >
      <UiTile
        :hover-bg-color="color"
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
  name: 'TileHoverBgColors',
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
