<template>
  <div :class="bem({})">
    <UiButton
      dark
      color="secondary"
      @click="isModalShown = true"
    >
      Show options
    </UiButton>
    <UiModal
      v-model="isModalShown"
      position="right"
      transition="slide-right"
      size="sm"
      close-on-esc
    >
      <UiModalHeader
        bordered
        :class="bem({ e: 'header' })"
      >
        <h2>Options</h2>
        <UiIconButton
          icon="times"
          hoverable
          rounded
          @click="isModalShown = false"
        />
      </UiModalHeader>
      <UiModalBody :class="bem({ e: 'body' })">
        <slot />
      </UiModalBody>
    </UiModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  UiButton,
  UiModal,
  UiModalHeader,
  UiModalBody,
  UiIconButton,
  defineBem,
} from '@vuebits/ui'

const bem = defineBem('knobs')

const isModalShown = ref(false)
</script>

<style lang="scss">
.knobs {
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    overflow-y: auto;
  }

  &__content {
    padding: 2 * $sp;
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
