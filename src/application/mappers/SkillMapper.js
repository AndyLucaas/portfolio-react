import { Skill } from '../../domain/entities/Skill';

export class SkillMapper {
  static toEntity(raw) {
    return new Skill({ id: raw.id, name: raw.name, category: raw.category, level: raw.level ?? null });
  }

  static toEntityList(rawList) {
    return (rawList ?? []).map(SkillMapper.toEntity);
  }
}
