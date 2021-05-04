<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview height="200px">
      <VNotification
        :type="type"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :message="message"
        :size="size"
        :width="width"
      />
    </Preview>
    <template #controls>
      <Knobs>
        <KnobString
          v-model="message"
          label="Message"
        />
        <KnobListItem
          v-model="type"
          :items="types"
          label="Type"
        />
        <KnobListItem
          v-model="size"
          :items="sizes"
          label="Size"
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
        <KnobNumber
          v-model="width"
          label="Width"
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
  KnobNumber
} from '@/docs/components';
import {
  VNotification
} from '@/components';
import { sizes } from '@/docs/helpers/story-params';

export default {
  name: 'NotificationExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    KnobNumber,
    VNotification
  },
  data () {
    return {
      types: [
        'default',
        'success',
        'info',
        'warning',
        'error'
      ],
      type: 'success',
      message: 'Some content here...',
      round: false,
      rounded: true,
      roundedLg: false,
      size: 'sm',
      sizes,
      width: null
    };
  },
  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>
