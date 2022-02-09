<template>
  <div
    class="margin"
  >
    <div
      v-for="(direction, i) in directions"
      :key="i"
    >
      <span
        v-for="spacing in spacings"
        :key="spacing"
        class="margin__spacing-wrapper"
      >
        <span
          class="margin__spacing"
          :class="`has-margin-${direction}${spacing}`"
        >
          has-margin-{{ direction }}{{ spacing }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { spacings } from '@/docs/helpers/story-params';

export default {
  name: 'CommonClassesMargin',
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
.margin {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.margin__spacing-wrapper {
  display: inline-block;
  border: 1px dashed #ccc;
  margin: 5px;
}
.margin__spacing {
  display: inline-block;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
