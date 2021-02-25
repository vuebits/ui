<template>
  <div :class="$bem({})">
    <ComponentHeader>
      Button
    </ComponentHeader>
    <ButtonExample />
    <ComponentApi :component="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VButton } from '@/components';
import {
  ButtonExample
} from './_stories';
import {
  ComponentHeader,
  ComponentApi
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsButton',
  components: {
    ComponentHeader,
    ComponentApi,
    ButtonExample
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
