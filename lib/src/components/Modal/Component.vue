<template>
  <div
    v-if="isBlendShown"
    :class="classes"
    v-bind="$ui.testElName('modal')"
  >
    <slot name="top" />
    <div :class="middleClasses">
      <slot name="left" />
      <Transition
        :name="transition ?? undefined"
        mode="out-in"
        @after-leave="hideBlend"
        @after-enter="onContentLoad"
      >
        <div
          v-if="isContentShown"
          ref="card"
          v-click-outside="onClickOutside"
          :class="cardClasses"
          :style="cardStyle"
          tabindex="0"
          v-bind="$ui.testElName('modal-card')"
          @keyup.esc="onEsc"
        >
          <slot />
        </div>
      </Transition>
      <slot name="right" />
    </div>
    <slot name="bottom" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, nextTick } from 'vue'
import { CssClass } from '../../helpers/css-classes'
import {
  borderedProps,
  elevatedProps,
  roundedProps,
  useBordered,
  useRounded,
} from '../../composables'
import { ClickOutside } from '../../directives'

export default defineComponent({
  name: 'UiModal',
  directives: { ClickOutside },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    persistent: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    closeOnEsc: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg' | null>,
      default: null,
      validator: (val: string) => {
        return !val || ['sm', 'md', 'lg'].includes(val)
      },
    },
    position: {
      type: String as PropType<'middle' | 'top' | 'left' | 'bottom' | 'right' | 'fullscreen'>,
      default: 'middle',
      validator: (val: string) => {
        return !val || ['middle', 'top', 'left', 'bottom', 'right', 'fullscreen'].includes(val)
      },
    },
    width: {
      type: Number as PropType<number | null>,
      default: null,
    },
    transition: {
      type: String as PropType<string | null>,
      default: null,
    },
    ...elevatedProps,
    ...borderedProps,
    ...roundedProps,
  },
  emits: ['update:modelValue', 'close'],
  setup(props) {
    const { bordered, rounded, roundedLg, round } = toRefs(props)

    return {
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round),
    }
  },
  data() {
    return {
      scrollPosition: 0,
      isContentShown: false,
      isBlendShown: false,
    }
  },
  computed: {
    classes(): CssClass[] {
      return [
        ...this.$bem({
          m: {
            [this.position]: true,
          },
        }),
      ]
    },
    middleClasses(): CssClass[] {
      return [
        ...this.$bem({
          e: 'middle',
          m: {
            [this.position]: true,
          },
        }),
      ]
    },
    cardStyle(): any {
      return this.width ? { width: `${this.width}px` } : {}
    },
    cardClasses(): CssClass[] {
      return [
        ...this.$bem({
          e: 'card',
          m: {
            [this.size || 'no-size']: !!this.size,
            [this.position]: true,
            elevated: this.elevated,
          },
        }),
        this.roundedClass,
        this.borderedClass,
      ]
    },
  },
  watch: {
    modelValue(val) {
      this.changeValueHandler(val)
    },
  },
  created(): void {
    if (this.modelValue) this.openHandler()
  },
  unmounted(): void {
    this.enableScrolling()
  },
  methods: {
    enableScrolling(): void {
      document.documentElement.classList.remove('is-scrolling-disabled')
      document.body.classList.remove('is-scrolling-disabled')
      document.body.style.top = 'unset'
      window.scrollTo(0, this.scrollPosition)
    },
    disableScrolling(): void {
      this.scrollPosition = window.pageYOffset
      document.documentElement.classList.add('is-scrolling-disabled')
      document.body.classList.add('is-scrolling-disabled')
      document.body.style.top = `-${this.scrollPosition}px`
    },
    showBlend(): void {
      this.disableScrolling()
      this.isBlendShown = true
      nextTick(() => {
        this.isContentShown = true
      })
    },
    hideBlend(): void {
      this.isBlendShown = false
      this.enableScrolling()
    },
    openHandler(): void {
      this.showBlend()
    },
    closeHandler(): void {
      this.isContentShown = false
    },
    changeValueHandler(val: boolean): void {
      if (val) {
        this.openHandler()
      } else {
        this.closeHandler()
      }
    },
    close(): void {
      this.$emit('update:modelValue', false)
      this.$emit('close')
    },
    onClickOutside(): void {
      if (!this.persistent) {
        this.close()
      }
    },
    onEsc(): void {
      if (this.closeOnEsc) {
        this.close()
      }
    },
    onContentLoad(): void {
      ;(this.$refs.card as HTMLElement).focus()
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
