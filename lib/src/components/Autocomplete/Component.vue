<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('autocomplete')"
  >
    <component
      :is="component"
      ref="input"
      :readonly="!isExpanded"
      :model-value="isExpanded ? searchText : (!multiple && selectedItem ? selectedItem.text : '')"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :min="min"
      :max="max"
      :maxlength="maxlength"
      :step="step"
      :label="label"
      :width="width"
      :rows="rows"
      :left-icon="leftIcon"
      :left-icon-clickable="leftIconClickable"
      :left-icon-color="leftIconColor"
      :right-icon="selectedItem && selectedItem.key ? $ui.icons.values.close : null"
      right-icon-clickable
      :disabled="disabled"
      :bordered="bordered"
      :dark="dark"
      :light="light"
      :rounded="rounded"
      :rounded-lg="roundedLg"
      :round="round"
      :error="error"
      :class="inputClasses"
      :depressed="depressed"
      :size="size"
      v-bind="$ui.testElName('autocomplete-input')"
      @enter="enter"
      @focus="focus"
      @click="expand"
      @blur="blur"
      @input="handleInput"
      @click-left-icon="$emit('click-left-icon')"
      @click-right-icon="cleanSelection"
      @keydown.up="goToPrevious"
      @keydown.down="goToNext"
      @keydown.enter.prevent.stop="handleInputEnter"
      @keydown.esc="closeList"
      @keydown="onKeydown"
    >
      <template
        v-if="multiple"
        #before-text
      >
        <div :class="$bem({e: 'selected-items'})">
          <VBadge
            v-for="(item, i) in selectedItems"
            :key="i"
            :class="$bem({e: 'selected-item-badge'})"
            color="primary"
            round
          >
            <slot
              :id="item.key"
              name="selected-item"
              :text="item.text"
              :metadata="item.metadata"
            >
              {{ item.text }}
            </slot>
            <VIconButton
              :icon="$ui.icons.values.close"
              size="sm"
              round
              color="primary"
              :class="$bem({e: 'selected-item-remove'})"
              @click="removeItemFromSelected(item)"
            />
          </VBadge>
        </div>
      </template>
      <template #after>
        <transition
          v-if="isExpanded"
          name="slide-top"
        >
          <div
            ref="list"
            v-click-outside="clickOutsideHandler"
            :class="itemsClasses"
            :style="{maxHeight: `${maxHeight}px`}"
            v-bind="$ui.testElName('autocomplete-list')"
            @click.stop="listClicked = true"
          >
            <VAsyncContent
              :loading="itemsLoading"
              :error="itemsError"
              :reloadable="itemsReloadable"
              @reload="reload"
            >
              <div
                v-if="filteredItems.length === 0"
                :class="$bem({e: 'no-items-text'})"
              >
                {{ computedNoMatchingItemsText }}
              </div>
              <div
                v-for="(item, index) of filteredItems"
                v-else
                :key="index"
                :data-item-key="item.key"
              >
                <div
                  v-if="item.header"
                  :class="$bem({e: 'item-header'})"
                >
                  {{ item.header }}
                </div>
                <div
                  v-if="item.key"
                  :class="itemClasses(item)"
                  v-bind="$ui.testElName('autocomplete-list-item')"
                  @click="handleItemClick(item)"
                >
                  <slot
                    :id="item.key"
                    name="item"
                    :text="item.text"
                    :metadata="item.metadata"
                    :is-active="isItemSelected(item.key)"
                  >
                    {{ item.text }}
                  </slot>
                </div>
                <div
                  v-if="item.divider"
                  :class="$bem({e: 'item-divider'})"
                />
              </div>
            </VAsyncContent>
          </div>
        </transition>
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, nextTick } from 'vue';
import { VInput } from '../Input';
import { VTextarea } from '../Textarea';
import { VAsyncContent } from '../AsyncContent';
import { VBadge } from '../Badge';
import { VIconButton } from '../IconButton';
import {
  CssClass,
  hoverableClass,
} from '../../helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  validationProps,
  depressedProps,
  useBordered,
  useTheme,
  useRounded,
  sizeProps,
} from '../../composables';
import {
  AutocompleteItem,
  AutocompleteSelectedItem,
} from './models';
import { ClickOutside } from '../../directives';

export default defineComponent({
  name: 'VAutocomplete',
  components: {
    VInput,
    VTextarea,
    VAsyncContent,
    VBadge,
    VIconButton,
  },
  directives: {
    ClickOutside,
  },
  props: {
    modelValue: {
      type: [
        Object,
        Array,
      ] as PropType<AutocompleteSelectedItem | AutocompleteSelectedItem[] | null>,
      default: null,
    },
    items: {
      type: Array as PropType<AutocompleteItem[]>,
      required: true,
    },
    placeholder: {
      type: String as PropType<string | null>,
      default: null,
    },
    type: {
      type: String as PropType<string>,
      default: 'text',
    },
    required: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    min: {
      type: Number as PropType<number | string | null>,
      default: null,
    },
    max: {
      type: Number as PropType<number | string | null>,
      default: null,
    },
    maxlength: {
      type: Number as PropType<number | string | null>,
      default: null,
    },
    step: {
      type: Number as PropType<number>,
      default: 1,
    },
    label: {
      type: String as PropType<string | null>,
      default: null,
    },
    width: {
      type: Number as PropType<number | null>,
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
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    maxHeight: {
      type: Number as PropType<number>,
      default: 320,
    },
    listPosition: {
      type: String as PropType<'top' | 'bottom'>,
      default: 'bottom',
      validator: (val: string) => [
        'top',
        'bottom',
      ].includes(val),
    },
    itemsLoading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    itemsError: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    itemsReloadable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    textarea: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    rows: {
      type: Number as PropType<number | string | null>,
      default: null,
    },
    noMatchingItemsText: {
      type: String as PropType<string>,
      default: '',
    },
    external: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    searchDelay: {
      type: Number as PropType<number>,
      default: 0,
    },
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...validationProps,
    ...depressedProps,
    ...sizeProps,
  },
  emits: [
    'update:modelValue',
    'enter',
    'focus',
    'blur',
    'click-left-icon',
    'click-right-icon',
    'select',
    'update',
    'reload',
    'search',
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
      isFocused: false as boolean,
      isExpanded: false as boolean,
      listClicked: false as boolean,
      activeItemKey: null as string | number | null,
      searchText: '' as string,
      searchTimeout: null as any,
    };
  },
  computed: {
    selectedItems (): AutocompleteSelectedItem[] {
      return Array.isArray(this.modelValue) ? this.modelValue : (this.modelValue ? [this.modelValue] : []);
    },
    selectedItem (): AutocompleteSelectedItem | null {
      return Array.isArray(this.modelValue) ? null : this.modelValue;
    },
    computedNoMatchingItemsText (): string {
      return this.noMatchingItemsText || this.$ui.t().autocomplete.noMatchingItems;
    },
    component (): any {
      return this.textarea ? VTextarea : VInput;
    },
    filteredItems (): AutocompleteItem[] {
      const filteredItems = this.external ? this.items : this.items.filter((i) => {
        return !this.searchText ||
          i.text?.toLowerCase().includes(this.searchText.toLowerCase() || '') ||
          i.header ||
          i.divider;
      });
      return filteredItems.filter((i, index) => {
        const isNotSelectable = (i.header || i.divider) && !i.key;
        const isNextItemNotSelectable = !(filteredItems[index + 1]?.key || false);
        return !(isNotSelectable && isNextItemNotSelectable);
      });
    },
    inputClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'input',
          m: {
            expanded: this.isExpanded,
          },
        }),
      ];
    },
    itemsClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'items',
          m: {
            'theme-default': !this.light && !this.dark,
            [this.listPosition]: true,
            rounded: this.rounded,
            'rounded-lg': this.roundedLg,
            round: this.round,
          },
        }),
        this.themeClass,
      ];
    },
  },
  methods: {
    isItemSelected (key: string | number | undefined): boolean {
      return !!key && this.selectedItems.map(i => i.key).includes(key);
    },
    onKeydown (e: any): void {
      if (e.code === 'Tab') {
        this.closeList();
      }
    },
    scrollToActiveItem (): void {
      if (this.activeItemKey) {
        const list = this.$refs.list as HTMLElement;
        const listHeight = list.offsetHeight;
        const listScroll = list.scrollTop;
        const activeItem = list.querySelectorAll(`[data-item-key="${this.activeItemKey}"]`)[0] as HTMLElement;
        const itemOffset = activeItem.offsetTop;
        const itemHeight = activeItem.offsetHeight;
        if (itemOffset < listScroll) {
          list.scrollTo({
            top: itemOffset,
          });
        } else if (itemOffset + itemHeight > listHeight + listScroll) {
          list.scrollTo({
            top: itemOffset - listHeight + itemHeight,
          });
        }
      }
    },
    goToPrevious (): void {
      this.focus();
      nextTick(() => {
        const clickableItems = this.filteredItems.filter(i => !!i.key && !i.disabled);
        let activeItemIndex = clickableItems.length;
        if (this.activeItemKey) {
          activeItemIndex = clickableItems.findIndex(i => i.key === this.activeItemKey);
        }
        const newItem = clickableItems[activeItemIndex - 1];
        if (newItem) {
          this.activeItemKey = newItem.key || null;
          this.scrollToActiveItem();
        }
      });
    },
    goToNext (): void {
      this.focus();
      nextTick(() => {
        const clickableItems = this.filteredItems.filter(i => !!i.key && !i.disabled);
        let activeItemIndex = -1;
        if (this.activeItemKey) {
          activeItemIndex = clickableItems.findIndex(i => i.key === this.activeItemKey);
        }
        const newItem = clickableItems[activeItemIndex + 1];
        if (newItem) {
          this.activeItemKey = newItem.key || null;
          this.scrollToActiveItem();
        }
      });
    },
    update (value: AutocompleteItem | AutocompleteItem[] | null): void {
      this.$emit('update:modelValue', value);
      this.$emit('update', value);
    },
    removeItemFromSelected (item: AutocompleteItem): void {
      const selection = this.selectedItems.filter(i => i.key !== item.key);
      this.update(selection);
    },
    handleItemClick (item: AutocompleteItem): void {
      if (this.multiple) {
        if (!this.isItemSelected(item.key)) {
          const selection = [
            ...this.selectedItems,
            item,
          ];
          this.update(selection);
        } else {
          this.removeItemFromSelected(item);
        }
      } else {
        if (!this.isItemSelected(item.key) || Array.isArray(this.modelValue)) {
          this.$emit('select', item);
          this.update(item);
        }
        this.isFocused = false;
        this.isExpanded = false;
        this.listClicked = false;
      }
      this.activeItemKey = null;
    },
    selectActiveItem (): void {
      if (this.activeItemKey) {
        const selectedItem = this.items.find(i => i.key === this.activeItemKey);
        if (selectedItem) {
          this.handleItemClick(selectedItem);
        }
      }
    },
    handleInputEnter (): void {
      if (this.isExpanded) {
        this.selectActiveItem();
      } else {
        this.focus();
      }
    },
    closeList (): void {
      this.isFocused = false;
      this.isExpanded = false;
      this.listClicked = false;
      this.activeItemKey = null;
    },
    itemClasses (item: AutocompleteItem): CssClass[] {
      return [
        ...this.$bem({
          e: 'item',
          m: {
            disabled: item.disabled === true,
            active: item.key === this.activeItemKey,
            selected: this.isItemSelected(item.key),
          },
        }),
        hoverableClass,
      ];
    },
    cleanSelection (): void {
      this.update(null);
    },
    reload (): void {
      this.$emit('reload');
    },
    search (value: any): void {
      this.$emit('search', value);
    },
    handleInput (value: any): void {
      this.searchText = value;
      if (!this.searchDelay) {
        this.search(value);
      } else {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          this.search(value);
        }, this.searchDelay);
      }
    },
    expand (): void {
      this.searchText = '';
      this.isExpanded = true;
    },
    focus (): void {
      this.$emit('focus');
      this.isFocused = true;
      this.expand();
    },
    clickOutsideHandler (e: any): void {
      if (!e.path?.includes((this.$refs.input as any).$el)) {
        this.closeList();
      }
    },
    blur (e: any): void {
      this.$emit('blur', e);
    },
    enter (value: any): void {
      this.$emit('enter', {
        key: null,
        text: value,
      });
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
