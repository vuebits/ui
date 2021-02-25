<template>
  <component
    :is="itemTag"
    :class="$bem({})"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VSimpleGridItem',
  props: {
    listItem: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  computed: {
    itemTag (): string {
      return this.listItem ? 'li' : 'div';
    }
  }
});
</script>
