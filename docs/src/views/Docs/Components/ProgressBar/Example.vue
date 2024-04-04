<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiProgressBar :loading="loading" />
    </Preview>
    <template #controls>
      <Knobs />
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs } from '@/components'
import { UiProgressBar } from '@vuebits/ui'

export default {
  name: 'ProgressBarExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    UiProgressBar,
  },
  data() {
    return {
      loading: true,
    }
  },
}
</script>
