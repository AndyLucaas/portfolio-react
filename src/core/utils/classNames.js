/**
 * classNames.js — combines class names conditionally, skipping
 * falsy values. Keeps CSS Module usage in components readable.
 *
 * cx(styles.card, isActive && styles.active) -> "card active"
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}
