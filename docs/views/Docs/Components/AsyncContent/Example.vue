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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, tellus rutrum commodo vestibulum, metus quam elementum turpis, nec imperdiet justo quam ut augue. Curabitur semper risus sit amet elit commodo tempor. Sed ac enim quis nisi elementum rhoncus. Quisque tristique, diam ac pulvinar ultrices, nisi enim sodales diam, eu ornare eros quam eu mauris. Fusce fringilla, erat ac ornare lacinia, libero sapien pharetra sem, sed pulvinar sapien urna eget arcu. Vestibulum ut quam venenatis, venenatis diam quis, pellentesque orci. Aliquam erat volutpat. Suspendisse sit amet imperdiet orci. Pellentesque bibendum quam fringilla imperdiet consectetur. Phasellus sollicitudin a nisl sit amet blandit.
        </p>
        <p>
          Etiam fringilla est cursus ante viverra, non iaculis nibh lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse maximus massa auctor tellus convallis, quis faucibus dui luctus. Mauris in ullamcorper nibh. Cras ac luctus leo, id sagittis mauris. Nam suscipit sed quam ullamcorper elementum. Morbi vehicula sapien ante, ut sagittis mi lobortis ut. Maecenas ullamcorper felis nec maximus pellentesque. Nulla vel laoreet tellus.
        </p>
        <p>
          Phasellus vel sodales nibh. Etiam vel tortor sit amet nisi hendrerit luctus. Vivamus non vehicula neque. Donec sed euismod quam. Sed nec diam sit amet libero porttitor molestie id quis velit. Phasellus vehicula feugiat mollis. Donec ut magna non lacus sodales rutrum sit amet aliquam elit. Aenean semper erat at mauris suscipit fringilla a sed justo. Etiam nec nisi quis metus faucibus rhoncus sed id lorem. Cras ut nisl in odio imperdiet facilisis. Sed accumsan tortor ac rutrum tempor. Mauris congue odio tincidunt augue porttitor finibus vitae et odio. Fusce ac lorem non erat ultrices pellentesque vel eget eros. Aenean fermentum a enim id venenatis.
        </p>
        <p>
          Quisque nec commodo est. Maecenas pulvinar pellentesque tempus. Cras imperdiet tincidunt erat id feugiat. Quisque purus felis, viverra at dapibus sit amet, efficitur rhoncus purus. Nullam et tempus tortor. Duis commodo libero at pellentesque aliquam. Curabitur in semper augue. Vivamus pellentesque justo at arcu pulvinar, quis rutrum magna viverra. Suspendisse potenti. Fusce velit orci, sollicitudin ut quam et, malesuada malesuada tortor.
        </p>
        <p>
          Phasellus et dui metus. Pellentesque malesuada ligula ac ipsum commodo, in interdum magna varius. Aenean quis scelerisque lacus. Cras ultrices ipsum non ante fermentum ultrices. Fusce ullamcorper dolor venenatis, faucibus urna sed, porttitor ex. Integer et eros id arcu lacinia consequat pharetra id neque. Nullam nec pretium velit. Praesent lacinia tellus sed tincidunt aliquam. In semper nulla at ultricies elementum. Vivamus tellus sem, congue sit amet vehicula a, vestibulum in sapien. Vivamus viverra faucibus libero, ac egestas mauris pretium iaculis. Suspendisse a est ex. Nunc at diam a libero fringilla gravida vulputate vel erat.
        </p>
      </VAsyncContent>
    </Preview>
    <template #controls>
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
} from '@/components';
import {
  VAsyncContent,
} from '@vuebits/ui';
import { iconSizes } from '@/helpers/story-params';

export default {
  name: 'AsyncContentExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VAsyncContent,
  },
  data () {
    return {
      iconSizes,
      loading: true,
      error: false,
      reloadable: false,
      spinnerSize: '2x',
      loadingText: 'loading text',
      errorText: 'error text',
      reloadText: 'reload text',
    };
  },
  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>
