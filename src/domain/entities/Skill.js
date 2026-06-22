/**
 * Skill entity — a single technical competency grouped under a category.
 */
export class Skill {
  constructor({ id, name, category, level = null }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.level = level;
  }
}
