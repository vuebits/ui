<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VCheckbox
        id="checkbox-demo"
        v-model="isChecked"
        :bordered="bordered"
        :rounded="rounded"
        :dark="dark"
        :light="light"
        :disabled="disabled"
        :error="error"
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
          v-model="disabled"
          label="Disabled"
        />
        <KnobString
          v-model="label"
          label="Label"
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
  KnobBoolean,
  KnobString
} from '@/docs/components';
import {
  VCheckbox
} from '@/components';

export default {
  name: 'CheckboxExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    KnobString,
    VCheckbox
  },
  data () {
    return {
      isChecked: true,
      bordered: false,
      round: false,
      rounded: true,
      roundedLg: false,
      roundedSmall: false,
      dark: false,
      light: true,
      disabled: false,
      error: '',
      hint: '',
      label: 'some label...'
    };
  }
};
</script>
