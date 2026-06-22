import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LOCALES, DEFAULT_LOCALE } from '../constants/locales';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { storageService } from '../services/storageService';
import { i18nService } from '../services/i18nService';

const LanguageContext = createContext(null);

function getInitialLocale() {
  const stored = storageService.get(STORAGE_KEYS.LOCALE);
  if (stored === LOCALES.FR || stored === LOCALES.EN) return stored;
  return DEFAULT_LOCALE;
}

/**
 * LanguageProvider — owns the current locale and exposes the resolved
 * translation dictionary (`t`) to the whole tree.
 */
export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale);

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
    storageService.set(STORAGE_KEYS.LOCALE, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      t: i18nService.getTranslations(locale),
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === LOCALES.FR ? LOCALES.EN : LOCALES.FR)),
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
