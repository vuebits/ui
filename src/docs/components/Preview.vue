
<template>
  <div class="preview">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Preview'
};
</script>

<style lang="scss">
.preview {
  padding: 5px;
  position: relative;
  flex-grow: 1;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
