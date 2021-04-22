<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VIcon
        :name="name"
        :prefix="prefix"
        :type="type"
        :size="size"
        :rotate="rotate"
        :flip="flip"
        :pulse="pulse"
        :spin="spin"
      />
    </Preview>
    <Knobs>
      <KnobListItem
        v-model="name"
        :items="icons"
        label="Name"
      />
      <KnobString
        v-model="prefix"
        label="Prefix"
      />
      <KnobString
        v-model="type"
        label="Type"
      />
      <KnobListItem
        v-model="size"
        :items="sizes"
        label="Size"
      />
      <KnobListItem
        v-model="rotate"
        :items="rotations"
        label="Rotate"
      />
      <KnobListItem
        v-model="flip"
        :items="flips"
        label="Flip"
      />
      <KnobBoolean
        v-model="pulse"
        label="Pulse"
      />
      <KnobBoolean
        v-model="spin"
        label="Spin"
      />
    </Knobs>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs,
  KnobListItem,
  KnobBoolean,
  KnobString
} from '@/docs/components';
import {
  VIcon
} from '@/components';
import { icons } from '@/docs/helpers/story-params';

export default {
  name: 'TileExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VIcon
  },
  data () {
    return {
      icons: icons,
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
      rotations: [
        '-',
        '90',
        '180',
        '270'
      ],
      flips: [
        '-',
        'horizontal',
        'vertical',
        'both'
      ],
      name: 'check',
      prefix: 'fa-',
      type: 'fa',
      size: '-',
      rotate: '-',
      flip: '-',
      pulse: false,
      spin: false
    };
  }
};
</script>
