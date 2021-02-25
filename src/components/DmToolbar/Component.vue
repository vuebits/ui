<template>
  <nav
    :class="classes"
  >
    <DmWrapper :class="$bem({e: 'top-container'})">
      <div :class="$bem({e: 'left-side'})">
        <slot name="top-left" />
      </div>
      <div :class="$bem({e: 'center-side'})">
        <slot name="top-center" />
      </div>
      <div :class="$bem({e: 'right-side'})">
        <slot name="top-right" />
      </div>
    </DmWrapper>
    <DmWrapper :class="$bem({e: 'container'})">
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
    </DmWrapper>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { DmWrapper } from '@/components/DmWrapper';
import {
  bgColorClass,
  CssClass
} from '@/helpers/css-classes';
import {
  themeProps,
  useTheme
} from '@/composition-functions';

export default defineComponent({
  name: 'VToolbar',
  components: {
    DmWrapper
  },
  props: {
    fixed: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    absolute: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    color: {
      type: String,
      default: 'default'
    },
    ...themeProps
  },
  setup (props) {
    const {
      dark,
      light
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light)
    };
  },
  computed: {
    classes (): CssClass[] {
      const colorClasses = this.color ? [bgColorClass(this.color)] : [];
      return [
        ...this.$bem({
          m: {
            fixed: this.fixed,
            absolute: this.absolute
          }
        }),
        ...colorClasses,
        this.themeClass
      ];
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
