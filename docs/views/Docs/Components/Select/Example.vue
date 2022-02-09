<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview
      height="200px"
    >
      <VSelect
        v-model="value"
        :items="items"
        :bordered="bordered"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :disabled="disabled"
        :size="size"
        :error="error"
        :left-icon="leftIcon"
        :clearable="clearable"
        :label="label"
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
        <KnobListItem
          v-model="leftIcon"
          :items="icons"
          label="Left icon"
        />
        <KnobBoolean
          v-model="error"
          label="Error"
        />
        <KnobBoolean
          v-model="clearable"
          label="Clearable"
        />
        <KnobString
          v-model="label"
          label="Label"
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
  KnobBoolean,
  KnobListItem,
  KnobString,
} from '@/components';
import {
  VSelect,
} from '@vuebits/ui';
import { icons, sizes } from '@/helpers/story-params';

export default {
  name: 'SelectExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    KnobListItem,
    KnobString,
    VSelect,
  },
  data () {
    return {
      items: [
        {
          key: 1,
          text: 'Item 1',
        },
        {
          key: 2,
          text: 'Item 2',
        },
        {
          key: 3,
          text: 'Item 3',
        },
      ],
      value: 1,
      bordered: true,
      round: true,
      rounded: false,
      roundedLg: false,
      dark: false,
      light: true,
      disabled: false,
      sizes,
      size: 'md',
      error: false,
      icons,
      leftIcon: null,
      clearable: false,
      label: '',
    };
  },
};
</script>
