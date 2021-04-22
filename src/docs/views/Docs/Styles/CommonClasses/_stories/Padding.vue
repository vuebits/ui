<template>
  <div
    class="padding"
  >
    <div
      v-for="(direction, i) in directions"
      :key="i"
    >
      <span
        v-for="spacing in spacings"
        :key="spacing"
        class="padding__spacing"
        :class="`has-padding-${direction}${spacing}`"
      >
        has-padding-{{ direction }}{{ spacing }}
      </span>
    </div>
  </div>
</template>

<script>
import { spacings } from '@/docs/helpers/story-params';

export default {
  name: 'CommonClassesPadding',
  data () {
    return {
      spacings,
      directions: [
        '',
        'x-',
        'y-',
        'top-',
        'right-',
        'bottom-',
        'left-'
      ]
    };
  }
};
</script>

<style>
.padding {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.padding__spacing {
  display: inline-block;
  margin: 0 20px 20px 0;
  border: 1px solid #ccc;
}
</style>
