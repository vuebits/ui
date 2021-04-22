import { pl } from './_pl';
import { en } from './_en';
import {
  Locale,
  LocaleOptions
} from '@/models';

export const defaultLocales: LocaleOptions = {
  locale: Locale.PL,
  locales: {
    [Locale.PL]: pl,
    [Locale.EN]: en
  },
  t () {
    return this.locales[this.locale];
  }
};
