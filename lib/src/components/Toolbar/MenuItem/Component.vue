<template>
  <li
    :class="classes"
    @click="onClick"
  >
    <component
      :is="component"
      :to="to"
      :href="href"
      :target="target"
      :rel="newWindow ? 'noopener' : ''"
      :class="$bem({ e: 'link' })"
    >
      <slot />
    </component>

    <slot name="after" />
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { CssClass } from '../../../helpers/css-classes'
import { linkProps, useLink } from '../../../composables'

export default defineComponent({
  name: 'UiToolbarMenuItem',
  props: {
    active: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    ...linkProps,
  },
  emits: ['click'],
  setup(props) {
    const { to, href, newWindow } = toRefs(props)

    const { component, target } = useLink(to, href, newWindow)

    return {
      component,
      target,
    }
  },
  computed: {
    classes(): CssClass[] {
      return [...this.$bem({})]
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
