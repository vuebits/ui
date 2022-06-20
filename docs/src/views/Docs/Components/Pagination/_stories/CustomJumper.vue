<template>
  <VPagination
    v-model="page"
    :last-page="lastPage"
    show-jumper
  >
    <template #jumper>
      This is page number:
      <VInput
        v-model="page"
        type="number"
        :min="1"
        :max="lastPage"
        bordered
        round
        no-hint
      />
      out of all of the {{ lastPage }} pages!
    </template>
  </VPagination>
</template>

<script>
import {
  VPagination,
  VInput,
} from '@vuebits/ui';

export default {
  name: 'PaginationCustomJumper',
  components: {
    VPagination,
    VInput,
  },
  data () {
    return {
      page: 7,
      lastPage: 15,
    };
  },
};
</script>
