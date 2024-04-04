<template>
  <div :class="$bem({})">
    <PageHeader> Textarea </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiTextarea } from '@vuebits/ui'
import Example from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsTextarea',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data() {
    return {
      component: UiTextarea,
    }
  },
})
</script>

<style lang="scss"></style>
