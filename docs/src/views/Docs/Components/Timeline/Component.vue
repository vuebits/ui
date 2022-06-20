<template>
  <div :class="$bem({})">
    <PageHeader>
      Timeline
    </PageHeader>
    <TimelineExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTimeline } from '@vuebits/ui';
import TimelineExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsTimeline',
  components: {
    PageHeader,
    ComponentApi,
    TimelineExample,
  },
  data () {
    return {
      component: VTimeline,
    };
  },
});
</script>
