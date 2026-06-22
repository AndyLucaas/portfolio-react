import { ExperienceMapper } from '../mappers/ExperienceMapper';

export class GetExperiencesUseCase {
  constructor(experienceRepository) {
    this.experienceRepository = experienceRepository;
  }

  execute(locale) {
    const raw = this.experienceRepository.getExperiences(locale);
    return ExperienceMapper.toEntityList(raw);
  }
}
