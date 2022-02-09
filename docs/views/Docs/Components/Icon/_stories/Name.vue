<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    "
  >
    <div
      v-for="icon in icons"
      :key="icon"
      style="margin: 1rem; padding: 1rem; text-align: center;"
    >
      <VIcon
        :name="icon"
      />
      <div>{{ icon }}</div>
    </div>
  </div>
</template>

<script>
import {
  VIcon,
} from '@vuebits/ui';
import { icons } from '@/helpers/story-params';

export default {
  name: 'IconName',
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
