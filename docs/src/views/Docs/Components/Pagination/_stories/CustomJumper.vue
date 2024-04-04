<template>
  <UiPagination
    v-model="page"
    :last-page="lastPage"
    show-jumper
  >
    <template #jumper>
      This is page number:
      <UiInput
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
  </UiPagination>
</template>

<script>
import { UiPagination, UiInput } from '@vuebits/ui'

export default {
  name: 'PaginationCustomJumper',
  components: {
    UiPagination,
    UiInput,
  },
  data() {
    return {
      page: 7,
      lastPage: 15,
    }
  },
}
</script>
