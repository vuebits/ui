<template>
  <VCheckbox
    :id="label"
    :model-value="modelValue"
    :label="label"
    rounded
    light
    class="knob-boolean"
    @update:modelValue="updateModelValue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VCheckbox } from '@/components';

export default defineComponent({
  name: 'KnobBoolean',
  components: {
    VCheckbox
  },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    label: {
      type: String as PropType<string>,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    updateModelValue (isChecked: boolean): void {
      this.$emit('update:modelValue', isChecked);
    }
  }
});
</script>

<style lang="scss">
.knob-boolean {
  margin-top: 10px;
}
</style>
