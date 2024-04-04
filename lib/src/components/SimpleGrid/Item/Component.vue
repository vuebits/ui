<template>
  <component
    :is="itemTag"
    :class="$bem({})"
    v-bind="$ui.testElName('simple-grid-item')"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'UiSimpleGridItem',
  props: {
    listItem: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {
    itemTag(): string {
      return this.listItem ? 'li' : 'div'
    },
  },
})
</script>
