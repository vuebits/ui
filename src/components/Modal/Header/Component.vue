<template>
  <div
    :class="classes"
    v-bind="$ui.testElName('modal-header')"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import {
  bgColorClass,
  CssClass,
} from '../../../helpers/css-classes';
import {
  themeProps,
  useTheme,
} from '../../../composables';

export default defineComponent({
  name: 'VModalHeader',
  props: {
    hideBorder: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    elevated: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    color: {
      type: String as PropType<string | null>,
      default: null,
    },
    ...themeProps,
  },
  setup (props) {
    const {
      dark,
      light,
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light),
    };
  },
  computed: {
    classes (): CssClass[] {
      const colorClasses = this.color ? [bgColorClass(this.color)] : [];
      return [
        ...this.$bem({
          m: {
            bordered: !this.hideBorder,
            elevated: this.elevated,
          },
        }),
        ...colorClasses,
        this.themeClass,
      ];
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
