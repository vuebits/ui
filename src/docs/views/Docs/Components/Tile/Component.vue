<template>
  <div :class="$bem({})">
    <ComponentHeader>
      Tile
    </ComponentHeader>
    <TileExample />
    <ComponentApi :component="component" />
    <Story
      file-name="Colors"
      component-name="Tile"
      title="Colors"
    >
      <TileColors />
    </Story>
    <Story
      file-name="Roundings"
      component-name="Tile"
      title="Roundings"
    >
      <TileRoundings />
    </Story>
    <Story
      file-name="Dimensions"
      component-name="Tile"
      title="Dimensions"
    >
      <TileDimensions />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTile } from '@/components';
import TileExample from './Example.vue';
import {
  ComponentHeader,
  ComponentApi,
  Story
} from '@/docs/components';
import {
  TileColors,
  TileRoundings,
  TileDimensions
} from './_stories';

export default defineComponent({
  name: 'DocsComponentsTile',
  components: {
    ComponentHeader,
    ComponentApi,
    TileExample,
    Story,
    TileColors,
    TileRoundings,
    TileDimensions
  },
  data () {
    return {
      component: VTile
    };
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
