<template>
  <span
    :disabled="disabled"
    :class="classes"
    v-bind="$ui.testElName('badge')"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import {
  bgColorClass,
  colorClass,
  CssClass,
} from '../../helpers/css-classes';
import {
  borderedProps,
  elevatedProps,
  themeProps,
  roundedProps,
  useBordered,
  useElevated,
  useTheme,
  useRounded,
} from '../../composables';

export default defineComponent({
  name: 'VBadge',
  props: {
    color: {
      type: String as PropType<string | null>,
      default: null,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<string>,
      default: 'md',
    },
    ...themeProps,
    ...borderedProps,
    ...elevatedProps,
    ...roundedProps,
  },
  emits: {
    click: null,
  },
  setup (props) {
    const {
      dark,
      light,
      bordered,
      rounded,
      roundedLg,
      elevated,
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      elevatedClass: useElevated(elevated),
      roundedClass: useRounded(rounded, roundedLg),
    };
  },
  computed: {
    classes (): CssClass[] {
      const colorClasses = this.color ? [
        bgColorClass(this.color),
        colorClass('white'),
      ] : [];
      return [
        ...colorClasses,
        ...this.$bem({
          m: {
            [this.size]: true,
            disabled: this.disabled,
            round: this.round,
          },
        }),
        this.themeClass,
        this.borderedClass,
        this.elevatedClass,
        this.roundedClass,
      ];
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
