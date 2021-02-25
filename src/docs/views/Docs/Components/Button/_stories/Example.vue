<template>
  <Story
    id="example"
    title="Example"
  >
    <Preview>
      <VButton
        :href="href"
        :new-window="newWindow"
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
        :left-icon="leftIcon !== 'none' ? leftIcon : null"
        :right-icon="rightIcon !== 'none' ? rightIcon : null"
      >
        Configure me
      </VButton>
    </Preview>
    <Knobs>
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
      <KnobString
        v-model="href"
        label="Href"
      />
      <KnobBoolean
        v-model="newWindow"
        label="New window"
      />
      <KnobBoolean
        v-model="loading"
        label="Loading"
      />
      <KnobString
        v-model="title"
        label="Title"
      />
      <KnobListItem
        v-model="leftIcon"
        :items="icons"
        label="Left icon"
      />
      <KnobListItem
        v-model="rightIcon"
        :items="icons"
        label="Right icon"
      />
    </Knobs>
  </Story>
</template>

<script>
import {
  Preview,
  Story,
  Knobs,
  KnobListItem,
  KnobBoolean,
  KnobString
} from '@/docs/components';
import {
  VButton
} from '@/components';
import { colors, sizes, icons } from '@/docs/helpers/story-params';

export default {
  name: 'VButtonExampleStory',
  components: {
    Preview,
    Story,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VButton
  },
  data () {
    return {
      colors,
      sizes,
      icons,
      href: '',
      newWindow: false,
      bordered: false,
      borderedFat: false,
      elevated: false,
      round: false,
      rounded: false,
      roundedLg: false,
      roundedSmall: false,
      outlined: false,
      flat: false,
      dark: true,
      light: true,
      color: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
      title: 'some title...',
      leftIcon: 'none',
      rightIcon: 'none'
    };
  }
};
</script>
