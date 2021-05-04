<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VSpinner
        :size="size"
      />
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
import {
  Preview,
  Sandbox,
  Knobs,
  KnobListItem
} from '@/docs/components';
import {
  VSpinner
} from '@/components';

export default {
  name: 'SpinnerExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    VSpinner
  },
  data () {
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
        '10x'
      ],
      size: '3x'
    };
  }
};
</script>
