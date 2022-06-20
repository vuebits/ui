<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VButton
        color="primary"
        dark
        @click="isModalShown = true"
      >
        Open modal
      </VButton>
      <VModal
        v-model="isModalShown"
        :bordered="bordered"
        :elevated="elevated"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :size="size"
        :persistent="persistent"
        :width="computedWidth"
        :position="position"
        :transition="transition"
        :close-on-esc="closeOnEsc"
      >
        <template
          v-if="areSlotsShown"
          #top
        >
          top
        </template>
        <template
          v-if="areSlotsShown"
          #right
        >
          right
        </template>
        <template
          v-if="areSlotsShown"
          #bottom
        >
          bottom
        </template>
        <template
          v-if="areSlotsShown"
          #left
        >
          left
        </template>
        <VModalHeader>Header</VModalHeader>
        <VModalBody>
          Body
        </VModalBody>
        <VModalBody>
          <Knobs style="width: 100%;">
            <KnobBoolean
              v-model="areSlotsShown"
              label="Show slots"
            />
            <KnobListItem
              v-model="position"
              :items="positions"
              label="Position"
            />
            <KnobListItem
              v-model="size"
              :items="sizes"
              label="Size"
            />
            <KnobBoolean
              v-model="persistent"
              label="Persistent"
            />
            <KnobBoolean
              v-model="closeOnEsc"
              label="Close on ESC"
            />
            <KnobBoolean
              v-model="bordered"
              label="Bordered"
            />
            <KnobBoolean
              v-model="elevated"
              label="Elevated"
            />
            <KnobBoolean
              v-model="rounded"
              label="Rounded"
            />
            <KnobBoolean
              v-model="roundedLg"
              label="Rounded large"
            />
            <KnobListItem
              v-model="transition"
              :items="transitions"
              label="Transition"
            />
            <KnobNumber
              v-model="width"
              :min="300"
              label="Width (min width is 300)"
            />
          </Knobs>
        </VModalBody>
        <VModalFooter>Footer</VModalFooter>
        <VModalFooter>
          <VButton
            dark
            color="primary"
            @click="isModalShown = false"
          >
            Close modal
          </VButton>
        </VModalFooter>
      </VModal>
    </Preview>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs,
  KnobListItem,
  KnobBoolean,
  KnobNumber,
} from '@/components';
import {
  VButton,
  VModal,
  VModalHeader,
  VModalBody,
  VModalFooter,
} from '@vuebits/ui';
import { sizes, transitions } from '@/helpers/story-params';

export default {
  name: 'ModalExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobNumber,
    VButton,
    VModal,
    VModalHeader,
    VModalBody,
    VModalFooter,
  },
  data () {
    return {
      isModalShown: false,
      areSlotsShown: false,
      sizes,
      positions: [
        'middle',
        'top',
        'left',
        'bottom',
        'right',
        'fullscreen',
      ],
      transitions,
      persistent: false,
      bordered: false,
      elevated: false,
      rounded: false,
      roundedLg: false,
      size: 'md',
      width: null,
      position: 'middle',
      transition: 'slide-top',
      closeOnEsc: false,
    };
  },
  computed: {
    computedWidth () {
      return this.width ? Math.max(this.width, 300) : this.width;
    },
  },
};
</script>
