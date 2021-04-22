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
      <div :class="$bem({e: 'title'})" />
      <VIconButton
        icon="times"
        round
        :class="$bem({e: 'close-button'})"
        @click="isExpandedOnMobile = false"
      />
    </div>
    <div
      v-for="group in routeGroups"
      :key="group.name"
      :class="$bem({e: 'group'})"
    >
      <router-link
        :to="{ name: group.name }"
        class="is-hoverable"
        :class="$bem({e: 'group-header'})"
      >
        {{ group.label }}
      </router-link>
      <ul>
        <li
          v-for="(item, i) in group.routes"
          :key="i"
          class="is-hoverable"
          :class="$bem({e: 'item'})"
        >
          <router-link
            :to="item.route"
            :class="$bem({e: 'item-link', m: {active: item.route.name === $route.name}})"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VIconButton
} from '@/components';
import { componentsRoutes } from '@/docs/router/components';
import { stylesRoutes } from '@/docs/router/styles';
import { gettingStartedRoutes } from '@/docs/router/getting-started';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'DocsSidebar',
  components: {
    VIconButton
  },
  data () {
    return {
      isExpandedOnMobile: false
    };
  },
  computed: {
    routeGroups (): any[] {
      const groups = [
        {
          name: RouteName.GETTING_STARTED,
          label: 'Getting started',
          routes: gettingStartedRoutes
        },
        {
          name: RouteName.STYLES,
          label: 'Styles',
          routes: stylesRoutes
        },
        {
          name: RouteName.COMPONENTS,
          label: 'Components',
          routes: componentsRoutes
        }
      ];
      return groups.map(g => ({
        name: g.name,
        label: g.label,
        routes: g.routes.map(r => {
          return {
            route: {
              name: `${g.name}${r.name}`
            },
            label: r.label
          };
        })
      }));
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
