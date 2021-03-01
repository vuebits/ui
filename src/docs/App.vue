<template>
  <LayoutDefault />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LayoutDefault } from './layouts';

export default defineComponent({
  name: 'App',
  components: {
    LayoutDefault
  }

});
</script>

<style lang="scss">
@import '../../styles/generic';
@import '../../styles/elements/common-classes';
@import '../../styles/elements/global';
</style>
