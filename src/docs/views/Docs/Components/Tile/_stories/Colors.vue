<template>
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
</template>

<script>
import {
  VTile
} from '@/components';
import { colors } from '@/docs/helpers/story-params';

export default {
  name: 'TileColors',
  components: {
    VTile
  },
  data () {
    return {
      colors
    };
  }
};
</script>
