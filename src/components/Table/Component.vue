<template>
  <div :class="$bem({})">
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
            :class="$bem({e: 'table-header-cell'})"
          >
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody
        :class="$bem({e: 'table-body'})"
      >
        <tr
          v-for="(item, index) in items"
          :key="index"
          :class="$bem({e: 'table-row'})"
        >
          <slot name="item">
            <td
              v-for="header in headers"
              :key="header.name"
              :class="$bem({e: 'table-cell'})"
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TableHeader } from './models';

export default defineComponent({
  name: 'VTable',
  props: {
    headers: {
      type: Array as PropType<TableHeader[]>,
      required: true
    },
    items: {
      type: Array as PropType<{[key in string]: any}[]>,
      required: true
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
