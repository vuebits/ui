<template>
  <div :class="$bem({})">
    <router-view v-if="!isExactRoute" />
    <template v-else>
      <PageHeader>
        Components
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
import { componentsRoutes } from '@/docs/router/components';

export default defineComponent({
  name: 'DocsComponents',
  components: {
    PageHeader,
    TableOfContents
  },
  data () {
    return {
      route: RouteName.COMPONENTS,
      children: componentsRoutes
    };
  },
  computed: {
    isExactRoute (): boolean {
      return this.$route.name === RouteName.COMPONENTS;
    }
  }
});
</script>

<style lang="scss">
</style>
