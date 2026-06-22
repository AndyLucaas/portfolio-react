/**
 * Project entity — a portfolio project built from real CV content.
 */
export class Project {
  constructor({ id, title, description, highlights = [], stack = [], links = {} }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.highlights = highlights;
    this.stack = stack;
    this.links = links; // { repo, demo }
  }
}
