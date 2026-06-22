import { useTheme } from '../../../core/hooks/useTheme';
import { useLanguage } from '../../../core/hooks/useLanguage';
import { Icon } from './Icon';
import styles from './ThemeToggle.module.css';

/**
 * ThemeToggle — switches between dark (default) and light theme.
 */
export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.toggleToLight : t.theme.toggleToDark}
      title={isDark ? t.theme.toggleToLight : t.theme.toggleToDark}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={18} />
    </button>
  );
}
