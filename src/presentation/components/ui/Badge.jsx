import { cx } from '../../../core/utils/classNames';
import styles from './Badge.module.css';

/**
 * Badge — small pill used for skill tags, stack labels and status markers.
 */
export function Badge({ children, variant = 'default', className }) {
  return <span className={cx(styles.badge, styles[variant], className)}>{children}</span>;
}
