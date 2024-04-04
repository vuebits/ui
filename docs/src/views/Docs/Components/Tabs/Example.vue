<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiTabs
        v-model="tab"
        :items="tabs"
      >
        <template #1> Tab 1 content </template>
        <template #2> Tab 2 content </template>
        <template #3> Tab 3 content </template>
      </UiTabs>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobListItem
          v-model="tab"
          :items="tabs"
          label="Tab"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem } from '@/components'
import { UiTabs } from '@vuebits/ui'

export default {
  name: 'TabsExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    UiTabs,
  },
  data() {
    return {
      tabs: [
        {
          key: 1,
          text: 'Tab 1',
        },
        {
          key: 2,
          text: 'Tab 2',
        },
        {
          key: 3,
          text: 'Tab 3',
        },
      ],
      tab: 2,
    }
  },
}
</script>
