<template>
  <div :class="$bem({})">
    <router-link
      :to="homeRoute"
      :class="$bem({ e: 'breadcrumb' })"
    >
      <UiIcon name="home" />
    </router-link>
    <span
      v-for="breadcrumb in $route.matched"
      :key="breadcrumb.name"
    >
      /
      <router-link
        :to="breadcrumb.path"
        :class="
          $bem({
            e: 'breadcrumb',
            m: { active: $route.path === breadcrumb.path },
          })
        "
      >
        {{ breadcrumb.path.split('/').slice(-1)[0] }}
      </router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiIcon } from '@vuebits/ui'
import { RouteName } from '@/router/models'

export default defineComponent({
  name: 'DocsBreadcrumbs',
  components: {
    UiIcon,
  },
  data() {
    return {
      homeRoute: {
        name: RouteName.HOME,
      },
    }
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
