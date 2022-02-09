<template>
  <div :class="$bem({})">
    <PageHeader>
      Autocomplete
    </PageHeader>
    <Example />
    <ComponentApi :component="component" />
    <Story
      file-name="Multiple"
      component-name="Autocomplete"
      title="Multiple"
    >
      <AutocompleteMultiple />
    </Story>
    <Story
      file-name="ExternalSearch"
      component-name="Autocomplete"
      title="External search"
    >
      <AutocompleteExternalSearch />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VAutocomplete } from '@vuebits/ui';
import Example from './Example.vue';
import {
  PageHeader,
  ComponentApi,
  Story,
} from '@/components';
import {
  AutocompleteMultiple,
  AutocompleteExternalSearch,
} from './_stories';

export default defineComponent({
  name: 'DocsComponentsAutocomplete',
  components: {
    PageHeader,
    ComponentApi,
    Example,
    Story,
    AutocompleteMultiple,
    AutocompleteExternalSearch,
  },
  data () {
    return {
      component: VAutocomplete,
    };
  },
});
</script>

<style lang="scss">
</style>
