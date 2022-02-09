<template>
  <div>
    <VAutocomplete
      v-model="selected"
      :items="items"
      bordered
      multiple
      placeholder="Add some items"
      label="Selected items"
    />
  </div>
</template>

<script>
import {
  VAutocomplete,
} from '@vuebits/ui';

export default {
  name: 'AutocompleteMultiple',
  components: {
    VAutocomplete,
  },
  data () {
    return {
      selected: [],
      items: [
        {
          key: 1,
          text: 'Item 1',
        },
        {
          key: 2,
          text: 'Item 2',
        },
        {
          key: 3,
          text: 'Item 3',
        },
        {
          key: 4,
          text: 'Item 4',
        },
        {
          key: 5,
          text: 'Item 5',
        },
        {
          key: 6,
          text: 'Item 6',
        },
        {
          key: 7,
          text: 'Item 7',
        },
        {
          key: 8,
          text: 'Item 8',
        },
        {
          key: 9,
          text: 'Item 9',
        },
        {
          key: 10,
          text: 'Item 10',
        },
        {
          key: 11,
          text: 'Item 11',
        },
        {
          key: 12,
          text: 'Item 12',
        },
      ],
    };
  },
};
</script>
