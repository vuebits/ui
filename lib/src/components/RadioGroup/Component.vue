<template>
  <div :class="bem({ m: { inline: inline } })">
    <UiRadio
      v-for="item of items"
      :key="item.name"
      v-model="selectedValue"
      :name="item.name"
      :color="color"
      :bordered="bordered"
      :error="error"
      :group-name="name"
      :light="light"
      :dark="dark"
      :label="item.label"
      :disabled="item.disabled"
      :class="bem({ e: 'item', m: { inline: inline } })"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { UiRadio } from '../Radio'
import { defineBem } from '../../helpers/bem'
import { RadioValue } from '../Radio/models'
import { RadioItem } from './models'

type Emits = {
  (e: 'select', name: RadioValue): void
  (e: 'update:model-value', name: RadioValue): void
}
type Props = {
  modelValue?: RadioValue
  name: string | number
  items: RadioItem[]
  color?: string
  bordered?: boolean
  error?: boolean
  light?: boolean
  dark?: boolean
  inline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabled: false,
  color: 'primary',
  inline: false,
  bordered: false,
  error: false,
  light: false,
  dark: false,
})
const emit = defineEmits<Emits>()
const bem = defineBem('ui-radio-group')

const { modelValue, name, items, color, bordered, error, light, dark, inline } = toRefs(props)

const selectedValue = computed({
  get(): RadioValue {
    return modelValue.value
  },
  set(value: RadioValue): void {
    emit('select', value)
    emit('update:model-value', value)
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
