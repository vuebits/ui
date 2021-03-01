<template>
  <div class="knobs">
    <h3 class="knobs__header">
      Options
    </h3>
    <slot />
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
  padding: 2 * $sp;
  background-color: $color-bg;
  border-left: set-border();

  &__header {
    font-size: 20px;
  }
}
</style>
