<template>
  <div
    :class="bem({ m: { disabled: disabled } })"
    v-bind="ui.testElName('checkbox')"
  >
    <input
      :id="`check_${id}`"
      ref="checkboxRef"
      :key="id"
      v-model="selectedValue"
      :class="bem({ e: 'input' })"
      type="checkbox"
      :disabled="disabled"
      v-bind="ui.testElName('checkbox-input')"
    />
    <label
      :class="bem({ e: 'label' })"
      :for="`check_${id}`"
    >
      <span :class="checkmarkClasses">
        <UiIcon
          v-if="selectedValue"
          :name="ui.icons.values.check"
        />
      </span>
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { UiIcon } from '../Icon'
import { CssClass } from '../../helpers/css-classes'
import {
  ThemeProps,
  BorderedProps,
  RoundedProps,
  ValidationProps,
  defaultThemeProps,
  defaultRoundedProps,
  defaultBorderedProps,
  defaultValidationProps,
} from '../../composables'
import { computed } from 'vue'
import { defineBem, useUi } from '../../index'

const props = withDefaults(
  defineProps<
    {
      modelValue: boolean
      id: number | string
      label?: string | null
      color?: string
      disabled?: boolean
    } & ThemeProps &
      BorderedProps &
      RoundedProps &
      ValidationProps
  >(),
  {
    label: null,
    color: 'primary',
    disabled: false,
    ...defaultThemeProps,
    ...defaultBorderedProps,
    ...defaultRoundedProps,
    ...defaultValidationProps,
  },
)

const emit = defineEmits<{
  'update:modelValue': [val: boolean]
  change: [val: boolean]
}>()

const bem = defineBem('ui-checkbox')
const ui = useUi()

const update = (val: boolean) => {
  emit('update:modelValue', val)
  emit('change', val)
}
const selectedValue = computed({
  get: () => props.modelValue,
  set: (val: boolean) => {
    update(val)
  },
})
const checkmarkClasses = computed((): CssClass[] => {
  const bgClassName = props.modelValue ? [`has-bg-color-${props.color}`] : []
  return [
    ...bem({
      e: 'checkmark',
      m: {
        rounded: props.rounded,
        unchecked: !props.modelValue,
        bordered: props.bordered,
        dark: props.dark,
        light: props.light,
        error: props.error,
      },
    }),
    ...bgClassName,
  ]
})
</script>

<style lang="scss">
@import './Checkbox';
</style>
