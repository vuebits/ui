<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiTile
        :bordered="bordered"
        :elevated="elevated"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :color="color"
        :width="width"
        :height="height"
        :image="image"
        :hover-bg-color="hoverBgColor"
        :underline-color="underlineColor"
        :center-content="centerContent"
      >
        Configure me
      </UiTile>
    </Preview>
    <template #controls>
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
          v-model="hoverBgColor"
          :items="colors"
          label="Hover color"
        />
        <KnobListItem
          v-model="underlineColor"
          :items="colors"
          label="Underline color"
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
          v-model="centerContent"
          label="Center content"
        />
        <KnobString
          v-model="width"
          label="Width"
        />
        <KnobString
          v-model="height"
          label="Height"
        />
        <KnobString
          v-model="image"
          label="Image url"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem, KnobBoolean, KnobString } from '@/components'
import { UiTile } from '@vuebits/ui'
import { colors } from '@/helpers/story-params'

export default {
  name: 'TileExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobString,
    UiTile,
  },
  data() {
    return {
      colors,
      bordered: false,
      borderedFat: false,
      elevated: false,
      round: false,
      rounded: false,
      roundedLg: false,
      roundedSmall: false,
      outlined: false,
      dark: true,
      light: true,
      color: 'primary',
      width: 'auto',
      height: 'auto',
      image: '',
      hoverBgColor: 'secondary',
      underlineColor: null,
      centerContent: false,
    }
  },
}
</script>
