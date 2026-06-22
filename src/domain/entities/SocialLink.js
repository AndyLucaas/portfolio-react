/**
 * SocialLink entity — an external contact/social reference.
 */
export class SocialLink {
  constructor({ id, label, url, icon }) {
    this.id = id;
    this.label = label;
    this.url = url;
    this.icon = icon; // icon key resolved by the presentation layer
  }
}
