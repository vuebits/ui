<template>
  <div :class="$bem({})">
    <DocsSidebar />
    <div :class="$bem({e: 'main'})">
      <VTile
        color="white"
        bordered
        rounded
        :class="$bem({e: 'content'})"
      >
        <DocsBreadcrumbs />
        <router-view />
      </VTile>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTile } from '@/components';
import {
  DocsSidebar,
  DocsBreadcrumbs
} from './_components';

export default defineComponent({
  name: 'Docs',
  components: {
    VTile,
    DocsSidebar,
    DocsBreadcrumbs
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
