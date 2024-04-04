<template>
  <UiIcon
    :name="$ui.icons.values.spinner"
    spin
    :size="size"
    v-bind="$ui.testElName('spinner')"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UiIcon } from '../Icon'

export default defineComponent({
  name: 'UiSpinner',
  components: {
    UiIcon,
  },
  props: {
    size: {
      type: String as PropType<
        | 'lg'
        | 'xs'
        | 'sm'
        | '1x'
        | '2x'
        | '3x'
        | '4x'
        | '5x'
        | '6x'
        | '7x'
        | '8x'
        | '9x'
        | '10x'
        | null
      >,
      default: '3x',
    },
  },
})
</script>
