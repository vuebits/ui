<template>
  <div :class="$bem({})">
    <PageHeader>
      Icon button
    </PageHeader>
    <IconButtonExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VIconButton } from '@/components';
import IconButtonExample from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsIconButton',
  components: {
    PageHeader,
    ComponentApi,
    IconButtonExample
  },
  data () {
    return {
      component: VIconButton
    };
  }
});
</script>

<style lang="scss">
</style>
