import { useLanguage } from '../../../core/hooks/useLanguage';
import { usePortfolioData } from '../../../core/hooks/usePortfolioData';
import { SocialLinks } from './SocialLinks';
import styles from './Footer.module.css';

/**
 * Footer — site-wide footer with quick social links and credits.
 */
export function Footer() {
  const { t } = useLanguage();
  const { profile } = usePortfolioData();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>{profile.fullName}</p>
          <p className={styles.role}>{profile.title}</p>
        </div>

        <SocialLinks links={profile.socialLinks} />

        <p className={styles.credits}>
          © {year} {profile.fullName}. {t.common.allRightsReserved}
          <br />
          {t.common.builtWith}{' '}
          <a href="https://github.com/AndyLucaas/portfolio-react" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
