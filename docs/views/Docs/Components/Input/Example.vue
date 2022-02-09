<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VInput
        ref="input"
        v-model="text"
        autofocus
        :readonly="readonly"
        :bordered="bordered"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :size="size"
        :dark="dark"
        :light="light"
        :disabled="disabled"
        :left-icon="leftIcon !== 'none' ? leftIcon : null"
        :right-icon="rightIcon !== 'none' ? rightIcon : null"
        right-icon-clickable
        :error="error"
        :type="type"
        :depressed="depressed"
        :label="label"
        :placeholder="placeholder"
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
          v-model="depressed"
          label="Depressed"
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
        <KnobListItem
          v-model="rightIcon"
          :items="icons"
          label="Right icon"
        />
        <KnobBoolean
          v-model="error"
          label="Error"
        />
        <KnobBoolean
          v-model="readonly"
          label="Readonly"
        />
        <KnobString
          v-model="label"
          label="Label"
        />
        <KnobString
          v-model="placeholder"
          label="Placeholder"
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
  KnobString,
} from '@/components';
import {
  VInput,
} from '@vuebits/ui';
import { icons, sizes } from '@/helpers/story-params';

export default {
  name: 'InputExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VInput,
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
        'week',
      ],
      text: 'some text...',
      bordered: false,
      round: true,
      rounded: false,
      roundedLg: false,
      dark: false,
      light: true,
      disabled: false,
      leftIcon: 'none',
      rightIcon: 'none',
      type: 'text',
      depressed: true,
      readonly: false,
      label: 'Some label',
      error: false,
      placeholder: '',
      sizes,
      size: 'md',
    };
  },
  mounted () {
    this.$refs.input.focus();
  },
};
</script>
