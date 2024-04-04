<template>
  <div
    :style="{ height: height }"
    :class="[
      ...bem({}),
      'is-bordered',
      {
        'is-dark': isDark,
      },
    ]"
  >
    <div :class="bem({ e: 'content' })">
      <slot />
    </div>
    <div :class="bem({ e: 'controls' })">
      <UiIconButton
        color="white"
        light
        icon="sun"
        icon-type="fa"
        icon-prefix="fa-"
        @click="isDark = false"
      />
      <UiIconButton
        color="dark"
        icon="moon"
        icon-type="fa"
        icon-prefix="fa-"
        dark
        @click="isDark = true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UiIconButton, defineBem } from '@vuebits/ui'

const bem = defineBem('Preview')

defineProps({
  height: {
    type: [Number, String],
    default: 'auto',
  },
})

const isDark = ref(false)
</script>

<style lang="scss">
.preview {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &__controls {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }

  &__content {
    flex-grow: 1;
    padding: 4 * $sp;
  }
}
</style>
