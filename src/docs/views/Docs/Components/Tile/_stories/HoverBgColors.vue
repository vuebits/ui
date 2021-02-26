<template>
  <span
    v-for="color in colors"
    :key="color"
  >
    <VTile
      :hover-bg-color="color"
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

export default {
  name: 'TileHoverBgColors',
  components: {
    VTile
  },
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'success',
        'info',
        'error',
        'warning',
        'disabled'
      ]
    };
  }
};
</script>
