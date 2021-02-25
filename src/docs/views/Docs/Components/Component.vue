<template>
  <div :class="$bem({})">
    <router-view v-if="!isExactRoute" />
    <div v-else>
      Components index
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'DocsComponents',
  computed: {
    isExactRoute (): boolean {
      return this.$route.name === RouteName.COMPONENTS;
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
