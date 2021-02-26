<template>
  <div :class="$bem({})">
    <ComponentHeader>
      Button
    </ComponentHeader>
    <ButtonExample />
    <ComponentApi :component="component" />
    <Story
      id="colors"
      title="Colors"
    >
      <ButtonColors />
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
  ButtonColors
} from './_stories';

export default defineComponent({
  name: 'DocsComponentsButton',
  components: {
    ComponentHeader,
    ComponentApi,
    ButtonExample,
    Story,
    ButtonColors
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
