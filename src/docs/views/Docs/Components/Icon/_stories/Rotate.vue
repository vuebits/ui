<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    "
  >
    <div
      v-for="rotate in rotations"
      :key="rotate"
      style="margin: 10px; text-align: center;"
    >
      <VIcon
        name="check"
        :rotate="rotate"
      />
      <div>{{ rotate }}</div>
    </div>
  </div>
</template>

<script>
import {
  VIcon
} from '@/components';

export default {
  name: 'IconRotate',
  components: {
    VIcon
  },
  data () {
    return {
      rotations: [
        '-',
        '90',
        '180',
        '270'
      ]
    };
  }
};
</script>
