import { Experience } from '../../domain/entities/Experience';

export class ExperienceMapper {
  static toEntity(raw) {
    return new Experience({
      id: raw.id,
      role: raw.role,
      organization: raw.organization,
      period: raw.period,
      responsibilities: raw.responsibilities ?? [],
      location: raw.location ?? null,
    });
  }

  static toEntityList(rawList) {
    return (rawList ?? []).map(ExperienceMapper.toEntity);
  }
}
