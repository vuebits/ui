<template>
  <div
    ref="rootElement"
    :class="bem({})"
  >
    <div
      v-if="!hideArrows"
      :class="
        bem({
          e: 'arrow-wrapper',
          m: {
            left: true,
            floating: floatingArrows,
            disabled: isLeftArrowDisabled,
          },
        })
      "
    >
      <slot
        name="left-arrow"
        :scroll-left="scrollLeft"
      >
        <UiIcon
          :name="$ui.icons.values.previous"
          :size="arrowIconSize"
          :class="
            bem({
              e: 'arrow',
              m: {
                floating: floatingArrows,
                [arrowSize]: true,
              },
            })
          "
          @click="scrollLeft"
        />
      </slot>
    </div>
    <div
      ref="containerElement"
      :class="bem({ e: 'container', m: { swiping: isSwiping } })"
      @scroll="updateClasses"
    >
      <slot />
    </div>
    <div
      v-if="!hideArrows"
      :class="
        bem({
          e: 'arrow-wrapper',
          m: {
            right: true,
            floating: floatingArrows,
            disabled: isRightArrowDisabled,
          },
        })
      "
    >
      <slot
        name="right-arrow"
        :scroll-right="scrollRight"
      >
        <UiIcon
          :name="$ui.icons.values.next"
          :size="arrowIconSize"
          :class="
            bem({
              e: 'arrow',
              m: {
                floating: floatingArrows,
                [arrowSize]: true,
              },
            })
          "
          @click="scrollRight"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UiHorizontalScroll',
}
</script>

<script lang="ts" setup>
import { ref, watch, onMounted, computed } from 'vue'
import animatedScroll from '../../helpers/animated-scroll'
import { debounce } from '../../helpers/debounce'
import { UiIcon } from '../Icon'
import { defineBem } from '../../helpers/bem'
import { usePointerSwipe } from '@vueuse/core'
import { IconSize } from '../../types'

type ArrowSize = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    factor?: number
    scrollAnimationTime?: number
    arrowSize?: ArrowSize
    hideArrows?: boolean
    floatingArrows?: boolean
  }>(),
  {
    factor: 0.1,
    scrollAnimationTime: 100,
    arrowSize: 'md',
    hideArrows: false,
    floatingArrows: false,
  },
)

const bem = defineBem('ui-horizontal-scroll')

const isLeftArrowDisabled = ref(true)
const isRightArrowDisabled = ref(true)
const rootElement = ref<HTMLElement | null>(null)
const containerElement = ref<HTMLElement | null>(null)
const containerWidth = computed(() => containerElement.value?.offsetWidth ?? 0)
const scrollOffset = ref(0)
const isSwiping = ref(false)
const arrowIconSize = computed(() => {
  const iconSizes: Record<ArrowSize, IconSize> = {
    sm: '1x',
    md: '2x',
    lg: '3x',
  }
  return iconSizes[props.arrowSize]
})
const disableClick = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()
}

const { distanceX } = usePointerSwipe(containerElement, {
  threshold: 50,
  disableTextSelect: true,
  pointerTypes: ['mouse'],
  onSwipeStart(e: PointerEvent) {
    e.preventDefault()
  },
  onSwipe(e: PointerEvent) {
    if (!containerElement.value) return
    if (!isSwiping.value && Math.abs(distanceX.value) > 50) {
      isSwiping.value = true
      containerElement.value.addEventListener('click', disableClick, {
        capture: true,
      })
    }
    containerElement.value.scrollLeft = scrollOffset.value + distanceX.value
  },
  onSwipeEnd(e: PointerEvent) {
    setTimeout(() => {
      containerElement.value?.removeEventListener('click', disableClick, {
        capture: true,
      })
      isSwiping.value = false
    }, 200)
    scrollOffset.value = scrollOffset.value + distanceX.value
  },
})

const scroll = (factor: number): void => {
  const container = containerElement.value
  if (!container) return
  const currentPosition: number = container.scrollLeft
  const jump: number = container.scrollWidth * factor
  animatedScroll.scrollToPositionX(container, currentPosition + jump, props.scrollAnimationTime)
}

const scrollLeft = (): void => {
  scroll(-props.factor)
}

const scrollRight = (): void => {
  scroll(props.factor)
}

const resetScroll = (): void => {
  const container = containerElement.value
  if (!container) return
  container.scrollLeft = 0
}

const setLeftArrowClass = (): void => {
  const container = containerElement.value
  if (!container) return
  const currentPosition: number = container?.scrollLeft
  currentPosition > 0 ? (isLeftArrowDisabled.value = false) : (isLeftArrowDisabled.value = true)
}

const setRightArrowClass = (): void => {
  const container = containerElement.value
  if (!container) return
  const currentPosition: number = container?.scrollLeft
  const endPosition: number = container.scrollWidth - container.offsetWidth
  currentPosition < endPosition
    ? (isRightArrowDisabled.value = false)
    : (isRightArrowDisabled.value = true)
}

const updateClasses = debounce(function (this: any) {
  setLeftArrowClass()
  setRightArrowClass()
}, 250)

watch(
  () => containerWidth.value,
  () => {
    resetScroll()
  },
)

onMounted(() => {
  updateClasses()
})
</script>

<style lang="scss">
@import './styles';
</style>
