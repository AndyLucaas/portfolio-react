import { useState } from 'react';
import { useScrollReveal } from '../../../core/hooks/useScrollReveal';
import { useLanguage } from '../../../core/hooks/useLanguage';
import { cx } from '../../../core/utils/classNames';
import { Icon } from '../common/Icon';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard — summary view of a Project entity, opens a Modal with
 * the full highlights list on demand.
 */
export function ProjectCard({ project, index = 0 }) {
  const { t } = useLanguage();
  const [ref, isVisible] = useScrollReveal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article
        ref={ref}
        className={cx(styles.card, 'reveal', isVisible && 'is-visible')}
        style={{ transitionDelay: `${Math.min(index, 5) * 80}ms` }}
      ><a href={project.links.github} target="_blank" rel="noopener noreferrer">
          <div className={styles.iconWrap}>
            <Icon name="layers" size={20} />
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </a>

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className={styles.detailsButton}
          icon={<Icon name="arrow-right" size={16} />}
          onClick={() => setIsOpen(true)}
        >
          {t.common.viewProject}
        </Button>
      </article>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={project.title}>
        <p className={styles.modalDescription}>{project.description}</p>

        <p className={styles.modalLabel}>{t.projects.highlightsLabel}</p>
        <ul className={styles.modalList}>
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className={styles.modalLabel}>{t.projects.stackLabel}</p>
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>
      </Modal>
    </>
  );
}
