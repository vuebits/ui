<template>
  <UiInput
    :model-value="modelValue"
    placeholder="Type some string..."
    :label="label"
    round
    bordered
    light
    no-hint
    type="string"
    class="knob-string"
    @input="updateValue"
  />
</template>

<script setup lang="ts">
import { UiInput } from '@vuebits/ui'

type Props = {
  modelValue: string
  label: string
}

withDefaults(defineProps<Props>(), {})

type Emits = {
  (e: 'update:model-value', value: string): void
}

const emit = defineEmits<Emits>()

const updateValue = (value: string): void => {
  emit('update:model-value', value)
}
</script>

<style lang="scss">
.knob-string {
  margin-top: 2 * $sp;
}
</style>
