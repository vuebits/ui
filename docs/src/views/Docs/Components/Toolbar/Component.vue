<template>
  <div :class="$bem({})">
    <PageHeader> Toolbar </PageHeader>
    <ToolbarExample />
    <ComponentApi :component="component" />
    <ComponentApi :component="componentLogo" />
    <ComponentApi :component="componentHamburger" />
    <ComponentApi :component="componentMenu" />
    <ComponentApi :component="componentMenuItem" />
    <ComponentApi :component="componentMenuDropdown" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  UiToolbar,
  UiToolbarLogo,
  UiToolbarHamburger,
  UiToolbarMenu,
  UiToolbarMenuItem,
  UiToolbarMenuDropdown,
} from '@vuebits/ui'
import ToolbarExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsAsyncContent',
  components: {
    PageHeader,
    ComponentApi,
    ToolbarExample,
  },
  data() {
    return {
      component: UiToolbar,
      componentLogo: UiToolbarLogo,
      componentHamburger: UiToolbarHamburger,
      componentMenu: UiToolbarMenu,
      componentMenuItem: UiToolbarMenuItem,
      componentMenuDropdown: UiToolbarMenuDropdown,
    }
  },
})
</script>

<style lang="scss"></style>
