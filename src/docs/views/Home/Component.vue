<template>
  <div :class="$bem({})">
    <div :class="$bem({e: 'content'})">
      <img>
      <h1 :class="$bem({e: 'title'})">
        Vuebits UI
      </h1>
      <h2 :class="$bem({e: 'subtitle'})">
        Vue 3 components library
      </h2>
      <DmSimpleGrid :elements-md="3">
        <DmSimpleGridItem>
          <DmButton
            color="secondary"
            round
            elevated
            :class="$bem({e: 'button'})"
            :to="docsRoute"
          >
            <DmIcon
              name="book-open"
            />
            Get started
          </DmButton>
        </DmSimpleGridItem>
        <DmSimpleGridItem>
          <DmButton
            dark
            color="dark"
            round
            elevated
            :class="$bem({e: 'button'})"
            href="https://github.com/vuebits/ui"
            new-window
          >
            <DmIcon
              :name="['fab', 'github']"
            />
            GitHub
          </DmButton>
        </DmSimpleGridItem>
        <DmSimpleGridItem>
          <DmButton
            dark
            color="error"
            round
            elevated
            :class="$bem({e: 'button'})"
          >
            <DmIcon
              :name="['fab', 'npm']"
            />
            npm
          </DmButton>
        </DmSimpleGridItem>
      </DmSimpleGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  DmSimpleGrid,
  DmSimpleGridItem,
  DmButton,
  DmIcon
} from '@/components';
import { RouteName } from '@/docs/router/models';

export default defineComponent({
  name: 'Home',
  components: {
    DmSimpleGrid,
    DmSimpleGridItem,
    DmButton,
    DmIcon
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
