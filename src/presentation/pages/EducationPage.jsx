import { usePortfolioData } from '../../core/hooks/usePortfolioData';
import { useLanguage } from '../../core/hooks/useLanguage';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Timeline, TimelineItem } from '../components/ui/Timeline';
import { EducationCard } from '../components/cards/EducationCard';
import { CertificationCard } from '../components/cards/CertificationCard';
import styles from './EducationPage.module.css';

export function EducationPage() {
  const { educations, certifications } = usePortfolioData();
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <SectionTitle eyebrow={t.education.eyebrow} title={t.education.title} subtitle={t.education.subtitle} />

      <Timeline>
        {educations.map((education, index) => (
          <TimelineItem key={education.id} isLast={index === educations.length - 1}>
            <EducationCard education={education} />
          </TimelineItem>
        ))}
      </Timeline>

      {certifications.length > 0 && (
        <div className={styles.certSection}>
          <h3 className={styles.certTitle}>{t.education.certificationsTitle}</h3>
          <div className={styles.certGrid}>
            {certifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
