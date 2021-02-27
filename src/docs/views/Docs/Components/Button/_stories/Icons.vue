<template>
  <VButton
    dark
    right-icon="home"
  >
    I have right icon
  </VButton>
  <VButton
    dark
    left-icon="home"
  >
    I have left icon
  </VButton>
  <VButton
    dark
    right-icon="home"
    left-icon="home"
  >
    I have both icon
  </VButton>
</template>

<script>
import {
  VButton
} from '@/components';

export default {
  name: 'ButtonIcons',
  components: {
    VButton
  }
};
</script>
