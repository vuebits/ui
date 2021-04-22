<template>
  <Sandbox
    id="example"
    title="Example"
    height="400px"
  >
    <Preview>
      <VTextarea
        v-model="text"
        :bordered="bordered"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :disabled="disabled"
        :left-icon="leftIcon !== 'none' ? leftIcon : null"
        :right-icon="rightIcon !== 'none' ? rightIcon : null"
        :error="error"
      />
    </Preview>
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
        v-model="leftIcon"
        :items="icons"
        label="Left icon"
      />
      <KnobListItem
        v-model="rightIcon"
        :items="icons"
        label="Right icon"
      />
      <KnobString
        v-model="error"
        label="Error"
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
  VTextarea
} from '@/components';
import { icons } from '@/docs/helpers/story-params';

export default {
  name: 'TextareaExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VTextarea
  },
  data () {
    return {
      icons,
      text: 'some text...',
      bordered: false,
      round: false,
      rounded: false,
      roundedLg: false,
      roundedSmall: false,
      dark: false,
      light: false,
      disabled: false,
      leftIcon: 'none',
      rightIcon: 'none',
      error: '',
      hint: ''
    };
  }
};
</script>
