<template>
  <div :class="$bem({})">
    <PageHeader>
      Tile
    </PageHeader>
    <InifiniteScrollExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VInfiniteScroll } from '@/components';
import InifiniteScrollExample from './Example.vue';
import {
  PageHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsInfiniteScroll',
  components: {
    PageHeader,
    ComponentApi,
    InifiniteScrollExample
  },
  data () {
    return {
      component: VInfiniteScroll
    };
  }
});
</script>

<style lang="scss">

</style>
