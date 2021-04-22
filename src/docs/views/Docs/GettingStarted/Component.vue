<template>
  <div :class="$bem({})">
    <router-view v-if="!isExactRoute" />
    <template v-else>
      <PageHeader>
        Getting started
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
import { RouteName } from '@/docs/router/models';
import {
  PageHeader,
  TableOfContents
} from '@/docs/components';
import { gettingStartedRoutes } from '@/docs/router/getting-started';

export default defineComponent({
  name: 'DocsGettingStarted',
  components: {
    PageHeader,
    TableOfContents
  },
  data () {
    return {
      route: RouteName.GETTING_STARTED,
      children: gettingStartedRoutes
    };
  },
  computed: {
    isExactRoute (): boolean {
      return this.$route.name === RouteName.GETTING_STARTED;
    }
  }
});
</script>

<style lang="scss">
</style>
