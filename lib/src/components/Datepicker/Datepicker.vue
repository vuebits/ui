<template>
  <div
    :class="bem({})"
    v-bind="ui.testElName('datepicker')"
  >
    <div
      :class="bem({ e: 'controls' })"
      v-bind="ui.testElName('datepicker-controls')"
    >
      <UiIconButton
        :icon="ui.icons.values.previous"
        hoverable
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :round="round"
        :class="bem({ e: 'control-button' })"
        v-bind="ui.testElName('datepicker-prev')"
        @click="goToPreviousPeriod"
      />
      <div
        :class="bem({ e: 'display' })"
        v-bind="ui.testElName('datepicker-display')"
      >
        <UiButton
          v-if="activeView === 'days'"
          hoverable
          :rounded="rounded"
          :rounded-lg="roundedLg"
          :round="round"
          block
          :class="bem({ e: 'display-button' })"
          @click="showMonthsView"
        >
          {{ formattedActiveMonthYear }}
        </UiButton>
        <input
          v-else
          v-model="activeYear"
          type="number"
          :class="bem({ e: 'display-year' })"
        />
      </div>
      <UiIconButton
        :icon="ui.icons.values.next"
        hoverable
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :round="round"
        :class="bem({ e: 'control-button' })"
        v-bind="ui.testElName('datepicker-next')"
        @click="goToNextPeriod"
      />
    </div>
    <div
      v-if="activeView === 'days'"
      :class="bem({ e: 'days-view' })"
    >
      <div :class="bem({ e: 'days-view-header' })">
        <div
          v-for="(d, i) in 7"
          :key="i"
          :class="bem({ e: 'days-view-header-item' })"
        >
          {{ formattedWeekday(i) }}
        </div>
      </div>
      <div :class="bem({ e: 'days-view-body' })">
        <UiProgressBar :loading="loading" />
        <div
          v-for="(week, i) in dates"
          :key="i"
          :class="bem({ e: 'days-view-row' })"
        >
          <div
            v-for="(day, j) in week"
            :key="j"
            :class="bem({ e: 'days-view-row-item' })"
          >
            <div
              :class="dateClasses(day)"
              v-bind="ui.testElName('datepicker-date')"
              :data-date="formatDate(day)"
              @click="selectDate(day)"
            >
              {{ day.getDate() }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      :class="bem({ e: 'months-view' })"
    >
      <UiButton
        v-for="(m, i) in 12"
        :key="i"
        hoverable
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :round="round"
        :class="bem({ e: 'months-view-month' })"
        v-bind="ui.testElName('datepicker-month')"
        @click="showDaysView(i)"
      >
        {{ formatMonth(i) }}
      </UiButton>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UiDatepicker',
}
</script>

<script lang="ts" setup>
import { ref, computed, onMounted, toRefs, nextTick } from 'vue'
import { UiIconButton } from '../IconButton'
import { UiProgressBar } from '../ProgressBar'
import { UiButton } from '../Button'
import { CssClass } from '../../helpers/css-classes'
import { DatepickerView, DatepickerViewName } from './models'
import { defineBem } from '../../helpers/bem'
import { useUi } from '../../index'
import { useRounded } from '../../composables'

type Props = {
  modelValue?: Date | null
  firstDayOfWeek?: number
  disableBefore?: Date | null
  disableAfter?: Date | null
  rounded?: boolean
  roundedLg?: boolean
  round?: boolean
  weekdayFormat?: 'short' | 'narrow' | 'long'
  highlightSaturdays?: boolean
  highlightSundays?: boolean
  holidays?: Date[]
  highlightedDates?: Date[]
  loading?: boolean
  sixWeeks?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  firstDayOfWeek: 1,
  disableBefore: null,
  disableAfter: null,
  rounded: false,
  roundedLg: false,
  round: false,
  weekdayFormat: 'narrow',
  highlightSaturdays: false,
  highlightSundays: false,
  holidays: () => [],
  highlightedDates: () => [],
  loading: false,
  sixWeeks: false,
})

type Emits = {
  (e: 'select', date: Date): void
  (e: 'update:model-value', date: Date): void
  (
    e: 'select-month',
    payload: {
      dateSelected: boolean
      month: number
      year: number
      startDate: Date
      endDate: Date
    },
  ): void
}
const emit = defineEmits<Emits>()

const ui = useUi()
const bem = defineBem('ui-datepicker')
const now = new Date()
const today = now.setHours(0, 0, 0, 0)
const activeMonth = ref((props.modelValue ?? now).getMonth())
const activeYear = ref((props.modelValue ?? now).getFullYear())
const activeView = ref<DatepickerView>(DatepickerViewName.DAYS)

const { rounded, roundedLg, round } = toRefs(props)

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const firstDayOfActiveMonth = computed(
  (): Date => new Date(activeYear.value, activeMonth.value, 1),
)
const formattedActiveMonthYear = computed((): string => {
  return Intl.DateTimeFormat(ui.locale, {
    year: 'numeric',
    month: 'long',
  }).format(firstDayOfActiveMonth.value)
})
const firstDayOfActiveMonthWeekColumnIndex = computed(
  (): number => (7 + firstDayOfActiveMonth.value.getDay() - props.firstDayOfWeek) % 7,
)
const firstDayOfCalendar = computed(
  (): Date => addDays(firstDayOfActiveMonth.value, -firstDayOfActiveMonthWeekColumnIndex.value),
)
const daysInMonth = computed((): number =>
  new Date(activeYear.value, activeMonth.value + 1, 0).getDate(),
)
const numberOfWeeks = computed((): number =>
  props.sixWeeks
    ? 6
    : Math.ceil((daysInMonth.value + firstDayOfActiveMonthWeekColumnIndex.value) / 7),
)
const dates = computed((): Date[][] => {
  const weeks: Date[][] = []
  for (let w = 0; w < numberOfWeeks.value; w++) {
    const dates: Date[] = []
    for (let d = 0; d < 7; d++) {
      dates.push(addDays(firstDayOfCalendar.value, w * 7 + d))
    }
    weeks.push(dates)
  }
  return weeks
})
const formatMonth = (monthIndex: number): string => {
  return Intl.DateTimeFormat(ui.locale, {
    month: 'long',
  }).format(new Date(activeYear.value, monthIndex, 1))
}
const formatDate = (date: Date): string => {
  return Intl.DateTimeFormat(ui.locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}
const goToPreviousMonth = (): void => {
  if (activeMonth.value > 0) {
    activeMonth.value--
  } else {
    activeYear.value--
    activeMonth.value = 11
  }
  selectMonth()
}
const goToNextMonth = (): void => {
  if (activeMonth.value < 11) {
    activeMonth.value++
  } else {
    activeYear.value++
    activeMonth.value = 0
  }
  selectMonth()
}
const goToPreviousYear = (): void => {
  activeYear.value--
}
const goToNextYear = (): void => {
  activeYear.value++
}
const goToPreviousPeriod = (): void => {
  if (activeView.value === DatepickerViewName.DAYS) {
    goToPreviousMonth()
  } else {
    goToPreviousYear()
  }
}
const goToNextPeriod = (): void => {
  if (activeView.value === DatepickerViewName.DAYS) {
    goToNextMonth()
  } else {
    goToNextYear()
  }
}
const showMonthsView = (): void => {
  activeView.value = DatepickerViewName.MONTHS
}
const showDaysView = (monthIndex: number): void => {
  activeMonth.value = monthIndex
  activeView.value = DatepickerViewName.DAYS
  selectMonth()
}
const formattedWeekday = (i: number): string => {
  const date = addDays(firstDayOfCalendar.value, i)
  return Intl.DateTimeFormat(ui.locale, {
    weekday: props.weekdayFormat,
  }).format(date)
}
const dateClasses = (date: Date): CssClass[] => {
  const fixDate = (d: Date) => d.setHours(0, 0, 0, 0)
  const fixedDate = fixDate(date)
  const isInOtherMonth = date.getMonth() !== activeMonth.value
  const isDisabled =
    ((props.disableBefore && fixedDate < props.disableBefore.setHours(0, 0, 0, 0)) ||
      (props.disableAfter && fixedDate > props.disableAfter.setHours(0, 0, 0, 0))) ??
    false
  const isSelected = !!props.modelValue && fixDate(props.modelValue) === fixedDate
  const isHoliday = props.holidays.map((d) => fixDate(d)).includes(fixedDate)
  const isHighlighted = props.highlightedDates.map((d) => fixDate(d)).includes(fixedDate)
  return [
    ...bem({
      e: 'days-view-date',
      m: {
        today: today === fixedDate,
        selected: isSelected,
        'other-month': isInOtherMonth,
        disabled: isDisabled,
        saturday: props.highlightSaturdays && date.getDay() === 6,
        sunday: props.highlightSundays && date.getDay() === 0,
        holiday: isHoliday,
        highlighted: isHighlighted,
      },
    }),
    useRounded(rounded, roundedLg, round).value,
  ]
}
const selectDate = (date: Date): void => {
  emit('update:model-value', date)
  emit('select', date)
  const newMonth = date.getMonth()
  if (newMonth !== activeMonth.value) {
    nextTick(() => {
      const newYear = date.getFullYear()
      activeMonth.value = newMonth
      activeYear.value = newYear
      selectMonth(true)
    })
  }
}

const selectMonth = (dateSelected = false) => {
  emit('select-month', {
    dateSelected,
    month: activeMonth.value,
    year: activeYear.value,
    startDate: new Date(firstDayOfCalendar.value),
    endDate: addDays(firstDayOfCalendar.value, numberOfWeeks.value * 7 - 1),
  })
}

onMounted(() => {
  selectMonth()
})
</script>

<style lang="scss">
@import './Datepicker';
</style>
