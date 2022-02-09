<template>
  <VInput
    :model-value="modelValue"
    placeholder="Type some number..."
    :label="label"
    round
    bordered
    light
    no-hint
    :min="min"
    type="number"
    class="knob-number"
    @input="updatevalue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VInput } from '@vuebits/ui';

export default defineComponent({
  name: 'KnobNumber',
  components: {
    VInput,
  },
  props: {
    modelValue: {
      type: Number as PropType<number>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
    min: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    updatevalue (value: number): void {
      this.$emit('update:modelValue', Number(value));
    },
  },
});
</script>

<style lang="scss">
.knob-number {
  margin-top: 2 * $sp;
}
</style>
