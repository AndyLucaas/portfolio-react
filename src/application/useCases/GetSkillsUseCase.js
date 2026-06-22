import { SkillMapper } from '../mappers/SkillMapper';

export class GetSkillsUseCase {
  constructor(skillRepository) {
    this.skillRepository = skillRepository;
  }

  execute(locale) {
    const raw = this.skillRepository.getSkills(locale);
    return SkillMapper.toEntityList(raw);
  }
}
