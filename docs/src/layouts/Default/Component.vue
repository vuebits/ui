<template>
  <div :class="$bem({})">
    <LayoutAppHeader :class="$bem({ e: 'header' })" />
    <LayoutAppContent :class="$bem({ e: 'content' })">
      <router-view />
    </LayoutAppContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutAppHeader from './Header'
import LayoutAppContent from './Content'

export default defineComponent({
  name: 'LayoutDefault',
  components: {
    LayoutAppHeader,
    LayoutAppContent,
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
