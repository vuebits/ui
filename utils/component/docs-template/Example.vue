<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiComponentName />
    </Preview>
    <template #controls>
      <Knobs />
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs } from '@/components'
import { UiComponentName } from '@vuebits/ui'

export default {
  name: 'ComponentNameExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    UiComponentName,
  },
  data() {
    return {}
  },
}
</script>
