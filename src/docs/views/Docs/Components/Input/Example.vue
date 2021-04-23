<template>
  <Sandbox
    id="example"
    title="Example"
    height="400px"
  >
    <Preview>
      <VInput
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
        :type="type"
      />
    </Preview>
    <template #controls>
      <Knobs>
        <KnobListItem
          v-model="type"
          :items="types"
          label="Type"
        />
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
  KnobString
} from '@/docs/components';
import {
  VInput
} from '@/components';
import { icons } from '@/docs/helpers/story-params';

export default {
  name: 'InputExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VInput
  },
  data () {
    return {
      icons,
      types: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week'
      ],
      text: 'some text...',
      bordered: false,
      round: false,
      rounded: true,
      roundedLg: false,
      roundedSmall: false,
      dark: false,
      light: true,
      disabled: false,
      leftIcon: 'none',
      rightIcon: 'none',
      error: '',
      hint: '',
      type: 'text'
    };
  }
};
</script>
