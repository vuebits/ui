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
        Open source Vue 3 components library written in TypeScript and Sass
      </div>
      <VSimpleGrid
        :elements-sm="2"
        :elements-md="4"
        spacings-size="lg"
        :class="$bem({e: 'features'})"
      >
        <VSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <VIcon
              name="feather"
              :class="$bem({e: 'feature-icon'})"
            />
            <h2 :class="$bem({e: 'feature-title'})">
              Lightweight
            </h2>
            <p>
              About 30KiB gzipped
            </p>
          </div>
        </VSimpleGridItem>
        <VSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <VIcon
              name="th"
              :class="$bem({e: 'feature-icon'})"
            />
            <h2 :class="$bem({e: 'feature-title'})">
              45+
            </h2>
            <p>
              Awesome UI components
            </p>
          </div>
        </VSimpleGridItem>
        <VSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <VIcon
              name="code"
              :class="$bem({e: 'feature-icon'})"
            />
            <h2 :class="$bem({e: 'feature-title'})">
              TypeScript
            </h2>
            <p>
              Full TypeScript support
            </p>
          </div>
        </VSimpleGridItem>
        <VSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <VIcon
              name="wrench"
              :class="$bem({e: 'feature-icon'})"
            />
            <h2 :class="$bem({e: 'feature-title'})">
              Fully customizable
            </h2>
            <p>
              Extensive configuration options and many scss editable variables
            </p>
          </div>
        </VSimpleGridItem>
      </VSimpleGrid>
      <VSimpleGrid
        :elements-sm="3"
        :class="$bem({e: 'buttons'})"
      >
        <VSimpleGridItem>
          <VButton
            dark
            gradient="primary"
            round
            elevated
            size="lg"
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
            round
            elevated
            size="lg"
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
            color="secondary"
            round
            elevated
            size="lg"
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
  VIcon,
} from '@vuebits/ui';
import { RouteName } from '@/router/models';

export default defineComponent({
  name: 'Home',
  components: {
    VSimpleGrid,
    VSimpleGridItem,
    VButton,
    VIcon,
  },
  data () {
    return {
      docsRoute: {
        name: RouteName.GETTING_STARTED,
      },
    };
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
