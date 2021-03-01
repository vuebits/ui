<template>
  <h2 :class="$bem({})">
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'PageHeader'
};
</script>

<style lang="scss">
.page-header {
  font-size: 24px;
  margin-bottom: 4 * $sp;
}
</style>
