<template>
  <div
    :class="bem({m: {disabled: disabled}})"
    v-bind="$ui.testElName('radio')"
  >
    <input
      :id="`radio_${groupName}-${name}`"
      v-model="selectedValue"
      :checked="isSelected"
      :value="name"
      :name="String(groupName)"
      type="radio"
      :class="bem({e: 'input'})"
      :disabled="disabled"
      v-bind="$ui.testElName('checkbox-input')"
    >
    <label
      :class="bem({e: 'label'})"
      :for="`radio_${groupName}-${name}`"
    >
      <span
        :class="boxClasses"
      >
        <span
          v-if="isSelected"
          :class="boxDotClasses"
        />
      </span>
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { CssClass } from '../../helpers/css-classes';
import { computed, toRefs } from 'vue';
import { createBem } from '../../helpers/bem';
import { RadioValue } from './models';

type Emits = {
    (e: 'select'): void;
    (e: 'update:model-value', name: RadioValue): void;
}
type Props = {
  modelValue?: string | number | null;
  name: string | number;
  groupName: string | number;
  label?: string | null;
  disabled?: boolean;
  color?: string;
  bordered?: boolean;
  error?: boolean;
  light?: boolean;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: null,
  disabled: false,
  color: 'primary',
  bordered: false,
  error: false,
  light: false,
  dark: false,
});
const emit = defineEmits<Emits>();
const bem = createBem('v-radio');

const {
  modelValue,
  name,
  groupName,
  color,
  disabled,
  bordered,
  error,
  light,
  dark,
} = toRefs(props);

const selectedValue = computed({
  get (): RadioValue {
    return modelValue.value;
  },
  set (): void {
    emit('select');
    emit('update:model-value', name.value);
  },
});

const isSelected = computed(() => selectedValue.value === name.value);

const boxClasses = computed<CssClass[]>(() => {
  return [
    ...bem({
      e: 'box',
      m: {
        unchecked: !isSelected.value,
        bordered: bordered.value,
        dark: dark.value,
        light: light.value,
        error: error.value,
      },
    }),
  ];
});

const boxDotClasses = computed<CssClass[]>(() => {
  return [
    ...bem({
      e: 'box-dot',
      m: {
      },
    }),
    `has-bg-color-${color.value}`,
  ];
});
</script>

<style lang="scss">
@import './styles';
</style>
