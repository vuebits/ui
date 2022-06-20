<template>
  <div>
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
  </div>
</template>

<script>
import {
  VIcon,
} from '@vuebits/ui';

export default {
  name: 'IconSpin',
  components: {
    VIcon,
  },
};
</script>
