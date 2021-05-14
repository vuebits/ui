import { defaultLocales } from './locales';
import { defaultIcons } from './icons';
import { Options } from '@/models';

export const defaultOptions: Options = {
  bem: {
    hyphenate: true
  },
  ...defaultLocales,
  ...defaultIcons
};
