<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiTable
        :headers="headers"
        :items="items"
        :bordered="bordered"
        :elevated="elevated"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :fixed-header="fixedHeader"
        :expandable="expandable"
        :multiple-expand="multipleExpand"
        :padding="padding"
        :hide-parent-row-on-expand="hideParentRowOnExpand"
        :expand-on-row-click="expandOnRowClick"
        style="height: 30rem"
        :loading="loading"
      >
        <template #expanded-item="{ item }">
          <div
            style="width: 100%"
            class="has-padding-lg"
          >
            {{ item.name }}
          </div>
        </template>
      </UiTable>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="dark"
          label="Dark"
        />
        <KnobBoolean
          v-model="light"
          label="Light"
        />
        <KnobBoolean
          v-model="bordered"
          label="Bordered"
        />
        <KnobBoolean
          v-model="elevated"
          label="Elevated"
        />
        <KnobBoolean
          v-model="rounded"
          label="Rounded"
        />
        <KnobBoolean
          v-model="roundedLg"
          label="Rounded large"
        />
        <KnobBoolean
          v-model="fixedHeader"
          label="Fixed header"
        />
        <KnobBoolean
          v-model="expandable"
          label="Expandable"
        />
        <KnobBoolean
          v-model="multipleExpand"
          label="Multiple expand"
        />
        <KnobBoolean
          v-model="hideParentRowOnExpand"
          label="Hide parent row on expand"
        />
        <KnobBoolean
          v-model="expandOnRowClick"
          label="Expand on row click"
        />
        <KnobListItem
          v-model="padding"
          label="Padding"
          :items="spacings"
        />
        <KnobBoolean
          v-model="loading"
          label="Loading"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script lang="ts">
import { Preview, Sandbox, Knobs, KnobBoolean, KnobListItem } from '@/components'
import { UiTable } from '@vuebits/ui'
import { spacings } from '@/helpers/story-params'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    KnobListItem,
    UiTable,
  },
  data() {
    return {
      headers: [
        {
          for: 'id',
          label: 'Id',
        },
        {
          for: 'name',
          label: 'Name',
        },
        {
          for: 'age',
          label: 'Age',
        },
      ],
      items: [
        {
          id: '1',
          name: 'John Doe',
          age: 35,
        },
        {
          id: '2',
          name: 'Martin Doyle',
          age: 48,
        },
        {
          id: '3',
          name: 'Adam Smith',
          age: 23,
        },
        {
          id: '4',
          name: 'John Doe',
          age: 35,
        },
        {
          id: '5',
          name: 'Martin Doyle',
          age: 48,
        },
        {
          id: '6',
          name: 'Adam Smith',
          age: 23,
        },
        {
          id: '7',
          name: 'John Doe',
          age: 35,
        },
        {
          id: '8',
          name: 'Martin Doyle',
          age: 48,
        },
        {
          id: '9',
          name: 'Adam Smith',
          age: 23,
        },
        {
          id: '10',
          name: 'John Doe',
          age: 35,
        },
        {
          id: '11',
          name: 'Martin Doyle',
          age: 48,
        },
        {
          id: '12',
          name: 'Adam Smith',
          age: 23,
        },
      ],
      spacings,
      bordered: false,
      elevated: false,
      rounded: false,
      roundedLg: false,
      dark: false,
      light: false,
      fixedHeader: false,
      expandable: false,
      multipleExpand: false,
      hideParentRowOnExpand: false,
      expandOnRowClick: false,
      padding: 'xs' as any,
      loading: false,
    }
  },
})
</script>

<style lang="scss"></style>
