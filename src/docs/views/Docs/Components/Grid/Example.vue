<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VGrid :spacings-size="spacingsSize">
        <VGridItem

          :cols-xs="colsXs1"
          :cols-sm="colsSm1"
          :cols-md="colsMd1"
          :cols-lg="colsLg1"
          :cols-x1="colsXl1"
        >
          <div class="is-bordered">
            <div>cols-xs: {{ colsXs1 }}</div>
            <div>cols-sm: {{ colsSm1 }}</div>
            <div>cols-md: {{ colsMd1 }}</div>
            <div>cols-lg: {{ colsLg1 }}</div>
            <div>cols-xl: {{ colsXl1 }}</div>
            <Knobs>
              <KnobNumber
                v-model="colsXs1"
                label="Cols xs"
              />
              <KnobNumber
                v-model="colsSm1"
                label="Cols sm"
              />
              <KnobNumber
                v-model="colsMd1"
                label="Cols md"
              />
              <KnobNumber
                v-model="colsLg1"
                label="Cols lg"
              />
              <KnobNumber
                v-model="colsXl1"
                label="Cols lg"
              />
            </Knobs>
          </div>
        </VGridItem>
        <VGridItem
          :cols-xs="colsXs2"
          :cols-sm="colsSm2"
          :cols-md="colsMd2"
          :cols-lg="colsLg2"
          :cols-x1="colsXl2"
        >
          <div class="is-bordered">
            <div>cols-xs: {{ colsXs2 }}</div>
            <div>cols-sm: {{ colsSm2 }}</div>
            <div>cols-md: {{ colsMd2 }}</div>
            <div>cols-lg: {{ colsLg2 }}</div>
            <div>cols-xl: {{ colsXl2 }}</div>
            <Knobs>
              <KnobNumber
                v-model="colsXs2"
                label="Cols xs"
              />
              <KnobNumber
                v-model="colsSm2"
                label="Cols sm"
              />
              <KnobNumber
                v-model="colsMd2"
                label="Cols md"
              />
              <KnobNumber
                v-model="colsLg2"
                label="Cols lg"
              />
              <KnobNumber
                v-model="colsXl2"
                label="Cols lg"
              />
            </Knobs>
          </div>
        </VGridItem>
      </VGrid>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobListItem
          v-model="spacingsSize"
          :items="spacingsSizes"
          label="Spacings size"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs,
  KnobNumber,
  KnobListItem
} from '@/docs/components';
import {
  VGrid,
  VGridItem
} from '@/components';

export default {
  name: 'CheckboxExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobNumber,
    KnobListItem,
    VGrid,
    VGridItem
  },
  data () {
    return {
      spacingsSizes: [
        'sm',
        'md',
        'lg',
        'no'
      ],
      spacingsSize: 'md',
      colsXs1: 12,
      colsSm1: 6,
      colsMd1: 4,
      colsLg1: 3,
      colsXl1: 2,
      colsXs2: 12,
      colsSm2: 6,
      colsMd2: 6,
      colsLg2: 4,
      colsXl2: 3
    };
  }
};
</script>
