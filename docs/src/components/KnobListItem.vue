<template>
  <UiSelect
    :model-value="modelValue"
    :items="listItems"
    :label="label"
    light
    no-hint
    round
    bordered
    class="knob-list-item"
    @change="updateValue"
  />
</template>

<script setup lang="ts">
import { UiSelect } from '@vuebits/ui'
import { computed } from 'vue'
import { SelectItem } from '../../../lib/src/components/Select/models'

type Props = {
  modelValue: string | number | null
  label: string
  items: string[]
}

const props = withDefaults(defineProps<Props>(), {})

type Emits = {
  (e: 'select', item: SelectItem): void
  (e: 'change', item: SelectItem): void
  (e: 'update:model-value', key: string | number | null): void
}

const emit = defineEmits<Emits>()

const listItems = computed<SelectItem[]>(() => {
  return props.items.map((item) => {
    return typeof item === 'object'
      ? item
      : {
          key: item,
          text: item.toString(),
        }
  })
})

const updateValue = (item: SelectItem): void => {
  emit('update:model-value', item.key)
  emit('select', item)
  if (item.key !== props.modelValue) {
    emit('change', item)
  }
}
</script>

<style lang="scss">
.knob-list-item {
  margin-top: 2 * $sp;
}
</style>
