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
        <DmIcon
          name="caret-down"
          :class="arrowClasses"
          :color="arrowColor"
        />
      </div>
    </div>
    <transition name="v--slide-down">
      <div
        v-if="isExpanded"
        class="v--elevated"
        :class="itemsClasses"
        :style="{maxHeight: `${maxHeight}px`}"
      >
        <div
          v-for="item of items"
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
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { DmIcon } from '@/components/DmIcon';
import {
  colorClass,
  hoverBgColorClass,
  hoverableClass,
  CssClass
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
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faCaretDown
);

export default defineComponent({
  name: 'VSelect',
  components: { DmIcon },
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
    activeColor: {
      type: String as PropType<string>,
      default: 'primary'
    },
    hoverBgColor: {
      type: String as PropType<string>,
      default: 'primary'
    },
    borderColor: {
      type: String as PropType<string | null>,
      default: null
    },
    arrowColor: {
      type: String as PropType<string>,
      default: 'primary'
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
      isExpanded: false as boolean
    };
  },
  computed: {
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
          'v--elevated': this.isExpanded,
          [hoverableClass]: !this.isExpanded

        },
        this.themeClass,
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
    itemsClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'items',
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
      return this.placeholder || 'Szukaj';
    },
    selectedItemText (): string | null {
      return this.selectedItem ? this.selectedItem.text : this.computedPlaceholder;
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
        this.isExpanded = !this.isExpanded;
      }
    },
    itemClasses (item: SelectItem): CssClass[] {
      return [
        ...this.$bem({
          e: 'item',
          m: {
            disabled: item.disabled === true
          }
        }),
        hoverBgColorClass(this.hoverBgColor)
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
