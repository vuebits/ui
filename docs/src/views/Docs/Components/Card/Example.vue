<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiCard />
    </Preview>
    <template #controls>
      <Knobs />
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs } from '@/components'
import { UiCard } from '@vuebits/ui'

export default {
  name: 'CardExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    UiCard,
  },
  data() {
    return {}
  },
}
</script>
