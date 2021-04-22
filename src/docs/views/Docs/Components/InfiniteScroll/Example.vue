<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VInfiniteScroll
        class="content-container"
        :state="state"
        :tolerance="100"
        @scroll-to-end="loadMoreContent"
      >
        Endless load content...<br>
        <div
          v-for="(element, index) in elements"
          :key="index"
        >
          {{ element }}
        </div>
      </VInfiniteScroll>
    </Preview>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox
} from '@/docs/components';
import {
  VInfiniteScroll
} from '@/components';
import { InifiniteScrollState } from '@/components/InfiniteScroll/models';

export default {
  name: 'InfiniteScrollExample',
  components: {
    Preview,
    Sandbox,
    VInfiniteScroll
  },
  data () {
    return {
      elements: [],
      state: InifiniteScrollState.LOADED
    };
  },
  methods: {
    loadMoreContent () {
      const chunk = [];
      this.state = InifiniteScrollState.LOADING;
      setTimeout(() => {
        if (this.elements.length < 100) {
          for (let i = this.elements.length; i < this.elements.length + 20; i++) {
            chunk.push(`some content ${i}`);
          }
          this.elements = this.elements.concat(chunk);
          this.state = InifiniteScrollState.LOADED;
        } else {
          this.state = InifiniteScrollState.COMPLETE;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.content-container {
  height: 200px;
}
</style>
