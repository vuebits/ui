<template>
  <i :class="classes">
    <slot />
  </i>
</template>

<script lang="ts">
import { CssClass } from '@/helpers/css-classes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VIcon',
  props: {
    name: {
      type: String as PropType<string>,
      default: ''
    },
    prefix: {
      type: String as PropType<string>,
      default: 'fa-'
    },
    type: {
      type: String as PropType<string>,
      default: 'fa'
    },
    size: {
      type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null>,
      default: null
    },
    rotate: {
      type: String as PropType<'90' | '180' | '270' | null>,
      default: null
    },
    flip: {
      type: String as PropType<'horizontal' | 'vertical' | 'both' | null>,
      default: null
    },
    pulse: {
      type: Boolean,
      default: false
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes (): CssClass[] {
      const iconClass = `${this.prefix}${this.name}`;
      const typeClass = this.type;
      const iconClasses = [typeClass, iconClass];
      if (this.size) {
        iconClasses.push(`${this.prefix}${this.size}`);
      }
      if (this.rotate) {
        iconClasses.push(`${this.prefix}rotate-${this.rotate}`);
      }
      if (this.flip) {
        iconClasses.push(`${this.prefix}flip-${this.flip}`);
      }
      if (this.spin) {
        iconClasses.push(`${this.prefix}spin`);
      }
      if (this.pulse) {
        iconClasses.push(`${this.prefix}pulse`);
      }
      return [...this.$bem({}), ...iconClasses];
    }
  }
});
</script>
