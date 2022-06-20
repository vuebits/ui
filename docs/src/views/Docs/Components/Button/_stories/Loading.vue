<template>
  <div>
    <VButton
      dark
    >
      I am normal
    </VButton>
    <VButton
      dark
      loading
    >
      I am loading
    </VButton>
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';

export default {
  name: 'ButtonLoading',
  components: {
    VButton,
  },
};
</script>
