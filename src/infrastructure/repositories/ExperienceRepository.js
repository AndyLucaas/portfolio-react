import { IExperienceRepository } from '../../domain/repositories/IExperienceRepository';
import { cvDataFr } from '../data/cvData.fr';
import { cvDataEn } from '../data/cvData.en';

const SOURCES = { fr: cvDataFr, en: cvDataEn };

export class ExperienceRepository extends IExperienceRepository {
  getExperiences(locale = 'fr') {
    const source = SOURCES[locale] ?? SOURCES.fr;
    return source.experiences;
  }
}
