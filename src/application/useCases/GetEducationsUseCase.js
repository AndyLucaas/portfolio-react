import { EducationMapper } from '../mappers/EducationMapper';

export class GetEducationsUseCase {
  constructor(educationRepository) {
    this.educationRepository = educationRepository;
  }

  execute(locale) {
    const raw = this.educationRepository.getEducations(locale);
    return EducationMapper.toEntityList(raw);
  }
}
