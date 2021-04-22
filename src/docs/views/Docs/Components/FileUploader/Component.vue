<template>
  <div :class="$bem({})">
    <PageHeader>
      File uploader
    </PageHeader>
    <FileUploaderExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VFileUploader } from '@/components';
import FileUploaderExample from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsAsyncContent',
  components: {
    PageHeader,
    ComponentApi,
    FileUploaderExample
  },
  data () {
    return {
      component: VFileUploader
    };
  }
});
</script>

<style lang="scss">
</style>
