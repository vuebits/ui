<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <div
        class="is-bordered has-padding-md is-rounded"
        style="position: relative; height: 40rem"
      >
        Some content
        <UiLoadingBlend :loading="loading" />
      </div>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="loading"
          label="Loading"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobBoolean } from '@/components'
import { UiLoadingBlend } from '@vuebits/ui'

export default {
  name: 'LoadingBlendExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    UiLoadingBlend,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
}
</script>

<style lang="scss"></style>
