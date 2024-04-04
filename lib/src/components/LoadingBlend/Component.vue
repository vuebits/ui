<template>
  <div
    v-if="loading"
    :class="$bem({})"
    v-bind="$ui.testElName('loading-blend')"
  >
    <UiSpinner />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UiSpinner } from '../Spinner'

export default defineComponent({
  name: 'UiLoadingBlend',
  components: {
    UiSpinner,
  },
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
