import { usePortfolioData } from '../../core/hooks/usePortfolioData';
import { useLanguage } from '../../core/hooks/useLanguage';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Timeline, TimelineItem } from '../components/ui/Timeline';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import styles from './ExperiencePage.module.css';

export function ExperiencePage() {
  const { experiences } = usePortfolioData();
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} subtitle={t.experience.subtitle} />
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem key={experience.id} isLast={index === experiences.length - 1}>
            <ExperienceCard experience={experience} />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
