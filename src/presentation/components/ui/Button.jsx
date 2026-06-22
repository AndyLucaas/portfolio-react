import { cx } from '../../../core/utils/classNames';
import styles from './Button.module.css';

/**
 * Button — renders a <button> or an <a> (when `href` is provided) with
 * identical visual variants, so call sites never need to know which
 * DOM tag was used under the hood.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  type = 'button',
  icon,
  iconPosition = 'right',
  onClick,
  className,
  ...rest
}) {
  const classes = cx(styles.button, styles[variant], styles[size], className);
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
