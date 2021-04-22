<template>
  <div class="sandbox">
    <span
      :id="id"
      class="sandbox__anchor"
    />
    <h3
      class="sandbox__title"
    >
      <a
        :href="`#${id}`"
      >
        {{ title }}
      </a>
    </h3>
    <div
      class="sandbox__content"
      :style="{ height: height}"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sandbox',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    height: {
      type: [Number, String],
      default: 'auto'
    }
  }
};
</script>

<style lang="scss">
.sandbox {

  &__anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }

  &__title {
    margin-left: 4 * $sp;

    &:hover {
      margin-left: 0;

      &::before {
        content: '#';
        cursor: pointer;
        display: inline-block;
        width: 4 * $sp;
        color: $color-secondary;
      }
    }
  }

  &__content {
    margin: 4 * $sp;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: set-border();
  }
}
</style>
