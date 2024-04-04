<template>
  <div :class="$bem({})">
    <DocsSidebar />
    <div :class="$bem({ e: 'main' })">
      <UiTile
        light
        bordered
        rounded
        :class="$bem({ e: 'content' })"
      >
        <DocsBreadcrumbs />
        <router-view />
      </UiTile>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiTile } from '@vuebits/ui'
import { DocsSidebar, DocsBreadcrumbs } from './_components'

export default defineComponent({
  name: 'Docs',
  components: {
    UiTile,
    DocsSidebar,
    DocsBreadcrumbs,
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
