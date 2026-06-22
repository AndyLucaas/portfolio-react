import styles from './Timeline.module.css';

/**
 * Timeline / TimelineItem — generic vertical timeline shell. Content is
 * fully composable: pages decide what each item renders (an
 * ExperienceCard, an EducationCard, anything).
 */
export function Timeline({ children }) {
  return <ol className={styles.timeline}>{children}</ol>;
}

export function TimelineItem({ children, isLast = false }) {
  return <li className={`${styles.item} ${isLast ? styles.lastItem : ''}`}>{children}</li>;
}
