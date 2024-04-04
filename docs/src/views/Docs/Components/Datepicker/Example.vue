<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiDatepicker
        v-model="date"
        :disable-before="disableBefore"
        :first-day-of-week="1"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :highlight-saturdays="highlightSaturdays"
        :highlight-sundays="highlightSundays"
        :loading="loading"
        :weekday-format="weekdayFormat"
        :six-weeks="sixWeeks"
      />
      {{ date }}
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="rounded"
          label="Rounded"
        />
        <KnobBoolean
          v-model="roundedLg"
          label="Rounded large"
        />
        <KnobBoolean
          v-model="round"
          label="Round"
        />
        <KnobBoolean
          v-model="highlightSaturdays"
          label="Highlight saturdays"
        />
        <KnobBoolean
          v-model="highlightSundays"
          label="Highlight sundays"
        />
        <KnobBoolean
          v-model="loading"
          label="Loading"
        />
        <KnobListItem
          v-model="weekdayFormat"
          :items="weekdayFormats"
          label="Weekday format"
        />
        <KnobBoolean
          v-model="sixWeeks"
          label="Six weeks"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobBoolean, KnobListItem } from '@/components'
import { UiDatepicker } from '@vuebits/ui'

export default {
  name: 'DatepickerExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    KnobListItem,
    UiDatepicker,
  },
  data() {
    return {
      date: null,
      round: true,
      rounded: false,
      roundedLg: false,
      highlightSaturdays: true,
      highlightSundays: true,
      loading: false,
      weekdayFormat: 'short',
      weekdayFormats: ['short', 'narrow', 'long'],
      sixWeeks: false,
    }
  },
}
</script>
