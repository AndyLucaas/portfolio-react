/**
 * Profile entity — represents the identity of the portfolio owner.
 * Pure data structure, no business logic, no framework dependency.
 */
export class Profile {
  constructor({
    fullName,
    title,
    summary,
    email,
    phone,
    location,
    socialLinks = [],
    languages = [],
    resumeUrl = null,
  }) {
    this.fullName = fullName;
    this.title = title;
    this.summary = summary;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.socialLinks = socialLinks;
    this.languages = languages;
    this.resumeUrl = resumeUrl;
  }

  get initials() {
    return this.fullName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }
}
