<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiSwitcher
        v-model="value"
        on-label="yes"
        off-label="no"
        :color="color"
        :false-color="falseColor"
        :gradient="gradient"
        :dark="dark"
        :light="light"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :bordered="bordered"
        :elevated="elevated"
        :inverse-colors="inverseColors"
        :disabled="disabled"
        :size="size"
      />
      {{ value }}
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
        <KnobListItem
          v-model="color"
          :items="colors"
          label="Color"
        />
        <KnobListItem
          v-model="falseColor"
          :items="colors"
          label=" False color"
        />
        <KnobListItem
          v-model="gradient"
          :items="gradients"
          label="Gradient"
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
          v-model="round"
          label="Round"
        />
        <KnobBoolean
          v-model="disabled"
          label="Disabled"
        />
        <KnobListItem
          v-model="size"
          :items="sizes"
          label="Size"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem, KnobBoolean } from '@/components'
import { UiSwitcher } from '@vuebits/ui'
import { colors, gradients, sizes } from '@/helpers/story-params'

export default {
  name: 'SwitcherExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    UiSwitcher,
  },
  data() {
    return {
      value: true,
      colors,
      color: null,
      gradients,
      gradient: 'secondary',
      disabled: false,
      light: false,
      dark: false,
      round: true,
      rounded: false,
      roundedLg: false,
      bordered: true,
      elevated: false,
      sizes,
      size: 'md',
      falseColor: null,
    }
  },
}
</script>
