<template>
  <div :class="$bem({})">
    <PageHeader>
      Loading blend
    </PageHeader>
    <LoadingBlendExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VLoadingBlend } from '@vuebits/ui';
import LoadingBlendExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';
export default defineComponent({
  name: 'DocsComponentsLoadingBlend',
  components: {
    PageHeader,
    ComponentApi,
    LoadingBlendExample,
  },
  data () {
    return {
      component: VLoadingBlend,
    };
  },
});
</script>

<style lang="scss">
</style>
