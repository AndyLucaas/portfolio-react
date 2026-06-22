import { translations } from '../constants/translations';
import { DEFAULT_LOCALE } from '../constants/locales';

/**
 * i18nService.js — resolves the UI translation dictionary for a locale.
 * Keeps the translations.js constant decoupled from how it is consumed.
 */
export const i18nService = {
  getTranslations(locale) {
    return translations[locale] ?? translations[DEFAULT_LOCALE];
  },
};
