<template>
  <VIcon
    name="github"
    type="fab"
  />
</template>

<script>
import {
  VIcon
} from '@/components';
import { icons } from '@/docs/helpers/story-params';

export default {
  name: 'IconType',
  components: {
    VIcon
  },
  data () {
    return {
      icons
    };
  }
};
</script>
