<template>
  <div :class="$bem({})">
    <PageHeader>
      File uploader
    </PageHeader>
    <FileUploaderExample />
    <ComponentApi :component="component" />
    <Story
      file-name="CustomButton"
      component-name="FileUploader"
      title="Custom button"
    >
      <FileUploaderCustomButton />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VFileUploader } from '@vuebits/ui';
import FileUploaderExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
  Story,
} from '@/components';
import {
  FileUploaderCustomButton,
} from './_stories';

export default defineComponent({
  name: 'DocsComponentsAsyncContent',
  components: {
    PageHeader,
    ComponentApi,
    Story,
    FileUploaderExample,
    FileUploaderCustomButton,
  },
  data () {
    return {
      component: VFileUploader,
    };
  },
});
</script>

<style lang="scss">
</style>
