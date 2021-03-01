<template>
  <VToolbarMenu
    :class="$bem({})"
    data-test="menu"
    @click-outside="close"
  >
    <VToolbarMenuItem
      :to="docsRoute"
      :class="$bem({e: 'item', m: {active: $route.path.split('/')[1] === 'docs'}})"
    >
      Docs
    </VToolbarMenuItem>
    <VToolbarMenuItem
      href="https://github.com/vuebits/ui"
      :class="$bem({e: 'item'})"
      new-window
    >
      <VIcon
        :name="['fab', 'github']"
      />
    </VToolbarMenuItem>
    <VToolbarMenuItem
      href="https://www.npmjs.com/package/@vuebits/ui"
      :class="$bem({e: 'item'})"
      new-window
    >
      <VIcon
        :name="['fab', 'npm']"
      />
    </VToolbarMenuItem>
  </VToolbarMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VToolbarMenu,
  VToolbarMenuItem,
  VIcon
} from '@/components';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'LayoutDefaultHeaderMenu',
  components: {
    VToolbarMenu,
    VToolbarMenuItem,
    VIcon
  },
  emits: {
    close: null
  },
  data () {
    return {
      docsRoute: {
        name: RouteName.DOCS
      }
    };
  },
  methods: {
    close (): void {
      this.$emit('close');
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
