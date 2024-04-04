<template>
  <span
    :class="classes"
    :style="styles"
    v-bind="$ui.testElName('input')"
  >
    <slot name="before" />
    <div
      v-if="leftIcon"
      :class="[
        ...$bem({
          e: 'icon',
          m: { clickable: leftIconClickable, round: round },
        }),
        roundedClass,
      ]"
      v-bind="$ui.testElName('input-icon-left')"
      @click="onLeftIconClick"
    >
      <UiIcon
        :name="leftIcon"
        :color="leftIconColor"
      />
    </div>
    <span
      :class="
        $bem({
          e: 'content',
          m: {
            disabled: disabled,
            [`left-padding`]: !leftIcon,
            [`right-padding`]: !rightIcon,
          },
        })
      "
    >
      <span
        v-if="label && (modelValue || placeholder)"
        :class="$bem({ e: 'label' })"
      >
        {{ label }}
      </span>
      <slot name="before-text" />
      <input
        ref="input"
        :autofocus="autofocus"
        :type="type"
        :min="min ?? undefined"
        :max="max ?? undefined"
        :maxlength="maxlength ?? undefined"
        :required="required"
        :step="step"
        :value="modelValue || undefined"
        :readonly="readonly"
        :placeholder="placeholder || label || undefined"
        :class="
          $bem({
            e: 'input',
            m: { 'with-label': !!label && (!!modelValue || !!placeholder) },
          })
        "
        :disabled="disabled"
        data-test="field"
        v-bind="$ui.testElName('input-field')"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keydown.enter="enter"
        @click="$emit('click')"
        @mouseenter="$emit('mouseenter')"
        @mouseleave="$emit('mouseleave')"
      />
      <slot name="after-text" />
    </span>
    <div
      v-if="rightIcon"
      :class="[
        ...$bem({
          e: 'icon',
          m: { clickable: rightIconClickable, round: round },
        }),
        roundedClass,
      ]"
      v-bind="$ui.testElName('input-icon-right')"
      @click="onRightIconClick"
    >
      <UiIcon
        :name="rightIcon"
        :color="rightIconColor"
      />
    </div>
    <slot name="after" />
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { CssClass, elevationClass } from '../../helpers/css-classes'
import {
  borderedProps,
  themeProps,
  roundedProps,
  validationProps,
  depressedProps,
  useBordered,
  useTheme,
  useRounded,
  useValidation,
  useDepressed,
  sizeProps,
} from '../../composables'
import { UiIcon } from '../Icon'

export default defineComponent({
  name: 'UiInput',
  components: {
    UiIcon,
  },
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number | null>,
      default: null,
    },
    placeholder: {
      type: String as PropType<string | null>,
      default: null,
    },
    type: {
      type: String as PropType<string>,
      default: 'text',
    },
    required: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    min: {
      type: Number as PropType<number | string | null>,
      default: null,
    },
    max: {
      type: Number as PropType<number | string | null>,
      default: null,
    },
    maxlength: {
      type: Number as PropType<number | string | null>,
      default: null,
    },
    step: {
      type: Number as PropType<number>,
      default: 1,
    },
    label: {
      type: String as PropType<string | null>,
      default: null,
    },
    width: {
      type: Number as PropType<number | null>,
      default: null,
    },
    leftIcon: {
      type: String as PropType<string | null>,
      default: null,
    },
    rightIcon: {
      type: String as PropType<string | null>,
      default: null,
    },
    leftIconClickable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    rightIconClickable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    leftIconColor: {
      type: String as PropType<string | null>,
      default: null,
    },
    rightIconColor: {
      type: String as PropType<string | null>,
      default: null,
    },
    rememberCaretPosition: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    autofocus: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...validationProps,
    ...depressedProps,
    ...sizeProps,
  },
  emits: [
    'update:modelValue',
    'enter',
    'focus',
    'blur',
    'click-left-icon',
    'click-right-icon',
    'click',
    'mouseenter',
    'mouseleave',
    'input',
  ],
  setup(props) {
    const { dark, light, bordered, rounded, roundedLg, round, error, depressed } = toRefs(props)

    const { validationBorderClass } = useValidation(error)

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round),
      depressedClass: useDepressed(depressed),
      validationBorderClass,
    }
  },
  data() {
    return {
      isFocused: false as boolean,
    }
  },
  computed: {
    widthStyle(): { [key in string]: any } {
      return this.width ? { width: `${this.width}px` } : {}
    },
    styles(): { [key in string]: any } {
      return {
        ...this.widthStyle,
      }
    },
    classes(): CssClass[] {
      return [
        ...this.$bem({
          m: {
            [this.size]: true,
            light: this.light,
            dark: this.dark,
            disabled: this.disabled,
            round: this.round,
            rounded: this.rounded,
            'rounded-lg': this.roundedLg,
          },
        }),
        {
          [elevationClass]: this.isFocused,
        },
        this.borderedClass,
        this.validationBorderClass,
        this.roundedClass,
        this.depressedClass,
      ]
    },
  },
  methods: {
    setFocusStatus(isFocused: boolean): void {
      this.isFocused = isFocused
    },
    onFocus(): void {
      this.setFocusStatus(true)
      this.$emit('focus')
    },
    onBlur(e: any): void {
      this.setFocusStatus(false)
      this.$emit('blur', e)
    },
    onInput(e: any): void {
      const value = e.target.value
      this.$emit('update:modelValue', value)
      this.$emit('input', value)
    },
    enter(e: any): void {
      const value = e.target.value
      this.$emit('enter', value)
    },
    onLeftIconClick(): void {
      if (this.leftIconClickable) this.$emit('click-left-icon')
    },
    onRightIconClick(): void {
      if (this.rightIconClickable) this.$emit('click-right-icon')
    },
    focus(): void {
      ;(this.$refs.input as HTMLInputElement).focus()
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
