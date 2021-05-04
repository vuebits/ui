<template>
  <div :class="$bem({})">
    <PageHeader>
      Select
    </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VSelect } from '@/components';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsSelect',
  components: {
    PageHeader,
    ComponentApi,
    Example
  },
  data () {
    return {
      component: VSelect
    };
  }
});
</script>

<style lang="scss">
</style>
