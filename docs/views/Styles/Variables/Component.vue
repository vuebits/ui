<template>
  <div :class="$bem({})">
    <PageHeader>
      Variables
    </PageHeader>
    <p class="docs--p">
      If you use sass styles in your app you can overwrite default variables with your own variables.
      For this you have to define your own variable values before importing the library configuration. For example:
    </p>
    <CodeBlock
      language="js"
      code="
// vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '~@/assets/styles/config.scss';
        `
      }
    }
  }
};
      "
    />
    <CodeBlock
      language="scss"
      code="
// ~@/assets/styles/config.scss

// margins, paddings ect.
$sp: 7px;

// borders
$border-radius-main: $sp;
$border-radius-large: 3 * $sp;
$border-width: 1px;

// z-index
$layer-modal: 100000;
$layer-dropdown: 7;
$layer-toolbar: 15;
$layer-notifications: 10000000;

@import '~@vuebits/ui/styles/config';
      "
    />
    <p class="docs--p">
      Full list of default colors:
    </p>
    <CodeBlock
      language="scss"
      code="
$color-white: #FFF !default;
$color-black: #000 !default;
$color-grey-light: #F0F2F5 !default;
$color-grey-athens:#E5E8EC !default;
$color-grey-bright: #3F4254 !default;
$color-grey-trout:#4A4E5A !default;
$color-grey-pale-sky: #6B707D !default;
$color-red-lipstick: #B00044 !default;
$color-yellow-tree-poppy: #FEA321 !default;
$color-yellow-sea: #FFAC01 !default;
$color-yellow-sazerac: #FFF6E5 !default;
$color-blue-denim-darken: #0D57C3 !default;
$color-blue-torea-bay: #172897 !default;
$color-blue-dodger: #3287FE !default;
$color-blue-solitude: #EAF3FE !default;
$color-green-apple: #64BA3D !default;
$color-green-peppermint: #EFF8EB !default;

/* aliases */

// theme
$color-primary: $color-blue-torea-bay !default;
$color-secondary: $color-yellow-tree-poppy !default;

// elements
$color-border: $color-grey-athens !default;
$color-text: $color-black !default;
$color-text-2: $color-grey-trout !default;
$color-link: $color-blue-denim-darken !default;
$color-bg: $color-grey-light !default;

// statuses
$color-info: $color-blue-dodger !default;
$color-success: $color-green-apple !default;
$color-warning: $color-yellow-sea !default;
$color-error: $color-red-lipstick !default;
$color-closed: $color-grey-bright !default;
$color-disabled: $color-grey-pale-sky !default;

// event statuses
$color-status-1: $color-warning !default;
$color-status-2: $color-info !default;
$color-status-3: $color-success !default;
$color-status-4: $color-closed !default;

// pale colors
$color-info-pale: $color-blue-solitude !default;
$color-success-pale: $color-green-peppermint !default;
$color-warning-pale: $color-yellow-sazerac !default;
$color-error-pale: lighten($color-error, 63%) !default;
$color-closed-pale: lighten($color-status-4, 64%) !default;

$color-status-1-pale: $color-warning-pale !default;
$color-status-2-pale: $color-info-pale !default;
$color-status-3-pale: $color-success-pale !default;
$color-status-4-pale: $color-closed-pale !default;

//themes
$color-theme-dark: $color-grey-bright !default;
$color-theme-dark-font: $color-white !default;
$color-theme-dark-hover: lighten($color-theme-dark, 10%) !default;

$color-theme-light: $color-bg !default;
$color-theme-light-font: $color-black !default;
$color-theme-light-hover: $color-grey-light !default;
      "
    />
    <p class="docs--p">
      Breakpoints:
    </p>
    <CodeBlock
      language="scss"
      code="
$xs: 360px !default;
$sm: 576px !default;
$md: 768px !default;
$lg: 1060px !default;
$xl: 1300px !default;

$min-content-width: 320px !default;
$max-content-width: 1920px !default;

$breakpoints: (
  xs: $xs,
  sm: $sm,
  md: $md,
  lg: $lg,
  xl: $xl
) !default;

      "
    />
    <p class="docs--p">
      Typography:
    </p>
    <CodeBlock
      language="scss"
      code="
$font-main: 'Rubik', sans-serif !default;
      "
    />
    <p class="docs--p">
      Other variables:
    </p>
    <CodeBlock
      language="scss"
      code="
// margins, paddings ect.
$sp: 5px !default;
$sp-xs: $sp !default;
$sp-sm: 2 * $sp !default;
$sp-md: 3 * $sp !default;
$sp-lg: 4 * $sp !default;
$sp-xl: 6 * $sp !default;

$spacings: (
  xs: $sp-xs,
  sm: $sp-sm,
  md: $sp-md,
  lg: $sp-lg,
  xl: $sp-xl
) !default;

// borders
$border-radius-main: $sp !default;
$border-radius-large: 2 * $sp !default;
$border-radius-round: 10000px !default;
$border-width: 2px !default;

// z-index
$layer-modal: 100 !default;
$layer-dropdown: 5 !default;
$layer-toolbar: 10 !default;
$layer-notifications: 1000 !default;

// button sizes
$button-size-sm: 30px !default;
$button-size-md: 40px !default;
$button-size-lg: 55px !default;

//Shadows
$shadow-deep: 0 3px 6px 2px rgba($color-black, .3) !default;
$shadow-main: 0 2px 4px 0 rgba($color-black, .17) !default;
$shadow-tiny: 0 1px 2px 0 rgba($color-black, .1) !default;
$shadow-bottom: 0 0 5px 2px rgba($color-black, .17) !default;
$shadow-bottom-tiny: 0 1px 2px 1px rgba($color-black, .1) !default;

$colors: (
  white: $color-white,
  black: $color-black,
  dark: $color-theme-dark,
  primary: $color-primary,
  secondary: $color-secondary,
  text: $color-text,
  text-2: $color-text-2,
  success: $color-success,
  info: $color-info,
  error: $color-error,
  warning: $color-warning,
  disabled: $color-disabled
) !default;

//animation times
$animation-time-short: 100ms !default;
$animation-time: 150ms !default;
$animation-time-long: 300ms !default;

//transitions
$transition-fast-ease: all $animation-time-short ease !default;
$hover-transition: all $animation-time-long ease-in-out !default;
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  PageHeader,
  CodeBlock
} from '@/docs/components';

export default defineComponent({
  name: 'DocsStylesVariables',
  components: {
    PageHeader,
    CodeBlock
  }
});
</script>

<style lang="scss">
</style>
