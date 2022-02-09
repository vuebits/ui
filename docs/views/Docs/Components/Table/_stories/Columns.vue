<template>
  <VTable
    :headers="headers"
    :items="items"
    :columns="columns"
  />
</template>

<script>
import { defineComponent } from 'vue';
import {
  VTable,
} from '@vuebits/ui';

export default defineComponent({
  name: 'TableColumns',
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
          for: 'col3',
          label: 'Col 3',
        },
      ],
      columns: [
        {
          width: '50%',
          style: {
            border: '1px solid red',
          },
        },
        {
        },
        {
          width: 300,
          style: {
            background: 'red',
          },
        },
      ],
    };
  },
  computed: {
    items () {
      return [
        {
          col1: this.columns[0],
          col2: this.columns[1],
          col3: this.columns[2],
        },
      ];
    },
  },
});
</script>
