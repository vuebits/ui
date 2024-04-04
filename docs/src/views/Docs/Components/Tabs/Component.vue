<template>
  <div :class="$bem({})">
    <PageHeader> Tabs </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiTabs } from '@vuebits/ui'
import Example from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsTabs',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data() {
    return {
      component: UiTabs,
    }
  },
})
</script>

<style lang="scss"></style>
