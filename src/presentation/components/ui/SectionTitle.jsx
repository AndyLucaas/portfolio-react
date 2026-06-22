import { cx } from '../../../core/utils/classNames';
import { useScrollReveal } from '../../../core/hooks/useScrollReveal';
import styles from './SectionTitle.module.css';

/**
 * SectionTitle — consistent heading block for every section/page:
 * a monospace "eyebrow" comment, a display title, and an optional
 * subtitle. Reveals itself on scroll.
 */
export function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cx(styles.wrapper, styles[align], 'reveal', isVisible && 'is-visible')}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
