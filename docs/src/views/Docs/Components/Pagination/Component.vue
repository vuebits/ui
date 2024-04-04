<template>
  <div :class="$bem({})">
    <PageHeader> Pagination </PageHeader>
    <PaginationExample />
    <ComponentApi :component="component" />
    <Story
      file-name="CustomJumper"
      component-name="Pagination"
      title="Custom jumper"
    >
      <PaginationCustomJumper />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiPagination } from '@vuebits/ui'
import PaginationExample from './Example.vue'
import { PageHeader, ComponentApi, Story } from '@/components'
import { PaginationCustomJumper } from './_stories'

export default defineComponent({
  name: 'DocsComponentPagination',
  components: {
    PageHeader,
    ComponentApi,
    Story,
    PaginationExample,
    PaginationCustomJumper,
  },
  data() {
    return {
      component: UiPagination,
    }
  },
})
</script>

<style lang="scss"></style>
