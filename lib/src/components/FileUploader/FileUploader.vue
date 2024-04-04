<template>
  <div
    :class="bem({})"
    v-bind="$ui.testElName('file-uploader')"
  >
    <UiTile
      v-if="!isDropAreaHidden"
      :class="dropAreaClasses"
      :elevated="elevated"
      :round="round"
      :rounded="rounded"
      :rounded-lg="roundedLg"
      :dark="dark"
      :light="light"
      :color="color"
      v-bind="ui.testElName('file-uploader-drop-area')"
      @dragenter="toggleDrag"
      @dragleave="toggleDrag"
      @dragover.prevent
      @drop.prevent="onDrop"
    >
      <div :class="bem({ e: 'description' })">
        {{ computedDropAreaText }}
      </div>
      <slot name="background-icon">
        <UiIcon
          :name="ui.icons.values.upload"
          :class="bem({ e: 'upload-icon' })"
        />
      </slot>
    </UiTile>
    <input
      id="file-upload-file-input"
      ref="file"
      type="file"
      :class="bem({ e: 'file-input' })"
      v-bind="ui.testElName('file-uploader-input')"
      :multiple="multipleFiles"
      :accept="acceptString"
      @change="fileAddedFromDisc"
    />
    <slot
      name="button"
      :on="{
        click: addFileFromDisc,
      }"
    >
      <UiButton
        v-if="!isButtonHidden"
        dark
        :class="buttonClasses"
        :color="buttonColor"
        rounded
        elevated
        :left-icon="ui.icons.values.upload"
        v-bind="ui.testElName('file-uploader-button')"
        @click="addFileFromDisc"
      >
        {{ btnText }}
      </UiButton>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { UiIcon } from '../Icon'
import { UiButton } from '../Button'
import { UiTile } from '../Tile'
import { CssClass } from '../../helpers/css-classes'
import {
  ThemeProps,
  RoundedProps,
  ElevatedProps,
  defaultThemeProps,
  defaultRoundedProps,
  defaultElevatedProps,
} from '../../composables'
import { defineBem, useUi } from '../../index'

const bem = defineBem('ui-file-uploader')
const ui = useUi()

const props = withDefaults(
  defineProps<
    {
      buttonText?: string
      buttonColor?: string
      dropAreaText?: string
      errorText?: string
      dropAreaTextWhenDragging?: string
      dropAreaTextWhenDisabled?: string
      isButtonHidden?: boolean
      isDropAreaHidden?: boolean
      multipleFiles?: boolean
      color?: string
      acceptedTypes?: string[]
      acceptedExtensions?: string[]
      maxSize?: number
    } & ThemeProps &
      RoundedProps &
      ElevatedProps
  >(),
  {
    buttonColor: 'primary',
    dropAreaText: '',
    errorText: '',
    dropAreaTextWhenDragging: '',
    dropAreaTextWhenDisabled: '',
    isButtonHidden: false,
    isDropAreaHidden: false,
    multipleFiles: false,
    color: 'default',
    acceptedTypes: () => [],
    acceptedExtensions: () => [],
    ...defaultThemeProps,
    ...defaultRoundedProps,
    ...defaultElevatedProps,
  },
)

const emit = defineEmits<{
  upload: [f: FileList | File]
}>()

const file = ref<HTMLInputElement | null>(null)

const isDraggedInDropArea = ref(false)
const isDropAreaDisabled = ref(false)

const dropAreaClasses = computed((): CssClass[] => [
  ...bem({
    e: 'drop-area',
    m: {
      disabled: isDropAreaDisabled.value,
    },
  }),
])
const buttonClasses = computed((): CssClass[] => [...bem({ e: 'upload-button' })])
const btnText = computed(() => props.buttonText || ui.t().fileUploader.selectFromDisk)
const computedDropAreaText = computed(() =>
  isDropAreaDisabled.value
    ? props.dropAreaTextWhenDisabled || ui.t().fileUploader.dropAreaTextWhenDisabled
    : isDraggedInDropArea.value
      ? props.dropAreaTextWhenDragging || ui.t().fileUploader.dropAreaTextWhenDragging
      : props.dropAreaText || ui.t().fileUploader.dropAreaText,
)
const uploadErrorText = computed(() => props.errorText || ui.t().fileUploader.validationError)
const uploadSizeFileErrorText = computed(() => ui.t().fileUploader.sizeError)
const acceptString = computed(() =>
  [...props.acceptedTypes, ...props.acceptedExtensions].join(','),
)
const toggleDrag = () => {
  isDraggedInDropArea.value = !isDraggedInDropArea.value
}
const validateFiles = (files: FileList): boolean => {
  let filesSize = 0
  for (const file of files) {
    const name = file.name
    const extension: string = `.${name.split('.').slice(-1)[0]}`.toLowerCase()
    const isExtensionCorrect =
      props.acceptedExtensions.length === 0 ||
      props.acceptedExtensions.map((ext) => ext.toLowerCase()).includes(extension)
    const type = file.type
    const allType = `${type.split('/')[0]}/*`
    const isTypeCorrect =
      props.acceptedTypes.length === 0 ||
      props.acceptedTypes.includes(type) ||
      props.acceptedTypes.includes(allType)
    if (props.maxSize) {
      filesSize = filesSize + file.size
    }

    if (!isExtensionCorrect || !isTypeCorrect) {
      alert(uploadErrorText.value)
      return false
    }
  }

  if (props.maxSize) {
    if (filesSize > props.maxSize) {
      alert(uploadSizeFileErrorText.value)
      return false
    }
  }
  return true
}
const emitFileUpload = (files: FileList | null) => {
  if (files && validateFiles(files)) emit('upload', props.multipleFiles ? files : files[0])
}
const onDrop = (ev: DragEvent) => {
  toggleDrag()
  if (ev.dataTransfer) {
    emitFileUpload(ev.dataTransfer.files)
  }
}
const handleDropAreaState = () => {
  isDropAreaDisabled.value = true
  document.body.onfocus = () => {
    isDropAreaDisabled.value = false
    document.body.onfocus = null
  }
}
const addFileFromDisc = () => {
  handleDropAreaState()
  file.value?.click()
}
const fileAddedFromDisc = (event: Event) => {
  emitFileUpload((event.target as HTMLInputElement).files)
  if (file.value) file.value.value = ''
}
</script>

<style lang="scss">
@import './FileUploader';
</style>
