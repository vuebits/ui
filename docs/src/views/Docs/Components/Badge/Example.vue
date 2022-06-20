<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VBadge
        :bordered="bordered"
        :elevated="elevated"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :color="color"
        :size="size"
        :disabled="disabled"
      >
        Configure me
      </VBadge>
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
        <KnobListItem
          v-model="color"
          :items="colors"
          label="Color"
        />
        <KnobListItem
          v-model="size"
          :items="sizes"
          label="Size"
        />
        <KnobBoolean
          v-model="bordered"
          label="Bordered"
        />
        <KnobBoolean
          v-model="elevated"
          label="Elevated"
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
  VBadge,
} from '@vuebits/ui';
import { colors, sizes } from '@/helpers/story-params';

export default {
  name: 'BadgeExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    VBadge,
  },
  data () {
    return {
      colors,
      sizes,
      bordered: false,
      elevated: false,
      round: true,
      rounded: false,
      roundedLg: false,
      dark: true,
      light: false,
      color: 'primary',
      size: 'sm',
      disabled: false,
    };
  },
};
</script>
