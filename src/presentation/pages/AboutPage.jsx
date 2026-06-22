import { usePortfolioData } from '../../core/hooks/usePortfolioData';
import { useLanguage } from '../../core/hooks/useLanguage';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/common/Icon';
import { useScrollReveal } from '../../core/hooks/useScrollReveal';
import { cx } from '../../core/utils/classNames';
import styles from './AboutPage.module.css';

/**
 * AboutPage — profile summary, languages, and direct contact info.
 */
export function AboutPage() {
  const { profile } = usePortfolioData();
  const { t } = useLanguage();
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className={`container ${styles.section}`}>
      <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />

      <div ref={ref} className={cx(styles.grid, 'reveal', isVisible && 'is-visible')}>
        <div className={styles.summaryCol}>
          <div className={styles.avatar}>{profile.initials}</div>
          <p className={styles.summary}>{profile.summary}</p>

          {profile.resumeUrl && (
            <Button
              href={profile.resumeUrl}
              variant="secondary"
              icon={<Icon name="download" size={16} />}
              className={styles.resumeButton}
            >
              {t.about.downloadCV}
            </Button>
          )}
        </div>

        <aside className={styles.infoCol}>
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>{t.about.infoTitle}</h3>
            <ul className={styles.infoList}>
              <li>
                <Icon name="map-pin" size={16} />
                <span>
                  <span className={styles.infoLabel}>{t.about.locationLabel}</span>
                  {profile.location}
                </span>
              </li>
              <li>
                <Icon name="mail" size={16} />
                <span>
                  <span className={styles.infoLabel}>{t.about.emailLabel}</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </span>
              </li>
              <li>
                <Icon name="phone" size={16} />
                <span>
                  <span className={styles.infoLabel}>{t.about.phoneLabel}</span>
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>{t.about.languagesTitle}</h3>
            <ul className={styles.langList}>
              {profile.languages.map((lang) => (
                <li key={lang.id}>
                  <span>{lang.name}</span>
                  <Badge variant="accent">{lang.level}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
