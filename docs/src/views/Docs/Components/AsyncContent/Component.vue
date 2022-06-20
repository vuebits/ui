<template>
  <div :class="$bem({})">
    <PageHeader>
      Async Content
    </PageHeader>
    <AsyncContentExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VAsyncContent } from '@vuebits/ui';
import AsyncContentExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsAsyncContent',
  components: {
    PageHeader,
    ComponentApi,
    AsyncContentExample,
  },
  data () {
    return {
      component: VAsyncContent,
    };
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
