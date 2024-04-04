<template>
  <span
    :class="$bem({})"
    @click="onClick"
  >
    <component
      :is="component"
      :href="href"
      :to="to"
      :class="$bem({ e: 'link' })"
    >
      <img
        :src="src"
        :alt="alt"
        :class="$bem({ e: 'image' })"
      />
      <div
        v-if="title"
        :class="$bem({ e: 'title' })"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </div>
    </component>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'UiToolbarLogo',
  props: {
    src: {
      type: String as PropType<string>,
      required: true,
    },
    alt: {
      type: String as PropType<string>,
      default: null,
    },
    to: {
      type: [Object, String],
      default: null,
    },
    href: {
      type: String as PropType<string>,
      default: null,
    },
    title: {
      type: String as PropType<string>,
      default: null,
    },
  },
  emits: ['click'],
  computed: {
    component(): string {
      if (this.to) return 'RouterLink'
      if (this.href) return 'a'
      return 'span'
    },
  },
  methods: {
    onClick(): void {
      this.$emit('click')
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
