<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <div>
        <VTimepicker
          v-model="time"
          :show-seconds="showSeconds"
          :hours-step="hoursStep"
          :minutes-step="minutesStep"
          :seconds-step="secondsStep"
          rounded
          bordered
        />
        {{ time }}
      </div>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="showSeconds"
          label="Show seconds"
        />
        <KnobNumber
          v-model="hoursStep"
          :step="1"
          :min="1"
          :max="24"
          label="Hours step"
        />
        <KnobNumber
          v-model="minutesStep"
          :step="1"
          :min="1"
          :max="60"
          label="Minutes step"
        />
        <KnobNumber
          v-model="secondsStep"
          :step="1"
          :min="1"
          :max="60"
          label="Seconds step"
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
  KnobNumber,
} from '@/components';
import {
  VTimepicker,
} from '@vuebits/ui';

export default {
  name: 'TimepickerExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    VTimepicker,
    KnobBoolean,
    KnobNumber,
  },
  data () {
    return {
      time: '12:45:04',
      showSeconds: true,
      hoursStep: 1,
      minutesStep: 15,
      secondsStep: 15,
    };
  },
};
</script>
