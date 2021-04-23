<template>
  <div :class="$bem({})">
    <input
      :id="`check_${id}`"
      ref="checkboxRef"
      :key="id"
      v-model="selectedValue"
      :class="$bem({e: 'input'})"
      type="checkbox"
      :disabled="disabled"
    >
    <label
      :class="$bem({e: 'label'})"
      :for="`check_${id}`"
    >
      <span
        :class="checkmarkClasses"
      >
        <VIcon
          v-if="selectedValue"
          name="check"
        />
      </span>
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon } from '@/components/Icon';
import { CssClass } from '@/helpers/css-classes';
import {
  roundedProps,
  borderedProps,
  themeProps
} from '@/composition-functions';

export default defineComponent({
  name: 'VCheckbox',
  components: {
    VIcon
  },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    id: {
      type: [Number, String] as PropType<number | string>,
      required: true
    },
    label: {
      type: String as PropType<string | null>,
      default: null
    },
    color: {
      type: String as PropType<string>,
      default: 'primary'
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    ...roundedProps,
    ...borderedProps,
    ...themeProps
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    selectedValue: {
      get (): boolean {
        return this.modelValue;
      },
      set (val: boolean): void {
        this.update(val);
      }
    },
    checkmarkClasses (): CssClass[] {
      const bgClassName = this.modelValue ? [`has-bg-color-${this.color}`] : [];
      return [
        ...this.$bem({
          e: 'checkmark',
          m: {
            rounded: this.rounded,
            unchecked: !this.modelValue,
            bordered: this.bordered,
            dark: this.dark,
            light: this.light,
            disabled: this.disabled
          }
        }),
        ...bgClassName
      ];
    }
  },
  methods: {
    update (val: boolean): void {
      this.$emit('update:modelValue', val);
      this.$emit('change', val);
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
