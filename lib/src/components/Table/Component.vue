<template>
  <div
    :class="classes"
    v-bind="$ui.testElName(`${name}`)"
  >
    <div :class="$bem({ e: 'loader' })">
      <div
        v-if="loading"
        :class="$bem({ e: 'loader-progress' })"
      />
    </div>
    <table
      :class="$bem({ e: 'table', m: { loading: loading } })"
      v-bind="$ui.testElName('table-table')"
    >
      <thead
        :class="$bem({ e: 'header' })"
        v-bind="$ui.testElName(`${name}-header`)"
      >
        <tr :class="$bem({ e: 'header-row' })">
          <th
            v-for="header in headers"
            :key="header.for"
            :class="headerCellClasses"
            :style="cellStyles(header)"
            v-bind="$ui.testElName(`${name}-header-${header.for}`)"
          >
            <slot
              :name="`header-${header.for}`"
              :for="header.for"
              :label="header.label"
            >
              {{ header.label }}
            </slot>
          </th>
          <th
            v-if="expandable"
            :class="headerCellClasses"
          />
        </tr>
      </thead>
      <tbody :class="$bem({ e: 'body' })">
        <template v-if="items.length">
          <template
            v-for="(item, index) in items"
            :key="index"
          >
            <tr
              :class="rowClasses(item)"
              class="is-hoverable"
              v-bind="$ui.testElName(`${name}-item`)"
              @click="handleRowClick(item)"
            >
              <slot
                name="item"
                :item="item"
              >
                <td
                  v-for="header in headers"
                  :key="header.for"
                  :class="cellClasses(item, header)"
                  :style="[`--header: '${header.label}'`, cellStyles(header)]"
                  v-bind="$ui.testElName(`${name}-item-${header.for}`)"
                >
                  <slot
                    :name="header.for"
                    :field="item[header.for]"
                    :item="item"
                    :is-expanded="isExpanded(item)"
                  >
                    {{ item[header.for] }}
                  </slot>
                </td>
              </slot>
              <td
                v-if="expandable"
                :class="cellClasses(item, null)"
              >
                <UiIcon
                  v-if="expandOnRowClick"
                  :name="getExpandIcon(item)"
                />
                <UiIconButton
                  v-else
                  :icon="getExpandIcon(item)"
                  hoverable
                  rounded
                  v-bind="$ui.testElName('table-row-expand')"
                  @click="toggleExpansion(item)"
                />
              </td>
            </tr>
            <tr
              v-if="isExpanded(item)"
              :key="`details-${index}`"
            >
              <td
                :colspan="columnsCount"
                :class="$bem({ e: 'expanded-item' })"
              >
                <slot
                  name="expanded-item"
                  :item="item"
                />
              </td>
            </tr>
          </template>
        </template>
        <tr v-else>
          <td
            :class="[$bem({ e: 'body-placeholder' }), paddingClass]"
            :colspan="columnsCount"
          >
            <slot
              v-if="loading"
              name="loading"
            >
              {{ $ui.t().table.loading }}
            </slot>
            <slot
              v-else
              name="no-items"
            >
              {{ $ui.t().table.noItems }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { TableHeader, TableItem } from './models'
import {
  themeProps,
  roundedProps,
  elevatedProps,
  borderedProps,
  paddingProps,
  useTheme,
  useRounded,
  useElevated,
  useBordered,
  usePadding,
} from '../../composables'
import { CssClass } from '../../helpers/css-classes'
import { UiIconButton } from '../IconButton'
import { UiIcon } from '../Icon'

export default defineComponent({
  name: 'UiTable',
  components: {
    UiIconButton,
    UiIcon,
  },
  props: {
    name: {
      type: String as PropType<string>,
      default: 'table',
    },
    headers: {
      type: Array as PropType<TableHeader[]>,
      required: true,
    },
    items: {
      type: Array as PropType<TableItem[]>,
      required: true,
    },
    fixedHeader: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    expandable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    multipleExpand: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    hideMainContentOnExpand: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    expandOnRowClick: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    ...themeProps,
    ...roundedProps,
    ...elevatedProps,
    ...borderedProps,
    ...paddingProps,
  },
  setup(props) {
    const { dark, light, rounded, roundedLg, round, elevated, bordered, padding } =
      toRefs(props)

    return {
      themeClass: useTheme(dark, light),
      roundedClass: useRounded(rounded, roundedLg, round),
      elevatedClass: useElevated(elevated),
      borderedClass: useBordered(bordered),
      paddingClass: usePadding(padding),
    }
  },
  data() {
    return {
      expandedItems: [] as TableItem[],
    }
  },
  computed: {
    classes(): CssClass[] {
      return [
        ...this.$bem({}),
        this.themeClass,
        this.roundedClass,
        this.elevatedClass,
        this.borderedClass,
      ]
    },
    headerCellClasses(): CssClass[] {
      return [
        ...this.$bem({
          e: 'header-cell',
          m: {
            fixed: this.fixedHeader,
          },
        }),
        this.themeClass,
        this.paddingClass,
      ]
    },
    columnsCount(): number {
      return this.headers.length + (this.expandable ? 1 : 0)
    },
    headersWidth(): number {
      return this.headers.map((h) => h.width ?? 0).reduce((w1, w2) => w1 + w2)
    },
  },
  methods: {
    isExpanded(item: TableItem): boolean {
      return !!this.expandedItems.find((i) => JSON.stringify(i) === JSON.stringify(item))
    },
    getExpandIcon(item: TableItem): string {
      return this.isExpanded(item)
        ? this.$ui.icons.values.collapse
        : this.$ui.icons.values.expand
    },
    toggleExpansion(item: TableItem): void {
      if (this.isExpanded(item)) {
        this.expandedItems = this.expandedItems.filter(
          (i) => JSON.stringify(i) !== JSON.stringify(item),
        )
      } else if (this.multipleExpand) {
        this.expandedItems.push(item)
      } else {
        this.expandedItems = [item]
      }
    },
    handleRowClick(item: TableItem): void {
      if (this.expandable && this.expandOnRowClick) {
        this.toggleExpansion(item)
      }
    },
    rowClasses(item: TableItem): CssClass[] {
      return [
        ...this.$bem({
          e: 'row',
          m: {
            expanded: this.isExpanded(item),
            clickable: this.expandOnRowClick,
          },
        }),
      ]
    },
    cellClasses(item: TableItem, header: TableHeader | null): CssClass[] {
      const color = header?.color ? header.color(item[header.for], item) : null
      return [
        ...this.$bem({
          e: 'cell',
          m: {
            action: !header,
            hidden: this.hideMainContentOnExpand && this.isExpanded(item) && !!header,
          },
        }),
        this.paddingClass,
        ...(color ? [`has-color-${color}`] : []),
      ]
    },
    cellStyles({ width, align, strong }: TableHeader): any {
      return {
        width: `${((width ?? 0) / this.headersWidth) * 100}%`,
        ...(align ? { textAlign: align } : {}),
        ...(strong ? { fontWeight: 'bold' } : {}),
      }
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
