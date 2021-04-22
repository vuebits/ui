<template>
  <VInput
    :model-value="modelValue"
    placeholder="Type some number..."
    :label="label"
    rounded
    bordered
    light
    no-hint
    :min="min"
    type="number"
    class="knob-number"
    @update:modelValue="updateModelValue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VInput } from '@/components';

export default defineComponent({
  name: 'KnobNumber',
  components: {
    VInput
  },
  props: {
    modelValue: {
      type: Number as PropType<number>,
      required: true
    },
    label: {
      type: String as PropType<string>,
      required: true
    },
    min: {
      type: Number as PropType<number>,
      default: 0
    }
  },
  emits: ['update:modelValue'],
  methods: {
    updateModelValue (value: number): void {
      this.$emit('update:modelValue', Number(value));
    }
  }
});
</script>

<style lang="scss">
.knob-number {
  margin-top: 2 * $sp;
}
</style>
