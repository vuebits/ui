<template>
  <div
    class="bg-color"
  >
    <div
      v-for="color in colors"
      :key="color"
      class="bg-color__color"
    >
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-bg-color-${color}-lighten-${3 - i}`"
      >
        has-bg-color-{{ color }}-lighten-{{ 3 - i }}
      </div>
      <div
        :class="`has-bg-color-${color}`"
      >
        has-bg-color-{{ color }}
      </div>
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-bg-color-${color}-darken-${i}`"
      >
        has-bg-color-{{ color }}-darken-{{ i }}
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from '@/helpers/story-params';

export default {
  name: 'CommonClassesBgColor',
  data () {
    return {
      colors,
    };
  },
};
</script>

<style>
.bg-color {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.bg-color__color {
  margin: 0 20px 20px 0;
}
</style>
