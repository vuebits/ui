<template>
  <LayoutDefault />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LayoutDefault } from './layouts'

export default defineComponent({
  name: 'App',
  components: {
    LayoutDefault,
  },
})
</script>

<style lang="scss">
@import '../lib/styles/generic';
@import '../lib/styles/elements/common-classes';
@import '../lib/styles/elements/global';
@import '../lib/styles/elements/transitions';
@import './assets/styles';
</style>
