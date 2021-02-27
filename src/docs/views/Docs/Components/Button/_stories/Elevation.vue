<template>
  <VButton
    dark
  >
    I am normal
  </VButton>
  <VButton
    dark
    elevated
  >
    I am elevated
  </VButton>
</template>

<script>
import {
  VButton
} from '@/components';

export default {
  name: 'ButtonElevation',
  components: {
    VButton
  }
};
</script>
