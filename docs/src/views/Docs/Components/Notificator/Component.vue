<template>
  <div :class="$bem({})">
    <PageHeader>
      Notificator
    </PageHeader>
    <NotificatorExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VNotificator } from '@vuebits/ui';
import NotificatorExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';
export default defineComponent({
  name: 'DocsComponentsNotificator',
  components: {
    PageHeader,
    ComponentApi,
    NotificatorExample,
  },
  data () {
    return {
      component: VNotificator,
    };
  },
});
</script>

<style lang="scss">
</style>
