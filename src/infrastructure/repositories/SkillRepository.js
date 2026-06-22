import { ISkillRepository } from '../../domain/repositories/ISkillRepository';
import { cvDataFr } from '../data/cvData.fr';
import { cvDataEn } from '../data/cvData.en';

const SOURCES = { fr: cvDataFr, en: cvDataEn };

export class SkillRepository extends ISkillRepository {
  getSkills(locale = 'fr') {
    const source = SOURCES[locale] ?? SOURCES.fr;
    return source.skills;
  }
}
