export interface Bem {
  hyphenate?: boolean
}

export interface BemItem {
  b?: string
  e?: string
  m?: string | string[] | { [key in string]: boolean }
}

export interface Dictionary {
  asyncContent: {
    errorText: string
    reloadText: string
  }
  autocomplete: {
    noMatchingItems: string
  }
  infiniteScroll: {
    loadingText: string
    completeText: string
    errorText: string
  }
  phoneInput: {
    errorText: string
  }
  pagination: {
    page: string
    total: string
  }
  select: {
    placeholder: string
    search: string
    noMatchingItems: string
  }
  image: {
    downloadFailed: string
    checkNetwork: string
    downloadImage: string
  }
  fileUploader: {
    selectFromDisk: string
    dropAreaText: string
    dropAreaTextWhenDragging: string
    dropAreaTextWhenDisabled: string
    title: string
    validationError: string
    sizeError: string
  }
  weekdays: string[]
  months: string[]
  timeline: {
    noItems: string
  }
  table: {
    loading: string
    noItems: string
  }
}

export enum Locale {
  PL = 'pl',
  EN = 'en',
  UK = 'uk',
}

export interface CustomBemOptions {
  bem?: Bem
}

export interface BemOptions {
  bem: Bem
}

export interface CustomLocaleOptions {
  locale?: string
  locales?: {
    [key in string]: Dictionary
  }
}

export interface LocaleOptions {
  locale: string
  locales: {
    [key in string]: Dictionary
  }
  t(): Dictionary
}
export interface CustomTestOptions {
  test?: {
    elAttrName: string
    elNamePrefix: string
  }
}

export interface TestOptions {
  test: {
    elAttrName: string
    elNamePrefix: string
  }
  testElName(name: string): {
    [key in string]: string
  }
}

type IconsValues = {
  error: string
  spinner: string
  check: string
  previous: string
  next: string
  expand: string
  collapse: string
  upload: string
  close: string
  menu: string
}

export type IconsConfig = (
  | {
      format: 'js'
      size: number
      viewbox: string
    }
  | {
      format: 'font'
      prefix: string
    }
) & {
  type: string
  values: IconsValues
}

export type IconsOptions = {
  icons: IconsConfig
}

export interface CustomIconsOptions {
  icons?: IconsConfig
}

export interface Options extends LocaleOptions, BemOptions, IconsOptions, TestOptions {}

export interface CustomOptions
  extends CustomLocaleOptions,
    CustomBemOptions,
    CustomIconsOptions,
    CustomTestOptions {}

export const tooltipPositions = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
} as const

type TooltipPositionName = keyof typeof tooltipPositions
export type TooltipPosition = (typeof tooltipPositions)[TooltipPositionName]
