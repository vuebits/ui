<template>
  <VInput
    :model-value="modelValue"
    placeholder="Type some string..."
    :label="label"
    round
    bordered
    light
    no-hint
    type="string"
    class="knob-string"
    @input="updatevalue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VInput } from '@vuebits/ui';

export default defineComponent({
  name: 'KnobString',
  components: {
    VInput,
  },
  props: {
    modelValue: {
      type: String as PropType<string>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    updatevalue (value: string): void {
      this.$emit('update:modelValue', value);
    },
  },
});
</script>

<style lang="scss">
.knob-string {
  margin-top: 2 * $sp;
}
</style>
