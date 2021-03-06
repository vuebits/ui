<template>
  <span :class="$bem({})">
    <span
      :class="fieldClasses"
      :style="styles"
    >
      <slot name="before" />
      <div
        v-if="leftIcon"
        class="is-hoverable"
        :class="$bem({e: 'icon', m: {clickable: leftIconClickable}})"
        @click="onLeftIconClick"
      >
        <VIcon
          :name="leftIcon"
          :color="leftIconColor"
        />
      </div>
      <span :class="$bem({e: 'content', m: {disabled: disabled}})">
        <span
          v-if="label && (modelValue || placeholder)"
          :class="$bem({e: 'label'})"
        >
          {{ label }}
        </span>
        <textarea
          :rows="rows"
          :required="required"
          :value="modelValue"
          :placeholder="placeholder || label"
          :maxlength="maxlength"
          :class="$bem({e: 'textarea', m: { 'with-label': label && (modelValue || placeholder) }})"
          data-test="field"
          :disabled="disabled"
          @input="input"
          @focus="onFocus"
          @blur="onBlur"
          @keyup.enter="enter"
        />
      </span>
      <div
        v-if="rightIcon"
        class="is-hoverable"
        :class="$bem({e: 'icon', m: {clickable: rightIconClickable}})"
        @click="onRightIconClick"
      >
        <VIcon
          :name="rightIcon"
          :color="rightIconColor"
        />
      </div>
      <slot name="after" />
    </span>
    <span
      v-if="!noHint"
      :class="hintClasses"
      :data-test="error ? 'field-error' : 'field-hint'"
    >
      {{ hintText }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import {
  CssClass,
  elevationClass
} from '@/helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  validationProps,
  useBordered,
  useTheme,
  useRounded,
  useValidation
} from '@/composition-functions';
import { VIcon } from '@/components/Icon';

export default defineComponent({
  name: 'VTextarea',
  components: {
    VIcon
  },
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number | null>,
      default: null
    },
    placeholder: {
      type: String as PropType<string | null>,
      default: null
    },
    type: {
      type: String as PropType<string>,
      default: 'text'
    },
    required: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    maxlength: {
      type: Number as PropType<number | string | null>,
      default: null
    },
    rows: {
      type: Number as PropType<number | string | null>,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      default: null
    },
    leftIcon: {
      type: String as PropType<string | null>,
      default: null
    },
    rightIcon: {
      type: String as PropType<string | null>,
      default: null
    },
    leftIconClickable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    rightIconClickable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    leftIconColor: {
      type: String as PropType<string | null>,
      default: null
    },
    rightIconColor: {
      type: String as PropType<string | null>,
      default: null
    },
    width: {
      type: Number as PropType<number | null>,
      default: null
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...validationProps
  },
  emits: [
    'update:modelValue',
    'enter',
    'focus',
    'blur',
    'input',
    'click-left-icon',
    'click-right-icon'
  ],
  setup (props) {
    const {
      dark,
      light,
      bordered,
      rounded,
      roundedLg,
      round,
      error,
      hint
    } = toRefs(props);

    const {
      validationBorderClass,
      hintText,
      validationHintClass
    } = useValidation(error, hint);

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round),
      validationBorderClass,
      hintText,
      validationHintClass
    };
  },
  data () {
    return {
      isFocused: false as boolean
    };
  },
  computed: {
    widthStyle (): {[key in string]: any} {
      return this.width ? { width: `${this.width}px` } : {};
    },
    styles (): {[key in string]: any} {
      return {
        ...this.widthStyle
      };
    },
    fieldClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'field',
          m: {
            light: this.light,
            dark: this.dark,
            disabled: this.disabled
          }
        }),
        {
          [elevationClass]: this.isFocused
        },
        this.borderedClass,
        this.validationBorderClass,
        this.roundedClass
      ];
    },
    hintClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'hint',
          m: {
            error: !!this.error
          }
        })
      ];
    }
  },
  methods: {
    setFocusStatus (isFocused: boolean): void {
      this.isFocused = isFocused;
    },
    onFocus (): void {
      this.setFocusStatus(true);
      this.$emit('focus');
    },
    onBlur (): void {
      this.setFocusStatus(false);
      this.$emit('blur');
    },
    input (e: any): void {
      const value = e.target.value;
      this.$emit('update:modelValue', value);
      this.$emit('input', value);
    },
    onLeftIconClick (): void {
      if (this.leftIconClickable) this.$emit('click-left-icon');
    },
    onRightIconClick (): void {
      if (this.rightIconClickable) this.$emit('click-right-icon');
    },
    enter (e: any): void {
      const value = e.target.value;
      this.$emit('enter', value);
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
