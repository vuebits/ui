<template>
  <div :class="$bem({})">
    <ComponentHeader>
      Async Content
    </ComponentHeader>
    <AsyncContentExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VAsyncContent } from '@/components';
import AsyncContentExample from './Example.vue';
import {
  ComponentHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsAsyncContent',
  components: {
    ComponentHeader,
    ComponentApi,
    AsyncContentExample
  },
  data () {
    return {
      component: VAsyncContent
    };
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
