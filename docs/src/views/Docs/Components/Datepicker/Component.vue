<template>
  <div :class="$bem({})">
    <PageHeader> Datepicker </PageHeader>
    <DatepickerExample />
    <ComponentApi :component="component" />
    <Story
      file-name="HighlightedDays"
      component-name="Datepicker"
      title="Highlighted days"
    >
      <DatepickerHighlightedDays />
    </Story>
    <Story
      file-name="Holidays"
      component-name="Datepicker"
      title="Holidays"
    >
      <DatepickerHolidays />
    </Story>
    <Story
      file-name="DateRange"
      component-name="Datepicker"
      title="Date range"
    >
      <DatepickerDateRange />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiDatepicker } from '@vuebits/ui'
import DatepickerExample from './Example.vue'
import { PageHeader, ComponentApi, Story } from '@/components'
import { DatepickerHolidays, DatepickerHighlightedDays, DatepickerDateRange } from './_stories'

export default defineComponent({
  name: 'DocsComponentsDatepicker',
  components: {
    PageHeader,
    ComponentApi,
    Story,
    DatepickerExample,
    DatepickerHolidays,
    DatepickerHighlightedDays,
    DatepickerDateRange,
  },
  data() {
    return {
      component: UiDatepicker,
    }
  },
})
</script>

<style lang="scss"></style>
