<template>
  <VIcon
    name="check"
    spin
  />
  <VIcon
    name="spinner"
    spin
  />
  <VIcon
    name="cog"
    spin
  />
  <VIcon
    spin
  >
    Hello!
  </VIcon>
</template>

<script>
import {
  VIcon
} from '@/components';

export default {
  name: 'IconSpin',
  components: {
    VIcon
  }
};
</script>
