<template>
  <DmToolbar
    fixed
    light
    color="white"
    :class="$bem({m: {expanded: isMenuExpandedOnMobile}})"
  >
    <template #left>
      <DmToolbarLogo
        :src="require('@/assets/images/logo.png')"
        :to="homeRoute"
        :class="$bem({e: 'logo'})"
        title="Vuebits UI"
        @click="closeMenuOnMobile"
      />
    </template>
    <template #right>
      <LayoutAppHeaderMenu
        :expanded-on-mobile="isMenuExpandedOnMobile"
        @close="closeMenuOnMobile"
      />
      <!-- <DmToolbarHamburger
        v-model="isMenuExpandedOnMobile"
        :class="$bem({e: 'hamburger'})"
      /> -->
    </template>
  </DmToolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  DmToolbar,
  DmToolbarLogo
} from '@/components';
import LayoutAppHeaderMenu from './Menu';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'LayoutDefaultHeader',
  components: {
    DmToolbar,
    DmToolbarLogo,
    LayoutAppHeaderMenu
  },
  data () {
    return {
      homeRoute: {
        name: RouteName.HOME
      },
      isMenuExpandedOnMobile: false as boolean
    };
  },
  methods: {
    closeMenuOnMobile (): void {
      this.isMenuExpandedOnMobile = false;
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
