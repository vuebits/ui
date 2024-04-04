<template>
  <UiCheckbox
    :id="label"
    :model-value="modelValue"
    :label="label"
    bordered
    rounded
    light
    class="knob-boolean"
    @change="updateValue"
  />
</template>

<script setup lang="ts">
import { UiCheckbox } from '@vuebits/ui'

type Props = {
  modelValue: boolean
  label: string
}

withDefaults(defineProps<Props>(), {})

type Emits = {
  (e: 'update:model-value', isChecked: boolean): void
}

const emit = defineEmits<Emits>()

const updateValue = (isChecked: boolean): void => {
  emit('update:model-value', isChecked)
}
</script>

<style lang="scss">
.knob-boolean {
  margin-top: 2 * $sp;
}
</style>
