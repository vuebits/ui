<template>
  <div :class="$bem({})">
    <PageHeader> HorizontalScroll </PageHeader>
    <HorizontalScrollExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiHorizontalScroll } from '@vuebits/ui'
import HorizontalScrollExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsHorizontalScroll',
  components: {
    PageHeader,
    ComponentApi,
    HorizontalScrollExample,
  },
  data() {
    return {
      component: UiHorizontalScroll,
    }
  },
})
</script>

<style lang="scss"></style>
