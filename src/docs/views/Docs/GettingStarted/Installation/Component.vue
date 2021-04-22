<template>
  <div :class="$bem({})">
    <PageHeader>
      Installation
    </PageHeader>
    <p class="docs--p">
      Install library via npm:
    </p>
    <CodeBlock
      language="bash"
      code="npm i @vuebits/ui"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  PageHeader,
  CodeBlock
} from '@/docs/components';

export default defineComponent({
  name: 'DocsGettingStartedInstallation',
  components: {
    PageHeader,
    CodeBlock
  }
});
</script>

<style lang="scss">
</style>
