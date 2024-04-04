<template>
  <div>
    <UiFileUploader @upload="upload">
      <template #button="{ on }">
        <UiButton
          round
          gradient="secondary"
          v-on="on"
        >
          Upload
        </UiButton>
      </template>
    </UiFileUploader>
    {{ file }}
  </div>
</template>

<script>
import { UiFileUploader, UiButton } from '@vuebits/ui'

export default {
  name: 'FileUploaderCustomButton',
  components: {
    UiFileUploader,
    UiButton,
  },
  data() {
    return {
      file: null,
    }
  },
  methods: {
    upload(file) {
      this.file = file.name
    },
  },
}
</script>
