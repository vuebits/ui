<template>
  <div :class="$bem({})">
    <router-view v-if="!isExactRoute" />
    <template v-else>
      <PageHeader>
        Styles
      </PageHeader>
      <TableOfContents
        :group="route"
        :routes="children"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteName } from '@/router/models';
import {
  PageHeader,
  TableOfContents,
} from '@/components';
import { stylesRoutes } from '@/router/styles';

export default defineComponent({
  name: 'DocsStyles',
  components: {
    PageHeader,
    TableOfContents,
  },
  data () {
    return {
      route: RouteName.STYLES,
      children: stylesRoutes,
    };
  },
  computed: {
    isExactRoute (): boolean {
      return this.$route.name === RouteName.STYLES;
    },
  },
});
</script>

<style lang="scss">
</style>
