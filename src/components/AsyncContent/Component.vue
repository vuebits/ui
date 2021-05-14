<template>
  <div
    :class="$bem({})"
  >
    <div
      v-if="loading"
      :class="$bem({e: 'loading-wrapper'})"
    >
      <VSpinner
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
      <VIcon
        :class="$bem({e: 'error-icon'})"
        size="3x"
        name="exclamation-triangle"
        is-internal
      />
      <p
        :class="$bem({e: 'error-text'})"
      >
        {{ computedErrorText }}
      </p>
      <VButton
        v-if="reloadable"
        color="primary"
        rounded
        dark
        :class="$bem({e: 'reload-button'})"
        @click="reload"
      >
        {{ computedReloadText }}
      </VButton>
    </div>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VSpinner } from '@/components/Spinner';
import { VIcon } from '@/components/Icon';
import { VButton } from '@/components/Button';

export default defineComponent({
  name: 'VAsyncContent',
  components: {
    VSpinner,
    VIcon,
    VButton
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
      default: ''
    },
    reloadable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    reloadText: {
      type: String as PropType<string>,
      default: ''
    }
  },
  emits: ['reload'],
  computed: {
    computedErrorText (): string {
      return this.errorText || this.$ui.t().asyncContent.errorText;
    },
    computedReloadText (): string {
      return this.reloadText || this.$ui.t().asyncContent.reloadText;
    }
  },
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
