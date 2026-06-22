import { usePortfolioData } from '../../core/hooks/usePortfolioData';
import { useLanguage } from '../../core/hooks/useLanguage';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ContactForm } from '../components/sections/ContactForm';
import { SocialLinks } from '../components/common/SocialLinks';
import { Icon } from '../components/common/Icon';
import styles from './ContactPage.module.css';

export function ContactPage() {
  const { profile } = usePortfolioData();
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className={styles.grid}>
        <ContactForm recipientEmail={profile.email} />

        <aside className={styles.infoCard}>
          <h3 className={styles.cardTitle}>{t.contact.infoTitle}</h3>
          <ul className={styles.infoList}>
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Icon name="phone" size={16} />
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <Icon name="map-pin" size={16} />
              <span>{profile.location}</span>
            </li>
          </ul>
          <div className={styles.socials}>
            <SocialLinks links={profile.socialLinks} size="lg" />
          </div>
        </aside>
      </div>
    </section>
  );
}
