<template>
  <div :class="$bem({})">
    <component
      :is="component"
      ref="input"
      :model-value="modelValue?.text || ''"
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
      :right-icon="!!modelValue?.key ? 'times' : null"
      right-icon-clickable
      :disabled="disabled"
      :bordered="bordered"
      :dark="dark"
      :light="light"
      :rounded="rounded"
      :error="error"
      :hint="hint"
      @enter="enter"
      @focus="focus"
      @blur="blur"
      @input="input"
      @click-left-icon="$emit('click-left-icon')"
      @click-right-icon="cleanSelection"
      @keydown.up="goToPrevious"
      @keydown.down="goToNext"
      @keydown.enter.prevent.stop="selectActiveItem"
    >
      <template #after>
        <transition
          v-if="isExpanded"
          name="slide-top"
        >
          <div
            ref="list"
            class="is-elevated"
            :class="itemsClasses"
            :style="{maxHeight: `${maxHeight}px`}"
            @click="listClicked = true"
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
                  @mousedown="select(item)"
                >
                  <slot
                    :id="item.key"
                    name="item"
                    :text="item.text"
                    :metadata="item.metadata"
                    :is-active="modelValue && item.key === modelValue.key"
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
import { VInput } from '@/components/Input';
import { VTextarea } from '@/components/Textarea';
import { VAsyncContent } from '@/components/AsyncContent';
import {
  CssClass,
  hoverableClass
} from '@/helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  validationProps,
  useBordered,
  useTheme,
  useRounded
} from '@/composition-functions';
import {
  AutocompleteItem,
  AutocompleteSelectedItem
} from './models';

export default defineComponent({
  name: 'VAutocomplete',
  components: {
    VInput,
    VTextarea,
    VAsyncContent
  },
  props: {
    modelValue: {
      type: Object as PropType<AutocompleteSelectedItem | null>,
      default: null
    },
    items: {
      type: Array as PropType<AutocompleteItem[]>,
      required: true
    },
    placeholder: {
      type: String as PropType<string | null>,
      default: null
    },
    type: {
      type: String as PropType<string>,
      default: 'text'
    },
    required: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    min: {
      type: Number as PropType<number | string | null>,
      default: null
    },
    max: {
      type: Number as PropType<number | string | null>,
      default: null
    },
    maxlength: {
      type: Number as PropType<number | string | null>,
      default: null
    },
    step: {
      type: Number as PropType<number>,
      default: 1
    },
    label: {
      type: String as PropType<string | null>,
      default: null
    },
    width: {
      type: Number as PropType<number | null>,
      default: null
    },
    leftIcon: {
      type: String as PropType<string | null>,
      default: null
    },
    leftIconClickable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    leftIconColor: {
      type: String as PropType<string | null>,
      default: null
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    maxHeight: {
      type: Number as PropType<number>,
      default: 320
    },
    listPosition: {
      type: String as PropType<'top' | 'bottom'>,
      default: 'bottom',
      validator: (val: string) => ['top', 'bottom'].includes(val)
    },
    itemsLoading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    itemsError: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    itemsReloadable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    textarea: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    rows: {
      type: Number as PropType<number | string | null>,
      default: null
    },
    noMatchingItemsText: {
      type: String as PropType<string>,
      default: ''
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...validationProps
  },
  emits: [
    'update:modelValue',
    'enter',
    'focus',
    'blur',
    'input',
    'click-left-icon',
    'click-right-icon',
    'select',
    'update',
    'reload'
  ],
  setup (props) {
    const {
      dark,
      light,
      bordered,
      rounded,
      roundedLg,
      round
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg, round)
    };
  },
  data () {
    return {
      isFocused: false as boolean,
      isExpanded: false as boolean,
      listClicked: false as boolean,
      activeItemKey: null as string | number | null
    };
  },
  computed: {
    computedNoMatchingItemsText (): string {
      return this.noMatchingItemsText || this.$ui.t().autocomplete.noMatchingItems;
    },
    component (): any {
      return this.textarea ? VTextarea : VInput;
    },
    filteredItems (): AutocompleteItem[] {
      const filteredItems = this.items.filter((i) => {
        return !this.modelValue ||
          i.text?.toLowerCase().includes(this.modelValue?.text?.toLowerCase() || '') || i.header || i.divider;
      });
      return filteredItems.filter((i, index) => {
        const isNotSelectable = (i.header || i.divider) && !i.key;
        const isNextItemNotSelectable = !(filteredItems[index + 1]?.key || false);
        return !(isNotSelectable && isNextItemNotSelectable);
      });
    },
    itemsClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'items',
          m: {
            'theme-default': !this.light && !this.dark,
            [this.listPosition]: true
          }
        }),
        this.themeClass,
        this.borderedClass,
        this.roundedClass
      ];
    }
  },
  methods: {
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
            top: itemOffset
          });
        } else if (itemOffset + itemHeight > listHeight + listScroll) {
          list.scrollTo({
            top: itemOffset - listHeight + itemHeight
          });
        }
      }
    },
    goToPrevious (): void {
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
    },
    goToNext (): void {
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
    },
    select (item: AutocompleteItem): void {
      this.$emit('select', item);
      if (item.key !== this.modelValue?.key) {
        this.$emit('update:modelValue', item);
        this.$emit('update', item);
      }
      this.activeItemKey = null;
      this.isFocused = false;
      this.isExpanded = false;
      this.listClicked = false;
    },
    selectActiveItem (): void {
      if (this.activeItemKey) {
        const selectedItem = this.items.find(i => i.key === this.activeItemKey);
        if (selectedItem) {
          this.select(selectedItem);
        }
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
            active: item.key === this.activeItemKey
          }
        }),
        hoverableClass
      ];
    },
    cleanSelection (): void {
      this.$emit('update:modelValue', null);
      this.$emit('update', null);
    },
    reload (): void {
      this.$emit('reload');
    },
    input (value: any): void {
      const item = {
        key: null,
        text: value
      };
      this.$emit('input', item);
      this.$emit('update:modelValue', item);
      this.$emit('update', item);
    },
    focus (): void {
      this.$emit('focus');
      this.isFocused = true;
      this.isExpanded = true;
    },
    blur (): void {
      this.$emit('blur');
      nextTick(() => {
        this.closeList();
      });
    },
    enter (value: any): void {
      this.$emit('enter', {
        key: null,
        text: value
      });
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
