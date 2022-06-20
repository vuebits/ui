<template>
  <div :class="$bem({})">
    <PageHeader>
      RadioGroup
    </PageHeader>
    <RadioGroupExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VRadioGroup } from '@vuebits/ui';
import RadioGroupExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsRadioGroup',
  components: {
    PageHeader,
    ComponentApi,
    RadioGroupExample,
  },
  data () {
    return {
      component: VRadioGroup,
    };
  },
});
</script>

<style lang="scss">
</style>
