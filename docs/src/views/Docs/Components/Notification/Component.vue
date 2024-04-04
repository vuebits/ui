<template>
  <div :class="$bem({})">
    <PageHeader> Notification </PageHeader>
    <NotificationExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiNotification } from '@vuebits/ui'
import NotificationExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsNotification',
  components: {
    PageHeader,
    ComponentApi,
    NotificationExample,
  },
  data() {
    return {
      component: UiNotification,
    }
  },
})
</script>

<style lang="scss"></style>
