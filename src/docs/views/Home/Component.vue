<template>
  <div :class="$bem({})">
    <div :class="$bem({e: 'content'})">
      <img
        src="@/assets/images/logo.png"
        :class="$bem({e: 'logo'})"
      >
      <h1 :class="$bem({e: 'title'})">
        Vuebits UI
      </h1>
      <div :class="$bem({e: 'subtitle'})">
        Vue 3 components library
      </div>
      <VSimpleGrid :elements-md="3">
        <VSimpleGridItem>
          <VButton
            dark
            color="secondary"
            rounded
            :class="$bem({e: 'button'})"
            :to="docsRoute"
          >
            <VIcon
              name="book-open"
              class="has-margin-right-sm"
            />
            Get started
          </VButton>
        </VSimpleGridItem>
        <VSimpleGridItem>
          <VButton
            bordered
            hoverable
            rounded
            :class="$bem({e: 'button'})"
            href="https://github.com/vuebits/ui"
            new-window
          >
            <VIcon
              name="github"
              type="fab"
              class="has-margin-right-sm"
            />
            GitHub
          </VButton>
        </VSimpleGridItem>
        <VSimpleGridItem>
          <VButton
            dark
            color="primary"
            rounded
            href="https://www.npmjs.com/package/@vuebits/ui"
            new-window
            :class="$bem({e: 'button'})"
          >
            <VIcon
              name="npm"
              type="fab"
              class="has-margin-right-sm"
            />
            npm
          </VButton>
        </VSimpleGridItem>
      </VSimpleGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  VSimpleGrid,
  VSimpleGridItem,
  VButton,
  VIcon
} from '@/components';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'Home',
  components: {
    VSimpleGrid,
    VSimpleGridItem,
    VButton,
    VIcon
  },
  data () {
    return {
      docsRoute: {
        name: RouteName.DOCS
      }
    };
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
