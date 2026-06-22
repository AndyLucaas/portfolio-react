import { useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../../core/constants/navigation';
import { ROUTES } from '../../../core/constants/routes';
import { useLanguage } from '../../../core/hooks/useLanguage';
import { useOnClickOutside } from '../../../core/hooks/useOnClickOutside';
import { cx } from '../../../core/utils/classNames';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import styles from './Navbar.module.css';

/**
 * Navbar — sticky top navigation.
 * Menu closes on outside-click and on every route change.
 */
export function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  // Derived-state pattern: close the mobile menu on route change
  // without an effect, which would trigger an extra cascading render.
  const [lastPathname, setLastPathname] = useState(location.pathname);
  if (lastPathname !== location.pathname) {
    setLastPathname(location.pathname);
    if (isMenuOpen) setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={cx('container', styles.nav)} ref={menuRef}>
        <NavLink to={ROUTES.HOME} className={styles.brand}>
          <Icon name="terminal" size={18} />
          <span>andy@devops</span>
          <span className={styles.cursor}>_</span>
        </NavLink>

        <ul className={cx(styles.links, isMenuOpen && styles.linksOpen)}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                end={item.path === ROUTES.HOME}
                className={({ isActive }) => cx(styles.link, isActive && styles.linkActive)}
              >
                {t.nav[item.id]}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
