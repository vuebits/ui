<template>
  <Sandbox
    id="example"
    title="Example"
    height="400px"
  >
    <Preview style="height: 300px;">
      <VIconButton
        :icon="icon"
        :bordered="bordered"
        :elevated="elevated"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :color="color"
        :size="size"
        :disabled="disabled"
        :loading="loading"
        :title="title"
        :plain="plain"
        :hoverable="hoverable"
      />
    </Preview>
    <Knobs>
      <KnobListItem
        v-model="icon"
        :items="icons"
        label="Icon"
      />
      <KnobBoolean
        v-model="dark"
        label="Dark"
      />
      <KnobBoolean
        v-model="light"
        label="Light"
      />
      <KnobListItem
        v-model="color"
        :items="colors"
        label="Color"
      />
      <KnobBoolean
        v-model="plain"
        label="Plain"
      />
      <KnobBoolean
        v-model="hoverable"
        label="Hoverable"
      />
      <KnobListItem
        v-model="size"
        :items="sizes"
        label="Size"
      />
      <KnobBoolean
        v-model="bordered"
        label="Bordered"
      />
      <KnobBoolean
        v-model="elevated"
        label="Elevated"
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
      <KnobBoolean
        v-model="disabled"
        label="Disabled"
      />
      <KnobBoolean
        v-model="loading"
        label="Loading"
      />
      <KnobString
        v-model="title"
        label="Title"
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
  VIconButton
} from '@/components';
import { colors, sizes, icons } from '@/docs/helpers/story-params';

export default {
  name: 'IconButtonExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VIconButton
  },
  data () {
    return {
      colors,
      sizes,
      icons,
      icon: 'check',
      bordered: false,
      elevated: false,
      round: false,
      rounded: false,
      roundedLg: false,
      dark: true,
      light: true,
      color: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
      title: 'some title...',
      plain: false,
      hoverable: false
    };
  }
};
</script>
