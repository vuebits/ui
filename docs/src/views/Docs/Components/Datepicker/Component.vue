<template>
  <div :class="$bem({})">
    <PageHeader>
      Datepicker
    </PageHeader>
    <DatepickerExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VDatepicker } from '@vuebits/ui';
import DatepickerExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
} from '@/components';

export default defineComponent({
  name: 'DocsComponentsDatepicker',
  components: {
    PageHeader,
    ComponentApi,
    DatepickerExample,
  },
  data () {
    return {
      component: VDatepicker,
    };
  },
});
</script>

<style lang="scss">
</style>
