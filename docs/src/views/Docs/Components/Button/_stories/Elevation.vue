<template>
  <div>
    <VButton
      dark
    >
      I am normal
    </VButton>
    <VButton
      dark
      elevated
    >
      I am elevated
    </VButton>
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';

export default {
  name: 'ButtonElevation',
  components: {
    VButton,
  },
};
</script>
