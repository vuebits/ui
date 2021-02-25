<template>
  <component
    :is="component"
    :class="classes"
    @click="click"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import {
  bgColorClass,
  hoverBgColorClass,
  borderColorClass
} from '@/helpers/css-classes';
import {
  borderedProps,
  elevatedProps,
  themeProps,
  roundedProps,
  useBordered,
  useElevated,
  useTheme,
  useRounded
} from '@/composition-functions';

export default defineComponent({
  name: 'VTile',
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    image: {
      type: String as PropType<string | null>,
      default: null
    },
    color: {
      type: String as PropType<string | null>,
      default: null
    },
    underlineColor: {
      type: String as PropType<string | null>,
      default: null
    },
    hoverBgColor: {
      type: String as PropType<string | null>,
      default: null
    },
    centerContent: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    listItem: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    ...themeProps,
    ...borderedProps,
    ...elevatedProps,
    ...roundedProps
  },
  emits: {
    click: null
  },
  setup (props) {
    const {
      dark,
      light,
      bordered,
      rounded,
      roundedLg,
      round,
      elevated
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      elevatedClass: useElevated(elevated),
      roundedClass: useRounded(rounded, roundedLg, round)
    };
  },
  computed: {
    component (): string {
      return this.listItem ? 'li' : 'div';
    },
    classes (): any {
      return [
        bgColorClass(this.color),
        hoverBgColorClass(this.hoverBgColor),
        borderColorClass(this.underlineColor),
        ...this.$bem({
          m: {
            underlined: !!this.underlineColor,
            'center-content': this.centerContent
          }
        }),
        this.themeClass,
        this.borderedClass,
        this.elevatedClass,
        this.roundedClass
      ];
    }
  },
  methods: {
    click (): void {
      this.$emit('click');
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
