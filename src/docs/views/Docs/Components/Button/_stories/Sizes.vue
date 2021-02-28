<template>
  <span
    v-for="size in sizes"
    :key="size"
  >
    <VButton
      :size="size"
      dark
    >
      I am {{ size }}
    </VButton>
  </span>
</template>

<script>
import {
  VButton
} from '@/components';
import { sizes } from '@/docs/helpers/story-params';

export default {
  name: 'ButtonSizes',
  components: {
    VButton
  },
  data () {
    return {
      sizes
    };
  }
};
</script>
