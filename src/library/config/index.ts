import { defaultLocales } from './locales';
import { Options } from '@/models';

export const defaultOptions: Options = {
  bem: {
    hyphenate: true
  },
  ...defaultLocales
};
