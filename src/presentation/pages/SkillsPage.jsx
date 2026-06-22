import { usePortfolioData } from '../../core/hooks/usePortfolioData';
import { useLanguage } from '../../core/hooks/useLanguage';
import { SectionTitle } from '../components/ui/SectionTitle';
import { SkillCard } from '../components/cards/SkillCard';
import { groupSkillsByCategory } from '../../core/utils/groupSkillsByCategory';
import styles from './SkillsPage.module.css';

export function SkillsPage() {
  const { skills } = usePortfolioData();
  const { t } = useLanguage();
  const skillGroups = groupSkillsByCategory(skills);

  return (
    <section className={`container ${styles.section}`}>
      <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle} />
      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <SkillCard key={group.category} category={group.category} skills={group.skills} index={index} />
        ))}
      </div>
    </section>
  );
}
