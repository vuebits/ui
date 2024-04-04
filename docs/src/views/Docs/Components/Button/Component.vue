<template>
  <div :class="$bem({})">
    <PageHeader> Button </PageHeader>
    <ButtonExample />
    <ComponentApi :component="component" />
    <Story
      file-name="Colors"
      component-name="Button"
      title="Colors"
    >
      <ButtonColors />
    </Story>
    <Story
      file-name="Gradients"
      component-name="Button"
      title="Gradients"
    >
      <ButtonGradients />
    </Story>
    <Story
      file-name="Sizes"
      component-name="Button"
      title="Sizes"
    >
      <ButtonSizes />
    </Story>
    <Story
      file-name="Roundings"
      component-name="Button"
      title="Roundings"
    >
      <ButtonRoundings />
    </Story>
    <Story
      file-name="Loading"
      component-name="Button"
      title="Loading state"
    >
      <ButtonLoading />
    </Story>
    <Story
      file-name="Disabled"
      component-name="Button"
      title="Disabled state"
    >
      <ButtonDisabled />
    </Story>
    <Story
      file-name="Icons"
      component-name="Button"
      title="Icons"
    >
      <ButtonIcons />
    </Story>
    <Story
      file-name="Elevation"
      component-name="Button"
      title="Elevation"
    >
      <ButtonElevation />
    </Story>
    <Story
      file-name="Themes"
      component-name="Button"
      title="Themes"
    >
      <ButtonThemes />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiButton } from '@vuebits/ui'
import ButtonExample from './Example.vue'
import { PageHeader, ComponentApi, Story } from '@/components'
import {
  ButtonColors,
  ButtonGradients,
  ButtonSizes,
  ButtonRoundings,
  ButtonLoading,
  ButtonDisabled,
  ButtonIcons,
  ButtonElevation,
  ButtonThemes,
} from './_stories'

export default defineComponent({
  name: 'DocsComponentsButton',
  components: {
    PageHeader,
    ComponentApi,
    ButtonExample,
    Story,
    ButtonColors,
    ButtonGradients,
    ButtonSizes,
    ButtonRoundings,
    ButtonLoading,
    ButtonDisabled,
    ButtonIcons,
    ButtonElevation,
    ButtonThemes,
  },
  data() {
    return {
      component: UiButton,
    }
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
