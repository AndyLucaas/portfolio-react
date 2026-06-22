import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { THEMES, DEFAULT_THEME } from '../constants/theme';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { storageService } from '../services/storageService';

const ThemeContext = createContext(null);

function getInitialTheme() {
  const stored = storageService.get(STORAGE_KEYS.THEME);
  if (stored === THEMES.DARK || stored === THEMES.LIGHT) return stored;
  return DEFAULT_THEME;
}

/**
 * ThemeProvider — owns the current theme, persists it, and reflects it
 * on the <html> element via a data-theme attribute consumed by CSS.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    storageService.set(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEMES.DARK,
      toggleTheme: () => setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
