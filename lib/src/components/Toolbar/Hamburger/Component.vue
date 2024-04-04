<template>
  <span
    :class="$bem({})"
    @click="toggleMenu"
  >
    <UiIcon
      :name="$ui.icons.values.menu"
      :class="$bem({ e: 'icon' })"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UiIcon } from '../../Icon'

export default defineComponent({
  name: 'UiToolbarHamburger',
  components: {
    UiIcon,
  },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    toggleMenu(): void {
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
