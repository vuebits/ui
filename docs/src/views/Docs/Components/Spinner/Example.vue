<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiSpinner :size="size" />
    </Preview>
    <template #controls>
      <Knobs>
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
import { Preview, Sandbox, Knobs, KnobListItem } from '@/components'
import { UiSpinner } from '@vuebits/ui'

export default {
  name: 'SpinnerExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    UiSpinner,
  },
  data() {
    return {
      sizes: [
        '-',
        'lg',
        'xs',
        'sm',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x',
        '10x',
      ],
      size: '3x',
    }
  },
}
</script>
