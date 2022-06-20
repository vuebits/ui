<template>
  <Sandbox
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
        :block="block"
        :plain="plain"
        :hoverable="hoverable"
        :gradient="gradient"
        :theme="theme"
        :uppercase="uppercase"
        :invert-theme="invertTheme"
      >
        Configure me
      </VButton>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="light"
          label="Light"
        />
        <KnobBoolean
          v-model="dark"
          label="Dark"
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
          v-model="gradient"
          :items="gradients"
          label="Gradient"
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
        <KnobBoolean
          v-model="block"
          label="Block"
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
        <KnobListItem
          v-model="theme"
          :items="themes"
          label="Theme"
        />
        <KnobBoolean
          v-model="uppercase"
          label="Uppercase"
        />
        <KnobBoolean
          v-model="invertTheme"
          label="Invert theme"
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
  VButton,
} from '@vuebits/ui';
import { colors, sizes, icons, gradients } from '@/helpers/story-params';

export default {
  name: 'ButtonExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    VButton,
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
      elevated: true,
      round: true,
      rounded: false,
      roundedLg: false,
      plain: false,
      outlined: false,
      dark: true,
      light: false,
      color: null,
      size: 'md',
      disabled: false,
      loading: false,
      title: 'some title...',
      leftIcon: 'none',
      rightIcon: 'none',
      block: false,
      hoverable: false,
      gradient: 'primary',
      gradients,
      theme: null,
      themes: [
        'primary',
        'secondary',
      ],
      uppercase: false,
      invertTheme: false,
    };
  },
};
</script>
