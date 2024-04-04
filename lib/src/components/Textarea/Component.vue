<template>
  <span
    :class="classes"
    :style="styles"
    v-bind="$ui.testElName('textarea')"
  >
    <slot name="before" />
    <div
      v-if="leftIcon"
      class="is-hoverable"
      :class="[
        ...$bem({
          e: 'icon',
          m: { clickable: leftIconClickable, round: round },
        }),
        roundedClass,
      ]"
      v-bind="$ui.testElName('textarea-icon-left')"
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
      <textarea
        ref="textarea"
        :readonly="readonly"
        :autofocus="autofocus"
        :rows="rows"
        :required="required"
        :value="modelValue || undefined"
        :placeholder="placeholder || label || undefined"
        :maxlength="maxlength ?? undefined"
        :class="
          $bem({
            e: 'textarea',
            m: { 'with-label': !!label && (!!modelValue || !!placeholder) },
          })
        "
        data-test="field"
        :disabled="disabled"
        v-bind="$ui.testElName('textarea-field')"
        @input="input"
        @focus="onFocus"
        @blur="onBlur"
        @keydown.enter="enter"
      />
      <slot name="after-text" />
    </span>
    <div
      v-if="rightIcon"
      class="is-hoverable"
      :class="[
        ...$bem({
          e: 'icon',
          m: { clickable: rightIconClickable, round: round },
        }),
        roundedClass,
      ]"
      v-bind="$ui.testElName('textarea-icon-right')"
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
  name: 'UiTextarea',
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
    maxlength: {
      type: Number as PropType<number | null>,
      default: null,
    },
    rows: {
      type: Number as PropType<number | undefined>,
      default: null,
    },
    label: {
      type: String as PropType<string | null>,
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
    width: {
      type: Number as PropType<number | null>,
      default: null,
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
    'enter',
    'focus',
    'blur',
    'update:modelValue',
    'click-left-icon',
    'click-right-icon',
    'enter-no-shift',
    'enter-shift',
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
            rounded: this.rounded,
            'rounded-lg': this.roundedLg,
            round: this.round,
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
    onBlur(): void {
      this.setFocusStatus(false)
      this.$emit('blur')
    },
    input(e: any): void {
      const value = e.target.value
      this.$emit('update:modelValue', value)
      this.$emit('input', value)
    },
    onLeftIconClick(): void {
      if (this.leftIconClickable) this.$emit('click-left-icon')
    },
    onRightIconClick(): void {
      if (this.rightIconClickable) this.$emit('click-right-icon')
    },
    enter(e: any): void {
      const value = e.target.value
      if (!e.shiftKey) {
        this.$emit('enter-no-shift', e)
      } else {
        this.$emit('enter-shift', e)
      }
      this.$emit('enter', value)
    },
    focus(): void {
      ;(this.$refs.textarea as HTMLInputElement).focus()
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
