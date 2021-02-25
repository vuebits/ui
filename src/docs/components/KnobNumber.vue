<template>
  <DmInput
    :model-value="modelValue"
    placeholder="Type some number..."
    :label="label"
    rounded
    bordered
    light
    type="number"
    class="knob-number"
    @update:modelValue="updateModelValue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DmInput } from '@/components';

export default defineComponent({
  name: 'KnobNumber',
  components: {
    DmInput
  },
  props: {
    modelValue: {
      type: Number as PropType<number>,
      required: true
    },
    label: {
      type: String as PropType<string>,
      required: true
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
  margin-top: 10px;
}
</style>
