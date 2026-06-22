import { useMemo, useState } from 'react';
import { useLanguage } from './useLanguage';
import { SubmitContactFormUseCase } from '../../application/useCases/SubmitContactFormUseCase';

const INITIAL_FORM = { name: '', email: '', message: '' };

/**
 * useContactForm — owns the contact form state and delegates validation
 * and submission to the SubmitContactFormUseCase. The component stays
 * purely presentational.
 */
export function useContactForm(recipientEmail) {
  const { t } = useLanguage();
  const [values, setValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success

  const useCase = useMemo(() => new SubmitContactFormUseCase(recipientEmail), [recipientEmail]);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = useCase.validate(values, t);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus('idle');
      return;
    }
    const mailtoUrl = useCase.execute(values);
    window.location.href = mailtoUrl;
    setStatus('success');
  }

  return { values, errors, status, handleChange, handleSubmit };
}
