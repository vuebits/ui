<template>
  <div :class="$bem({})">
    <label
      :for="id"
      :class="$bem({e: 'label'})"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <div
      :id="id"
      :class="$bem({e: 'field'})"
    >
      <slot />
    </div>
    <div
      v-if="!noHint"
      :class="hintClasses"
      :data-test="error ? 'field-error' : 'field-hint'"
    >
      {{ hintText }}
    </div>
  </div>
</template>

<script lang="ts">
import { CssClass } from '../../helpers/css-classes';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VField',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String as PropType<string | null>,
      default: null,
    },
    error: {
      type: String as PropType<string | null | undefined>,
      default: null,
    },
    hint: {
      type: String as PropType<string | null | undefined>,
      default: null,
    },
    noHint: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {
    hintText (): string {
      return this.error || this.hint || '';
    },
    hintClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'hint',
          m: {
            error: !!this.error,
          },
        }),
      ];
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
