<template>
  <div
    :class="classes"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { CssClass } from '@/helpers/css-classes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VGridItem',
  props: {
    colsXs: {
      type: Number as PropType<number | null>,
      default: null
    },
    colsSm: {
      type: Number as PropType<number | null>,
      default: null
    },
    colsMd: {
      type: Number as PropType<number | null>,
      default: null
    },
    colsLg: {
      type: Number as PropType<number | null>,
      default: null
    },
    colsXl: {
      type: Number as PropType<number | null>,
      default: null
    }
  },
  computed: {
    classes (): CssClass[] {
      const mods: string[] = [];
      if (this.colsXs) mods.push(`cols-xs-${this.colsXs}`);
      if (this.colsSm) mods.push(`cols-sm-${this.colsSm}`);
      if (this.colsMd) mods.push(`cols-md-${this.colsMd}`);
      if (this.colsLg) mods.push(`cols-lg-${this.colsLg}`);
      if (this.colsXl) mods.push(`cols-xl-${this.colsXl}`);
      return this.$bem({
        m: mods
      });
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
