<template>
  <VButton
    dark
  >
    I am normal
  </VButton>
  <VButton
    dark
    disabled
  >
    I am disabled
  </VButton>
</template>

<script>
import {
  VButton
} from '@/components';

export default {
  name: 'ButtonDisabled',
  components: {
    VButton
  }
};
</script>
