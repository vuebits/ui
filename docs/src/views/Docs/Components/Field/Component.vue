<template>
  <div :class="$bem({})">
    <PageHeader> Field </PageHeader>
    <FieldExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiField } from '@vuebits/ui'
import FieldExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsField',
  components: {
    PageHeader,
    ComponentApi,
    FieldExample,
  },
  data() {
    return {
      component: UiField,
    }
  },
})
</script>

<style lang="scss"></style>
