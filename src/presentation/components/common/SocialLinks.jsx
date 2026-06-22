import { Icon } from './Icon';
import styles from './SocialLinks.module.css';

/**
 * SocialLinks — renders a list of SocialLink entities as icon buttons.
 * Pure presentation: receives entities, renders them, nothing else.
 */
export function SocialLinks({ links, size = 'md' }) {
  return (
    <ul className={styles.list}>
      {links.map((link) => {
        const isExternal = link.url.startsWith('http');
        return (
          <li key={link.id}>
            <a
              href={link.url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={`${styles.link} ${styles[size]}`}
              aria-label={link.label}
              title={link.label}
            >
              <Icon name={link.icon} size={size === 'lg' ? 20 : 17} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
