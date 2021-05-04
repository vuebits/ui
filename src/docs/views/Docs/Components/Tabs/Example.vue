<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VTabs
        v-model="tab"
        :items="tabs"
      >
        <template #1>
          Tab 1 content
        </template>
        <template #2>
          Tab 2 content
        </template>
        <template #3>
          Tab 3 content
        </template>
      </VTabs>
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
import {
  Preview,
  Sandbox,
  Knobs,
  KnobListItem
} from '@/docs/components';
import {
  VTabs
} from '@/components';

export default {
  name: 'TabsExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    VTabs
  },
  data () {
    return {
      tabs: [
        {
          key: 1,
          text: 'Tab 1'
        },
        {
          key: 2,
          text: 'Tab 2'
        },
        {
          key: 3,
          text: 'Tab 3'
        }
      ],
      tab: 2
    };
  }
};
</script>
