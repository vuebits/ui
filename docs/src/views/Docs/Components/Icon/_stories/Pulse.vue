<template>
  <div>
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
  </div>
</template>

<script>
import {
  VIcon,
} from '@vuebits/ui';

export default {
  name: 'IconPulse',
  components: {
    VIcon,
  },
};
</script>
