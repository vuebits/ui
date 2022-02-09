<template>
  <div :class="$bem({})">
    <PageHeader>
      ComponentName
    </PageHeader>
    <ComponentNameExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VComponentName } from '@vuebits/ui';
import ComponentNameExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsComponentName',
  components: {
    PageHeader,
    ComponentApi,
    ComponentNameExample,
  },
  data () {
    return {
      component: VComponentName,
    };
  },
});
</script>

<style lang="scss">
</style>
