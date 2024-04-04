<template>
  <div :class="$bem({})">
    <PageHeader> StarRating </PageHeader>
    <StarRatingExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiStarRating } from '@vuebits/ui'
import StarRatingExample from './Example.vue'
import { PageHeader, ComponentApi } from '@/components'

export default defineComponent({
  name: 'DocsComponentsStarRating',
  components: {
    PageHeader,
    ComponentApi,
    StarRatingExample,
  },
  data() {
    return {
      component: UiStarRating,
    }
  },
})
</script>
