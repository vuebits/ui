<template>
  <UiToolbarMenu
    :class="$bem({})"
    data-test="menu"
    @click-outside="close"
  >
    <UiToolbarMenuItem
      :to="docsRoute"
      :class="$bem({ e: 'item', m: { active: $route.path.split('/')[1] === 'docs' } })"
    >
      Docs
    </UiToolbarMenuItem>
    <UiToolbarMenuItem
      href="https://github.com/vuebits/ui"
      :class="$bem({ e: 'item' })"
      new-window
    >
      <UiIcon
        name="github"
        type="fab"
      />
    </UiToolbarMenuItem>
    <UiToolbarMenuItem
      href="https://www.npmjs.com/package/@vuebits/ui"
      :class="$bem({ e: 'item' })"
      new-window
    >
      <UiIcon
        name="npm"
        type="fab"
      />
    </UiToolbarMenuItem>
  </UiToolbarMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiToolbarMenu, UiToolbarMenuItem, UiIcon } from '@vuebits/ui'
import { RouteName } from '@/router/models'

export default defineComponent({
  name: 'LayoutDefaultHeaderMenu',
  components: {
    UiToolbarMenu,
    UiToolbarMenuItem,
    UiIcon,
  },
  emits: ['close'],
  data() {
    return {
      docsRoute: {
        name: RouteName.DOCS,
      },
    }
  },
  methods: {
    close(): void {
      this.$emit('close')
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
