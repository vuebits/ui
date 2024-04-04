<template>
  <component
    :is="rootTag"
    :class="classes"
    v-bind="$ui.testElName('simple-grid')"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { CssClass } from '../../helpers/css-classes'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'UiSimpleGrid',
  props: {
    elementsXs: {
      type: [Number, String] as PropType<string | number | null>,
      default: null,
    },
    elementsSm: {
      type: [Number, String] as PropType<string | number | null>,
      default: null,
    },
    elementsMd: {
      type: [Number, String] as PropType<string | number | null>,
      default: null,
    },
    elementsLg: {
      type: [Number, String] as PropType<string | number | null>,
      default: null,
    },
    elementsXl: {
      type: [Number, String] as PropType<string | number | null>,
      default: null,
    },
    list: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    spacingsSize: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'no'>,
      default: 'no',
      validator: (val: string) => {
        return ['sm', 'md', 'lg', 'no'].includes(val)
      },
    },
  },
  computed: {
    classes(): CssClass[] {
      const mods: string[] = [`spacings-${this.spacingsSize}`]
      if (this.elementsXs) mods.push(`elements-xs-${this.elementsXs}`)
      if (this.elementsSm) mods.push(`elements-sm-${this.elementsSm}`)
      if (this.elementsMd) mods.push(`elements-md-${this.elementsMd}`)
      if (this.elementsLg) mods.push(`elements-lg-${this.elementsLg}`)
      if (this.elementsXl) mods.push(`elements-xl-${this.elementsXl}`)
      return this.$bem({
        m: mods,
      })
    },
    rootTag(): string {
      return this.list ? 'ul' : 'div'
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
