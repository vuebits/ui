<template>
  <FontAwesomeIcon
    :icon="name"
    :border="bordered"
    :fixed-width="fixedWidth"
    :flip="flip"
    :pulse="pulse"
    :spin="spin"
    :size="size"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'VIcon',
  components: {
    FontAwesomeIcon
  },
  props: {
    name: {
      type: [
        String,
        Object,
        Array
      ] as PropType<object | Array<string> | string>,
      default: null
    },
    bordered: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    size: {
      type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null>,
      default: null
    },
    flip: {
      type: String as PropType<'horizontal' | 'vertical' | 'both' | null>,
      default: null
    },
    pulse: {
      type: Boolean,
      default: false
    },
    spin: {
      type: Boolean,
      default: false
    }
  }
});
</script>
