<template>
  <div
    class="hover-bg-color"
  >
    <div
      v-for="color in colors"
      :key="color"
      class="hover-bg-color__color"
    >
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-hover-bg-color-${color}-lighten-${3 - i}`"
      >
        has-hover-bg-color-{{ color }}-lighten-{{ 3 - i }}
      </div>
      <div
        :class="`has-hover-bg-color-${color}`"
      >
        has-hover-bg-color-{{ color }}
      </div>
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-hover-bg-color-${color}-darken-${i}`"
      >
        has-hover-bg-color-{{ color }}-darken-{{ i }}
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from '@/docs/helpers/story-params';

export default {
  name: 'CommonClassesHoverBgColor',
  data () {
    return {
      colors,
    };
  },
};
</script>

<style>
.hover-bg-color {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.hover-bg-color__color {
  margin: 0 20px 20px 0;
}
</style>
