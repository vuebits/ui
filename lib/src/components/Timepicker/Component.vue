<template>
  <div
    :class="bem({})"
    v-bind="$ui.testElName('timepicker')"
  >
    <UiInput
      :model-value="chunkTimeItemString(tempTimeObject.hour)"
      :class="bem({ e: 'time-chunk' })"
      placeholder="hh"
      type="number"
      :min="minHour"
      :max="maxHour"
      :step="hoursStep"
      v-bind="{
        ...$attrs,
        ...$ui.testElName('timepicker-hour'),
      }"
      @update:model-value="setTempHour"
    />
    <span :class="bem({ e: 'time-separator' })"> : </span>
    <UiInput
      :model-value="chunkTimeItemString(tempTimeObject.minute)"
      :class="bem({ e: 'time-chunk' })"
      placeholder="mm"
      type="number"
      :min="minMinute"
      :max="maxMinute"
      :step="minutesStep"
      v-bind="{
        ...$attrs,
        ...$ui.testElName('timepicker-minute'),
      }"
      @update:model-value="setTempMinute"
    />
    <template v-if="showSeconds">
      <span :class="bem({ e: 'time-separator' })"> : </span>
      <UiInput
        :model-value="chunkTimeItemString(tempTimeObject.second)"
        :class="bem({ e: 'time-chunk' })"
        placeholder="ss"
        type="number"
        :min="minSecond"
        :max="maxSecond"
        :step="secondsStep"
        v-bind="{
          ...$attrs,
          ...$ui.testElName('timepicker-second'),
        }"
        @update:model-value="setTempSecond"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref, toRefs, reactive } from 'vue'
import { defineBem } from '../../helpers/bem'
import { UiInput } from '../Input'

interface TimeObject {
  hour: number
  minute: number
  second: number
}

interface Props {
  modelValue?: string | null
  disableBefore?: string | null
  disableAfter?: string | null
  showSeconds?: boolean
  hoursStep?: number
  minutesStep?: number
  secondsStep?: number
  delay?: number
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disableBefore: null,
  disableAfter: null,
  showSeconds: false,
  hoursStep: 1,
  minutesStep: 1,
  secondsStep: 1,
  delay: 300,
})

const emit = defineEmits(['update:modelValue', 'change-chunk'])
const bem = defineBem('UiTimepicker')

const {
  showSeconds,
  hoursStep,
  minutesStep,
  secondsStep,
  modelValue,
  disableAfter,
  disableBefore,
  delay,
} = toRefs(props)

const isTempTimeEmpty = ref(false)
const chunkTimeItemString = (v: number) =>
  isTempTimeEmpty.value ? '' : `00${v ?? 0}`.substr(-2)

const splittedTime = (time: string | null): TimeObject | null => {
  if (!time) return null
  const splittedTime = time.split(':')
  return {
    hour: Number(splittedTime[0]),
    minute: Number(splittedTime[1]) ?? 0,
    second: Number(splittedTime[2]) ?? 0,
  }
}

const timeObject = computed({
  get(): TimeObject | null {
    return splittedTime(modelValue.value)
  },
  set(obj: TimeObject | null): void {
    if (!obj) {
      emit('update:modelValue', null)
      return
    }
    isTempTimeEmpty.value = false
    const { hour, minute, second } = obj
    const time = [hour, minute, ...(showSeconds.value ? [second] : [])]
      .map((v) => chunkTimeItemString(v))
      .join(':')
    emit('update:modelValue', time)
  },
})

const defaultTimeObject: TimeObject = { hour: 0, minute: 0, second: 0 }
const tempTimeObject = reactive<TimeObject>({ ...defaultTimeObject })

const disableBeforeObject = computed(() => splittedTime(disableBefore.value))
const disableAfterObject = computed(() => splittedTime(disableAfter.value))

const minHour = computed(() => disableBeforeObject.value?.hour ?? 0)
const maxHour = computed(() => disableAfterObject.value?.hour ?? 23)
const isMinHourSelected = computed(
  () => tempTimeObject.hour === disableBeforeObject.value?.hour,
)
const isMaxHourSelected = computed(() => tempTimeObject.hour === disableAfterObject.value?.hour)
const minMinute = computed(() =>
  isMinHourSelected.value ? disableBeforeObject.value?.minute : null ?? 0,
)
const maxMinute = computed(() =>
  isMaxHourSelected.value ? disableAfterObject.value?.minute : null ?? 59,
)
const isMinMinuteSelected = computed(
  () => isMinHourSelected.value && tempTimeObject?.minute === disableBeforeObject.value?.minute,
)
const isMaxMinuteSelected = computed(
  () => isMaxHourSelected.value && tempTimeObject?.minute === disableAfterObject.value?.minute,
)
const minSecond = computed(() =>
  isMinMinuteSelected.value ? disableBeforeObject.value?.second : null ?? 0,
)
const maxSecond = computed(() =>
  isMaxMinuteSelected.value ? disableAfterObject.value?.second : null ?? 59,
)

const setTempTime = (t: TimeObject) => {
  tempTimeObject.hour = t.hour
  tempTimeObject.minute = t.minute
  tempTimeObject.second = t.second
}

const fixTime = () => {
  const { hour, minute, second } = tempTimeObject
  if (disableBeforeObject.value) {
    if (hour < minHour.value) {
      setTempTime(disableBeforeObject.value)
    } else if (isMinHourSelected.value) {
      if (minMinute.value !== undefined && minute < minMinute.value) {
        setTempTime(disableBeforeObject.value)
      } else if (
        isMinMinuteSelected.value &&
        minSecond.value !== undefined &&
        second < minSecond.value
      ) {
        tempTimeObject.second = disableBeforeObject.value.second
      }
    }
  }
  if (disableAfterObject.value) {
    if (hour > maxHour.value) {
      setTempTime(disableAfterObject.value)
    } else if (isMaxHourSelected.value) {
      if (maxMinute.value !== undefined && minute > maxMinute.value) {
        setTempTime(disableAfterObject.value)
      } else if (
        isMaxMinuteSelected.value &&
        maxSecond.value !== undefined &&
        second > maxSecond.value
      ) {
        tempTimeObject.second = disableAfterObject.value.second
      }
    }
  }
}

const setTime = () => {
  timeObject.value = { ...tempTimeObject }
}

const timeout = ref<any>(null)
const debounceSetTime = () => {
  fixTime()
  clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    setTime()
  }, delay.value)
}

const setTempHour = (value: number) => {
  tempTimeObject.hour = Number(value)
  debounceSetTime()
}
const setTempMinute = (value: number) => {
  tempTimeObject.minute = Number(value)
  debounceSetTime()
}
const setTempSecond = (value: number) => {
  tempTimeObject.second = Number(value)
  debounceSetTime()
}

watch(
  timeObject,
  () => {
    if (timeObject.value) {
      isTempTimeEmpty.value = false
      setTempTime(timeObject.value)
    } else {
      isTempTimeEmpty.value = true
      setTempTime(defaultTimeObject)
    }
  },
  { immediate: true },
)
</script>

<style lang="scss">
@import './styles';
</style>
