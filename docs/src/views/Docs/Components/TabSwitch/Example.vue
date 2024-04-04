<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiTabSwitch
        v-model="selectedTab"
        :tabs="tabs"
      />
      <p class="value-preview">
        {{ selectedTab }}
      </p>
    </Preview>
    <template #controls>
      <Knobs />
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs } from '@/components'
import { UiTabSwitch } from '@vuebits/ui'

export default {
  name: 'TabSwitchExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    UiTabSwitch,
  },
  data() {
    return {
      selectedTab: '',
      tabs: [
        {
          label: 'Label',
          value: 'value1',
        },
        {
          label: 'Slightly Longer Label',
          value: 'value2',
        },
        {
          label: 'Label Medium',
          value: 'value3',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.value-preview {
  margin: 1rem 0.5rem 0;
}
</style>
