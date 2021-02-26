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
  VTile
} from '@/components';

export default {
  name: 'TileRoundings',
  components: {
    VTile
  }
};
</script>
