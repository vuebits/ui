<template>
  <VTable
    :headers="headers"
    :items="items"
    padding="sm"
  >
    <template #isHovered="{isRowHovered}">
      {{ isRowHovered ? 'hovered' : 'not-hovered' }}
    </template>
  </VTable>
</template>

<script>
import { defineComponent } from 'vue';
import {
  VTable,
} from '@vuebits/ui';

export default defineComponent({
  name: 'TableHoveredRow',
  components: {
    VTable,
  },
  data () {
    return {
      headers: [
        {
          for: 'col1',
          label: 'Col 1',
        },
        {
          for: 'col2',
          label: 'Col 2',
        },
        {
          for: 'isHovered',
          label: 'Is hovered',
        },
      ],
    };
  },
  computed: {
    items () {
      const indexes = new Array(10).fill(0);
      return indexes.map((i, j) => ({
        col1: `Col 1 - ${j + 1}`,
        col2: `Col 2 - ${j + 1}`,
      }));
    },

  },
});
</script>
