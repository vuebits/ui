<template>
  <div :class="$bem({})">
    <div :class="$bem({ e: 'header' })">
      <div :class="$bem({ e: 'header-left' })" />
      <div :class="$bem({ e: 'header-right' })">
        <LocaleSwitcher :class="$bem({ e: 'locale-switcher' })" />
      </div>
    </div>
    <router-view v-if="!isExactRoute" />
    <template v-else>
      <PageHeader> Components </PageHeader>
      <TableOfContents
        :group="route"
        :routes="children"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteName } from '@/router/models'
import { PageHeader, TableOfContents, LocaleSwitcher } from '@/components'
import { componentsRoutes } from '@/router/components'

export default defineComponent({
  name: 'DocsComponents',
  components: {
    PageHeader,
    TableOfContents,
    LocaleSwitcher,
  },
  data() {
    return {
      route: RouteName.COMPONENTS,
      children: componentsRoutes,
    }
  },
  computed: {
    isExactRoute(): boolean {
      return this.$route.name === RouteName.COMPONENTS
    },
  },
})
</script>

<style lang="scss">
.docs-components {
  &__header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
