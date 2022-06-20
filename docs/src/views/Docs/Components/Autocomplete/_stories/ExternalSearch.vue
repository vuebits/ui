<template>
  <div>
    <VAutocomplete
      v-model="selected"
      :items="filteredItems"
      bordered
      external
      :items-loading="loading"
      :search-delay="200"
      placeholder="Search"
      label="Selected item"
      @search="search"
    />
  </div>
</template>

<script>
import {
  VAutocomplete,
} from '@vuebits/ui';

export default {
  name: 'AutocompleteExternalSearch',
  components: {
    VAutocomplete,
  },
  data () {
    return {
      selected: null,
      loading: false,
      items: [
        {
          key: 1,
          text: 'John Doe',
        },
        {
          key: 2,
          text: 'Adam Smith',
        },
        {
          key: 3,
          text: 'John Smith',
        },
        {
          key: 4,
          text: 'Adam Doe',
        },
        {
          key: 5,
          text: 'Jane Smith',
        },
      ],
      filteredItems: [],
    };
  },
  methods: {
    search (text) {
      this.loading = true;
      setTimeout(() => {
        this.filteredItems = this.items.filter((i) => !text || i.text?.toLowerCase().includes(text.toLowerCase() || ''));
        this.loading = false;
      }, 500);
    },
  },
};
</script>
