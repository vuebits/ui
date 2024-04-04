<template>
  <div class="hover-color">
    <div
      v-for="color in colors"
      :key="color"
      class="hover-color__color"
    >
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-hover-color-${color}-lighten-${3 - i}`"
      >
        has-hover-color-{{ color }}-lighten-{{ 3 - i }}
      </div>
      <div :class="`has-hover-color-${color}`">has-hover-color-{{ color }}</div>
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-hover-color-${color}-darken-${i}`"
      >
        has-hover-color-{{ color }}-darken-{{ i }}
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from '@/docs/helpers/story-params'

export default {
  name: 'CommonClassesHoverColor',
  data() {
    return {
      colors,
    }
  },
}
</script>

<style>
.hover-color {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.hover-color__color {
  margin: 0 20px 20px 0;
}
</style>
