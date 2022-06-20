<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VPagination
        v-model="page"
        :last-page="lastPage"
        :show-jumper="showJumper"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :color="color"
        :size="size"
      />
    </Preview>
    <template #controls>
      <Knobs>
        <KnobNumber
          v-model="lastPage"
          label="Number of pages"
        />
        <KnobBoolean
          v-model="showJumper"
          label="Jumper"
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
        <KnobListItem
          v-model="size"
          :items="sizes"
          label="Size"
        />
        <KnobListItem
          v-model="color"
          :items="colors"
          label="Color"
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
  KnobBoolean,
  KnobNumber,
  KnobListItem,
} from '@/components';
import {
  VPagination,
} from '@vuebits/ui';
import { colors, sizes } from '@/helpers/story-params';

export default {
  name: 'NotificatorExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    KnobNumber,
    KnobListItem,
    VPagination,
  },
  data () {
    return {
      page: 1,
      jumperValue: 5,
      lastPage: 25,
      showJumper: true,
      colors,
      sizes,
      round: true,
      rounded: false,
      roundedLg: false,
      color: null,
      size: 'md',
    };
  },
};
</script>

<style lang="scss">
</style>
