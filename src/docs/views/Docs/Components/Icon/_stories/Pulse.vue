<template>
  <VIcon
    name="check"
    pulse
  />
  <VIcon
    name="spinner"
    pulse
  />
  <VIcon
    name="cog"
    pulse
  />
  <VIcon
    pulse
  >
    Hello!
  </VIcon>
</template>

<script>
import {
  VIcon
} from '@/components';

export default {
  name: 'IconPulse',
  components: {
    VIcon
  }
};
</script>
