<template>
  <svg
    :class="$bem({})"
    :height="getSize"
    :width="getSize"
    :viewBox="viewBox"
    v-bind="$ui.testElName('star-rating-star')"
    @mousemove="mouseMoving"
    @click="selected"
  >

    <linearGradient
      :id="grad"
      x1="0"
      x2="100%"
      y1="0"
      y2="0"
    >
      <stop
        :offset="getFill"
        :class="$bem({e: 'stop', m: (rtl) ? inactiveColor : activeColor})"
      />
      <stop
        :offset="getFill"
        :class="$bem({e: 'stop', m: (rtl) ? activeColor : inactiveColor})"
      />
    </linearGradient>

    <filter
      :id="glowId"
      height="130%"
      width="130%"
      filterUnits="userSpaceOnUse"
    >
      <feGaussianBlur
        :stdDeviation="glow"
        result="coloredBlur"
      />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <polygon
      v-show="fill > 1"
      :points="starPointsToString"
      :fill="getGradId"
      :class="$bem({e: 'polygon', m: {[glowColor]: !!glowColor}})"
      :filter="'url(#'+glowId+')'"
    />

    <polygon
      :points="starPointsToString"
      :fill="getGradId"
      :class="$bem({e: 'polygon', m: {[borderColor]: !!borderColor}})"
      :stroke-width="border"
      :stroke-linejoin="roundedCorners ? 'round' : 'miter'"
    />
    <polygon
      :points="starPointsToString"
      :fill="getGradId"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VStarRatingStar',
  props: {
    fill: {
      type: Number as PropType<number>,
      default: 0,
    },
    points: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    size: {
      type: Number as PropType<number>,
      default: 50,
    },
    starId: {
      type: Number as PropType<number>,
      required: true,
    },
    activeColor: {
      type: String as PropType<string>,
      required: true,
    },
    inactiveColor: {
      type: String as PropType<string>,
      required: true,
    },
    borderColor: {
      type: String as PropType<string>,
      default: '',
    },
    borderWidth: {
      type: Number as PropType<number>,
      default: 0,
    },
    roundedCorners: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    rtl: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    glow: {
      type: Number as PropType<number>,
      default: 0,
    },
    glowColor: {
      type: String as PropType<string>,
      default: '',
    },
  },
  emits: [
    'star-mouse-move',
    'star-selected',
  ],
  data () {
    return {
      starPoints: [
        19.8,
        2.2,
        6.6,
        43.56,
        39.6,
        17.16,
        0,
        17.16,
        33,
        43.56,
      ] as number[],
      grad: '',
      glowId: '',
    };
  },
  computed: {
    starPointsToString (): string {
      return this.starPoints.join(',');
    },
    getGradId (): string {
      return `url(#${this.grad})`;
    },
    getSize (): number {
      // Adjust star size when rounded corners are set with no border, to account for the 'hidden' border
      const size = (this.roundedCorners && this.borderWidth <= 0) ? this.size - this.border : this.size;
      return size + this.border;
    },
    getFill (): string {
      return (this.rtl) ? `${100 - this.fill}%` : `${this.fill}%`;
    },
    border (): number {
      return (this.roundedCorners && this.borderWidth <= 0) ? 0 : this.borderWidth;
    },
    getBorderColor (): string {
      if (this.roundedCorners && this.borderWidth <= 0) {
        // create a hidden border
        return (this.fill <= 0) ? this.inactiveColor : this.activeColor;
      }
      return this.borderColor;
    },
    maxSize (): number {
      return this.starPoints.reduce((a: number, b: number) => Math.max(a, b));
    },
    viewBox (): string {
      return `0 0 ${this.maxSize} ${this.maxSize}`;
    },
  },
  created () {
    this.starPoints = (this.points.length) ? this.points : this.starPoints;
    this.calculatePoints();
    this.grad = this.getRandomId();
    this.glowId = this.getRandomId();
  },
  methods: {
    mouseMoving ($event: any): void {
      this.$emit('star-mouse-move', {
        event: $event,
        position: this.getPosition($event),
        id: this.starId,
      });
    },
    getPosition ($event: any) {
      // calculate position in percentage.
      const starWidth = (92 / 100) * this.size;
      const offset = (this.rtl) ? Math.min($event.offsetX, 45) : Math.max($event.offsetX, 1);
      const position = Math.round((100 / starWidth) * offset);
      return Math.min(position, 100);
    },
    selected ($event: any) {
      this.$emit('star-selected', {
        id: this.starId,
        position: this.getPosition($event),
      });
    },
    getRandomId () {
      return Math.random().toString(36).substring(7);
    },
    calculatePoints () {
      this.starPoints = this.starPoints.map(point => ((this.size / this.maxSize) * point) + (this.border * 1.5));
    },
  },
});
</script>

<style lang="scss" src="./styles.scss" />
