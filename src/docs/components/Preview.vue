
<template>
  <div
    class="preview"
    :style="{ height: height}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    height: {
      type: [Number, String],
      default: 'auto'
    }
  }
};
</script>

<style lang="scss">
.preview {
  padding: 4 * $sp;
  position: relative;
  flex-grow: 1;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
