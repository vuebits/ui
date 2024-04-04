<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiButton
        color="primary"
        dark
        @click="isModalShown = true"
      >
        Open modal
      </UiButton>
      <UiModal
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
        <UiModalHeader>Header</UiModalHeader>
        <UiModalBody> Body </UiModalBody>
        <UiModalBody>
          <Knobs style="width: 100%">
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
        </UiModalBody>
        <UiModalFooter>Footer</UiModalFooter>
        <UiModalFooter>
          <UiButton
            dark
            color="primary"
            @click="isModalShown = false"
          >
            Close modal
          </UiButton>
        </UiModalFooter>
      </UiModal>
    </Preview>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobListItem, KnobBoolean, KnobNumber } from '@/components'
import { UiButton, UiModal, UiModalHeader, UiModalBody, UiModalFooter } from '@vuebits/ui'
import { sizes, transitions } from '@/helpers/story-params'

export default {
  name: 'ModalExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobNumber,
    UiButton,
    UiModal,
    UiModalHeader,
    UiModalBody,
    UiModalFooter,
  },
  data() {
    return {
      isModalShown: false,
      areSlotsShown: false,
      sizes,
      positions: ['middle', 'top', 'left', 'bottom', 'right', 'fullscreen'],
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
    }
  },
  computed: {
    computedWidth() {
      return this.width ? Math.max(this.width, 300) : this.width
    },
  },
}
</script>
