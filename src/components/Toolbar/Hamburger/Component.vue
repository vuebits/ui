<template>
  <span
    :class="$bem({})"
    @click="toggleMenu"
  >
    <VIcon
      name="bars"
      :class="$bem({e: 'icon'})"
      is-internal
    />
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon } from '@/components/Icon';

export default defineComponent({
  name: 'VToolbarHamburger',
  components: {
    VIcon
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
