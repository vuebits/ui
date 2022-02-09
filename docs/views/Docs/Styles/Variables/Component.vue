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
      language="js"
      code="
// vite.config.js

import { defineConfig } from 'vite';
// other imports

export default defineConfig({
  // your configuration
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/styles/config.scss';
        `,
      },
    },
  },
});
      "
    />
    <p class="docs--p">
      And in your scss config file:
    </p>
    <CodeBlock
      language="scss"
      code="
// @/assets/styles/config.scss
// example for vite imports syntax

// margins, paddings ect.
$sp: 7px;

// borders
$border-radius-main: $sp;

// z-index
$layer-modal: 100000;
$layer-dropdown: 7;

// import vuebits ui config at the end of your file for the library to use your custom configuration
@import '@vuebits/ui/styles/config';
      "
    />
    <p class="docs--p">
      Full list of default colors:
    </p>
    <CodeBlock
      language="scss"
      code="
@use 'sass:color';

// HELPER COLORS
$color-black: #000 !default;
$color-white: #fff !default;
$color-lightgray: #d8d8d8 !default;
$color-gray: #afb0b1 !default;
$color-light: #f1f2f3 !default;
$color-dark: #25074f !default;
$color-dark-2: #370d74 !default;
$color-red: #e02020 !default;
$color-green: #95c11e !default;
$color-blue-pickled-bluewood: #35495e !default;
$color-green-ocean: #42b983 !default;

// THEME COLORS

// primary
$color-primary: $color-blue-pickled-bluewood;
$color-primary-hover: color.adjust($color-primary, $lightness: -10%) !default;
$color-primary-gradient-1: color.adjust($color-primary, $lightness: -20%) !default;
$color-primary-gradient-2: color.adjust($color-primary, $lightness: 10%) !default;

// secondary
$color-secondary: $color-green-ocean;
$color-secondary-hover: color.adjust($color-secondary, $lightness: -10%) !default;
$color-secondary-gradient-1: color.adjust($color-secondary, $lightness: -20%) !default;
$color-secondary-gradient-2: color.adjust($color-secondary, $lightness: 10%) !default;

// STATUSES
$color-error: $color-red;
$color-success: $color-green;

// TYPOGRAPHY
$color-text: $color-black;
$color-text-2: #808184;
$color-text-3: #646464;

// statuses
$color-info: #0af !default;
$color-success: $color-green !default;
$color-warning: #ff0 !default;
$color-error: $color-red !default;
$color-disabled: $color-gray !default;

//themes
$color-theme-dark: $color-dark !default;
$color-theme-dark-font: $color-white !default;
$color-theme-dark-hover: color.adjust($color-theme-dark, $lightness: 10%) !default;

$color-theme-light: $color-white !default;
$color-theme-light-font: $color-text !default;
$color-theme-light-hover: $color-light !default;

// elements
$color-border: #e0e0e0 !default;
$color-link: $color-primary !default;
$color-bg: $color-light !default;
$color-label: $color-primary !default;
$color-input-bg: $color-white;
$color-blend: rgba($color-black, 0.5) !default;
$color-hover: rgba($color-primary, 0.05) !default;
$color-hover-dark: rgba($color-primary, 0.9) !default;
      "
    />
    <p class="docs--p">
      Breakpoints:
    </p>
    <CodeBlock
      language="scss"
      code="
$xs: 36em !default;
$sm: 57.6em !default;
$md: 76.8em !default;
$lg: 106em !default;
$xl: 130em !default;

$min-content-width: 32em !default;
$max-content-width: 192em !default;

$wrapper-margin: 2 * $sp !default;
$wrapper-margin-lg: 4 * $sp !default;

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
$font-main: Arial, sans-serif !default;
      "
    />
    <p class="docs--p">
      Other variables:
    </p>
    <CodeBlock
      language="scss"
      code="
$root-font-size: 62.5% !default;

// margins, paddings ect.
$sp: 0.4rem !default;
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

$sp-modal: $sp-lg !default;

// borders
$border-radius-main: 2 * $sp !default;
$border-radius-large: 4 * $sp !default;
$border-radius-round: 40px !default;
$border-width: 1px !default;

// z-index
$layer-modal: 100 !default;
$layer-dropdown: 5 !default;
$layer-toolbar: 10 !default;
$layer-notifications: 1000 !default;

// field spacings
$field-sp: 2 * $sp !default;

// field sizes
$field-size-sm: 3rem !default;
$field-size-md: 4rem !default;
$field-size-lg: 5.5rem !default;

// icon sizes
$icon-size-sm: 1.5rem !default;
$icon-size-md: 2rem !default;
$icon-size-lg: 2.5rem !default;

// font sizes
$font-size-sm: 1.2rem !default;
$font-size-md: 1.5rem !default;
$font-size-lg: 1.8rem !default;

// shadows
$shadow-deep: 0 3px 6px 2px rgba($color-black, 0.3) !default;
$shadow-main: 0 3px 7px 0 rgba($color-black, 0.18) !default;
$shadow-tiny: 0 1px 2px 0 rgba($color-black, 0.1) !default;
$shadow-bottom: 0 0 5px 2px rgba($color-black, 0.17) !default;
$shadow-bottom-tiny: 0 1px 2px 1px rgba($color-black, 0.1) !default;
$shadow-depressed: inset 0 1px 3px rgba($color-black, 0.5) !default;

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
  disabled: $color-disabled,
  light: $color-bg
) !default;

$gradients: (
  primary: ($color-primary-gradient-1, $color-primary-gradient-2),
  secondary: ($color-secondary-gradient-1, $color-secondary-gradient-2)
) !default;

// animation times
$animation-time-short: 50ms !default;
$animation-time: 150ms !default;
$animation-time-long: 300ms !default;

// transitions
$transition-fast-ease: all $animation-time-short ease !default;
$hover-transition: all $animation-time-long ease-in-out !default;

// font-sizes
$font-size-input-label: 1.2rem !default;
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  PageHeader,
  CodeBlock,
} from '@/components';

export default defineComponent({
  name: 'DocsStylesVariables',
  components: {
    PageHeader,
    CodeBlock,
  },
});
</script>

<style lang="scss">
</style>
