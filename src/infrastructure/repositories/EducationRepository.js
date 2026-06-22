import { IEducationRepository } from '../../domain/repositories/IEducationRepository';
import { cvDataFr } from '../data/cvData.fr';
import { cvDataEn } from '../data/cvData.en';

const SOURCES = { fr: cvDataFr, en: cvDataEn };

export class EducationRepository extends IEducationRepository {
  getEducations(locale = 'fr') {
    const source = SOURCES[locale] ?? SOURCES.fr;
    return source.educations;
  }
}
