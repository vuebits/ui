<template>
  <VTile>
    I am normal
  </VTile>
  <VTile
    elevated
  >
    I am elavated
  </VTile>
</template>

<script>
import {
  VTile
} from '@/components';

export default {
  name: 'TileElevation',
  components: {
    VTile
  }
};
</script>
