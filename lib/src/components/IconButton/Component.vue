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
    :loading="loading"
    :plain="plain"
    :hoverable="hoverable"
    :gradient="gradient"
    :theme="theme"
    v-bind="$ui.testElName('icon-button')"
  >
    <template #container>
      <VIcon
        v-if="!loading"
        :name="icon"
        :type="iconType"
        :prefix="iconPrefix"
      />
    </template>
  </VButton>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VButton } from '../Button';
import { VIcon } from '../Icon';
import {
  CssClass,
} from '../../helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  sizeProps,
} from '../../composables';

export default defineComponent({
  name: 'VIconButton',
  components: {
    VButton,
    VIcon,
  },
  props: {
    icon: {
      type: String as PropType<string>,
      default: '',
    },
    iconType: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    iconPrefix: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    color: {
      type: String as PropType<string>,
      default: 'default',
    },
    title: {
      type: String as PropType<string | null>,
      default: null,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    plain: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    hoverable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    gradient: {
      type: String as PropType<string | null>,
      default: null,
    },
    theme: {
      type: String as PropType<string | null>,
      default: null,
    },
    ...borderedProps,
    ...themeProps,
    ...roundedProps,
    ...sizeProps,
  },
  computed: {
    classes (): CssClass[] {
      const mods = [this.size];
      return this.$bem({
        m: mods,
      });
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
