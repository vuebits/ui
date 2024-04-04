<template>
  <div
    :class="bem({})"
    v-bind="$ui.testElName('autocomplete')"
  >
    <component
      :is="component"
      ref="input"
      :readonly="!isExpanded"
      :model-value="
        isExpanded ? searchText : !multiple && selectedItem ? selectedItem.text : ''
      "
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
      :right-icon="
        clearable && selectedItem && selectedItem.key ? $ui.icons.values.close : null
      "
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
      :clearable="clearable"
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
        <div :class="bem({ e: 'selected-items' })">
          <UiBadge
            v-for="(item, i) in selectedItems"
            :key="i"
            :class="bem({ e: 'selected-item-badge' })"
            color="primary"
            round
          >
            <slot
              :id="item.key"
              name="selected-item"
              :text="item.text"
              :metadata="item.metadata"
            >
              <div :class="bem({ e: 'selected-item-badge-text' })">
                {{ item.text }}
              </div>
            </slot>
            <UiIconButton
              :icon="$ui.icons.values.close"
              size="sm"
              round
              color="primary"
              :class="bem({ e: 'selected-item-remove' })"
              @click="removeItemFromSelected(item)"
            />
          </UiBadge>
        </div>
      </template>
      <template #after>
        <transition name="slide-top">
          <div
            v-if="isExpanded"
            ref="list"
            v-click-outside="clickOutsideHandler"
            :class="itemsClasses"
            :style="{ maxHeight: `${maxHeight}px` }"
            v-bind="$ui.testElName('autocomplete-list')"
            @click.stop="listClicked = true"
          >
            <UiAsyncContent
              :loading="itemsLoading"
              :error="itemsError"
              :reloadable="itemsReloadable"
              @reload="reload"
            >
              <div
                v-if="filteredItems.length === 0"
                :class="bem({ e: 'no-items-text' })"
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
                  :class="bem({ e: 'item-header' })"
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
                  :class="bem({ e: 'item-divider' })"
                />
              </div>
              <slot name="additional-item" />
            </UiAsyncContent>
          </div>
        </transition>
      </template>
    </component>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, nextTick, ref, computed } from 'vue'
import { UiInput } from '../Input'
import { UiTextarea } from '../Textarea'
import { UiAsyncContent } from '../AsyncContent'
import { UiBadge } from '../Badge'
import { UiIconButton } from '../IconButton'
import { CssClass, hoverableClass } from '../../helpers/css-classes'
import {
  ThemeProps,
  BorderedProps,
  RoundedProps,
  ValidationProps,
  DepressedProps,
  SizeProps,
  defaultThemeProps,
  defaultBorderedProps,
  defaultRoundedProps,
  defaultValidationProps,
  defaultDepressedProps,
  defaultSizeProps,
  useTheme,
} from '../../composables'
import { AutocompleteItem, AutocompleteSelectedItem } from './models'
import { vClickOutside } from '../../directives'
import { defineBem, useUi } from '../../index'

const props = withDefaults(
  defineProps<
    {
      modelValue?: AutocompleteSelectedItem | AutocompleteSelectedItem[] | null
      items: AutocompleteItem[]
      placeholder?: string | null
      type?: string
      required?: boolean
      min?: number | string | null
      max?: number | string | null
      maxlength?: number | string | null
      step?: number
      label?: string | null
      width?: number | null
      leftIcon?: string | null
      leftIconClickable?: boolean
      leftIconColor?: string | null
      disabled?: boolean
      maxHeight?: number
      listPosition?: 'top' | 'bottom'
      itemsLoading?: boolean
      itemsError?: boolean
      itemsReloadable?: boolean
      textarea?: boolean
      rows?: number | string | null
      noMatchingItemsText?: string
      external?: boolean
      searchDelay?: number
      multiple?: boolean
      clearable?: boolean
    } & ThemeProps &
      BorderedProps &
      RoundedProps &
      ValidationProps &
      DepressedProps &
      SizeProps
  >(),
  {
    modelValue: null,
    placeholder: null,
    type: 'text',
    required: false,
    min: null,
    max: null,
    maxlength: null,
    step: 1,
    label: null,
    width: null,
    leftIcon: null,
    leftIconClickable: false,
    leftIconColor: null,
    disabled: false,
    maxHeight: 320,
    listPosition: 'bottom',
    itemsLoading: false,
    itemsError: false,
    itemsReloadable: false,
    textarea: false,
    rows: null,
    noMatchingItemsText: '',
    external: false,
    searchDelay: 0,
    multiple: false,
    clearable: true,
    ...defaultThemeProps,
    ...defaultBorderedProps,
    ...defaultRoundedProps,
    ...defaultValidationProps,
    ...defaultDepressedProps,
    ...defaultSizeProps,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: AutocompleteItem | AutocompleteItem[] | null]
  enter: [e: any]
  focus: []
  blur: [e: any]
  'click-left-icon': []
  'click-right-icon': []
  select: [value: AutocompleteItem]
  update: [value: AutocompleteItem | AutocompleteItem[] | null]
  reload: []
  search: [query: string]
}>()
const { dark, light, bordered, rounded, roundedLg } = toRefs(props)

const themeClass = useTheme(dark, light)
const ui = useUi()
const bem = defineBem('ui-autocomplete')
const list = ref<HTMLElement | null>(null)
const input = ref<InstanceType<typeof UiTextarea> | InstanceType<typeof UiInput> | null>(null)

const isFocused = ref(false)
const isExpanded = ref(false)
const listClicked = ref(false)
const activeItemKey = ref<string | number | null>(null)
const searchText = ref('')
const searchTimeout = ref<any>(null)

const selectedItems = computed((): AutocompleteSelectedItem[] =>
  Array.isArray(props.modelValue)
    ? props.modelValue
    : props.modelValue
      ? [props.modelValue]
      : [],
)
const selectedItem = computed((): AutocompleteSelectedItem | null =>
  Array.isArray(props.modelValue) ? null : props.modelValue,
)
const computedNoMatchingItemsText = computed(
  () => props.noMatchingItemsText || ui.t().autocomplete.noMatchingItems,
)
const component = computed(() => (props.textarea ? UiTextarea : UiInput))
const filteredItems = computed((): AutocompleteItem[] => {
  const filteredItems = props.external
    ? props.items
    : props.items.filter((i) => {
        return (
          !searchText.value ||
          i.text?.toLowerCase().includes(searchText.value.toLowerCase() || '') ||
          i.header ||
          i.divider
        )
      })
  return filteredItems.filter((i, index) => {
    const isNotSelectable = (i.header || i.divider) && !i.key
    const isNextItemNotSelectable = !(filteredItems[index + 1]?.key || false)
    return !(isNotSelectable && isNextItemNotSelectable)
  })
})
const inputClasses = computed((): CssClass[] => [
  ...bem({
    e: 'input',
    m: {
      expanded: isExpanded.value,
    },
  }),
])
const itemsClasses = computed((): CssClass[] => [
  ...bem({
    e: 'items',
    m: {
      'theme-default': !props.light && !props.dark,
      [props.listPosition]: true,
      rounded: props.rounded,
      'rounded-lg': props.roundedLg,
      round: props.round,
    },
  }),
  themeClass.value,
])
const isItemSelected = (key: string | number | undefined): boolean =>
  !!key && selectedItems.value.map((i) => i.key).includes(key)
const closeList = (): void => {
  isFocused.value = false
  isExpanded.value = false
  listClicked.value = false
  activeItemKey.value = null
}
const onKeydown = (e: any): void => {
  if (e.code === 'Tab') {
    closeList()
  }
}
const scrollToActiveItem = (): void => {
  if (!activeItemKey.value || !list.value) return
  const listHeight = list.value.offsetHeight
  const listScroll = list.value.scrollTop
  const activeItem = list.value.querySelectorAll(
    `[data-item-key="${activeItemKey.value}"]`,
  )[0] as HTMLElement
  const itemOffset = activeItem.offsetTop
  const itemHeight = activeItem.offsetHeight
  if (itemOffset < listScroll) {
    list.value.scrollTo({
      top: itemOffset,
    })
  } else if (itemOffset + itemHeight > listHeight + listScroll) {
    list.value.scrollTo({
      top: itemOffset - listHeight + itemHeight,
    })
  }
}
const expand = (): void => {
  searchText.value = ''
  isExpanded.value = true
}
const focus = (): void => {
  emit('focus')
  isFocused.value = true
  expand()
}
const goToPrevious = (): void => {
  focus()
  nextTick(() => {
    const clickableItems = filteredItems.value.filter((i) => !!i.key && !i.disabled)
    let activeItemIndex = clickableItems.length
    if (activeItemKey.value) {
      activeItemIndex = clickableItems.findIndex((i) => i.key === activeItemKey.value)
    }
    const newItem = clickableItems[activeItemIndex - 1]
    if (newItem) {
      activeItemKey.value = newItem.key || null
      scrollToActiveItem()
    }
  })
}
const goToNext = (): void => {
  focus()
  nextTick(() => {
    const clickableItems = filteredItems.value.filter((i) => !!i.key && !i.disabled)
    let activeItemIndex = -1
    if (activeItemKey.value) {
      activeItemIndex = clickableItems.findIndex((i) => i.key === activeItemKey.value)
    }
    const newItem = clickableItems[activeItemIndex + 1]
    if (newItem) {
      activeItemKey.value = newItem.key || null
      scrollToActiveItem()
    }
  })
}
const update = (value: AutocompleteItem | AutocompleteItem[] | null): void => {
  emit('update:modelValue', value)
  emit('update', value)
}
const removeItemFromSelected = (item: AutocompleteItem): void => {
  const selection = selectedItems.value.filter((i) => i.key !== item.key)
  update(selection)
}
const handleItemClick = (item: AutocompleteItem): void => {
  if (props.multiple) {
    if (!isItemSelected(item.key)) {
      const selection = [...selectedItems.value, item]
      update(selection)
    } else {
      removeItemFromSelected(item)
    }
  } else {
    if (!isItemSelected(item.key) || Array.isArray(props.modelValue)) {
      emit('select', item)
      update(item)
    }
    isFocused.value = false
    isExpanded.value = false
    listClicked.value = false
  }
  activeItemKey.value = null
}
const selectActiveItem = (): void => {
  if (activeItemKey.value) {
    const selectedItem = props.items.find((i) => i.key === activeItemKey.value)
    if (selectedItem) {
      handleItemClick(selectedItem)
    }
  }
}
const handleInputEnter = (): void => {
  if (isExpanded.value) {
    selectActiveItem()
  } else {
    focus()
  }
}
const itemClasses = (item: AutocompleteItem): CssClass[] => [
  ...bem({
    e: 'item',
    m: {
      disabled: item.disabled === true,
      active: item.key === activeItemKey.value,
      selected: isItemSelected(item.key),
    },
  }),
  hoverableClass,
]
const cleanSelection = (): void => {
  update(null)
}
const reload = (): void => {
  emit('reload')
}
const search = (value: any): void => {
  emit('search', value)
}
const handleInput = (value: any): void => {
  searchText.value = value
  if (!props.searchDelay) {
    search(value)
  } else {
    clearTimeout(searchTimeout.value)
    searchTimeout.value = setTimeout(() => {
      search(value)
    }, props.searchDelay)
  }
}
const clickOutsideHandler = (e: any): void => {
  if (!input.value) return
  const inputEl = input.value.$el
  if (!inputEl.contains(e.target)) {
    closeList()
  }
}
const blur = (e: any): void => {
  emit('blur', e)
}
const enter = (value: any): void => {
  emit('enter', {
    key: null,
    text: value,
  })
}

defineExpose({
  focus,
})
</script>

<style lang="scss">
@import './Autocomplete';
</style>
