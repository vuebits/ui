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
    @click="click"
  >
    <VIcon
      v-if="!loading"
      :name="icon"
      :type="iconType"
    />
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
    iconType: {
      type: String as PropType<string | undefined>,
      default: undefined
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
      type: String as PropType<string>,
      default: 'default'
    },
    title: {
      type: String as PropType<string | null>,
      default: null
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    plain: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    hoverable: {
      type: Boolean as PropType<boolean>,
      default: false
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
