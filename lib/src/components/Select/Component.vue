<template>
  <UiTooltip
    ref="tooltip"
    clickable
    :position="listPosition"
    v-bind="$ui.testElName('select')"
    :class="$bem({})"
    @open="handleOpen"
    @close="handleClose"
  >
    <template #activator="{ on }">
      <div
        :class="classes"
        v-bind="$ui.testElName('select-value')"
        class="is-hoverable"
        tabindex="0"
        v-on="on"
      >
        <div
          v-if="leftIcon"
          :class="[
            ...$bem({
              e: 'icon',
              m: { clickable: leftIconClickable, round: round },
            }),
            roundedClass,
          ]"
          v-bind="$ui.testElName('select-icon-left')"
          @click="onLeftIconClick"
        >
          <UiIcon
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
          <div
            v-if="multiple"
            :class="$bem({ e: 'selected-items' })"
          >
            <template v-if="!selectedItems.length">
              {{ computedPlaceholder }}
            </template>
            <UiBadge
              v-for="(item, i) in selectedItems"
              :key="i"
              :class="$bem({ e: 'selected-item-badge' })"
              color="primary"
              round
            >
              <slot
                :id="item.key"
                name="selected-item"
                :text="item.text"
                :metadata="item.metadata"
              >
                <div :class="$bem({ e: 'selected-item-badge-text' })">
                  {{ item.text }}
                </div>
              </slot>
              <UiIconButton
                :icon="$ui.icons.values.close"
                size="sm"
                round
                color="primary"
                :class="$bem({ e: 'selected-item-remove' })"
                @click.stop="removeItemFromSelected(item.key)"
              />
            </UiBadge>
          </div>
          <div
            v-else
            :class="$bem({ e: 'selected-item' })"
          >
            <div :class="$bem({ e: 'selected-item-text' })">
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
          <UiIcon
            :name="$ui.icons.values.expand"
            :class="arrowClasses"
          />
        </div>
        <div
          v-if="clearable && modelValue"
          :class="[...$bem({ e: 'icon', m: { clickable: true, round: round } }), roundedClass]"
          v-bind="$ui.testElName('select-clear-button')"
          @click.stop="clearSelection"
        >
          <UiIcon :name="$ui.icons.values.close" />
        </div>
      </div>
    </template>
    <template #default="{ close }">
      <div
        :class="dropdownClasses"
        v-bind="$ui.testElName('select-dropdown')"
      >
        <div
          v-if="search"
          :class="$bem({ e: 'search-input' })"
        >
          <input
            ref="searchInput"
            v-model="searchQuery"
            :placeholder="computedSearchPlaceholder"
            no-hint
            v-bind="$ui.testElName('select-search')"
            @input="$emit('search', $event)"
          />
        </div>
        <div
          :class="$bem({ e: 'items' })"
          :style="{ maxHeight: `${maxHeight}px` }"
          v-bind="$ui.testElName('select-list')"
        >
          <div
            v-for="(item, i) of filteredItems"
            :key="i"
            :class="itemClasses(item)"
            v-bind="$ui.testElName('select-item')"
            @click="handleItemClick(item, close)"
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
            v-if="!filteredItems.length"
            :class="$bem({ e: 'no-items' })"
          >
            {{ $ui.t().select.noMatchingItems }}
          </div>
        </div>
      </div>
    </template>
  </UiTooltip>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, PropType, ref, toRefs } from 'vue'
import { UiIcon } from '../Icon'
import { UiBadge } from '../Badge'
import { UiIconButton } from '../IconButton'
import { UiTooltip } from '../Tooltip'
import { colorClass, CssClass, hoverableClass } from '../../helpers/css-classes'
import {
  borderedProps,
  themeProps,
  roundedProps,
  useBordered,
  useTheme,
  useRounded,
  sizeProps,
  validationProps,
} from '../../composables'
import { ClickOutside } from '../../directives'
import { SelectItem, SelectItemKey, SelectValue } from './models'
import { defineBem } from '../../helpers/bem'
import { TooltipPosition } from '../../models'

export default defineComponent({
  name: 'UiSelect',
  components: {
    UiIcon,
    UiBadge,
    UiIconButton,
    UiTooltip,
  },
  directives: { ClickOutside },
  props: {
    modelValue: {
      type: [Number, String, Array] as PropType<SelectValue>,
      default: null,
    },
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false,
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
    externalSearch: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    listPosition: {
      type: String as PropType<TooltipPosition | null>,
      default: null,
    },
    ...themeProps,
    ...borderedProps,
    ...roundedProps,
    ...sizeProps,
    ...validationProps,
  },
  emits: ['update:model-value', 'select', 'change', 'click-left-icon', 'search'],
  setup(props, { emit }) {
    const { dark, light, bordered, rounded, roundedLg } = toRefs(props)

    const isExpanded = ref(false)
    const bem = defineBem('UiSelect')
    const searchQuery = ref('')
    const searchFocusing = ref(false)
    const searchInput = ref<HTMLInputElement | null>(null)
    const selectedItem = computed((): SelectItem | null =>
      !props.modelValue || Array.isArray(props.modelValue)
        ? null
        : props.items.find((item) => item.key === props.modelValue) ?? null,
    )
    const selectedKeys = computed(() =>
      Array.isArray(props.modelValue)
        ? props.modelValue
        : props.modelValue
          ? [props.modelValue]
          : [],
    )
    const selectedItems = computed((): SelectItem[] =>
      props.items.filter((item) => {
        return selectedKeys.value.includes(item.key)
      }),
    )
    const isItemSelected = (key: SelectItemKey): boolean =>
      !!key && selectedKeys.value.includes(key)
    const update = (value: SelectValue): void => {
      emit('update:model-value', value)
    }
    const removeItemFromSelected = (key: SelectItemKey): void => {
      const selection = selectedItems.value.filter((i) => i.key !== key)
      update(selection.map((i) => i.key))
      emit('change', selection)
    }
    const handleItemClick = (item: SelectItem, close: any): void => {
      if (item.disabled) return
      if (props.multiple) {
        if (!isItemSelected(item.key)) {
          const selection = [...selectedItems.value, item]
          update(selection.map((i) => i.key))

          emit('change', selection)
          emit('select', selection)
        } else {
          removeItemFromSelected(item.key)
        }
      } else {
        if (!isItemSelected(item.key) || Array.isArray(props.modelValue)) {
          update(item.key)
          emit('change', item)
          emit('select', item)
        }
        isExpanded.value = false
        close()
      }
    }

    const clearSelection = (): void => {
      update(props.multiple ? [] : null)
    }

    const handleOpen = (): void => {
      searchQuery.value = ''
      isExpanded.value = true
      nextTick(() => {
        if (props.search) {
          searchFocusing.value = true
          searchInput.value?.focus()
        }
      })
    }

    const handleClose = (): void => {
      searchQuery.value = ''
      isExpanded.value = false
    }

    return {
      themeClass: useTheme(dark, light),
      borderedClass: useBordered(bordered),
      roundedClass: useRounded(rounded, roundedLg),
      bem,
      selectedItems,
      isItemSelected,
      selectedItem,
      isExpanded,
      searchQuery,
      handleItemClick,
      clearSelection,
      removeItemFromSelected,
      searchInput,
      handleOpen,
      handleClose,
    }
  },
  computed: {
    computedSearchPlaceholder(): string {
      return this.searchPlaceholder || this.$ui.t().select.search
    },
    classes(): CssClass[] {
      return [
        ...this.$bem({
          e: 'input',
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
      ]
    },
    labelClasses(): CssClass[] {
      return [
        ...this.$bem({
          e: 'label',
        }),
        colorClass(this.labelColor),
      ]
    },
    arrowClasses(): CssClass[] {
      return [
        ...this.$bem({
          e: 'arrow',
          m: {
            expanded: this.isExpanded,
          },
        }),
      ]
    },
    dropdownClasses(): CssClass[] {
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
      ]
    },
    computedPlaceholder(): string | null {
      return this.placeholder || this.$ui.t().select.placeholder
    },
    selectedItemText(): string | null {
      return this.selectedItem ? this.selectedItem.text : this.computedPlaceholder
    },
    filteredItems(): SelectItem[] {
      return this.searchQuery && !this.externalSearch
        ? this.items.filter((i) =>
            i.text.toLowerCase().includes(this.searchQuery.toLowerCase()),
          )
        : this.items
    },
  },
  methods: {
    itemClasses(item: SelectItem): CssClass[] {
      return [
        ...this.$bem({
          e: 'item',
          m: {
            active: this.isItemSelected(item.key),
            disabled: item.disabled === true,
          },
        }),
        {
          [hoverableClass]: !this.isItemSelected(item.key),
        },
      ]
    },
    onLeftIconClick(): void {
      if (this.leftIconClickable) this.$emit('click-left-icon')
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
