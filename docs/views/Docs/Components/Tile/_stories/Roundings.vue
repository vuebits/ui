<template>
  <div>
    <VTile
      bordered
    >
      I am not rounded
    </VTile>
    <VTile
      bordered
      rounded
    >
      I am rounded
    </VTile>
    <VTile
      bordered
      rounded-lg
    >
      I am rounded large
    </VTile>
    <VTile
      bordered
      round
    >
      I am round
    </VTile>
  </div>
</template>

<script>
import {
  VTile,
} from '@vuebits/ui';

export default {
  name: 'TileRoundings',
  components: {
    VTile,
  },
};
</script>
