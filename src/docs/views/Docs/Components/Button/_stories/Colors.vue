<template>
  <span
    v-for="color in colors"
    :key="color"
  >
    <VButton :color="color">
      I am {{ color }}
    </VButton>
  </span>
</template>

<script>
import {
  VButton
} from '@/components';

export default {
  name: 'ButtonColors',
  components: {
    VButton
  },
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'success',
        'info',
        'error',
        'warning',
        'disabled'
      ]
    };
  }
};
</script>
