<template>
  <div class="knobs">
    <h3 class="knobs__header">
      Options
    </h3>
    <div class="knobs__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Knobs'
};
</script>

<style lang="scss">
.knobs {
  width: 300px;
  background-color: $color-bg;
  border-left: set-border();
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    padding: 2 * $sp;
    font-size: 4 * $sp;
  }

  &__content {
    padding: 2 * $sp;
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
