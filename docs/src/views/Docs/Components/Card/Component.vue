<template>
  <div :class="$bem({})">
    <PageHeader> Card </PageHeader>
    <CardExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiCard } from '@vuebits/ui'
import CardExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsCard',
  components: {
    PageHeader,
    ComponentApi,
    CardExample,
  },
  data() {
    return {
      component: UiCard,
    }
  },
})
</script>

<style lang="scss"></style>
