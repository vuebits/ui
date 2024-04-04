<template>
  <div :class="$bem({})">
    <PageHeader> Icon </PageHeader>
    <TileExample />
    <ComponentApi :component="component" />
    <Story
      file-name="Name"
      component-name="Icon"
      title="Name"
    >
      <IconName />
    </Story>
    <Story
      file-name="Type"
      component-name="Icon"
      title="Type"
    >
      <IconType />
    </Story>
    <Story
      file-name="Size"
      component-name="Icon"
      title="Size"
    >
      <IconSize />
    </Story>
    <Story
      file-name="Rotate"
      component-name="Icon"
      title="Rotate"
    >
      <IconRotate />
    </Story>
    <Story
      file-name="Flip"
      component-name="Icon"
      title="Flip"
    >
      <IconFlip />
    </Story>
    <Story
      file-name="Pulse"
      component-name="Icon"
      title="Pulse"
    >
      <IconPulse />
    </Story>
    <Story
      file-name="Spin"
      component-name="Icon"
      title="Spin"
    >
      <IconSpin />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UiIcon } from '@vuebits/ui'
import TileExample from './Example.vue'
import { PageHeader, ComponentApi, Story } from '@/components'
import {
  IconName,
  IconType,
  IconSize,
  IconRotate,
  IconFlip,
  IconPulse,
  IconSpin,
} from './_stories'

export default defineComponent({
  name: 'DocsComponentsIcon',
  components: {
    PageHeader,
    ComponentApi,
    TileExample,
    Story,
    IconName,
    IconType,
    IconSize,
    IconRotate,
    IconFlip,
    IconPulse,
    IconSpin,
  },
  data() {
    return {
      component: UiIcon,
    }
  },
})
</script>

<style lang="scss"></style>
