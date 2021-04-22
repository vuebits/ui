<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VAsyncContent
        :loading="loading"
        :error="error"
        :reloadable="reloadable"
        :spinner-size="spinnerSize"
        :loading-text="loadingText"
        :error-text="errorText"
        :reload-text="reloadText"
      >
        Configure me
      </VAsyncContent>
    </Preview>
    <Knobs>
      <KnobBoolean
        v-model="loading"
        label="Loading"
      />
      <KnobString
        v-model="loadingText"
        label="Loading text"
      />
      <KnobListItem
        v-model="spinnerSize"
        :items="iconSizes"
        label="Spinner size"
      />
      <KnobBoolean
        v-model="error"
        label="Error"
      />
      <KnobString
        v-model="errorText"
        label="Error text"
      />
      <KnobBoolean
        v-model="reloadable"
        label="Reloadabilty"
      />
      <KnobString
        v-model="reloadText"
        label="Reload button text"
      />
    </Knobs>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs,
  KnobListItem,
  KnobBoolean,
  KnobString
} from '@/docs/components';
import {
  VAsyncContent
} from '@/components';
import { iconSizes } from '@/docs/helpers/story-params';

export default {
  name: 'AsyncContentExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VAsyncContent
  },
  data () {
    return {
      iconSizes,
      loading: false,
      error: false,
      reloadable: false,
      spinnerSize: '2x',
      loadingText: 'loading text',
      errorText: 'error text',
      reloadText: 'reload text'
    };
  }
};
</script>
