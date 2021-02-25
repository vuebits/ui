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
  padding: 10px;
  background-color: #f5f5f5;
  border-left: 1px solid #ccc;

  &__header {
    font-size: 20px;
  }
}
</style>
