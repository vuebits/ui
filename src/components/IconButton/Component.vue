<template>
  <VButton
    :class="classes"
    :bordered="bordered"
    :light="light"
    :dark="dark"
    :rounded="rounded"
    :rounded-lg="roundedLg"
    :round="round"
    :color="color"
    :disabled="disabled"
    :size="size"
    :title="title"
    @click="click"
  >
    <VIcon :name="icon" />
  </VButton>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VButton } from '@/components/Button';
import { VIcon } from '@/components/Icon';
import {
  CssClass
} from '@/helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps
} from '@/composition-functions';

export default defineComponent({
  name: 'VIconButton',
  components: {
    VButton,
    VIcon
  },
  props: {
    icon: {
      type: String as PropType<string>,
      default: ''
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    size: {
      type: String as PropType<string>,
      default: 'md'
    },
    color: {
      type: String as PropType<string | null>,
      default: null
    },
    title: {
      type: String as PropType<string | null>,
      default: null
    },
    ...borderedProps,
    ...themeProps,
    ...roundedProps
  },
  emits: ['click'],
  computed: {
    classes (): CssClass[] {
      const mods = [this.size];
      return this.$bem({
        m: mods
      });
    }
  },
  methods: {
    click (): void {
      this.$emit('click');
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
