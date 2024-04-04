<template>
  <div :class="$bem({})">
    <PageHeader> Radio </PageHeader>
    <RadioExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiRadio } from '@vuebits/ui'
import RadioExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsRadio',
  components: {
    PageHeader,
    ComponentApi,
    RadioExample,
  },
  data() {
    return {
      component: UiRadio,
    }
  },
})
</script>

<style lang="scss"></style>
