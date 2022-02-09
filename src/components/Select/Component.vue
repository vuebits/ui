<template>
  <div
    v-click-outside="onClickOutside"
    :class="classes"
    v-bind="$ui.testElName('select')"
    @blur="isExpanded = false"
  >
    <div
      :class="$bem({ e: 'input' })"
      v-bind="$ui.testElName('select-value')"
      @click="toggle"
    >
      <div
        v-if="leftIcon"
        :class="[...$bem({e: 'icon', m: {clickable: leftIconClickable, round: round}}), roundedClass]"
        v-bind="$ui.testElName('select-icon-left')"
        @click="onLeftIconClick"
      >
        <VIcon
          :name="leftIcon"
          :color="leftIconColor"
        />
      </div>
      <div :class="$bem({ e: 'text-container' })">
        <div
          v-if="label"
          :class="$bem({ e: 'label' })"
        >
          {{ label }}
        </div>
        <div :class="$bem({ e: 'input-selected-item' })">
          <div :class="$bem({ e: 'input-selected-item-text' })">
            <slot
              :id="selectedItem ? selectedItem.key : null"
              name="selected-item"
              :placeholder="placeholder"
              :text-with-placeholder="selectedItemText"
              :text="selectedItem ? selectedItem.text : null"
              :metadata="selectedItem ? selectedItem.metadata : null"
            >
              {{ selectedItemText }}
            </slot>
          </div>
        </div>
      </div>
      <div
        v-if="!hideArrow"
        :class="$bem({ e: 'arrow-wrapper' })"
      >
        <VIcon
          :name="$ui.icons.values.expand"
          :class="arrowClasses"
        />
      </div>
      <div
        v-if="clearable && modelValue"
        :class="[...$bem({e: 'icon', m: {clickable: true, round: round}}), roundedClass]"
        v-bind="$ui.testElName('select-clear-button')"
        @click.stop="clearSelection"
      >
        <VIcon
          :name="$ui.icons.values.close"
        />
      </div>
    </div>
    <transition name="slide-top">
      <div
        v-if="isExpanded"
        :class="dropdownClasses"
        class="is-elevated"
        v-bind="$ui.testElName('select-dropdown')"
      >
        <VInput
          v-if="search"
          ref="search"
          v-model="searchQuery"
          :placeholder="computedSearchPlaceholder"
          no-hint
          v-bind="$ui.testElName('select-search')"
        />
        <div
          :class="$bem({ e: 'items' })"
          :style="{ maxHeight: `${maxHeight}px` }"
          v-bind="$ui.testElName('select-list')"
        >
          <div
            v-for="item of filteredItems"
            :key="item.key"
            :class="itemClasses(item)"
            v-bind="$ui.testElName('select-item')"
            @click="select(item)"
          >
            <slot
              :id="item.key"
              name="item"
              :text="item.text"
              :metadata="item.metadata"
              :is-active="item.key === modelValue"
            >
              {{ item.text }}
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, PropType, toRefs } from 'vue';
import { VIcon } from '../Icon';
import { VInput } from '../Input';
import { colorClass, CssClass, hoverableClass } from '../../helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  useBordered,
  useTheme,
  useRounded,
  sizeProps,
  validationProps,
} from '../../composables';
import { ClickOutside } from '../../directives';
import { SelectItem } from './models';

export default defineComponent({
  name: 'VSelect',
  components: {
    VIcon,
    VInput,
  },
  directives: { ClickOutside },
  props: {
    modelValue: {
      type: [
        Number,
        String,
      ] as PropType<string | number | null>,
      default: null,
    },
    items: {
      type: Array as PropType<SelectItem[]>,
      required: true,
    },
    hideArrow: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    label: {
      type: String as PropType<string | null>,
      default: null,
    },
    placeholder: {
      type: String as PropType<string | null>,
      default: null,
    },
    maxHeight: {
      type: Number as PropType<number>,
      default: 320,
    },
    persistent: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    labelColor: {
      type: String as PropType<string>,
      default: 'grey',
    },
    search: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    searchPlaceholder: {
      type: String as PropType<string | null>,
      default: null,
    },
    leftIcon: {
      type: String as PropType<string | null>,
      default: null,
    },
    leftIconClickable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    leftIconColor: {
      type: String as PropType<string | null>,
      default: null,
    },
    clearable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...sizeProps,
    ...validationProps,
  },
  emits: [
    'update:modelValue',
    'select',
    'change',
    'click-left-icon',
  ],
  setup (props) {
    const {
      dark,
      light,
      bordered,
      rounded,
      roundedLg,
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg),
    };
  },
  data () {
    return {
      isExpanded: false as boolean,
      searchQuery: '',
    };
  },
  computed: {
    computedSearchPlaceholder (): string {
      return this.searchPlaceholder || this.$ui.t().select.search;
    },
    classes (): CssClass[] {
      return [
        ...this.$bem({
          m: {
            closed: !this.isExpanded,
            expanded: this.isExpanded,
            disabled: this.disabled,
            light: this.light,
            dark: this.dark,
            round: this.round,
            [this.size]: true,
            error: this.error,
          },
        }),
        {
          'is-elevated': this.isExpanded,
        },
        this.borderedClass,
        this.roundedClass,
      ];
    },
    labelClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'label',
        }),
        colorClass(this.labelColor),
      ];
    },
    arrowClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'arrow',
          m: {
            expanded: this.isExpanded,
          },
        }),
      ];
    },
    dropdownClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'dropdown',
          m: {
            'theme-default': !this.light && !this.dark,
            rounded: this.rounded,
            'rounded-lg': this.roundedLg,
            round: this.round,
          },
        }),
        this.themeClass,
      ];
    },
    selectedItem (): SelectItem | null {
      return this.modelValue !== null
        ? this.items.find(item => item.key === this.modelValue) || null
        : null;
    },
    computedPlaceholder (): string | null {
      return this.placeholder || this.$ui.t().select.placeholder;
    },
    selectedItemText (): string | null {
      return this.selectedItem
        ? this.selectedItem.text
        : this.computedPlaceholder;
    },
    filteredItems (): SelectItem[] {
      return this.searchQuery
        ? this.items.filter(i =>
          i.text.toLowerCase().includes(this.searchQuery.toLowerCase()),
        )
        : this.items;
    },
  },
  methods: {
    select (item: SelectItem | null): void {
      if (!item || !item.disabled) {
        this.isExpanded = false;
        this.$emit('update:modelValue', item?.key || null);
        this.$emit('select', item);
        if (!item || item.key !== this.modelValue) {
          this.$emit('change', item);
        }
      }
    },
    clearSelection (): void {
      this.select(null);
    },
    toggle (): void {
      if (!this.disabled) {
        if (this.isExpanded) {
          this.isExpanded = false;
        } else {
          this.searchQuery = '';
          this.isExpanded = true;
          nextTick(() => {
            if (this.search) (this.$refs.search as HTMLInputElement).focus();
          });
        }
      }
    },
    itemClasses (item: SelectItem): CssClass[] {
      return [
        ...this.$bem({
          e: 'item',
          m: {
            active: item.key === this.modelValue,
            disabled: item.disabled === true,
          },
        }),
        {
          [hoverableClass]: item.key !== this.modelValue,
        },
      ];
    },
    onClickOutside (): void {
      if (!this.persistent) {
        this.isExpanded = false;
      }
    },
    onLeftIconClick (): void {
      if (this.leftIconClickable) this.$emit('click-left-icon');
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
