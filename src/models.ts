export interface Bem {
  hyphenate?: boolean;
}

export interface BemItem {
  b?: string;
  e?: string;
  m?: string | string[] | {[key in string]: boolean};
}

export interface Dictionary {
  asyncContent: {
    errorText: string;
    reloadText: string;
  };
  autocomplete: {
    noMatchingItems: string;
  };
  infiniteScroll: {
    loadingText: string;
    completeText: string;
    errorText: string;
  };
  phoneInput: {
    errorText: string;
  };
  select: {
    placeholder: string;
    search: string;
    noMatchingItems: string;
  };
  image: {
    downloadFailed: string;
    checkNetwork: string;
    downloadImage: string;
  };
  fileUploader: {
    selectFromDisk: string;
    dropAreaText: string;
    dropAreaTextWhenDragging: string;
    dropAreaTextWhenDisabled: string;
    title: string;
    validationError: string;
  };
}

export enum Locale {
  PL = 'pl',
  EN = 'en'
}

export interface CustomBemOptions {
  bem?: Bem;
}

export interface BemOptions {
  bem: Bem;
}

export interface CustomLocaleOptions {
  locale?: string;
  locales?: {
    [key in string]: Dictionary;
  };
}

export interface LocaleOptions {
  locale: string;
  locales: {
    [key in string]: Dictionary;
  };
  t (): Dictionary;
}

export interface Options extends LocaleOptions, BemOptions {}

export interface CustomOptions extends CustomLocaleOptions, CustomBemOptions {
}
