<template>
  <div :class="$bem({})">
    <PageHeader> Spinner </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiSpinner } from '@vuebits/ui'
import Example from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsSpinner',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data() {
    return {
      component: UiSpinner,
    }
  },
})
</script>

<style lang="scss"></style>
