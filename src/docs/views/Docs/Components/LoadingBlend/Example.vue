<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <div
        class="is-bordered has-padding-md is-rounded"
        style="position: relative;height: 400px;"
      >
        Some content
        <VLoadingBlend
          :loading="loading"
        />
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
import {
  Preview,
  Sandbox,
  Knobs,
  KnobBoolean
} from '@/docs/components';
import {
  VLoadingBlend
} from '@/components';

export default {
  name: 'LoadingBlendExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    VLoadingBlend
  },
  data () {
    return {
      loading: true
    };
  },
  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>

<style lang="scss">
</style>
