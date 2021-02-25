<template>
  <VSelect
    :model-value="modelValue"
    :items="listItems"
    :label="label"
    bordered
    rounded
    class="knob-list-item"
    @change="updateModelValue"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VSelect } from '@/components';

export default defineComponent({
  name: 'KnobListItem',
  components: {
    VSelect
  },
  props: {
    modelValue: {
      type: [Number, String] as PropType<string | number | null>,
      default: null
    },
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    label: {
      type: String as PropType<string>,
      required: true
    }
  },
  emits: [
    'update:modelValue',
    'select',
    'change'
  ],
  computed: {
    listItems (): any[] {
      return this.items.map(item => {
        return typeof item === 'object'
          ? item
          : {
            key: item,
            text: item.toString()
          };
      });
    }
  },
  methods: {
    updateModelValue (item: any): void {
      this.$emit('update:modelValue', item.key);
      this.$emit('select', item);
      if (item.key !== this.modelValue) {
        this.$emit('change', item);
      }
    }
  }
});
</script>

<style lang="scss">
.knob-list-item {
  margin-top: 10px;
  background-color: #fff;
}
</style>
