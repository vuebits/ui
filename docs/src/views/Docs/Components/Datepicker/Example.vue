<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VDatepicker
        v-model="date"
        :disable-before="disableBefore"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
      />
      {{ date }}
    </Preview>
    <template #controls>
      <Knobs>
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
} from '@/components';
import {
  VDatepicker,
} from '@vuebits/ui';

export default {
  name: 'DatepickerExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    VDatepicker,
  },
  data () {
    return {
      date: null,
      disableBefore: new Date(),
      round: true,
      rounded: false,
      roundedLg: false,
    };
  },
};
</script>
