<template>
  <div :class="$bem({})">
    <ComponentHeader>
      Button
    </ComponentHeader>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VButton } from '@/components';
import ButtonExample from './Example.vue';
import {
  ComponentHeader,
  ComponentApi,
  Story
} from '@/docs/components';
import {
  ButtonColors,
  ButtonSizes,
  ButtonRoundings,
  ButtonLoading,
  ButtonDisabled,
  ButtonIcons
} from './_stories';

export default defineComponent({
  name: 'DocsComponentsButton',
  components: {
    ComponentHeader,
    ComponentApi,
    ButtonExample,
    Story,
    ButtonColors,
    ButtonSizes,
    ButtonRoundings,
    ButtonLoading,
    ButtonDisabled,
    ButtonIcons
  },
  data () {
    return {
      component: VButton
    };
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
