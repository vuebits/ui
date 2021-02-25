<template>
  <span
    :class="$bem({})"
    @click="toggleMenu"
  >
    <DmIcon
      name="bars"
      :class="$bem({e: 'icon'})"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DmIcon } from '@/components/DmIcon';

export default defineComponent({
  name: 'VToolbarHamburger',
  components: {
    DmIcon
  },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    toggleMenu (): void {
      this.$emit('update:modelValue', !this.modelValue);
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
