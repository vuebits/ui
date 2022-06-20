<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('modal-body')"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VModalBody',
});
</script>

<style lang="scss">
@import './styles';
</style>
