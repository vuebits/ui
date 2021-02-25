<template>
  <div :class="$bem({})">
    <TileExample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  TileExample
} from './_stories';

export default defineComponent({
  name: 'DocsComponentsTile',
  components: {
    TileExample
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
