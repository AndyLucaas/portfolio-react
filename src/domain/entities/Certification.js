/**
 * Certification entity — a professional certificate.
 */
export class Certification {
  constructor({ id, title, issuer, date, url = null }) {
    this.id = id;
    this.title = title;
    this.issuer = issuer;
    this.date = date;
    this.url = url;
  }
}
