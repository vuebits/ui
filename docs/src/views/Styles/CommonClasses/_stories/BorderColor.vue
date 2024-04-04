<template>
  <div class="border-color">
    <div
      v-for="color in colors"
      :key="color"
      class="border-color__color"
    >
      <div
        v-for="i in 2"
        :key="i"
        :class="`is-bordered has-border-color-${color}-lighten-${3 - i}`"
      >
        is-bordered has-border-color-{{ color }}-lighten-{{ 3 - i }}
      </div>
      <div :class="`is-bordered has-border-color-${color}`">
        is-bordered has-border-color-{{ color }}
      </div>
      <div
        v-for="i in 2"
        :key="i"
        :class="`is-bordered has-border-color-${color}-darken-${i}`"
      >
        is-bordered has-border-color-{{ color }}-darken-{{ i }}
      </div>
    </div>
  </div>
</template>

<script>
import { colors } from '@/docs/helpers/story-params'

export default {
  name: 'CommonClassesBorderColor',
  data() {
    return {
      colors,
    }
  },
}
</script>

<style>
.border-color {
  display: flex;
  flex-flow: row wrap;
}
.border-color__color {
  margin: 0 20px 20px 0;
}
</style>
