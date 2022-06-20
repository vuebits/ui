<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VFileUploader
        :elevated="elevated"
        :round="round"
        :rounded="rounded"
        :rounded-lg="roundedLg"
        :dark="dark"
        :light="light"
        :color="color"
        :width="width"
        :button-text="buttonText"
        :button-color="buttonColor"
        :drop-area-text="dropAreaText"
        :error-text="errorText"
        :drop-area-text-when-dragging="dropAreaTextWhenDragging"
        :drop-area-text-when-disabled="dropAreaTextWhenDisabled"
        :is-button-hidden="isButtonHidden"
        :is-drop-area-hidden="isDropAreaHidden"
        :multiple-files="multipleFiles"
        :accepted-extensions="acceptedExtensions"
        @upload="upload"
      />
      <div v-if="file">
        {{ file }}
        <button @click="file = null">
          x
        </button>
      </div>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="isButtonHidden"
          label="Is button hidden"
        />
        <KnobBoolean
          v-model="isDropAreaHidden"
          label="Is drop area hidden"
        />
        <KnobBoolean
          v-model="dark"
          label="Dark"
        />
        <KnobBoolean
          v-model="light"
          label="Light"
        />
        <KnobListItem
          v-model="color"
          :items="colors"
          label="Color"
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
        <KnobBoolean
          v-model="round"
          label="Round"
        />
        <KnobNumber
          v-model="width"
          label="Width"
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
  KnobListItem,
  KnobBoolean,
  KnobNumber,
} from '@/components';
import {
  VFileUploader,
} from '@vuebits/ui';
import { colors } from '@/helpers/story-params';

export default {
  name: 'FileUploaderExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobListItem,
    KnobBoolean,
    KnobNumber,
    VFileUploader,
  },
  data () {
    return {
      file: null,
      colors,
      elevated: false,
      round: false,
      rounded: false,
      roundedLg: false,
      roundedSmall: false,
      dark: false,
      light: false,
      color: '',
      width: 200,
      buttonText: '',
      buttonColor: 'primary',
      dropAreaText: '',
      errorText: '',
      dropAreaTextWhenDragging: '',
      dropAreaTextWhenDisabled: '',
      isButtonHidden: false,
      isDropAreaHidden: false,
      multipleFiles: false,
      acceptedExtensions: ['.png'],
    };
  },
  methods: {
    upload (file) {
      this.file = file.name;
    },
  },
};
</script>
