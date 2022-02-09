<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VField
        id="field-example"
        :label="label"
        :error="error"
        :hint="hint"
        :no-hint="noHint"
      >
        Put your field control here!
      </VField>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobString
          v-model="label"
          label="Label"
        />
        <KnobString
          v-model="hint"
          label="Hint"
        />
        <KnobString
          v-model="error"
          label="Error"
        />
        <KnobBoolean
          v-model="noHint"
          label="No hint"
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
  KnobString,
} from '@/components';
import {
  VField,
} from '@vuebits/ui';

export default {
  name: 'FieldExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    KnobString,
    VField,
  },
  data () {
    return {
      label: 'Field name',
      error: 'Field value is incorrect',
      hint: '',
      noHint: false,
    };
  },
};
</script>
