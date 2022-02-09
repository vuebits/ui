<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VComponentName />
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
  Knobs
} from '@/components';
import {
  VComponentName
} from '@vuebits/ui';

export default {
  name: 'ComponentNameExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    VComponentName
  },
  data () {
    return {
    };
  }
};
</script>
