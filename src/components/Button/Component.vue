<template>
  <button
    :title="title ?? undefined"
    :class="classes"
    type="button"
    :disabled="disabled || loading"
    v-bind="$ui.testElName('button')"
  >
    <component
      :is="component"
      :to="to"
      :href="href"
      :target="target"
      :rel="newWindow ? 'noopener' : ''"
      :class="$bem({e: 'container', m: {'with-icons': !!leftIcon || !!rightIcon}})"
    >
      <slot name="container">
        <VIcon
          v-if="leftIcon"
          :name="leftIcon"
          :class="$bem({e: 'icon'})"
        />
        <span :class="$bem({e: 'content'})">
          <slot />
          <VSpinner
            v-if="loading"
            :color="dark ? 'white' : 'default'"
            :class="$bem({e: 'loader'})"
            size="1x"
          />
        </span>
        <VIcon
          v-if="rightIcon"
          :name="rightIcon"
          :class="$bem({e: 'icon'})"
        />
      </slot>
    </component>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import {
  colorClass,
  bgColorClass,
  hoverColorClass,
  hoverBgColorClass,
  hoverableClass,
  CssClass,
} from '../../helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  linkProps,
  sizeProps,
  elevatedProps,
  useBordered,
  useTheme,
  useRounded,
  useLink,
  useElevated,
} from '../../composables';
import { VSpinner } from '../Spinner';
import { VIcon } from '../Icon';

export default defineComponent({
  name: 'VButton',
  components: {
    VSpinner,
    VIcon,
  },
  props: {
    color: {
      type: String as PropType<string>,
      default: 'default',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    leftIcon: {
      type: String as PropType<string | null>,
      default: null,
    },
    rightIcon: {
      type: String as PropType<string | null>,
      default: null,
    },
    title: {
      type: String as PropType<string | null>,
      default: null,
    },
    block: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    plain: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    hoverable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    uppercase: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    gradient: {
      type: String as PropType<string | null>,
      default: null,
    },
    theme: {
      type: String as PropType<string | null>,
      default: null,
    },
    invertTheme: {
      type: Boolean,
      default: false,
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...linkProps,
    ...elevatedProps,
    ...sizeProps,
  },
  setup (props) {
    const {
      dark,
      light,
      bordered,
      rounded,
      roundedLg,
      round,
      to,
      href,
      newWindow,
      elevated,
    } = toRefs(props);

    const {
      component,
      target,
    } = useLink(to, href, newWindow);

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round),
      elevatedClass: useElevated(elevated),
      component,
      target,
    };
  },
  data () {
    return {
      isFocused: false as boolean,
    };
  },
  computed: {
    classes (): CssClass[] {
      let colorClasses: Array<string | null> = [];
      if (this.color && this.color !== 'default') {
        if (this.plain) {
          colorClasses = [
            colorClass(this.color),
            hoverColorClass(`${this.color}-darken-1`),
          ];
        } else {
          colorClasses = [
            bgColorClass(this.color),
            hoverBgColorClass(`${this.color}-darken-1`),
          ];
        }
      }
      return [
        ...colorClasses,
        ...this.$bem({
          m: {
            [this.size]: true,
            disabled: this.disabled || this.loading,
            block: this.block,
            [`gradient-${this.gradient}`]: !!this.gradient,
            uppercase: this.uppercase,
            [`${this.invertTheme ? 'inverted-' : ''}theme-${this.theme}`]: !!this.theme,
          },
        }),
        {
          [hoverableClass]: this.hoverable,
        },
        this.themeClass,
        this.borderedClass,
        this.roundedClass,
        this.elevatedClass,
      ];
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
