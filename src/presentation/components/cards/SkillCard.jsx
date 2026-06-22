import { useScrollReveal } from '../../../core/hooks/useScrollReveal';
import { cx } from '../../../core/utils/classNames';
import { Icon } from '../common/Icon';
import { Badge } from '../ui/Badge';
import styles from './SkillCard.module.css';

const CATEGORY_ICONS = {
  'Systèmes & Virtualisation': 'server',
  'Systems & Virtualization': 'server',
  'Conteneurisation & Orchestration': 'layers',
  'Containers & Orchestration': 'layers',
  'CI/CD & Collaboration': 'code',
  'Scripting & Automatisation': 'terminal',
  'Scripting & Automation': 'terminal',
  'Supervision & Monitoring': 'activity',
  Monitoring: 'activity',
  Cloud: 'cloud',
};

/**
 * SkillCard — groups skills sharing a category into a single card,
 * keeping the Skills page scannable instead of fifteen tiny tiles.
 */
export function SkillCard({ category, skills, index = 0 }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cx(styles.card, 'reveal', isVisible && 'is-visible')}
      style={{ transitionDelay: `${Math.min(index, 5) * 60}ms` }}
    >
      <div className={styles.iconWrap}>
        <Icon name={CATEGORY_ICONS[category] ?? 'code'} size={20} />
      </div>
      <h3 className={styles.category}>{category}</h3>
      <div className={styles.tags}>
        {skills.map((skill) => (
          <Badge key={skill.id}>{skill.name}</Badge>
        ))}
      </div>
    </div>
  );
}
