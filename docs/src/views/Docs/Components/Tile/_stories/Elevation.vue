<template>
  <div>
    <UiTile> I am normal </UiTile>
    <UiTile elevated> I am elavated </UiTile>
  </div>
</template>

<script>
import { UiTile } from '@vuebits/ui'

export default {
  name: 'TileElevation',
  components: {
    UiTile,
  },
}
</script>
