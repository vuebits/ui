import { defaultLocales } from './locales';
import { defaultIcons } from './icons';
import { defaultTest } from './test';
import { Options } from '../../models';

export const defaultOptions: Options = {
  bem: {
    hyphenate: true,
  },
  ...defaultTest,
  ...defaultLocales,
  ...defaultIcons,
};
