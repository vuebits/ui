<template>
  <VToolbarMenuItem
    v-click-outside="clickOutside"
    :active="isExpanded"
    :class="classes"
    :active-color="activeColor"
    :active-text-color="activeTextColor"
    @click="toggleDropdown"
  >
    <slot />
    <template #after>
      <div
        v-show="isExpanded"
        :class="dropdownClasses"
      >
        <slot name="dropdown" />
      </div>
    </template>
  </VToolbarMenuItem>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VToolbarMenuItem } from '../MenuItem';
import { ClickOutside } from '../../../directives';
import { CssClass } from '../../../helpers/css-classes';

export default defineComponent({
  name: 'VToolbarMenuDropdown',
  components: {
    VToolbarMenuItem,
  },
  directives: { ClickOutside },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    position: {
      type: String as PropType<'left' | 'right' | 'fullsize'>,
      default: 'left',
      validator: (val: string) => [
        'left',
        'right',
        'fullsize',
      ].includes(val),
    },
    activeTextColor: {
      type: String as PropType<string | null>,
      default: null,
    },
    activeColor: {
      type: String as PropType<string | null>,
      default: null,
    },
    persistent: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: [
    'open',
    'close',
    'update:modelValue',
    'outside',
  ],
  computed: {
    isExpanded: {
      get (): boolean {
        return this.modelValue;
      },
      set (val: boolean): void {
        this.$emit('update:modelValue', val);
        this.$emit(val ? 'open' : 'close');
      },
    },
    classes (): CssClass[] {
      return this.$bem({
        m: {
          fullsize: this.position === 'fullsize',
          active: this.isExpanded,
        },
      });
    },
    dropdownClasses (): CssClass[] {
      return this.$bem({
        e: 'dropdown',
        m: {
          [this.position]: true,
          persistent: this.persistent,
        },
      });
    },
  },
  methods: {
    toggleDropdown (): void {
      this.isExpanded = !this.isExpanded;
    },
    clickOutside (): void {
      this.$emit('outside');
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
