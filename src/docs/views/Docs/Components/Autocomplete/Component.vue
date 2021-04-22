<template>
  <div :class="$bem({})">
    <PageHeader>
      Autocomplete
    </PageHeader>
    <Example />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VAutocomplete } from '@/components';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsAutocomplete',
  components: {
    PageHeader,
    ComponentApi,
    Example
  },
  data () {
    return {
      component: VAutocomplete
    };
  }
});
</script>

<style lang="scss">
</style>
