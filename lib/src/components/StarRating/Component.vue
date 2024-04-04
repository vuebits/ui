<template>
  <div
    :class="$bem({ m: { rtl: rtl, inline: inline } })"
    v-bind="$ui.testElName('star-rating')"
    @mouseleave="resetRating"
  >
    <StarRatingStar
      v-for="n in maxRating"
      :key="n"
      :fill="fillLevel[n - 1]"
      :size="starSize"
      :points="starPoints"
      :star-id="n"
      :step="step"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :border-color="borderColor"
      :border-width="borderWidth"
      :rounded-corners="roundedCorners"
      :rtl="rtl"
      :glow="glow"
      :glow-color="glowColor"
      :class="$bem({ e: 'star', m: { pointer: !readOnly } })"
      :style="{ 'margin-right': margin + 'px' }"
      @star-selected="setRating($event, true)"
      @star-mouse-move="setRating"
    />

    <span
      v-if="showRating"
      :class="$bem({ e: 'label' })"
    >
      {{ formattedRating }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import StarRatingStar from './Star'

export default defineComponent({
  name: 'UiStarRating',
  components: {
    StarRatingStar,
  },
  model: {
    prop: 'rating',
    event: 'rating-selected',
  },
  props: {
    increment: {
      type: Number as PropType<number>,
      default: 1,
    },
    rating: {
      type: Number,
      default: 0,
    },
    roundStartRating: {
      type: Boolean,
      default: true,
    },
    activeColor: {
      type: String,
      default: 'primary',
    },
    inactiveColor: {
      type: String,
      default: 'light',
    },
    maxRating: {
      type: Number,
      default: 5,
    },
    starPoints: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    starSize: {
      type: Number,
      default: 50,
    },
    showRating: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    textClass: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: String,
      default: '',
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    roundedCorners: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Number,
      default: 0,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    fixedPoints: {
      type: Number,
      default: null,
    },
    glow: {
      type: Number,
      default: 0,
    },
    glowColor: {
      type: String,
      default: '',
    },
  },
  emits: ['current-rating', 'rating-selected'],
  data() {
    return {
      step: 0,
      fillLevel: [] as number[],
      currentRating: 0,
      selectedRating: 0,
      ratingSelected: false,
    }
  },
  computed: {
    formattedRating(): string {
      return !this.fixedPoints
        ? `${this.currentRating}`
        : this.currentRating.toFixed(this.fixedPoints)
    },
    shouldRound(): boolean {
      return this.ratingSelected || this.roundStartRating
    },
    margin(): number {
      return this.padding + this.borderWidth
    },
  },
  watch: {
    rating(val) {
      this.currentRating = val
      this.selectedRating = val
      this.createStars(this.shouldRound)
    },
  },
  created() {
    this.step = this.increment * 100
    this.currentRating = this.rating
    this.selectedRating = this.currentRating
    this.createStars(this.roundStartRating)
  },
  methods: {
    setRating(data: any, persist = false): void {
      if (!this.readOnly) {
        const position = this.rtl ? (100 - data.position) / 100 : data.position / 100
        this.currentRating = Math.round((data.id + position - 1) * 100) / 100
        this.currentRating =
          this.currentRating > this.maxRating ? this.maxRating : this.currentRating
        this.createStars()
        if (persist) {
          this.selectedRating = this.currentRating
          this.$emit('rating-selected', this.selectedRating)
          this.ratingSelected = true
        } else {
          this.$emit('current-rating', this.currentRating)
        }
      }
    },
    resetRating(): void {
      if (!this.readOnly) {
        this.currentRating = this.selectedRating
        this.createStars(this.shouldRound)
      }
    },
    createStars(round = true): void {
      if (round) {
        this.round()
      }
      for (let i = 0; i < this.maxRating; i++) {
        let level = 0
        if (i < this.currentRating) {
          level = this.currentRating - i > 1 ? 100 : (this.currentRating - i) * 100
        }
        this.fillLevel[i] = Math.round(level)
      }
    },
    round(): void {
      const inv = 1.0 / this.increment
      this.currentRating = Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv)
    },
  },
})
</script>

<style lang="scss" src="./styles.scss" />
