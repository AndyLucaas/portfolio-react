import { IProjectRepository } from '../../domain/repositories/IProjectRepository';
import { cvDataFr } from '../data/cvData.fr';
import { cvDataEn } from '../data/cvData.en';

const SOURCES = { fr: cvDataFr, en: cvDataEn };

export class ProjectRepository extends IProjectRepository {
  getProjects(locale = 'fr') {
    const source = SOURCES[locale] ?? SOURCES.fr;
    return source.projects;
  }
}
