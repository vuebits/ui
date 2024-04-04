<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiIconButton
        :icon="icon"
        :bordered="bordered"
        :elevated="elevated"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :color="color"
        :theme="theme"
        :size="size"
        :disabled="disabled"
        :loading="loading"
        :title="title"
        :plain="plain"
        :hoverable="hoverable"
        :gradient="gradient"
      />
    </Preview>
    <template #controls>
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
          v-model="theme"
          :items="themes"
          label="Theme"
        />
        <KnobListItem
          v-model="color"
          :items="colors"
          label="Color"
        />
        <KnobListItem
          v-model="gradient"
          :items="gradients"
          label="Gradient"
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
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem, KnobBoolean, KnobString } from '@/components'
import { UiIconButton } from '@vuebits/ui'
import { colors, sizes, icons, gradients } from '@/helpers/story-params'

export default {
  name: 'IconButtonExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    UiIconButton,
  },
  data() {
    return {
      colors,
      sizes,
      icons,
      icon: 'check',
      bordered: false,
      elevated: false,
      round: true,
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
      hoverable: false,
      gradient: 'primary',
      gradients,
      themes: ['primary', 'secondary'],
      theme: null,
    }
  },
}
</script>
