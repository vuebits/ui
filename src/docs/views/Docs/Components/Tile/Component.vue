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
      file-name="HoverBgColors"
      component-name="Tile"
      title="Background colors on hover"
    >
      <TileHoverBgColors />
    </Story>
    <Story
      file-name="UnderlineColors"
      component-name="Tile"
      title="Underline colors"
    >
      <TileUnderlineColors />
    </Story>
    <Story
      file-name="Roundings"
      component-name="Tile"
      title="Roundings"
    >
      <TileRoundings />
    </Story>
    <Story
      file-name="Elevation"
      component-name="Tile"
      title="Elevation"
    >
      <TileElevation />
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
  TileHoverBgColors,
  TileUnderlineColors,
  TileRoundings,
  TileElevation,
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
    TileHoverBgColors,
    TileUnderlineColors,
    TileRoundings,
    TileElevation,
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
