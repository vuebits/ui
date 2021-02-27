<template>
  <component
    :is="component"
    :class="classes"
    :style="styles"
    @click="click"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { cssValueValidator } from '@/helpers/validators/css-values-validator';
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
      type: String as PropType<string>,
      default: 'auto',
      validator: (val: string) => cssValueValidator(val)
    },
    width: {
      type: String as PropType<string>,
      default: 'auto',
      validator: (val: string) => cssValueValidator(val)
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
    },
    styles (): any {
      return {
        '--tile-height': this.height,
        '--tile-width': this.width,
        '--tile-bg-image': this.image ? `url(${this.image})` : 'none'
      };
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
