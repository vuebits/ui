<template>
  <div :class="$bem({})">
    <ComponentHeader>
      Button
    </ComponentHeader>
    <ButtonExample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ButtonExample
} from './_stories';
import {
  ComponentHeader
} from '@/docs/components';

export default defineComponent({
  name: 'DocsComponentsButton',
  components: {
    ComponentHeader,
    ButtonExample
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
