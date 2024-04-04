<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiStarRating
        v-model="rating"
        :max-rating="maxRating"
        :show-rating="showRating"
        :active-color="activeColor"
        :inactive-color="inactiveColor"
        :star-size="starSize"
        :rounded-corners="roundedCorners"
        :glow="glow"
        :border-color="borderColor"
        :border-width="borderWidth"
        :glow-color="glowColor"
      />
    </Preview>
    <template #controls>
      <Knobs>
        <KnobNumber
          v-model="maxRating"
          label="Max rating"
        />
        <KnobNumber
          v-model="starSize"
          label="Star size"
        />
        <KnobNumber
          v-model="borderWidth"
          label="Border Width"
        />
        <KnobNumber
          v-model="glow"
          label="Glow"
        />
        <KnobBoolean
          v-model="showRating"
          label="Show rating"
        />
        <KnobBoolean
          v-model="roundedCorners"
          label="Rounden corners"
        />
        <KnobListItem
          v-model="activeColor"
          :items="colors"
          label="Active color"
        />
        <KnobListItem
          v-model="inactiveColor"
          :items="colors"
          label="Inactive color"
        />
        <KnobListItem
          v-model="borderColor"
          :items="colors"
          label="Border color"
        />
        <KnobListItem
          v-model="glowColor"
          :items="colors"
          label="Glow color"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem, KnobNumber, KnobBoolean } from '@/components'
import { UiStarRating } from '@vuebits/ui'
import { colors } from '@/helpers/story-params'
export default {
  name: 'StarRatingExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobNumber,
    KnobBoolean,
    UiStarRating,
  },
  data() {
    return {
      colors,
      rating: 4,
      maxRating: 7,
      showRating: true,
      roundedCorners: false,
      activeColor: 'primary',
      inactiveColor: 'light',
      starSize: 50,
      glow: 0,
      borderWidth: 0,
      borderColor: 'light',
      glowColor: 'light',
    }
  },
}
</script>
