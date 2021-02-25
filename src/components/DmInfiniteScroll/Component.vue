<template>
  <div
    :id="`v-infinite-scroll-${identifier}`"
    ref="container"
    v-scrolled-to-end="handleScroll"
    :class="$bem({})"
  >
    <slot />

    <template v-if="isLoading">
      <slot name="loading">
        <div
          :class="$bem({e: 'status'})"
        >
          <DmSpinner
            :size="iconsSize"
            :class="$bem({e: 'status-icon'})"
          />
          {{ textOnLoading }}
        </div>
      </slot>
    </template>
    <template v-if="isComplete">
      <slot name="complete">
        <div
          :class="$bem({e: 'status'})"
        >
          <DmIcon
            :name="completeIcon"
            color="success"

            :class="$bem({e: 'status-icon'})"
          />
          {{ textOnComplete }}
        </div>
      </slot>
    </template>
    <template v-if="isError">
      <div
        :class="$bem({e: 'status'})"
      >
        <slot name="error">
          <DmIcon
            :name="errorIcon"
            color="error"

            :class="$bem({e: 'status-icon'})"
          />
          {{ textOnError }}
        </slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ScrolledToEnd } from '@/directives';
import { DmSpinner } from '@/components/DmSpinner';
import { DmIcon } from '@/components/DmIcon';
import { InifiniteScrollState } from './models';

export default defineComponent({
  name: 'VInfiniteScroll',
  directives: {
    ScrolledToEnd
  },
  components: {
    DmSpinner,
    DmIcon
  },
  props: {
    identifier: {
      type: Number as PropType<number>,
      default: 1
    },
    state: {
      type: String as PropType<InifiniteScrollState>,
      required: true
    },
    loadingText: {
      type: String as PropType<string>,
      default: ''
    },
    errorText: {
      type: String as PropType<string>,
      default: ''
    },
    completeText: {
      type: String as PropType<string>,
      default: ''
    },
    iconsSize: {
      type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null>,
      default: '2x'
    },
    completeIcon: {
      type: String as PropType<string>,
      default: 'check'
    },
    errorIcon: {
      type: String as PropType<string>,
      default: 'cancel-bold'
    }
  },
  emits: ['scroll-to-end'],
  computed: {
    isLoading (): boolean {
      return this.state === InifiniteScrollState.LOADING;
    },
    isComplete (): boolean {
      return this.state === InifiniteScrollState.COMPLETE;
    },
    isError (): boolean {
      return this.state === InifiniteScrollState.ERROR;
    },
    textOnLoading (): string {
      return this.loadingText || 'ładowanie danych...';
    },
    textOnComplete (): string {
      return this.completeText || 'to już koniec';
    },
    textOnError (): string {
      return this.errorText || 'błąd';
    }
  },
  mounted () {
    this.setIdentifierReset();
  },
  methods: {
    handleScroll (isEnd: boolean): void {
      if (isEnd && this.state === InifiniteScrollState.LOADED) {
        this.$emit('scroll-to-end');
      }
    },
    reset (): void {
      (this.$refs.container as HTMLElement).scrollTop = 0;
    },
    setIdentifierReset (): void {
      if (this.identifier !== null) {
        this.$watch('identifier', this.reset);
      }
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
