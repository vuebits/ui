<template>
  <span
    v-for="color in colors"
    :key="color"
  >
    <VButton
      :color="color"
      dark
    >
      I am {{ color }}
    </VButton>
  </span>
</template>

<script>
import {
  VButton
} from '@/components';
import { colors } from '@/docs/helpers/story-params';

export default {
  name: 'ButtonColors',
  components: {
    VButton
  },
  data () {
    return {
      colors
    };
  }
};
</script>
