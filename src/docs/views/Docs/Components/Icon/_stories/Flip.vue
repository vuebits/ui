<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    "
  >
    <div
      v-for="flip in flips"
      :key="flip"
      style="margin: 10px; text-align: center;"
    >
      <VIcon
        name="check"
        :flip="flip"
      />
      <div>{{ flip }}</div>
    </div>
  </div>
</template>

<script>
import {
  VIcon
} from '@/components';

export default {
  name: 'IconFlip',
  components: {
    VIcon
  },
  data () {
    return {
      flips: [
        '-',
        'horizontal',
        'vertical',
        'both'
      ]
    };
  }
};
</script>
