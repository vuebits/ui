<template>
  <div :class="$bem({})">
    <span
      :id="id"
      :class="$bem({e: 'anchor'})"
    />
    <h3
      :class="$bem({e: 'title'})"
    >
      <a
        :href="`#${id}`"
      >
        {{ title }}
      </a>
    </h3>
    <div :class="$bem({e: 'wrapper'})">
      <div
        :class="$bem({e: 'content'})"
        :style="{ height: height}"
      >
        <slot />
      </div>
      <div
        :class="$bem({e: 'controls'})"
      >
        <slot name="controls" />
      </div>
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

  &__wrapper {
    margin: 4 * $sp;
    border: set-border();
  }

  &__controls {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>
