<template>
  <nav
    :class="classes"
    v-bind="$ui.testElName('toolbar')"
  >
    <VWrapper :class="$bem({e: 'top-container'})">
      <div :class="$bem({e: 'left-side'})">
        <slot name="top-left" />
      </div>
      <div :class="$bem({e: 'center-side'})">
        <slot name="top-center" />
      </div>
      <div :class="$bem({e: 'right-side'})">
        <slot name="top-right" />
      </div>
    </VWrapper>
    <VWrapper :class="$bem({e: 'container'})">
      <slot>
        <div :class="$bem({e: 'left-side'})">
          <slot name="left" />
        </div>
        <div :class="$bem({e: 'center-side'})">
          <slot name="center" />
        </div>
        <div :class="$bem({e: 'right-side'})">
          <slot name="right" />
        </div>
      </slot>
    </VWrapper>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { VWrapper } from '../Wrapper';
import {
  bgColorClass,
  CssClass,
} from '../../helpers/css-classes';
import {
  themeProps,
  useTheme,
} from '../../composables';

export default defineComponent({
  name: 'VToolbar',
  components: {
    VWrapper,
  },
  props: {
    fixed: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    absolute: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    color: {
      type: String,
      default: 'default',
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
            fixed: this.fixed,
            absolute: this.absolute,
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
