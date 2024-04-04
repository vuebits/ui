<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiHorizontalScroll
        v-bind="{
          factor,
          scrollAnimationTime,
          arrowSize,
          hideArrows,
          floatingArrows,
        }"
        style="width: 500px"
      >
        <div style="display: flex; gap: 20px">
          <a
            v-for="i in 10"
            :key="i"
            :style="{
              height: '100px',
              width: '100px',
              backgroundColor: 'red',
              flexShrink: 0,
              opacity: 1 - i / 10,
            }"
            href="https://google.com"
            target="_blank"
          ></a>
        </div>
      </UiHorizontalScroll>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobNumber
          v-model="factor"
          :min="0"
          :max="1"
          :step="0.1"
          label="Factor"
        />
        <KnobNumber
          v-model="scrollAnimationTime"
          :step="100"
          label="Scroll animation time"
        />
        <KnobListItem
          v-model="arrowSize"
          :items="arrowSizes"
          label="Arrow size"
        />
        <KnobBoolean
          v-model="hideArrows"
          label="Hide arrows"
        />
        <KnobBoolean
          v-model="floatingArrows"
          label="Floating arrows"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobBoolean, KnobNumber, KnobListItem } from '@/components'
import { UiHorizontalScroll } from '@vuebits/ui'

export default {
  name: 'HorizontalScrollExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    KnobNumber,
    KnobListItem,
    UiHorizontalScroll,
  },
  data() {
    return {
      factor: 0.1,
      scrollAnimationTime: 100,
      arrowSize: 'md',
      arrowSizes: ['sm', 'md', 'lg'],
      hideArrows: false,
      floatingArrows: false,
    }
  },
  methods: {
    alert(a) {
      alert(a)
    },
  },
}
</script>
