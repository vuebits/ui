<template>
  <div :class="$bem({})">
    <PageHeader> TabSwitch </PageHeader>
    <TabSwitchExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiTabSwitch } from '@vuebits/ui'
import TabSwitchExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsTabSwitch',
  components: {
    PageHeader,
    ComponentApi,
    TabSwitchExample,
  },
  data() {
    return {
      component: UiTabSwitch,
    }
  },
})
</script>

<style lang="scss"></style>
