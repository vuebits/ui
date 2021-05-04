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
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs,
  KnobBoolean
} from '@/docs/components';
import {
  VSelect
} from '@/components';

export default {
  name: 'SelectExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    VSelect
  },
  data () {
    return {
      items: [
        {
          key: 1,
          text: 'Item 1'
        },
        {
          key: 2,
          text: 'Item 2'
        },
        {
          key: 3,
          text: 'Item 3'
        }
      ],
      value: 1,
      bordered: false,
      round: false,
      rounded: true,
      roundedLg: false,
      roundedSmall: false,
      dark: false,
      light: true,
      disabled: false
    };
  }
};
</script>
