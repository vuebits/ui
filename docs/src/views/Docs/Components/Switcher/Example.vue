<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VSwitcher
        v-model="value"
        on-label="yes"
        off-label="no"
        :color="color"
        :gradient="gradient"
        :inverse-colors="inverseColors"
      />
      {{ value }}
    </Preview>
    <template #controls>
      <Knobs>
        <KnobListItem
          v-model="color"
          :items="colors"
          label="Color"
        />
        <KnobListItem
          v-model="gradient"
          :items="gradients"
          label="Gradient"
        />
        <KnobBoolean
          v-model="inverseColors"
          label="Inverse colors"
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
  KnobListItem,
  KnobBoolean,
} from '@/components';
import {
  VSwitcher,
} from '@vuebits/ui';
import { colors, gradients } from '@/helpers/story-params';

export default {
  name: 'SwitcherExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    VSwitcher,
  },
  data () {
    return {
      value: true,
      colors,
      color: null,
      gradients,
      gradient: 'secondary',
      inverseColors: false,
    };
  },
};
</script>
