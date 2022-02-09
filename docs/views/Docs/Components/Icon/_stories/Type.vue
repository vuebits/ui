<template>
  <VIcon
    name="github"
    type="fab"
  />
</template>

<script>
import {
  VIcon,
} from '@vuebits/ui';
import { icons } from '@/helpers/story-params';

export default {
  name: 'IconType',
  components: {
    VIcon,
  },
  data () {
    return {
      icons,
    };
  },
};
</script>
