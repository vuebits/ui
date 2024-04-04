<template>
  <div :class="$bem({})">
    <PageHeader> Switcher </PageHeader>
    <SwitcherExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiSwitcher } from '@vuebits/ui'
import SwitcherExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsSwitcher',
  components: {
    PageHeader,
    ComponentApi,
    SwitcherExample,
  },
  data() {
    return {
      component: UiSwitcher,
    }
  },
})
</script>

<style lang="scss"></style>
