<template>
  <div>
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
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';
import { colors } from '@/helpers/story-params';

export default {
  name: 'ButtonColors',
  components: {
    VButton,
  },
  data () {
    return {
      colors,
    };
  },
};
</script>
