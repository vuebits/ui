<template>
  <div>
    <VButton
      bordered
    >
      I am not rounded
    </VButton>
    <VButton
      bordered
      rounded
    >
      I am rounded
    </VButton>
    <VButton
      bordered
      rounded-lg
    >
      I am rounded large
    </VButton>
    <VButton
      bordered
      round
    >
      I am round
    </VButton>
  </div>
</template>

<script>
import {
  VButton,
} from '@vuebits/ui';

export default {
  name: 'ButtonRoundings',
  components: {
    VButton,
  },
};
</script>
