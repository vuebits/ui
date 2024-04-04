<template>
  <div :class="bem({})">
    <div
      v-if="loading"
      :class="bem({ e: 'progress' })"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'UiProgressBar',
}
</script>

<script lang="ts" setup>
import { defineBem } from '../../helpers/bem'

type Props = {
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  loading: false,
})

const bem = defineBem('ui-progress-bar')
</script>

<style lang="scss">
@import './styles';
</style>
