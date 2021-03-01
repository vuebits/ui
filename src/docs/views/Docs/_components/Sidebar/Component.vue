<template>
  <div :class="$bem({})">
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
import { components } from '@/docs/router/components';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'DocsSidebar',
  data () {
    return {
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
