<template>
  <div>
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
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';
import { sizes } from '@/helpers/story-params';

export default {
  name: 'ButtonSizes',
  components: {
    VButton,
  },
  data () {
    return {
      sizes,
    };
  },
};
</script>
