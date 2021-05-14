<template>
  <div :class="classes">
    <table :class="$bem({e: 'table'})">
      <thead
        :class="$bem({e: 'table-header'})"
      >
        <tr
          :class="$bem({e: 'table-header-row'})"
        >
          <th
            v-for="header in headers"
            :key="header.name"
            :class="headerCellClasses"
          >
            {{ header.text }}
          </th>
          <th
            v-if="expandable"
            :class="headerCellClasses"
          />
        </tr>
      </thead>
      <tbody
        :class="$bem({e: 'table-body'})"
      >
        <template
          v-for="(item, index) in items"
          :key="index"
        >
          <tr
            :class="rowClasses(item)"
            class="is-hoverable"
            @click="handleRowClick(item)"
          >
            <slot name="item">
              <td
                v-for="header in headers"
                :key="header.name"
                :class="cellClasses(item)"
                :style="`--header: '${header.text}'`"
              >
                <slot
                  :name="`item-${header.name}`"
                  :field="item[header.name]"
                >
                  {{ item[header.name] }}
                </slot>
              </td>
            </slot>
            <td
              v-if="expandable"
              :class="cellClasses(item, true)"
            >
              <VIcon
                v-if="expandOnRowClick"
                :name="getExpandIcon(item)"
                is-internal
              />
              <VIconButton
                v-else
                :icon="getExpandIcon(item)"
                hoverable
                rounded
                @click="toggleExpansion(item)"
              />
            </td>
          </tr>
          <tr v-if="isExpanded(item)">
            <td
              :colspan="headers.length + 1"
              :class="$bem({ e: 'expanded-item' })"
            >
              <slot
                name="expanded-item"
                :item="item"
              />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { TableHeader } from './models';
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
  usePadding
} from '@/composition-functions';
import {
  CssClass
} from '@/helpers/css-classes';
import { VIconButton } from '@/components/IconButton';
import { VIcon } from '@/components/Icon';

type TableItem = {[key in string]: any};

export default defineComponent({
  name: 'VTable',
  components: {
    VIconButton,
    VIcon
  },
  props: {
    headers: {
      type: Array as PropType<TableHeader[]>,
      required: true
    },
    items: {
      type: Array as PropType<TableItem[]>,
      required: true
    },
    fixedHeader: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    expandable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    multipleExpand: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    hideMainContentOnExpand: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    expandOnRowClick: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    ...themeProps,
    ...roundedProps,
    ...elevatedProps,
    ...borderedProps,
    ...paddingProps
  },
  setup (props) {
    const {
      dark,
      light,
      rounded,
      roundedLg,
      round,
      elevated,
      bordered,
      padding
    } = toRefs(props);

    return {
      themeClass: useTheme(dark, light),
      roundedClass: useRounded(rounded, roundedLg, round),
      elevatedClass: useElevated(elevated),
      borderedClass: useBordered(bordered),
      paddingClass: usePadding(padding)
    };
  },
  data () {
    return {
      expandedItems: [] as TableItem[]
    };
  },
  computed: {
    classes (): CssClass[] {
      return [
        ...this.$bem({}),
        this.themeClass,
        this.roundedClass,
        this.elevatedClass,
        this.borderedClass
      ];
    },
    headerCellClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'table-header-cell',
          m: {
            fixed: this.fixedHeader
          }
        }),
        this.themeClass,
        this.paddingClass
      ];
    }
  },
  methods: {
    isExpanded (item: TableItem): boolean {
      return !!this.expandedItems.find(i => JSON.stringify(i) === JSON.stringify(item));
    },
    getExpandIcon (item: TableItem): string {
      return this.isExpanded(item) ? 'chevron-up' : 'chevron-down';
    },
    toggleExpansion (item: TableItem): void {
      if (this.isExpanded(item)) {
        this.expandedItems = this.expandedItems.filter(i => JSON.stringify(i) !== JSON.stringify(item));
      } else if (this.multipleExpand) {
        this.expandedItems.push(item);
      } else {
        this.expandedItems = [item];
      }
    },
    handleRowClick (item: TableItem): void {
      if (this.expandable && this.expandOnRowClick) {
        this.toggleExpansion(item);
      }
    },
    rowClasses (item: TableItem): CssClass[] {
      return [
        ...this.$bem({
          e: 'table-row',
          m: {
            expanded: this.isExpanded(item),
            clickable: this.expandOnRowClick
          }
        })
      ];
    },
    cellClasses (item: TableItem, isActionCell = false): CssClass[] {
      return [
        ...this.$bem({
          e: 'table-cell',
          m: {
            action: isActionCell,
            hidden: this.hideMainContentOnExpand && this.isExpanded(item) && !isActionCell
          }
        }),
        this.paddingClass
      ];
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
