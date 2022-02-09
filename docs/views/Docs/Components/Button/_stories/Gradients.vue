<template>
  <div>
    <span
      v-for="gradient in gradients"
      :key="gradient"
    >
      <VButton
        :gradient="gradient"
        dark
      >
        I am {{ gradient }}
      </VButton>
    </span>
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';
import { gradients } from '@/helpers/story-params';

export default {
  name: 'ButtonGradients',
  components: {
    VButton,
  },
  data () {
    return {
      gradients,
    };
  },
};
</script>
