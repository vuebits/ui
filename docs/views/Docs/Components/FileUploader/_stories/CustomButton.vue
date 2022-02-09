<template>
  <div>
    <VFileUploader
      @upload="upload"
    >
      <template #button="{on}">
        <VButton
          round
          gradient="secondary"
          v-on="on"
        >
          Upload
        </VButton>
      </template>
    </VFileUploader>
    {{ file }}
  </div>
</template>

<script>
import {
  VFileUploader,
  VButton,
} from '@vuebits/ui';

export default {
  name: 'FileUploaderCustomButton',
  components: {
    VFileUploader,
    VButton,
  },
  data () {
    return {
      file: null,
    };
  },
  methods: {
    upload (file) {
      this.file = file.name;
    },
  },
};
</script>
