<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiRadio
        model-value="radio-1"
        name="radio-1"
        group-name="radio-group"
        :bordered="bordered"
        :dark="dark"
        :light="light"
        :disabled="disabled"
        :error="error"
        :label="label"
        color="error"
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
        <KnobBoolean
          v-model="disabled"
          label="Disabled"
        />
        <KnobString
          v-model="label"
          label="Label"
        />
        <KnobBoolean
          v-model="error"
          label="Error"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobBoolean, KnobString } from '@/components'
import { UiRadio } from '@vuebits/ui'

export default {
  name: 'RadioExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    UiRadio,
    KnobBoolean,
    KnobString,
  },
  data() {
    return {
      bordered: true,
      dark: false,
      light: true,
      disabled: false,
      error: false,
      label: 'some label...',
    }
  },
}
</script>
