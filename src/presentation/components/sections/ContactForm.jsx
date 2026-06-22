import { useLanguage } from '../../../core/hooks/useLanguage';
import { useContactForm } from '../../../core/hooks/useContactForm';
import { Button } from '../ui/Button';
import { Icon } from '../common/Icon';
import styles from './ContactForm.module.css';

/**
 * ContactForm — presentational form. All state, validation and
 * submission logic live in the useContactForm hook (application layer
 * bridge); this component only renders fields and feedback.
 */
export function ContactForm({ recipientEmail }) {
  const { t } = useLanguage();
  const { values, errors, status, handleChange, handleSubmit } = useContactForm(recipientEmail);

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">{t.contact.formNameLabel}</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder={t.contact.formNamePlaceholder}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">{t.contact.formEmailLabel}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder={t.contact.formEmailPlaceholder}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">{t.contact.formMessageLabel}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder={t.contact.formMessagePlaceholder}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>

      <Button type="submit" icon={<Icon name="send" size={16} />}>
        {t.contact.submitButton}
      </Button>
      <p className={styles.hint}>{t.contact.submitHint}</p>

      {status === 'success' && <p className={styles.success}>{t.contact.successMessage}</p>}
    </form>
  );
}
