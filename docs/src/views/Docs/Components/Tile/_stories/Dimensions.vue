<template>
  <div>
    <span
      v-for="(dimension, index) in dimensions"
      :key="index"
    >
      <UiTile
        :width="dimension.width"
        :height="dimension.height"
        dark
      >
        I am {{ dimension.width }} wide and {{ dimension.height }} high
      </UiTile>
    </span>
  </div>
</template>

<script>
import { UiTile } from '@vuebits/ui'

export default {
  name: 'TileTileDimensions',
  components: {
    UiTile,
  },
  data() {
    return {
      dimensions: [
        {
          width: '200px',
          height: 'auto',
        },
        {
          width: '400px',
          height: '200px',
        },
        {
          width: '50%',
          height: '10vh',
        },
      ],
    }
  },
}
</script>
