<template>
  <span
    :class="$bem({})"
  >
    <span
      ref="activator"
      :class="$bem({e: 'activator'})"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      @click="onClick"
    >
      <slot
        name="activator"
        :toggle="toggle"
      />
    </span>
    <div
      v-if="isActive && !disabled"
      ref="tooltip"
      v-click-outside="onOutsideClick"
      :class="tooltipClasses"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
    >
      <slot />
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, nextTick } from 'vue';
import {
  colorClass,
  CssClass
} from '@/helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  elevatedProps,
  useBordered,
  useTheme,
  useRounded,
  useElevated
} from '@/composition-functions';

import ClickOutside from '@/directives/click-outside';

const numberToPx = (offset: number): string => `${offset}px`;

export default defineComponent({
  name: 'VTooltip',
  directives: {
    ClickOutside
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
    outlined: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    clickable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    manual: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    top: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    right: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    left: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    bottom: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    mouseenterDelay: {
      type: Number as PropType<number>,
      default: 100
    },
    mouseleaveDelay: {
      type: Number as PropType<number>,
      default: 200
    },
    noWrap: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...elevatedProps
  },
  emits: ['open', 'close'],
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
      roundedClass: useRounded(rounded, roundedLg, round),
      elevatedClass: useElevated(elevated)
    };
  },
  data () {
    return {
      isActive: false as boolean,
      isHovered: false as boolean,
      isHidden: false as boolean
    };
  },
  computed: {
    isClickable (): boolean {
      return this.clickable && !this.manual;
    },
    isHoverable (): boolean {
      return !this.clickable && !this.manual;
    },
    tooltipClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'tooltip',
          m: {
            'no-wrap': this.noWrap,
            hidden: this.isHidden
          }
        }),
        colorClass(this.color),
        this.themeClass,
        this.borderedClass,
        this.roundedClass,
        this.elevatedClass
      ];
    }
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    centerTooltip (tooltip: HTMLElement, activatorRect: DOMRect): void {
      const tooltipRect: DOMRect = tooltip.getBoundingClientRect();
      if (!this.left || !this.right) tooltip.style.left = numberToPx(activatorRect.left + (activatorRect.width - tooltipRect.width) / 2);
      if (!this.top || !this.bottom) tooltip.style.top = numberToPx(activatorRect.top + (activatorRect.height - tooltipRect.height) / 2);
    },
    stickTooltipToActivator (tooltip: HTMLElement, activatorRect: DOMRect): void {
      const tooltipRect: DOMRect = tooltip.getBoundingClientRect();
      const spacer = 5;
      if (this.top) tooltip.style.top = numberToPx(activatorRect.top - spacer - tooltipRect.height);
      if (this.bottom) tooltip.style.top = numberToPx(activatorRect.top + spacer + activatorRect.height);
      if (this.left) tooltip.style.left = numberToPx(activatorRect.left - spacer - tooltipRect.width);
      if (this.right) tooltip.style.left = numberToPx(activatorRect.left + spacer + activatorRect.width);
    },
    slideTooltipFromWindowEdge (tooltip: HTMLElement): void {
      const tooltipRect = tooltip.getBoundingClientRect();
      const edgeOffset = 10;
      if (tooltipRect.left < edgeOffset) tooltip.style.left = `${edgeOffset}px`;
      if (tooltipRect.left + tooltipRect.width > window.innerWidth - edgeOffset) tooltip.style.left = `${window.innerWidth - edgeOffset - tooltipRect.width}px`;
      if (tooltipRect.top < edgeOffset) tooltip.style.top = `${edgeOffset}px`;
      if (tooltipRect.top + tooltipRect.height > window.innerHeight - edgeOffset) tooltip.style.top = `${window.innerHeight - edgeOffset - tooltipRect.height}px`;
    },
    calculatePosition (): void {
      const activator: HTMLElement = this.$refs.activator as HTMLElement;
      const activatorRect: DOMRect = activator.getBoundingClientRect();
      const tooltip: HTMLElement = this.$refs.tooltip as HTMLElement;
      if (tooltip) {
        this.centerTooltip(tooltip, activatorRect);
        this.stickTooltipToActivator(tooltip, activatorRect);
        this.slideTooltipFromWindowEdge(tooltip);
      }
    },
    handleScroll (): void {
      this.calculatePosition();
    },
    open (): void {
      this.isHidden = true;
      this.isActive = true;
      window.addEventListener('scroll', this.handleScroll);
      nextTick(() => {
        this.calculatePosition();
        this.isHidden = false;
        this.$emit('open');
      });
    },
    close (): void {
      window.removeEventListener('scroll', this.handleScroll);
      this.isActive = false;
      this.$emit('close');
    },
    onMouseenter (): void {
      if (this.isHoverable) {
        this.isHovered = true;
        setTimeout(() => {
          if (this.isHovered) this.open();
        }, this.mouseenterDelay);
      }
    },
    onMouseleave (): void {
      if (this.isHoverable) {
        this.isHovered = false;
        setTimeout(() => {
          if (!this.isHovered) this.close();
        }, this.mouseleaveDelay);
      }
    },
    onClick (): void {
      if (this.isClickable) {
        this.toggle();
      }
    },
    onOutsideClick (): void {
      if (this.isClickable) {
        this.close();
      }
    },
    toggle (): void {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
