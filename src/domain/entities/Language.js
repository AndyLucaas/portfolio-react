/**
 * Language entity — a spoken/written language and its proficiency level.
 */
export class Language {
  constructor({ id, name, level }) {
    this.id = id;
    this.name = name;
    this.level = level;
  }
}
