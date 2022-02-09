<template>
  <div
    :class="classes"
    v-bind="$ui.testElName('grid')"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { CssClass } from '../../helpers/css-classes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VGrid',
  props: {
    spacingsSize: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'no'>,
      default: 'no',
      validator: (val: string) => {
        return [
          'sm',
          'md',
          'lg',
          'no',
        ].includes(val);
      },
    },
  },
  computed: {
    classes (): CssClass[] {
      const mods: string[] = [`spacings-${this.spacingsSize}`];
      return this.$bem({
        m: mods,
      });
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
