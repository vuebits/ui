<template>
  <div>
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
  VButton
} from '@/components';

export default {
  name: 'ButtonRoundings',
  components: {
    VButton
  }
};
</script>
