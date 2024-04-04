<template>
  <div :class="$bem({})">
    <PageHeader> Checkbox </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiCheckbox } from '@vuebits/ui'
import Example from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsCheckbox',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data() {
    return {
      component: UiCheckbox,
    }
  },
})
</script>

<style lang="scss"></style>
