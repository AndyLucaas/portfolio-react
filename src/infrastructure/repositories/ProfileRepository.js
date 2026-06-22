import { IProfileRepository } from '../../domain/repositories/IProfileRepository';
import { cvDataFr } from '../data/cvData.fr';
import { cvDataEn } from '../data/cvData.en';

const SOURCES = { fr: cvDataFr, en: cvDataEn };

/**
 * ProfileRepository — concrete implementation reading from the static
 * CV data source. Could later be swapped for a CMS/API call without
 * any change to the application or domain layers.
 */
export class ProfileRepository extends IProfileRepository {
  getProfile(locale = 'fr') {
    const source = SOURCES[locale] ?? SOURCES.fr;
    return source.profile;
  }
}
