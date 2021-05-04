<template>
  <div :class="$bem({})">
    <PageHeader>
      Notification
    </PageHeader>
    <NotificationExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VNotification } from '@/components';
import NotificationExample from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsNotification',
  components: {
    PageHeader,
    ComponentApi,
    NotificationExample
  },
  data () {
    return {
      component: VNotification
    };
  }
});
</script>

<style lang="scss">
</style>
