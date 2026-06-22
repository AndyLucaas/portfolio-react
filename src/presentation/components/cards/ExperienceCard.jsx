import { useLanguage } from '../../../core/hooks/useLanguage';
import { Icon } from '../common/Icon';
import styles from './ExperienceCard.module.css';

/**
 * ExperienceCard — renders a single Experience entity. Meant to be
 * used inside a Timeline / TimelineItem.
 */
export function ExperienceCard({ experience }) {
  const { t } = useLanguage();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.role}>{experience.role}</h3>
          <p className={styles.org}>{experience.organization}</p>
        </div>
        <span className={styles.period}>
          {experience.period.start} — {experience.period.end ?? t.common.present}
        </span>
      </div>

      {experience.location && (
        <p className={styles.location}>
          <Icon name="map-pin" size={14} />
          {experience.location}
        </p>
      )}

      <ul className={styles.list}>
        {experience.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
