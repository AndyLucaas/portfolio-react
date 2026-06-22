import { useLanguage } from '../../../core/hooks/useLanguage';
import { ROUTES } from '../../../core/constants/routes';
import { Button } from '../ui/Button';
import { Icon } from '../common/Icon';
import styles from './HeroSection.module.css';

/**
 * HeroSection — the page thesis. A real DevOps engineer lives in the
 * terminal, so the hero mirrors that: a profile pitch on one side, a
 * mock terminal session rendering live CV data on the other.
 */
export function HeroSection({ profile, skills }) {
  const { t } = useLanguage();
  const topSkills = skills.slice(0, 6).map((s) => s.name);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
          <h1 className={styles.name}>{profile.fullName}</h1>
          <p className={styles.role}>{profile.title}</p>
          <p className={styles.lead}>
            {t.hero.lead} <span className={styles.highlight}>{t.hero.leadHighlight}</span>
          </p>

          <div className={styles.ctas}>
            <Button href={ROUTES.PROJECTS} icon={<Icon name="arrow-right" size={16} />}>
              {t.hero.ctaProjects}
            </Button>
            <Button href={ROUTES.CONTACT} variant="secondary">
              {t.hero.ctaContact}
            </Button>
          </div>

          <p className={styles.status}>
            <span className={styles.statusDot} />
            {t.hero.available}
          </p>
        </div>

        <div className={styles.terminalWrap} aria-hidden="true">
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
              <span className={styles.terminalTitle}>{t.hero.prompt}: ~</span>
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.line}>
                <span className={styles.promptSign}>$</span> {t.hero.cmdWhoami}
              </p>
              <p className={styles.output}>
                {profile.fullName} — {profile.title}
              </p>

              <p className={styles.line}>
                <span className={styles.promptSign}>$</span> {t.hero.cmdStack}
              </p>
              <p className={styles.output}>{topSkills.join(' · ')}</p>

              <p className={styles.line}>
                <span className={styles.promptSign}>$</span> {t.hero.cmdStatus}
              </p>
              <p className={styles.output}>
                <span className={styles.statusDot} /> {t.hero.available}
              </p>

              <p className={styles.line}>
                <span className={styles.promptSign}>$</span>
                <span className={styles.cursorBlock} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
