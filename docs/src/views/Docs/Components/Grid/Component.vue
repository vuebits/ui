<template>
  <div :class="$bem({})">
    <PageHeader> Checkbox </PageHeader>
    <Example />
    <ComponentApi :component="componentGrid" />
    <ComponentApi :component="componentGridItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiGrid, UiGridItem } from '@vuebits/ui'
import Example from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsGrid',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data() {
    return {
      componentGrid: UiGrid,
      componentGridItem: UiGridItem,
    }
  },
})
</script>

<style lang="scss"></style>
