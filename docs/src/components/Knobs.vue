<template>
  <div :class="$bem({})">
    <VButton
      dark
      color="secondary"
      @click="isModalShown = true"
    >
      Show options
    </VButton>
    <VModal
      v-model="isModalShown"
      position="right"
      transition="slide-right"
      size="sm"
      close-on-esc
    >
      <VModalHeader
        bordered
        :class="$bem({e: 'header'})"
      >
        <h2>
          Options
        </h2>
        <VIconButton
          icon="times"
          hoverable
          rounded
          @click="isModalShown = false"
        />
      </VModalHeader>
      <VModalBody
        :class="$bem({e: 'body'})"
      >
        <slot />
      </VModalBody>
    </VModal>
  </div>
</template>

<script>
import {
  VButton,
  VModal,
  VModalHeader,
  VModalBody,
  VIconButton,
} from '@vuebits/ui';

export default {
  name: 'Knobs',
  components: {
    VButton,
    VModal,
    VModalHeader,
    VModalBody,
    VIconButton,
  },
  data () {
    return {
      isModalShown: false,
    };
  },
};
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
