<template>
  <DmToolbarMenu
    :class="$bem({})"
    data-test="menu"
    @click-outside="close"
  >
    <DmToolbarMenuItem
      :to="docsRoute"
      :class="$bem({e: 'item', m: {active: $route.path.split('/')[1] === 'docs'}})"
    >
      Docs
    </DmToolbarMenuItem>
    <DmToolbarMenuItem
      href="https://github.com/vuebits/ui"
      :class="$bem({e: 'item'})"
      new-window
    >
      <DmIcon
        :name="['fab', 'github']"
      />
    </DmToolbarMenuItem>
  </DmToolbarMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  DmToolbarMenu,
  DmToolbarMenuItem,
  DmIcon
} from '@/components';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'LayoutDefaultHeaderMenu',
  components: {
    DmToolbarMenu,
    DmToolbarMenuItem,
    DmIcon
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
