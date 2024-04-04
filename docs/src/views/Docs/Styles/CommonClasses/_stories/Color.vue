<template>
  <div class="color">
    <div
      v-for="color in colors"
      :key="color"
      class="color__color"
    >
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-color-${color}-lighten-${3 - i}`"
      >
        has-color-{{ color }}-lighten-{{ 3 - i }}
      </div>
      <div :class="`has-color-${color}`">has-color-{{ color }}</div>
      <div
        v-for="i in 2"
        :key="i"
        :class="`has-color-${color}-darken-${i}`"
      >
        has-color-{{ color }}-darken-{{ i }}
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from '@/helpers/story-params'

export default {
  name: 'CommonClassesColor',
  data() {
    return {
      colors,
    }
  },
}
</script>

<style>
.color {
  display: flex;
  flex-flow: row wrap;
}
.color__color {
  margin: 0 20px 20px 0;
}
</style>
