import { Icon } from '../common/Icon';
import styles from './CertificationCard.module.css';

/**
 * CertificationCard — renders a single Certification entity.
 */
export function CertificationCard({ certification }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon name="award" size={18} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{certification.title}</h3>
        <p className={styles.meta}>
          {certification.issuer} · {certification.date}
        </p>
      </div>
    </div>
  );
}
