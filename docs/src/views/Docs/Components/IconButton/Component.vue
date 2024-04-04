<template>
  <div :class="$bem({})">
    <PageHeader> Icon button </PageHeader>
    <IconButtonExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiIconButton } from '@vuebits/ui'
import IconButtonExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsIconButton',
  components: {
    PageHeader,
    ComponentApi,
    IconButtonExample,
  },
  data() {
    return {
      component: UiIconButton,
    }
  },
})
</script>

<style lang="scss"></style>
