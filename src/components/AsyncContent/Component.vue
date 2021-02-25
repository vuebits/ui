<template>
  <div
    :class="$bem({})"
  >
    <div
      v-if="loading"
      :class="$bem({e: 'loading-wrapper'})"
    >
      <DmSpinner
        :class="$bem({e: 'loader'})"
        :size="spinnerSize"
      />
      <p
        :class="$bem({e: 'loading-text'})"
      >
        {{ loadingText }}
      </p>
    </div>
    <div
      v-else-if="error"
      :class="$bem({e: 'error-wrapper'})"
    >
      <DmIcon
        :class="$bem({e: 'error-icon'})"
        size="3x"
        name="exclamation-triangle"
      />
      <p
        :class="$bem({e: 'error-text'})"
      >
        {{ errorText }}
      </p>
      <DmButton
        v-if="reloadable"
        color="primary"
        rounded
        dark
        :class="$bem({e: 'reload-button'})"
        @click="reload"
      >
        {{ reloadText }}
      </DmButton>
    </div>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DmSpinner } from '@/components/Spinner';
import { DmIcon } from '@/components/Icon';
import { DmButton } from '@/components/Button';

export default defineComponent({
  name: 'VAsyncContent',
  components: {
    DmSpinner,
    DmIcon,
    DmButton
  },
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    spinnerSize: {
      type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null>,
      default: '2x'
    },
    loadingText: {
      type: String as PropType<string>,
      default: ''
    },
    error: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    errorText: {
      type: String as PropType<string>,
      default: 'Coś poszło nie tak.'
    },
    reloadable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    reloadText: {
      type: String as PropType<string>,
      default: 'Spróbuj ponownie'
    }
  },
  emits: ['reload'],
  methods: {
    reload (): void {
      this.$emit('reload');
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
