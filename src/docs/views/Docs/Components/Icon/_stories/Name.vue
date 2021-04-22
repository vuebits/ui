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
      style="margin: 10px; padding: 10px; text-align: center;"
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
  VIcon
} from '@/components';
import { icons } from '@/docs/helpers/story-params';

export default {
  name: 'IconName',
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
