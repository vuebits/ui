<template>
  <div
    v-if="loading"
    :class="$bem({})"
    v-bind="$ui.testElName('loading-blend')"
  >
    <VSpinner />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VSpinner } from '../Spinner';

export default defineComponent({
  name: 'VLoadingBlend',
  components: {
    VSpinner,
  },
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
