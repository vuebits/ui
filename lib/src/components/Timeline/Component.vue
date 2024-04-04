<template>
  <div
    :class="$bem({})"
    v-bind="$ui.testElName('timeline')"
  >
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="$bem({ e: 'item' })"
      v-bind="$ui.testElName('timeline-item')"
    >
      <div :class="itemTimelineClasses(item, i)">
        <div
          :class="$bem({ e: 'item-label' })"
          v-bind="$ui.testElName('timeline-item-label')"
        >
          <div :class="$bem({ e: 'item-datetime', m: 'desktop' })">
            <div :class="$bem({ e: 'item-date' })">
              <slot
                name="date"
                :item="item"
              >
                {{ item.date }}
              </slot>
            </div>
            <div :class="$bem({ e: 'item-time' })">
              <slot
                name="time"
                :item="item"
              >
                {{ item.time }}
              </slot>
            </div>
          </div>

          <i
            :class="typeClasses(item.type)"
            :title="`${item.date}, ${item.time}`"
          />
        </div>
      </div>
      <div
        :class="$bem({ e: 'item-content' })"
        v-bind="$ui.testElName('timeline-item-content')"
      >
        <div :class="$bem({ e: 'item-datetime' })">
          <div :class="$bem({ e: 'item-date' })">
            {{ item.date }}
          </div>
          <div :class="$bem({ e: 'item-time' })">
            {{ item.time }}
          </div>
        </div>
        <slot
          name="item"
          :item="item.data"
          :date="item.date"
          :time="item.time"
          :type="item.type"
        />
      </div>
    </div>
    <div
      v-if="$slots.more && items.length > 0"
      :class="$bem({ e: 'more' })"
      v-bind="$ui.testElName('timeline-more')"
    >
      <div :class="$bem({ e: 'more-badge' })" />
      <div :class="$bem({ e: 'more-content' })">
        <slot name="more" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { bgColorClass, CssClass } from '../../helpers/css-classes'
import { defineComponent, PropType } from 'vue'
import { TimelineItem } from './models'

export default defineComponent({
  name: 'UiTimeline',
  props: {
    items: {
      type: Array as PropType<TimelineItem[]>,
      required: true,
    },
  },
  methods: {
    typeClasses(type: string | undefined): CssClass[] {
      const colorClasses = type ? [bgColorClass(type)] : []
      return [...this.$bem({ e: 'item-type' }), ...colorClasses]
    },
    itemTimelineClasses(item: TimelineItem, i: number): CssClass[] {
      return this.$bem({
        e: 'item-timeline',
        m: {
          'highlighted-before': item.highlight || false,
          'highlighted-after': this.items[i + 1]?.highlight || false,
        },
      })
    },
  },
})
</script>

<style lang="scss">
@import './styles';
</style>
