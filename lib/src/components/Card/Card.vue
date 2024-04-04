<template>
  <div
    :class="bem({})"
    v-bind="ui.testElName('card')"
  >
    <header
      v-if="title"
      :class="bem({ e: 'header' })"
    >
      <h3 :class="bem({ e: 'title' })">
        {{ title }}
      </h3>
    </header>
    <main
      :class="bem({ e: 'body' })"
      v-bind="ui.testElName('card-body')"
    >
      <slot />
    </main>
    <footer
      v-if="$slots['footer']"
      :class="bem({ e: 'footer' })"
      v-bind="ui.testElName('card-footer')"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defineBem, useUi } from '../../index'
const bem = defineBem('ui-card')
const ui = useUi()
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '',
  },
)
</script>

<style lang="scss">
@import './Card';
</style>
