<template>
  <div :class="$bem({})">
    <PageHeader> Infinite scroll </PageHeader>
    <InifiniteScrollExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiInfiniteScroll } from '@vuebits/ui'
import InifiniteScrollExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsInfiniteScroll',
  components: {
    PageHeader,
    ComponentApi,
    InifiniteScrollExample,
  },
  data() {
    return {
      component: UiInfiniteScroll,
    }
  },
})
</script>

<style lang="scss"></style>
