import { usePortfolioData } from '../../core/hooks/usePortfolioData';
import { useLanguage } from '../../core/hooks/useLanguage';
import { ROUTES } from '../../core/constants/routes';
import { HeroSection } from '../components/sections/HeroSection';
import { CallToActionSection } from '../components/sections/CallToActionSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { SkillCard } from '../components/cards/SkillCard';
import { ProjectCard } from '../components/cards/ProjectCard';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/common/Icon';
import { groupSkillsByCategory } from '../../core/utils/groupSkillsByCategory';
import styles from './HomePage.module.css';

/**
 * HomePage — landing overview: hero, a skills snapshot, and a couple
 * of featured projects, each linking to its dedicated page for detail.
 */
export function HomePage() {
  const { profile, skills, projects } = usePortfolioData();
  const { t } = useLanguage();
  const skillGroups = groupSkillsByCategory(skills);

  return (
    <>
      <HeroSection profile={profile} skills={skills} />

      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle} />
          <Button href={ROUTES.SKILLS} variant="ghost" icon={<Icon name="arrow-right" size={16} />}>
            {t.nav.skills}
          </Button>
        </div>
        <div className={styles.skillsGrid}>
          {skillGroups.slice(0, 3).map((group, index) => (
            <SkillCard key={group.category} category={group.category} skills={group.skills} index={index} />
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />
          <Button href={ROUTES.PROJECTS} variant="ghost" icon={<Icon name="arrow-right" size={16} />}>
            {t.nav.projects}
          </Button>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <CallToActionSection />
    </>
  );
}
