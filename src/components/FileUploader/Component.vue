<template>
  <div
    :class="$bem({})"
    :style="styleVariables"
  >
    <VTile
      v-if="!isDropAreaHidden"
      :class="dropAreaClasses"
      :elevated="elevated"
      :round="round"
      :rounded="rounded"
      :rounded-lg="roundedLg"
      :dark="dark"
      :light="light"
      :color="color"
      @dragenter="toggleDrag"
      @dragleave="toggleDrag"
      @dragover.prevent
      @drop.prevent="onDrop"
    >
      <div :class="$bem({e: 'description'})">
        {{ computedDropAreaText }}
      </div>
      <slot name="background-icon">
        <VIcon
          name="file-import"
          :class="$bem({e: 'upload-icon'})"
          is-internal
        />
      </slot>
    </VTile>
    <input
      id="file-upload-file-input"
      ref="file"
      type="file"
      :class="$bem({e: 'file-input'})"
      :multiple="multipleFiles"
      :accept="acceptString"
      @change="fileAddedFromDisc"
    >
    <VButton
      v-if="!isButtonHidden"
      dark
      :class="buttonClasses"
      :color="buttonColor"
      rounded
      elevated
      left-icon="upload"
      @click="addFileFromDisc"
    >
      {{ btnText }}
    </VButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon } from '@/components/Icon';
import { VButton } from '@/components/Button';
import { VTile } from '@/components/Tile';
import { CssClass } from '@/helpers/css-classes';
import {
  themeProps,
  roundedProps,
  elevatedProps
} from '@/composition-functions';

export default defineComponent({
  name: 'VFileUploader',
  components: {
    VIcon,
    VButton,
    VTile
  },
  props: {
    width: {
      type: Number as PropType<number>,
      default: 0
    },
    buttonText: {
      type: String as PropType<string>,
      default: null
    },
    buttonColor: {
      type: String as PropType<string>,
      default: 'primary'
    },
    dropAreaText: {
      type: String as PropType<string>,
      default: ''
    },
    errorText: {
      type: String as PropType<string>,
      default: ''
    },
    dropAreaTextWhenDragging: {
      type: String as PropType<string>,
      default: ''
    },
    dropAreaTextWhenDisabled: {
      type: String as PropType<string>,
      default: ''
    },
    isButtonHidden: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    isDropAreaHidden: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    multipleFiles: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    color: {
      type: String as PropType<string>,
      default: 'default'
    },
    acceptedTypes: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    acceptedExtensions: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    ...themeProps,
    ...roundedProps,
    ...elevatedProps
  },
  emits: ['upload'],
  data () {
    return {
      isDraggedInDropArea: false,
      isDropAreaDisabled: false
    };
  },
  computed: {
    dropAreaClasses (): CssClass[] {
      return [
        ...this.$bem({
          e: 'drop-area',
          m: {
            disabled: this.isDropAreaDisabled
          }
        })
      ];
    },
    buttonClasses (): CssClass[] {
      return [...this.$bem({ e: 'upload-button' })];
    },
    styleVariables (): any {
      return { '--upload-width': this.width ? `${this.width}px` : '100%' };
    },
    btnText (): string | null {
      return this.buttonText || this.$ui.t().fileUploader.selectFromDisk;
    },
    computedDropAreaText (): string | null {
      return this.isDropAreaDisabled
        ? this.dropAreaTextWhenDisabled || this.$ui.t().fileUploader.dropAreaTextWhenDisabled
        : this.isDraggedInDropArea
          ? this.dropAreaTextWhenDragging || this.$ui.t().fileUploader.dropAreaTextWhenDragging
          : this.dropAreaText || this.$ui.t().fileUploader.dropAreaText;
    },
    uploadErrorText (): string | null {
      return this.errorText || this.$ui.t().fileUploader.validationError;
    },
    acceptString (): string {
      return [...this.acceptedTypes, ...this.acceptedExtensions].join(',');
    }
  },
  methods: {
    onDrop (ev: DragEvent): void {
      this.toggleDrag();
      if (ev.dataTransfer) {
        this.emitFileUpload(ev.dataTransfer.files);
      }
    },
    toggleDrag (): void {
      this.isDraggedInDropArea = !this.isDraggedInDropArea;
    },
    validateFiles (files: FileList): boolean {
      for (const file of files) {
        const name = file.name;
        const extension: string = `.${name.split('.').slice(-1)[0]}`.toLowerCase();
        const isExtensionCorrect = this.acceptedExtensions.length === 0 || this.acceptedExtensions.map(ext => ext.toLowerCase()).includes(extension);
        const type = file.type;
        const allType = `${type.split('/')[0]}/*`;
        const isTypeCorrect = this.acceptedTypes.length === 0 || this.acceptedTypes.includes(type) || this.acceptedTypes.includes(allType);
        if (!isExtensionCorrect || !isTypeCorrect) {
          alert(this.uploadErrorText);
          return false;
        }
      }
      return true;
    },
    emitFileUpload (files: FileList | null): void {
      if (files && this.validateFiles(files)) this.$emit('upload', this.multipleFiles ? files : files[0]);
    },
    addFileFromDisc (): void {
      this.handleDropAreaState();
      (this.$refs.file as HTMLInputElement).click();
    },
    fileAddedFromDisc (event: Event): void {
      this.emitFileUpload((event.target as HTMLInputElement).files);
    },
    handleDropAreaState (): void {
      this.isDropAreaDisabled = true;
      document.body.onfocus = () => {
        this.isDropAreaDisabled = false;
        document.body.onfocus = null;
      };
    }
  }
});
</script>

<style lang="scss">
@import './styles';
</style>
