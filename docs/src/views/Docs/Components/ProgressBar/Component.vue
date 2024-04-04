<template>
  <div :class="$bem({})">
    <PageHeader> ProgressBar </PageHeader>
    <ProgressBarExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiProgressBar } from '@vuebits/ui'
import ProgressBarExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsProgressBar',
  components: {
    PageHeader,
    ComponentApi,
    ProgressBarExample,
  },
  data() {
    return {
      component: UiProgressBar,
    }
  },
})
</script>

<style lang="scss"></style>
