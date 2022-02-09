<template>
  <div :class="$bem({})">
    <PageHeader>
      Common classes
    </PageHeader>
    <Story
      file-name="Color"
      component-name="CommonClasses"
      group-name="Styles"
      title="Color"
    >
      <CommonClassesColor />
    </Story>
    <Story
      file-name="BgColor"
      component-name="CommonClasses"
      group-name="Styles"
      title="Background color"
    >
      <CommonClassesBgColor />
    </Story>
    <Story
      file-name="BorderColor"
      component-name="CommonClasses"
      group-name="Styles"
      title="Border color"
    >
      <CommonClassesBorderColor />
    </Story>
    <Story
      file-name="HoverColor"
      component-name="CommonClasses"
      group-name="Styles"
      title="Hover color"
    >
      <CommonClassesHoverColor />
    </Story>
    <Story
      file-name="HoverBgColor"
      component-name="CommonClasses"
      group-name="Styles"
      title="Hover background color"
    >
      <CommonClassesHoverBgColor />
    </Story>
    <Story
      file-name="Rounding"
      component-name="CommonClasses"
      group-name="Styles"
      title="Rounding"
    >
      <CommonClassesRounding />
    </Story>
    <Story
      file-name="Theme"
      component-name="CommonClasses"
      group-name="Styles"
      title="Theme"
    >
      <CommonClassesTheme />
    </Story>
    <Story
      file-name="Margin"
      component-name="CommonClasses"
      group-name="Styles"
      title="Margin"
    >
      <CommonClassesMargin />
    </Story>
    <Story
      file-name="Padding"
      component-name="CommonClasses"
      group-name="Styles"
      title="Padding"
    >
      <CommonClassesPadding />
    </Story>
    <Story
      file-name="Other"
      component-name="CommonClasses"
      group-name="Styles"
      title="Other"
    >
      <CommonClassesOther />
    </Story>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  PageHeader,
  Story,
} from '@/components';
import {
  CommonClassesColor,
  CommonClassesBgColor,
  CommonClassesBorderColor,
  CommonClassesHoverColor,
  CommonClassesHoverBgColor,
  CommonClassesRounding,
  CommonClassesTheme,
  CommonClassesOther,
  CommonClassesPadding,
  CommonClassesMargin,
} from './_stories';

export default defineComponent({
  name: 'DocsStylesCommonClasses',
  components: {
    PageHeader,
    Story,
    CommonClassesColor,
    CommonClassesBgColor,
    CommonClassesBorderColor,
    CommonClassesHoverColor,
    CommonClassesHoverBgColor,
    CommonClassesRounding,
    CommonClassesTheme,
    CommonClassesOther,
    CommonClassesPadding,
    CommonClassesMargin,
  },
});
</script>

<style lang="scss">
</style>
