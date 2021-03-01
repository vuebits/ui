<template>
  <div :class="$bem({})">
    <div :class="$bem({e: 'content'})">
      <img src="@/assets/images/logo.png">
      <h1 :class="$bem({e: 'title'})">
        Vuebits UI
      </h1>
      <h2 :class="$bem({e: 'subtitle'})">
        Vue 3 components library
      </h2>
      <VSimpleGrid :elements-md="3">
        <VSimpleGridItem>
          <VButton
            color="secondary"
            round
            elevated
            :class="$bem({e: 'button'})"
            :to="docsRoute"
          >
            <VIcon
              name="book-open"
            />
            Get started
          </VButton>
        </VSimpleGridItem>
        <VSimpleGridItem>
          <VButton
            dark
            color="dark"
            round
            elevated
            :class="$bem({e: 'button'})"
            href="https://github.com/vuebits/ui"
            new-window
          >
            <VIcon
              :name="['fab', 'github']"
            />
            GitHub
          </VButton>
        </VSimpleGridItem>
        <VSimpleGridItem>
          <VButton
            dark
            color="error"
            round
            elevated
            href="https://www.npmjs.com/package/@vuebits/ui"
            new-window
            :class="$bem({e: 'button'})"
          >
            <VIcon
              :name="['fab', 'npm']"
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
