import { Education } from '../../domain/entities/Education';

export class EducationMapper {
  static toEntity(raw) {
    return new Education({
      id: raw.id,
      degree: raw.degree,
      institution: raw.institution,
      period: raw.period,
    });
  }

  static toEntityList(rawList) {
    return (rawList ?? []).map(EducationMapper.toEntity);
  }
}
