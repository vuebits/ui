<template>
  <div :class="$bem({})">
    <PageHeader>
      Tooltip
    </PageHeader>
    <TooltipExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTooltip } from '@vuebits/ui';
import TooltipExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsAsyncContent',
  components: {
    PageHeader,
    ComponentApi,
    TooltipExample,
  },
  data () {
    return {
      component: VTooltip,
    };
  },
});
</script>

<style lang="scss">
</style>
