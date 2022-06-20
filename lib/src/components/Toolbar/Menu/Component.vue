<template>
  <div :class="$bem({ m: { persistent: persistent } })">
    <ul
      v-if="expandedOnMobile"
      v-click-outside="clickOutside"
      :class="listClasses"
    >
      <slot />
    </ul>
    <ul
      v-else
      :class="listClasses"
    >
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ClickOutside } from '../../../directives';
import { CssClass } from '../../../helpers/css-classes';

export default defineComponent({
  name: 'VToolbarMenu',
  directives: { ClickOutside },
  props: {
    expandedOnMobile: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    persistent: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['click-outside'],
  computed: {
    listClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'list',
          m: {
            expanded: this.expandedOnMobile,
            persistent: this.persistent,
          },
        }),
      ];
    },
  },
  methods: {
    clickOutside (): void {
      this.$emit('click-outside');
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
