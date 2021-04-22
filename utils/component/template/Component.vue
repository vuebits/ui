<template>
  <div :class="$bem({})">
    VComponent
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VComponent'
});
</script>

<style lang="scss">
@import './styles';
</style>
