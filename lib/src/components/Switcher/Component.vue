<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('switcher')"
  >
    <p
      v-if="offLabel"
      :class="$bem({e: 'label', m: 'off'})"
    >
      {{ offLabel }}
    </p>
    <div
      :class="containerClasses"
      v-bind="$ui.testElName('switcher-slider')"
      @click="checkValue"
    >
      <div
        :class="sliderClasses"
      />
    </div>
    <p
      v-if="onLabel"
      :class="$bem({e: 'label', m: 'on'})"
    >
      {{ onLabel }}
    </p>
  </div>
</template>

<script lang="ts">
import {
  gradientClass,
  bgColorClass,
  CssClass,
} from '../../helpers/css-classes';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VSwitcher',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    offLabel: {
      type: String,
      default: '',
    },
    onLabel: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: null,
    },
    gradient: {
      type: String,
      default: null,
    },
    inverseColors: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'update:modelValue',
    'change',
  ],
  data () {
    return {
      isChecked: false,
    };
  },
  computed: {
    colorClasses (): any[] {
      const colorClasses = [];
      if (this.gradient) colorClasses.push(gradientClass(this.gradient));
      if (this.color) colorClasses.push(bgColorClass(this.color));
      return colorClasses;
    },
    sliderClasses (): CssClass[] {
      const colorClasses = this.inverseColors ? [bgColorClass('white')] : this.colorClasses;
      return [
        ...this.$bem({
          e: 'slider',
          m: {
            checked: this.isChecked,
            'inverse-colors': this.inverseColors,
          },
        }),
        ...colorClasses,
      ];
    },
    containerClasses (): CssClass[] {
      const colorClasses = this.inverseColors ? this.colorClasses : [bgColorClass('white')];
      return [
        ...this.$bem({
          e: 'container',
          m: {
            checked: this.isChecked,
            disabled: this.disabled,
          },
        }),
        ...colorClasses,
      ];
    },
  },
  watch: {
    value () {
      this.isChecked = this.modelValue;
    },
  },
  created () {
    this.isChecked = this.modelValue;
  },
  methods: {
    checkValue () {
      if (this.disabled) return;

      if (this.isChecked) {
        this.isChecked = false;
      } else {
        this.isChecked = true;
      }
      this.$emit('change');
      this.$emit('update:modelValue', this.isChecked);
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
