/**
 * SubmitContactFormUseCase — validates contact form input and produces
 * a mailto: deep link to the profile's email address. The site is fully
 * static (no backend), so the "submission" opens the visitor's mail
 * client pre-filled with their message — nothing is silently dropped.
 */
export class SubmitContactFormUseCase {
  constructor(recipientEmail) {
    this.recipientEmail = recipientEmail;
  }

  validate({ name, email, message }, t) {
    const errors = {};
    if (!name || name.trim().length < 2) errors.name = t.errors.name;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t.errors.email;
    if (!message || message.trim().length < 10) errors.message = t.errors.message;
    return errors;
  }

  execute({ name, email, message }) {
    const subject = encodeURIComponent(`Portfolio — message de ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    return `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;
  }
}
