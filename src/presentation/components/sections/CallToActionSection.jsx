import { useLanguage } from '../../../core/hooks/useLanguage';
import { ROUTES } from '../../../core/constants/routes';
import { useScrollReveal } from '../../../core/hooks/useScrollReveal';
import { cx } from '../../../core/utils/classNames';
import { Button } from '../ui/Button';
import { Icon } from '../common/Icon';
import styles from './CallToActionSection.module.css';

/**
 * CallToActionSection — closing banner inviting the visitor to reach out.
 * Used at the bottom of the Home page.
 */
export function CallToActionSection() {
  const { t } = useLanguage();
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="container">
      <div ref={ref} className={cx(styles.banner, 'reveal', isVisible && 'is-visible')}>
        <div>
          <p className={styles.eyebrow}>{t.contact.eyebrow}</p>
          <h2 className={styles.title}>{t.contact.title}</h2>
        </div>
        <Button href={ROUTES.CONTACT} icon={<Icon name="arrow-right" size={16} />}>
          {t.hero.ctaContact}
        </Button>
      </div>
    </section>
  );
}
