<template>
  <component
    :is="component"
    :class="$bem({ m: { active: isActive } })"
    v-bind="$ui.testElName('tooltip')"
  >
    <span
      ref="activator"
      :class="$bem({ e: 'activator' })"
      v-bind="$ui.testElName('tooltip-activator')"
    >
      <slot
        name="activator"
        :toggle="toggle"
        :open="open"
        :close="close"
        :on="{
          mouseenter: onMouseenter,
          mouseleave: onMouseleave,
          click: onClick,
        }"
        :is-active="isActive"
      />
    </span>
    <template v-if="isActive && !disabled">
      <div
        v-if="showBlend"
        :class="$bem({ e: 'blend' })"
      />
      <div
        ref="tooltip"
        v-click-outside="onOutsideClick"
        :class="tooltipClasses"
        v-bind="$ui.testElName('tooltip-content')"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      >
        <slot :close="close" />
      </div>
    </template>
  </component>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  nextTick,
  ref,
  onBeforeUnmount,
  computed,
  onMounted,
} from 'vue'
import { colorClass, CssClass } from '../../helpers/css-classes'
import { throttle } from '../../helpers/debounce'
import {
  borderedProps,
  themeProps,
  roundedProps,
  elevatedProps,
  useBordered,
  useTheme,
  useRounded,
  useElevated,
} from '../../composables'
import { ClickOutside } from '../../directives'
import { tooltipPositions, TooltipPosition } from '../../models'

const numberToPx = (offset: number): string => `${offset}px`

export default defineComponent({
  name: 'UiTooltip',
  directives: {
    ClickOutside,
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
    outlined: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    clickable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    manual: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // obsolete
    top: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // obsolete
    right: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // obsolete
    left: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    // obsolete
    bottom: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    mouseenterDelay: {
      type: Number as PropType<number>,
      default: 100,
    },
    mouseleaveDelay: {
      type: Number as PropType<number>,
      default: 200,
    },
    noWrap: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    showBlend: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    component: {
      type: [String, Object],
      default: 'span',
    },
    position: {
      type: String as PropType<TooltipPosition | null>,
      default: null,
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...elevatedProps,
  },
  emits: ['open', 'close'],
  setup(props, { emit }) {
    const { dark, light, bordered, rounded, roundedLg, round, elevated } = toRefs(props)

    const resizeObserver = ref<ResizeObserver | null>(null)

    onMounted(() => (resizeObserver.value = new ResizeObserver(handleScroll)))

    const activator = ref<HTMLElement | null>(null)
    const tooltip = ref<HTMLElement | null>(null)
    const isActive = ref(false)
    const isHovered = ref(false)
    const isHidden = ref(false)

    const computedPosition = computed(() => {
      if (props.position) return props.position
      if (props.left) return tooltipPositions.left
      if (props.top) return tooltipPositions.top
      if (props.right) return tooltipPositions.right
      return tooltipPositions.bottom
    })

    const horizontalCenterPositions: TooltipPosition[] = [
      tooltipPositions.top,
      tooltipPositions.bottom,
    ]

    const verticalCenterPositions: TooltipPosition[] = [
      tooltipPositions.left,
      tooltipPositions.right,
    ]

    const centerTooltip = (t: HTMLElement, activatorRect: DOMRect): void => {
      const tooltipRect: DOMRect = t.getBoundingClientRect()
      if (horizontalCenterPositions.includes(computedPosition.value)) {
        t.style.left = numberToPx(
          activatorRect.left + (activatorRect.width - tooltipRect.width) / 2,
        )
      } else if (verticalCenterPositions.includes(computedPosition.value)) {
        t.style.top = numberToPx(
          activatorRect.top + (activatorRect.height - tooltipRect.height) / 2,
        )
      }
    }

    const stickTooltipToActivator = (t: HTMLElement, activatorRect: DOMRect): void => {
      const tooltipRect: DOMRect = t.getBoundingClientRect()
      const spacer = 5
      const pos = computedPosition.value
      if (pos === tooltipPositions.top) {
        t.style.top = numberToPx(activatorRect.top - spacer - tooltipRect.height)
      } else if (pos === tooltipPositions.bottom) {
        t.style.top = numberToPx(activatorRect.top + spacer + activatorRect.height)
      } else if (pos === tooltipPositions.left) {
        t.style.left = numberToPx(activatorRect.left - spacer - tooltipRect.width)
      } else if (pos === tooltipPositions.right) {
        t.style.left = numberToPx(activatorRect.left + spacer + activatorRect.width)
      }
    }

    const slideTooltipFromWindowEdge = (t: HTMLElement): void => {
      const tooltipRect = t.getBoundingClientRect()
      const edgeOffset = 10
      if (tooltipRect.left < edgeOffset) t.style.left = `${edgeOffset}px`
      if (tooltipRect.left + tooltipRect.width > window.innerWidth - edgeOffset) {
        t.style.left = `${window.innerWidth - edgeOffset - tooltipRect.width}px`
      }
      if (tooltipRect.top < edgeOffset) t.style.top = `${edgeOffset}px`
      if (tooltipRect.top + tooltipRect.height > window.innerHeight - edgeOffset) {
        t.style.top = `${window.innerHeight - edgeOffset - tooltipRect.height}px`
      }
    }

    const calculatePosition = (): void => {
      if (!activator.value) return
      const activatorRect: DOMRect = activator.value.getBoundingClientRect()
      if (tooltip.value) {
        centerTooltip(tooltip.value, activatorRect)
        stickTooltipToActivator(tooltip.value, activatorRect)
        slideTooltipFromWindowEdge(tooltip.value)
      }
    }

    const handleScroll = throttle(calculatePosition, 20)

    const open = (): void => {
      if (isActive.value) return

      isHidden.value = true
      isActive.value = true
      window.addEventListener('scroll', handleScroll, true)
      nextTick(() => {
        calculatePosition()
        isHidden.value = false
        if (tooltip.value) resizeObserver.value?.observe(tooltip.value)
        emit('open')
      })
    }

    const close = (): void => {
      window.removeEventListener('scroll', handleScroll, true)
      if (tooltip.value) resizeObserver.value?.unobserve(tooltip.value)
      isActive.value = false
      emit('close')
    }

    const toggle = () => {
      isActive.value ? close() : open()
    }

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll, true)
      if (tooltip.value) resizeObserver.value?.unobserve(tooltip.value)
    })

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round),
      elevatedClass: useElevated(elevated),
      isActive,
      isHovered,
      isHidden,
      activator,
      tooltip,
      calculatePosition,
      handleScroll,
      open,
      close,
      toggle,
    }
  },
  computed: {
    isClickable(): boolean {
      return this.clickable && !this.manual
    },
    isHoverable(): boolean {
      return !this.clickable && !this.manual
    },
    tooltipClasses(): CssClass[] {
      return [
        ...this.$bem({
          e: 'tooltip',
          m: {
            'no-wrap': this.noWrap,
            hidden: this.isHidden,
          },
        }),
        colorClass(this.color),
        this.themeClass,
        this.borderedClass,
        this.roundedClass,
        this.elevatedClass,
      ]
    },
  },
  methods: {
    onMouseenter(): void {
      if (this.isHoverable) {
        this.isHovered = true
        setTimeout(() => {
          if (this.isHovered) this.open()
        }, this.mouseenterDelay)
      }
    },
    onMouseleave(): void {
      if (this.isHoverable) {
        this.isHovered = false
        setTimeout(() => {
          if (!this.isHovered) this.close()
        }, this.mouseleaveDelay)
      }
    },
    onClick(): void {
      if (this.isClickable) {
        this.toggle()
      }
    },
    onOutsideClick(): void {
      if (this.isClickable) {
        this.close()
      }
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
