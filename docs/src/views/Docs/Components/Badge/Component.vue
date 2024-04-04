<template>
  <div :class="$bem({})">
    <PageHeader> Badge </PageHeader>
    <BadgeExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiBadge } from '@vuebits/ui'
import BadgeExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsBadge',
  components: {
    PageHeader,
    ComponentApi,
    BadgeExample,
  },
  data() {
    return {
      component: UiBadge,
    }
  },
})
</script>

<style lang="scss"></style>
