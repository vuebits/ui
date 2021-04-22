<template>
  <div :class="$bem({})">
    <PageHeader>
      Toolbar
    </PageHeader>
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
import { defineComponent } from 'vue';
import {
  VToolbar,
  VToolbarLogo,
  VToolbarHamburger,
  VToolbarMenu,
  VToolbarMenuItem,
  VToolbarMenuDropdown
} from '@/components';
import ToolbarExample from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsAsyncContent',
  components: {
    PageHeader,
    ComponentApi,
    ToolbarExample
  },
  data () {
    return {
      component: VToolbar,
      componentLogo: VToolbarLogo,
      componentHamburger: VToolbarHamburger,
      componentMenu: VToolbarMenu,
      componentMenuItem: VToolbarMenuItem,
      componentMenuDropdown: VToolbarMenuDropdown
    };
  }
});
</script>

<style lang="scss">
</style>
