<template>
  <div>
    <span
      v-for="color in colors"
      :key="color"
    >
      <VTile
        :color="color"
        dark
      >
        I am {{ color }}
      </VTile>
    </span>
  </div>
</template>

<script>
import {
  VTile,
} from '@vuebits/ui';
import { colors } from '@/helpers/story-params';

export default {
  name: 'TileColors',
  components: {
    VTile,
  },
  data () {
    return {
      colors,
    };
  },
};
</script>
