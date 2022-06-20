<template>
  <div>
    <VTile>
      I am normal
    </VTile>
    <VTile
      elevated
    >
      I am elavated
    </VTile>
  </div>
</template>

<script>
import {
  VTile,
} from '@vuebits/ui';

export default {
  name: 'TileElevation',
  components: {
    VTile,
  },
};
</script>
