<template>
  <div :class="$bem({})">
    <PageHeader> Stepper </PageHeader>
    <StepperExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiStepper } from '@vuebits/ui'
import StepperExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsStepper',
  components: {
    PageHeader,
    ComponentApi,
    StepperExample,
  },
  data() {
    return {
      component: UiStepper,
    }
  },
})
</script>

<style lang="scss"></style>
