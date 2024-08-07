<template>
  <div
    :id="`v-infinite-scroll-${identifier}`"
    :class="$bem({})"
    v-bind="$ui.testElName('infinite-scroll')"
  >
    <slot />

    <template v-if="isLoading">
      <slot name="loading">
        <div :class="$bem({ e: 'status' })">
          <UiSpinner
            :size="iconsSize"
            :class="$bem({ e: 'status-icon' })"
          />
          {{ textOnLoading }}
        </div>
      </slot>
    </template>
    <template v-if="isComplete">
      <slot name="complete">
        <div :class="$bem({ e: 'status' })">
          <UiIcon
            :name="completeIcon || $ui.icons.values.check"
            color="success"
            :class="$bem({ e: 'status-icon' })"
          />
          {{ textOnComplete }}
        </div>
      </slot>
    </template>
    <template v-if="isError">
      <div :class="$bem({ e: 'status' })">
        <slot name="error">
          <UiIcon
            :name="errorIcon || $ui.icons.values.error"
            color="error"
            :class="$bem({ e: 'status-icon' })"
          />
          {{ textOnError }}
        </slot>
      </div>
    </template>
    <div ref="end" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UiSpinner } from '../Spinner'
import { UiIcon } from '../Icon'
import { InifiniteScrollState } from './models'

export default defineComponent({
  name: 'UiInfiniteScroll',
  components: {
    UiSpinner,
    UiIcon,
  },
  props: {
    identifier: {
      type: Number as PropType<number>,
      default: 1,
    },
    state: {
      type: String as PropType<`${InifiniteScrollState}`>,
      required: true,
    },
    loadingText: {
      type: String as PropType<string>,
      default: '',
    },
    errorText: {
      type: String as PropType<string>,
      default: '',
    },
    completeText: {
      type: String as PropType<string>,
      default: '',
    },
    iconsSize: {
      type: String as PropType<
        | 'lg'
        | 'xs'
        | 'sm'
        | '1x'
        | '2x'
        | '3x'
        | '4x'
        | '5x'
        | '6x'
        | '7x'
        | '8x'
        | '9x'
        | '10x'
        | null
      >,
      default: '2x',
    },
    completeIcon: {
      type: String as PropType<string | null>,
      default: null,
    },
    errorIcon: {
      type: String as PropType<string | null>,
      default: null,
    },
    tolerance: {
      type: Number as PropType<number>,
      default: 100,
    },
  },
  emits: ['scroll-to-end'],
  computed: {
    isLoading(): boolean {
      return this.state === InifiniteScrollState.LOADING
    },
    isComplete(): boolean {
      return this.state === InifiniteScrollState.COMPLETE
    },
    isError(): boolean {
      return this.state === InifiniteScrollState.ERROR
    },
    textOnLoading(): string {
      return this.loadingText || 'loading...'
    },
    textOnComplete(): string {
      return this.completeText || 'end of data'
    },
    textOnError(): string {
      return this.errorText || 'error'
    },
  },
  mounted() {
    this.setIdentifierReset()
    this.setObserver()
  },
  methods: {
    handleScroll(): void {
      if (this.state === InifiniteScrollState.LOADED) {
        this.$emit('scroll-to-end')
      }
    },
    reset(): void {
      ;(this.$refs.container as HTMLElement).scrollTop = 0
    },
    setIdentifierReset(): void {
      if (this.identifier !== null) {
        this.$watch('identifier', this.reset)
      }
    },
    setObserver(): void {
      const root = this.$el as HTMLElement
      const end = this.$refs.end as HTMLElement
      const options = {
        root,
        rootMargin: `${this.tolerance}px`,
        threshold: 1.0,
      }
      const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          this.handleScroll()
        }
      }, options)
      observer.observe(end)
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
