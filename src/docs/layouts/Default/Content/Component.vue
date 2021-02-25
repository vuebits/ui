<template>
  <main :class="$bem({})">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutDefaultContent'
});
</script>

<style lang="scss">
</style>
