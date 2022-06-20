<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('datepicker')"
  >
    <div
      :class="$bem({e: 'header'})"
    >
      <div
        :class="$bem({e: 'controls'})"
        v-bind="$ui.testElName('datepicker-controls')"
      >
        <VIconButton
          icon="chevron-left"
          hoverable
          :rounded="rounded"
          :rounded-lg="roundedLg"
          :round="round"
          :class="$bem({e: 'control-button'})"
          v-bind="$ui.testElName('datepicker-prev')"
          @click="goToPreviousPeriod"
        />
        <div
          :class="$bem({e: 'display'})"
          v-bind="$ui.testElName('datepicker-display')"
        >
          <VButton
            v-if="activeView === 'days'"
            hoverable
            :rounded="rounded"
            :rounded-lg="roundedLg"
            :round="round"
            block
            @click="showMonthsView"
          >
            {{ formattedActiveMonthYear }}
          </VButton>
          <template v-else>
            {{ activeYear }}
          </template>
        </div>
        <VIconButton
          icon="chevron-right"
          hoverable
          :rounded="rounded"
          :rounded-lg="roundedLg"
          :round="round"
          :class="$bem({e: 'control-button'})"
          v-bind="$ui.testElName('datepicker-next')"
          @click="goToNextPeriod"
        />
      </div>
      <div
        v-if="activeView === 'days'"
        :class="$bem({e: 'days-view'})"
      >
        <div :class="$bem({e: 'weekdays'})">
          <div
            v-for="(d, i) in 7"
            :key="i"
            :class="$bem({e: 'weekday'})"
          >
            {{ formattedWeekday(i) }}
          </div>
        </div>
        <div :class="$bem({e: 'calendar'})">
          <div
            v-for="(week, i) in dates"
            :key="i"
            :class="$bem({e: 'calendar-row'})"
          >
            <div
              v-for="(day, j) in week"
              :key="j"
              :class="dateClasses(day)"
              @click="selectDate(day)"
            >
              {{ day.getDate() }}
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        :class="$bem({e: 'months-view'})"
      >
        <VButton
          v-for="(m,i) in 12"
          :key="i"
          hoverable
          :rounded="rounded"
          :rounded-lg="roundedLg"
          :round="round"
          :class="$bem({e: 'month'})"
          @click="showDaysView(i)"
        >
          {{ monthFormat(i) }}
        </VButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIconButton } from '../IconButton';
import { VButton } from '../Button';
import { CssClass } from '../../helpers/css-classes';
import { roundedProps } from '../../composables';

type DatepickerView = 'days' | 'months';

export default defineComponent({
  name: 'VDatepicker',
  components: {
    VIconButton,
    VButton,
  },
  props: {
    modelValue: {
      type: Date as PropType<Date | null>,
      default: null,
    },
    firstDayOfWeek: {
      type: Number as PropType<number>,
      default: 1,
    },
    disableBefore: {
      type: Date as PropType<Date | null>,
      default: null,
    },
    disableAfter: {
      type: Date as PropType<Date | null>,
      default: null,
    },
    ...roundedProps,
  },
  emits: [
    'update:modelValue',
    'select',
  ],
  data () {
    return {
      today: new Date().setHours(0, 0, 0, 0),
      activeMonth: (this.modelValue || new Date()).getMonth(),
      activeYear: (this.modelValue || new Date()).getFullYear(),
      activeView: 'days' as DatepickerView,
    };
  },
  computed: {
    firstDayOfActiveMonth (): Date {
      return new Date(this.activeYear, this.activeMonth, 1);
    },
    formattedActiveMonthYear (): string {
      return Intl.DateTimeFormat(this.$ui.locale, {
        year: 'numeric',
        month: 'long',
      }).format(this.firstDayOfActiveMonth);
    },
    firstDayOfCalendar (): Date {
      return this.addDays(this.firstDayOfActiveMonth, -this.firstDayOfActiveMonth.getDay() + this.firstDayOfWeek);
    },
    numberOfWeeks (): number {
      const daysInMonth = new Date(this.activeYear, this.activeMonth, 0).getDate();
      return Math.ceil((daysInMonth + this.firstDayOfActiveMonth.getDay() - this.firstDayOfWeek) / 7);
    },
    dates (): Date[][] {
      const weeks: Date[][] = [];
      for (let w = 0; w < this.numberOfWeeks; w++) {
        const dates: Date[] = [];
        for (let d = 0; d < 7; d++) {
          dates.push(this.addDays(this.firstDayOfCalendar, w * 7 + d));
        }
        weeks.push(dates);
      }
      return weeks;
    },
  },
  methods: {
    monthFormat (monthIndex: number): string {
      return Intl.DateTimeFormat(this.$ui.locale, {
        month: 'long',
      }).format(new Date(this.activeYear, monthIndex, 1));
    },
    addDays (date: Date, days: number): Date {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    goToPreviousMonth (): void {
      if (this.activeMonth > 0) {
        this.activeMonth--;
      } else {
        this.activeYear--;
        this.activeMonth = 11;
      }
    },
    goToNextMonth (): void {
      if (this.activeMonth < 11) {
        this.activeMonth++;
      } else {
        this.activeYear++;
        this.activeMonth = 0;
      }
    },
    goToPreviousYear (): void {
      this.activeYear--;
    },
    goToNextYear (): void {
      this.activeYear++;
    },
    goToPreviousPeriod (): void {
      if (this.activeView === 'days') {
        this.goToPreviousMonth();
      } else {
        this.goToPreviousYear();
      }
    },
    goToNextPeriod (): void {
      if (this.activeView === 'days') {
        this.goToNextMonth();
      } else {
        this.goToNextYear();
      }
    },
    showMonthsView (): void {
      this.activeView = 'months';
    },
    showDaysView (monthIndex: number): void {
      this.activeMonth = monthIndex;
      this.activeView = 'days';
    },
    formattedWeekday (i: number): string {
      const date = this.addDays(this.firstDayOfCalendar, i);
      return Intl.DateTimeFormat(this.$ui.locale, {
        weekday: 'narrow',
      }).format(date);
    },
    dateClasses (date: Date): CssClass[] {
      const fixedDate = date.setHours(0, 0, 0, 0);
      const isInActiveMonth = date.getMonth() === this.activeMonth;
      const isNotDisabled = (!this.disableBefore || fixedDate >= this.disableBefore.setHours(0, 0, 0, 0)) && (!this.disableAfter || fixedDate <= this.disableAfter.setHours(0, 0, 0, 0));
      const isSelectable = isInActiveMonth && isNotDisabled;
      const isSelected = this.modelValue?.setHours(0, 0, 0, 0) === fixedDate;
      return this.$bem({
        e: 'calendar-date',
        m: {
          today: this.today === fixedDate,
          selected: isSelected,
          selectable: isSelectable && !isSelected,
          disabled: !isSelectable,
        },
      });
    },
    selectDate (date: Date): void {
      this.$emit('update:modelValue', date);
      this.$emit('select', date);
    },
  },

});
</script>

<style lang="scss">
@import './styles';
</style>
