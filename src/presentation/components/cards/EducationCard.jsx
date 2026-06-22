import { Icon } from '../common/Icon';
import styles from './EducationCard.module.css';

/**
 * EducationCard — renders a single Education entity inside a Timeline.
 */
export function EducationCard({ education }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <Icon name="graduation-cap" size={18} />
        </div>
        <div>
          <h3 className={styles.degree}>{education.degree}</h3>
          <p className={styles.institution}>{education.institution}</p>
        </div>
      </div>
      <span className={styles.period}>
        {education.period.start} — {education.period.end}
      </span>
    </div>
  );
}
