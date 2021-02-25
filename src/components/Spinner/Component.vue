<template>
  <DmIcon
    name="spinner"
    pulse
    :size="size"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DmIcon } from '@/components/Icon';

export default defineComponent({
  name: 'VSpinner',
  components: {
    DmIcon
  },
  props: {
    size: {
      type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null>,
      default: '3x'
    }
  }
});
</script>
