<template>
  <label
    :class="$bem({})"
    :required="required"
  >
    <slot />
    <span
      v-if="required"
      :class="$bem({e: 'asterisk'})"
    >
      *
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VLabel',
  props: {
    required: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
