<template>
  <UiInput
    :model-value="modelValue"
    placeholder="Type some number..."
    :label="label"
    round
    bordered
    light
    no-hint
    :min="min"
    :max="max"
    :step="step"
    type="number"
    class="knob-number"
    @input="updateValue"
  />
</template>

<script setup lang="ts">
import { UiInput } from '@vuebits/ui'

type Props = {
  modelValue: number
  label: string
  min?: number
  max?: number
  step?: number
}

withDefaults(defineProps<Props>(), {
  min: 0,
  max: undefined,
  step: 1,
})

type Emits = {
  (e: 'update:model-value', value: number): void
}

const emit = defineEmits<Emits>()

const updateValue = (value: string | number): void => {
  emit('update:model-value', Number(value))
}
</script>

<style lang="scss">
.knob-number {
  margin-top: 2 * $sp;
}
</style>
