<template>
  <div :class="$bem({})">
    <PageHeader>
      Timepicker
    </PageHeader>
    <TimepickerExample />
    <ComponentApi :component="component" />
    <Story
      file-name="TimeRange"
      component-name="Timepicker"
      title="Time range"
    >
      <TimepickerTimeRange />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTimepicker } from '@vuebits/ui';
import TimepickerExample from './Example.vue';
import {
  PageHeader,
  ComponentApi,
  Story,
} from '@/components';
import {
  TimepickerTimeRange,
} from './_stories';

export default defineComponent({
  name: 'DocsComponentsTimepicker',
  components: {
    PageHeader,
    ComponentApi,
    TimepickerExample,
    Story,
    TimepickerTimeRange,
  },
  data () {
    return {
      component: VTimepicker,
    };
  },
});
</script>

<style lang="scss">
</style>
