<template>
  <div :class="$bem({})">
    <div :class="$bem({e: 'sidebar'})">
      <router-link
        :to="componentsRoute"
        class="v--hoverable"
        :class="$bem({e: 'sidebar-links-header'})"
      >
        Components
      </router-link>
      <ul>
        <li
          v-for="(item, i) in componentsRoutes"
          :key="i"
          class="v--hoverable"
          :class="$bem({e: 'sidebar-item', m: {active: item.route.name === $route.name}})"
        >
          <router-link
            :to="item.route"
            :class="$bem({e: 'sidebar-link'})"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
    <div :class="$bem({e: 'main'})">
      <VTile
        color="white"
        bordered
        rounded
        :class="$bem({e: 'content'})"
      >
        <div :class="$bem({e: 'breadcrumbs'})">
          <router-link
            :to="homeRoute"
            :class="$bem({e: 'breadcrumb'})"
          >
            <VIcon name="home" />
          </router-link>
          <span
            v-for="breadcrumb in $route.matched"
            :key="breadcrumb.name"
          >
            /
            <router-link
              :to="breadcrumb.path"
              :class="$bem({e: 'breadcrumb', m: {active: $route.path === breadcrumb.path}})"
            >
              {{ breadcrumb.path.split('/').slice(-1)[0] }}
            </router-link>
          </span>
        </div>
        <router-view />
      </VTile>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VTile, VIcon } from '@/components';
import { components } from '@/docs/router/components';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'Docs',
  components: {
    VTile,
    VIcon
  },
  data () {
    return {
      homeRoute: {
        name: RouteName.HOME
      },
      componentsRoute: {
        name: RouteName.COMPONENTS
      }
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
