import { useLanguage } from '../../core/hooks/useLanguage';
import { ROUTES } from '../../core/constants/routes';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/common/Icon';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <p className={styles.code}>{t.notFound.title}</p>
      <p className={styles.message}>{t.notFound.message}</p>
      <Button href={ROUTES.HOME} icon={<Icon name="arrow-right" size={16} />}>
        {t.notFound.cta}
      </Button>
    </section>
  );
}
