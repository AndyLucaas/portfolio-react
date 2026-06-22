import { ProjectMapper } from '../mappers/ProjectMapper';

export class GetProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  execute(locale) {
    const raw = this.projectRepository.getProjects(locale);
    return ProjectMapper.toEntityList(raw);
  }
}
