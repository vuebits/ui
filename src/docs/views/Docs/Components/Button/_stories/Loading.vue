<template>
  <VButton
    dark
  >
    I am normal
  </VButton>
  <VButton
    dark
    loading
  >
    I am loading
  </VButton>
</template>

<script>
import {
  VButton
} from '@/components';

export default {
  name: 'ButtonLoading',
  components: {
    VButton
  }
};
</script>
