<template>
  <i
    :class="classes"
    v-bind="$ui.testElName('icon')"
  >
    <slot />
  </i>
</template>

<script lang="ts">
import { CssClass } from '../../helpers/css-classes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VIcon',
  props: {
    name: {
      type: String as PropType<string>,
      default: '',
    },
    prefix: {
      type: String as PropType<string>,
      default: '',
    },
    type: {
      type: String as PropType<string>,
      default: '',
    },
    size: {
      type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null>,
      default: null,
    },
    rotate: {
      type: String as PropType<'90' | '180' | '270' | null>,
      default: null,
    },
    flip: {
      type: String as PropType<'horizontal' | 'vertical' | 'both' | null>,
      default: null,
    },
    pulse: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    spin: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {
    computedPrefix (): string {
      return this.prefix || this.$ui.icons.prefix;
    },
    computedType (): string {
      return this.type || this.$ui.icons.type;
    },
    classes (): CssClass[] {
      let iconClasses = [];
      iconClasses = [
        `${this.computedPrefix}${this.name}`,
        this.computedType,
      ];
      return [
        ...this.$bem({
          m: {
            [`size-${this.size}`]: !!this.size,
            [`rotate-${this.rotate}`]: !!this.rotate,
            [`flip-${this.flip}`]: !!this.flip,
            pulse: this.pulse,
            spin: this.spin,
          },
        }),
        ...iconClasses,
      ];
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
