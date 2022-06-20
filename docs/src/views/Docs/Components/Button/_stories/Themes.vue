<template>
  <div>
    <div
      v-for="theme in themes"
      :key="theme"
    >
      <VButton
        :theme="theme"
      >
        I am {{ theme }}
      </VButton>
      <VButton
        invert-theme
        :theme="theme"
      >
        I am inverted {{ theme }}
      </VButton>
    </div>
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';

export default {
  name: 'Buttonthemes',
  components: {
    VButton,
  },
  data () {
    return {
      themes: [
        'primary',
        'secondary',
      ],
    };
  },
};
</script>
