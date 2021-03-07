<template>
  <svg
    :class="classes"
  >
    <use :href="`${getAsset()}#${name}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CssClass } from '@/helpers/css-classes';

export default defineComponent({
  name: 'VIcon',
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    size: {
      type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | ''>,
      default: ''
    },
    flip: {
      type: String as PropType<'horizontal' | 'vertical' | 'both' | ''>,
      default: ''
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
      return [
        ...this.$bem({
          m: {
            [this.size]: Boolean(this.size),
            [`flip-${this.flip}`]: Boolean(this.flip),
            spin: this.spin,
            pulse: this.pulse
          }
        })
      ];
    }
  },
  methods: {
    getAsset () {
      return require('@/assets/images/icons.svg');
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
