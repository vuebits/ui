<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    "
  >
    <div
      v-for="size in sizes"
      :key="size"
      style="margin: 10px; text-align: center;"
    >
      <VIcon
        name="check"
        :size="size"
      />
      <div>{{ size }}</div>
    </div>
  </div>
</template>

<script>
import {
  VIcon
} from '@/components';

export default {
  name: 'IconSize',
  components: {
    VIcon
  },
  data () {
    return {
      sizes: [
        '-',
        'lg',
        'xs',
        'sm',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x',
        '10x'
      ]
    };
  }
};
</script>
