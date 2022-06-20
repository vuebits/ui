<template>
  <div :class="$bem({})">
    <PageHeader>
      Modal
    </PageHeader>
    <ModalExample />
    <ComponentApi :component="component" />
    <ComponentApi :component="componentHeader" />
    <ComponentApi :component="componentBody" />
    <ComponentApi :component="componentFooter" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VModal,
  VModalHeader,
  VModalBody,
  VModalFooter,
} from '@vuebits/ui';
import ModalExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsIconButton',
  components: {
    PageHeader,
    ComponentApi,
    ModalExample,
  },
  data () {
    return {
      component: VModal,
      componentHeader: VModalHeader,
      componentBody: VModalBody,
      componentFooter: VModalFooter,
    };
  },
});
</script>

<style lang="scss">
</style>
