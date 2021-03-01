export interface BemOptions {
  hyphenate?: boolean;
}

export interface BemItem {
  b?: string;
  e?: string;
  m?: string | string[] | {[key in string]: boolean};
}

export interface Options {
  bem?: BemOptions;
}
