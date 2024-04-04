<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiSimpleGrid
        :spacings-size="spacingsSize"
        :elements-xs="elementsXs"
        :elements-sm="elementsSm"
        :elements-md="elementsMd"
        :elements-lg="elementsLg"
        :elements-xl="elementsXl"
      >
        <UiSimpleGridItem
          v-for="i in 12"
          :key="i"
        >
          <div class="is-bordered has-padding-sm">
            {{ i }}
          </div>
        </UiSimpleGridItem>
      </UiSimpleGrid>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobListItem
          v-model="spacingsSize"
          :items="spacingsSizes"
          label="Spacings size"
        />
        <KnobNumber
          v-model="elementsXs"
          label="Elements xs"
        />
        <KnobNumber
          v-model="elementsSm"
          label="Elements sm"
        />
        <KnobNumber
          v-model="elementsMd"
          label="Elements md"
        />
        <KnobNumber
          v-model="elementsLg"
          label="Elements lg"
        />
        <KnobNumber
          v-model="elementsXl"
          label="Elements xl"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobNumber, KnobListItem } from '@/components'
import { UiSimpleGrid, UiSimpleGridItem } from '@vuebits/ui'

export default {
  name: 'SimpleGridExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobNumber,
    KnobListItem,
    UiSimpleGrid,
    UiSimpleGridItem,
  },
  data() {
    return {
      spacingsSizes: ['sm', 'md', 'lg', 'no'],
      spacingsSize: 'md',
      elementsXs: 1,
      elementsSm: 2,
      elementsMd: 3,
      elementsLg: 4,
      elementsXl: 6,
    }
  },
}
</script>
