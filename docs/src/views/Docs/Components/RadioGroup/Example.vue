<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiRadioGroup
        v-model="selectedItem"
        :items="items"
        name="radio-group"
        :bordered="bordered"
        :dark="dark"
        :light="light"
        :error="error"
        :inline="inline"
      />
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
        <KnobString
          v-model="label"
          label="Label"
        />
        <KnobBoolean
          v-model="error"
          label="Error"
        />
        <KnobBoolean
          v-model="inline"
          label="Inline"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobBoolean, KnobString } from '@/components'
import { UiRadioGroup } from '@vuebits/ui'

export default {
  name: 'RadioGroupExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    UiRadioGroup,
    KnobBoolean,
    KnobString,
  },
  data() {
    return {
      selectedItem: 1,
      items: [
        {
          name: 1,
          label: 'Option 1',
        },
        {
          name: 2,
          label: 'Option 2',
        },
        {
          name: 3,
          label: 'Option 3 (disabled)',
          disabled: true,
        },
        {
          name: 4,
          label: 'Option 4',
        },
      ],
      bordered: true,
      dark: false,
      light: true,
      error: false,
      inline: false,
    }
  },
}
</script>
