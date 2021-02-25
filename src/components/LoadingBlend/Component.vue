<template>
  <div
    v-if="loading"
    :class="$bem({})"
  >
    <DmSpinner />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DmSpinner } from '@/components/Spinner';

export default defineComponent({
  name: 'VLoadingBlend',
  components: {
    DmSpinner
  },
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
