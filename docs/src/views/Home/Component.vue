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
      <UiSimpleGrid
        :elements-sm="2"
        :elements-md="4"
        spacings-size="lg"
        :class="$bem({e: 'features'})"
      >
        <UiSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <UiIcon
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
        </UiSimpleGridItem>
        <UiSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <UiIcon
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
        </UiSimpleGridItem>
        <UiSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <UiIcon
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
        </UiSimpleGridItem>
        <UiSimpleGridItem>
          <div :class="$bem({e: 'feature'})">
            <UiIcon
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
        </UiSimpleGridItem>
      </UiSimpleGrid>
      <UiSimpleGrid
        :elements-sm="3"
        :class="$bem({e: 'buttons'})"
      >
        <UiSimpleGridItem>
          <UiButton
            dark
            gradient="primary"
            round
            elevated
            size="lg"
            :class="$bem({e: 'button'})"
            :to="docsRoute"
          >
            <UiIcon
              name="book-open"
              class="has-margin-right-sm"
            />
            Get started
          </UiButton>
        </UiSimpleGridItem>
        <UiSimpleGridItem>
          <UiButton
            bordered
            hoverable
            round
            elevated
            size="lg"
            :class="$bem({e: 'button'})"
            href="https://github.com/vuebits/ui"
            new-window
          >
            <UiIcon
              name="github"
              type="fab"
              class="has-margin-right-sm"
            />
            GitHub
          </UiButton>
        </UiSimpleGridItem>
        <UiSimpleGridItem>
          <UiButton
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
          </UiButton>
        </UiSimpleGridItem>
      </UiSimpleGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  UiSimpleGrid,
  UiSimpleGridItem,
  UiButton,
  UiIcon,
} from '@vuebits/ui';
import { RouteName } from '@/router/models';

export default defineComponent({
  name: 'Home',
  components: {
    UiSimpleGrid,
    UiSimpleGridItem,
    UiButton,
    UiIcon,
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
