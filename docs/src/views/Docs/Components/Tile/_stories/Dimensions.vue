<template>
  <div>
    <span
      v-for="(dimension, index) in dimensions"
      :key="index"
    >
      <VTile
        :width="dimension.width"
        :height="dimension.height"
        dark
      >
        I am {{ dimension.width }} wide and {{ dimension.height }} high
      </VTile>
    </span>
  </div>
</template>

<script>
import {
  VTile,
} from '@vuebits/ui';

export default {
  name: 'TileTileDimensions',
  components: {
    VTile,
  },
  data () {
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
    };
  },
};
</script>
