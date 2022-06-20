<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VCard />
    </Preview>
    <template #controls>
      <Knobs />
    </template>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs,
} from '@/components';
import {
  VCard,
} from '@vuebits/ui';

export default {
  name: 'CardExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    VCard,
  },
  data () {
    return {
    };
  },
};
</script>
