import { en } from './_en'
import { pl } from './_pl'
import { uk } from './_uk'
import { Locale, LocaleOptions } from '../../../models'

export const defaultLocales: LocaleOptions = {
  locale: Locale.PL,
  locales: {
    [Locale.PL]: pl,
    [Locale.EN]: en,
    [Locale.UK]: uk,
  },
  t() {
    return this.locales[this.locale]
  },
}
