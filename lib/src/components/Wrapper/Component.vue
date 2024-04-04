<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('wrapper')"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiWrapper',
})
</script>

<style lang="scss">
@import './styles';
</style>
