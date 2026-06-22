import { usePortfolioData } from '../../core/hooks/usePortfolioData';
import { useLanguage } from '../../core/hooks/useLanguage';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectCard } from '../components/cards/ProjectCard';
import styles from './ProjectsPage.module.css';

export function ProjectsPage() {
  const { projects } = usePortfolioData();
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
