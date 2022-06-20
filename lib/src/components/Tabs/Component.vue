<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('tabs')"
  >
    <ul :class="$bem({e: 'header'})">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="tabClasses(index)"
        v-bind="$ui.testElName('tabs-item')"
        @click="selectTab(index)"
      >
        <slot :name="`tab-${item.key}`">
          {{ item.text }}
        </slot>
      </li>
    </ul>
    <div
      v-for="(item, index) in items"
      v-show="index === selectedIndex"
      :key="index"
      v-bind="$ui.testElName('tabs-item-content')"
    >
      <slot :name="item.key" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { TabItem } from './models';
import {
  CssClass,
  borderColorClass,
} from '../../helpers/css-classes';
import {
  roundedProps,
  themeProps,
  useTheme,
} from '../../composables';

export default defineComponent({
  name: 'VTabs',
  props: {
    modelValue: {
      type: Number as PropType<number>,
      default: 0,
    },
    items: {
      type: Array as PropType<TabItem[]>,
      required: true,
    },
    activeTabColor: {
      type: String as PropType<string>,
      default: 'primary',
    },
    ...themeProps,
    ...roundedProps,
  },
  emits: [
    'update:modelValue',
    'change',
  ],
  setup (props) {
    const {
      dark,
      light,
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light),
    };
  },
  computed: {
    selectedIndex: {
      get (): number {
        return this.modelValue;
      },
      set (value: number) {
        this.$emit('change', value);
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    tabClasses (i: number): CssClass[] {
      return [
        ...this.$bem({
          e: 'tab',
          m: {
            active: i === this.selectedIndex,
            rounded: this.rounded,
          },
        }),
        this.themeClass,
        borderColorClass(this.activeTabColor),
      ];
    },
    selectTab (i: number) {
      this.selectedIndex = i;
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
