import { Project } from '../../domain/entities/Project';

export class ProjectMapper {
  static toEntity(raw) {
    return new Project({
      id: raw.id,
      title: raw.title,
      description: raw.description,
      highlights: raw.highlights ?? [],
      stack: raw.stack ?? [],
      links: raw.links ?? {},
    });
  }

  static toEntityList(rawList) {
    return (rawList ?? []).map(ProjectMapper.toEntity);
  }
}
