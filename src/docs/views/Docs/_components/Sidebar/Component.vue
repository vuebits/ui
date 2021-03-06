<template>
  <VIconButton
    icon="list"
    round
    elevated
    dark
    color="primary"
    size="lg"
    :class="$bem({e: 'open-button'})"
    @click="isExpandedOnMobile = true"
  />
  <div :class="$bem({m: { 'hidden-on-mobile': !isExpandedOnMobile}})">
    <div :class="$bem({e: 'header'})">
      <div :class="$bem({e: 'title'})">
        Docs
      </div>
      <VIconButton
        icon="close"
        round
        :class="$bem({e: 'close-button'})"
        @click="isExpandedOnMobile = false"
      />
    </div>
    <router-link
      :to="componentsRoute"
      class="v--hoverable"
      :class="$bem({e: 'group-header'})"
    >
      Components
    </router-link>
    <ul>
      <li
        v-for="(item, i) in componentsRoutes"
        :key="i"
        class="v--hoverable"
        :class="$bem({e: 'item', m: {active: item.route.name === $route.name}})"
      >
        <router-link
          :to="item.route"
          :class="$bem({e: 'item-link'})"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VIconButton
} from '@/components';
import { components } from '@/docs/router/components';
import { RouteName } from '@/docs/router/models';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faList
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faTimes,
  faList
);

export default defineComponent({
  name: 'DocsSidebar',
  components: {
    VIconButton
  },
  data () {
    return {
      componentsRoute: {
        name: RouteName.COMPONENTS
      },
      isExpandedOnMobile: false
    };
  },
  computed: {
    componentsRoutes (): any[] {
      return components.map(c => {
        return {
          route: {
            name: `${RouteName.COMPONENTS}${c}`
          },
          label: c
        };
      });
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
