<template>
  <div
    v-click-outside="onClickOutside"
    :class="classes"
    @blur="isExpanded = false"
  >
    <div
      :class="$bem({e: 'input'})"
      @click="toggle"
    >
      <div
        :class="$bem({e: 'text-container'})"
      >
        <div
          v-if="label"
          :class="$bem({e: 'label'})"
        >
          {{ label }}
        </div>
        <div
          :class="$bem({e: 'input-selected-item'})"
        >
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
      <div
        v-if="!hideArrow"
        class="ne-select__arrow-wrapper"
      >
        <VIcon
          name="caret-down"
          :class="arrowClasses"
          is-internal
        />
      </div>
    </div>
    <transition name="slide-top">
      <div
        v-if="isExpanded"
        class="is-elevated"
        :class="dropdownClasses"
      >
        <VInput
          v-if="search"
          ref="search"
          v-model="searchQuery"
          :placeholder="computedSearchPlaceholder"
          no-hint
        />
        <div
          :class="$bem({e: 'items'})"
          :style="{maxHeight: `${maxHeight}px`}"
        >
          <div
            v-for="item of filteredItems"
            :key="item.key"
            @click="select(item)"
          >
            <div
              :class="itemClasses(item)"
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
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, PropType, toRefs } from 'vue';
import { VIcon } from '@/components/Icon';
import { VInput } from '@/components/Input';
import {
  colorClass,
  CssClass,
  hoverableClass
} from '@/helpers/css-classes';
import {
  borderedProps,
  themeProps,
  roundedProps,
  useBordered,
  useTheme,
  useRounded
} from '@/composition-functions';
import ClickOutside from '@/directives/click-outside';
import { SelectItem } from './models';

export default defineComponent({
  name: 'VSelect',
  components: {
    VIcon,
    VInput
  },
  directives: { ClickOutside },
  props: {
    modelValue: {
      type: [Number, String] as PropType<string | number | null>,
      default: null
    },
    items: {
      type: Array as PropType<SelectItem[]>,
      required: true
    },
    hideArrow: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    label: {
      type: String as PropType<string | null>,
      default: null
    },
    placeholder: {
      type: String as PropType<string | null>,
      default: null
    },
    maxHeight: {
      type: Number as PropType<number>,
      default: 320
    },
    persistent: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    labelColor: {
      type: String as PropType<string>,
      default: 'grey'
    },
    search: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    searchPlaceholder: {
      type: String as PropType<string | null>,
      default: null
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps
  },
  emits: [
    'update:modelValue',
    'select',
    'change'
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
      isExpanded: false as boolean,
      searchQuery: ''
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
            dark: this.dark
          }
        }),
        {
          'is-elevated': this.isExpanded

        },
        this.borderedClass,
        this.roundedClass
      ];
    },
    labelClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'label'
        }),
        colorClass(this.labelColor)
      ]
      ;
    },
    arrowClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'arrow',
          m: {
            expanded: this.isExpanded
          }
        })
      ]
      ;
    },
    dropdownClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'dropdown',
          m: {
            'theme-default': !this.light && !this.dark
          }
        }),
        this.themeClass,
        this.roundedClass
      ];
    },
    selectedItem (): SelectItem | null {
      return this.modelValue !== null ? this.items.find(item => item.key === this.modelValue) || null : null;
    },
    computedPlaceholder (): string | null {
      return this.placeholder || this.$ui.t().select.placeholder;
    },
    selectedItemText (): string | null {
      return this.selectedItem ? this.selectedItem.text : this.computedPlaceholder;
    },
    filteredItems (): SelectItem[] {
      return this.searchQuery ? this.items.filter(i => i.text.toLowerCase().includes(this.searchQuery.toLowerCase())) : this.items;
    }
  },
  methods: {
    select (item: SelectItem): void {
      if (!item.disabled) {
        this.isExpanded = false;
        this.$emit('update:modelValue', item.key);
        this.$emit('select', item);
        if (item.key !== this.modelValue) {
          this.$emit('change', item);
        }
      }
    },
    toggle (): void {
      if (!this.disabled) {
        if (this.isExpanded) {
          this.isExpanded = false;
        } else {
          this.searchQuery = '';
          this.isExpanded = true;
          nextTick(() => {
            (this.$refs.search as HTMLInputElement).focus();
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
            disabled: item.disabled === true
          }
        }),
        hoverableClass
      ];
    },
    onClickOutside (): void {
      if (!this.persistent) {
        this.isExpanded = false;
      }
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
