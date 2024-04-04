<template>
  <div :class="$bem({})">
    <PageHeader> Select </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiSelect } from '@vuebits/ui'
import Example from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsSelect',
  components: {
    PageHeader,
    ComponentApi,
    Example,
  },
  data() {
    return {
      component: UiSelect,
    }
  },
})
</script>

<style lang="scss"></style>
