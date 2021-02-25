<template>
  <h2 class="component-header">
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'Knobs'
};
</script>

<style lang="scss">
.component-header {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
