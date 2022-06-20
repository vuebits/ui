<template>
  <div style="display: flex;">
    <div style="margin-right: 40px;">
      <h3 style="margin-bottom: 20px;">
        Time from
      </h3>
      <VTimepicker
        v-model="timeFrom"
        :disable-after="timeTo"
        show-seconds
      />
      {{ timeFrom }}
    </div>
    <div>
      <h3 style="margin-bottom: 20px;">
        Time to
      </h3>
      <VTimepicker
        v-model="timeTo"
        :disable-before="timeFrom"
        show-seconds
      />
      {{ timeTo }}
    </div>
    <VButton
      hoverable
      @click="reset"
    >
      Reset
    </VButton>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import {
  VTimepicker,
  VButton,
} from '@vuebits/ui';

export default defineComponent({
  name: 'TimepickerTimeRange',
  components: {
    VTimepicker,
    VButton,
  },
  data () {
    return {
      timeFrom: null,
      timeTo: null,
    };
  },
  methods: {
    reset () {
      this.timeFrom = null;
      this.timeTo = null;
    },
  },
});
</script>
