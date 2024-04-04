<template>
  <div :class="$bem({})">UiComponent</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiComponent',
})
</script>

<style lang="scss">
@import './styles';
</style>
