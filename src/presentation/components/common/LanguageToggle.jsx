import { useLanguage } from '../../../core/hooks/useLanguage';
import styles from './LanguageToggle.module.css';

/**
 * LanguageToggle — switches the whole app between French and English.
 */
export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleLocale}
      aria-label={t.language.toggleLabel}
      title={t.language.toggleLabel}
    >
      <span className={locale === 'fr' ? styles.active : ''}>FR</span>
      <span className={styles.separator}>/</span>
      <span className={locale === 'en' ? styles.active : ''}>EN</span>
    </button>
  );
}
