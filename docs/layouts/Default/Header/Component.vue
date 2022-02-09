<template>
  <VToolbar
    fixed
    light
    color="white"
    :class="$bem({m: {expanded: isMenuExpandedOnMobile}})"
  >
    <template #left>
      <VToolbarLogo
        :src="$asset('images/logo.png')"
        title="Vuebits UI"
        :to="homeRoute"
        :class="$bem({e: 'logo'})"
        @click="closeMenuOnMobile"
      />
    </template>
    <template #right>
      <LayoutAppHeaderMenu
        :expanded-on-mobile="isMenuExpandedOnMobile"
        @close="closeMenuOnMobile"
      />
      <VToolbarHamburger
        v-model="isMenuExpandedOnMobile"
        :class="$bem({e: 'hamburger'})"
      />
    </template>
  </VToolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VToolbar,
  VToolbarLogo,
  VToolbarHamburger,
} from '@vuebits/ui';
import LayoutAppHeaderMenu from './Menu';
import { RouteName } from '@/router/models';

export default defineComponent({
  name: 'LayoutDefaultHeader',
  components: {
    VToolbar,
    VToolbarLogo,
    LayoutAppHeaderMenu,
    VToolbarHamburger,
  },
  data () {
    return {
      homeRoute: {
        name: RouteName.HOME,
      },
      isMenuExpandedOnMobile: false as boolean,
    };
  },
  methods: {
    closeMenuOnMobile (): void {
      this.isMenuExpandedOnMobile = false;
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
