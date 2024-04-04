<template>
  <div>
    <UiTile bordered> I am not rounded </UiTile>
    <UiTile
      bordered
      rounded
    >
      I am rounded
    </UiTile>
    <UiTile
      bordered
      rounded-lg
    >
      I am rounded large
    </UiTile>
    <UiTile
      bordered
      round
    >
      I am round
    </UiTile>
  </div>
</template>

<script>
import { UiTile } from '@vuebits/ui'

export default {
  name: 'TileRoundings',
  components: {
    UiTile,
  },
}
</script>
