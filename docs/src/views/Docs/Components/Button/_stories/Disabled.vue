<template>
  <div>
    <VButton
      dark
    >
      I am normal
    </VButton>
    <VButton
      dark
      disabled
    >
      I am disabled
    </VButton>
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';

export default {
  name: 'ButtonDisabled',
  components: {
    VButton,
  },
};
</script>
