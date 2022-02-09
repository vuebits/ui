<template>
  <div
    :class="classes"
    v-bind="$ui.testElName('modal-footer')"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CssClass } from '../../../helpers/css-classes';

export default defineComponent({
  name: 'VModalFooter',
  props: {
    hideBorder: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    elevated: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    alignRight: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {
    classes (): CssClass[] {
      return this.$bem({
        m: {
          bordered: !this.hideBorder,
          elevated: this.elevated,
          'align-right': this.alignRight,
        },
      });
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
