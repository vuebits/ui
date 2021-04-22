<template>
  <button
    :title="title"
    :class="classes"
    type="button"
    :disabled="disabled"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
  >
    <component
      :is="component"
      :to="to"
      :href="href"
      :target="target"
      :rel="newWindow ? 'noopener' : ''"
      :class="$bem({e: 'container'})"
    >
      <VIcon
        v-if="leftIcon"
        :name="leftIcon"
        :class="$bem({e: 'icon'})"
      />
      <span :class="$bem({e: 'content'})">
        <VSpinner
          v-if="loading"
          :color="dark ? 'white' : 'default'"
          class="has-margin-x-xs"
          size="1x"
        />
        <slot />
      </span>
      <VIcon
        v-if="rightIcon"
        :name="rightIcon"
        :class="$bem({e: 'icon'})"
      />
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
  elevationClass,
  CssClass
} from '@/helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  linkProps,
  elevatedProps,
  useBordered,
  useTheme,
  useRounded,
  useLink,
  useElevated
} from '@/composition-functions';
import { VSpinner } from '@/components/Spinner';
import { VIcon } from '@/components/Icon';

export default defineComponent({
  name: 'VButton',
  components: {
    VSpinner,
    VIcon
  },
  props: {
    color: {
      type: String as PropType<string>,
      default: 'default'
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    size: {
      type: String as PropType<string>,
      default: 'md'
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    leftIcon: {
      type: String as PropType<string | null>,
      default: null
    },
    rightIcon: {
      type: String as PropType<string | null>,
      default: null
    },
    title: {
      type: String as PropType<string | null>,
      default: null
    },
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    plain: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    hoverable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...linkProps,
    ...elevatedProps
  },
  emits: [
    'click',
    'focus',
    'blur'
  ],
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
      elevated
    } = toRefs(props);

    const {
      component,
      target
    } = useLink(to, href, newWindow);

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round),
      elevatedClass: useElevated(elevated),
      component,
      target
    };
  },
  data () {
    return {
      isFocused: false as boolean
    };
  },
  computed: {
    classes (): CssClass[] {
      let colorClasses: Array<string | null> = [];
      if (this.color && this.color !== 'default') {
        if (this.plain) {
          colorClasses = [colorClass(this.color), hoverColorClass(`${this.color}-darken-1`)];
        } else {
          colorClasses = [bgColorClass(this.color), hoverBgColorClass(`${this.color}-darken-1`)];
        }
      }
      return [
        ...colorClasses,
        ...this.$bem({
          m: {
            [this.size]: true,
            disabled: this.disabled,
            block: this.block
          }
        }),
        {
          [elevationClass]: this.isFocused,
          [hoverableClass]: this.hoverable
        },
        this.themeClass,
        this.borderedClass,
        this.roundedClass,
        this.elevatedClass
      ];
    }
  },
  methods: {
    onClick (): void {
      this.$emit('click');
    },
    setFocusStatus (isFocused: boolean): void {
      this.isFocused = isFocused;
    },
    onFocus (): void {
      this.setFocusStatus(true);
      this.$emit('focus');
    },
    onBlur (): void {
      this.setFocusStatus(false);
      this.$emit('blur');
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
