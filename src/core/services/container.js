import { ProfileRepository } from '../../infrastructure/repositories/ProfileRepository';
import { SkillRepository } from '../../infrastructure/repositories/SkillRepository';
import { ProjectRepository } from '../../infrastructure/repositories/ProjectRepository';
import { ExperienceRepository } from '../../infrastructure/repositories/ExperienceRepository';
import { EducationRepository } from '../../infrastructure/repositories/EducationRepository';
import { CertificationRepository } from '../../infrastructure/repositories/CertificationRepository';

import { GetProfileUseCase } from '../../application/useCases/GetProfileUseCase';
import { GetSkillsUseCase } from '../../application/useCases/GetSkillsUseCase';
import { GetProjectsUseCase } from '../../application/useCases/GetProjectsUseCase';
import { GetExperiencesUseCase } from '../../application/useCases/GetExperiencesUseCase';
import { GetEducationsUseCase } from '../../application/useCases/GetEducationsUseCase';
import { GetCertificationsUseCase } from '../../application/useCases/GetCertificationsUseCase';

/**
 * container.js — composition root. This is the ONLY place where
 * infrastructure implementations are wired to application use cases.
 * The presentation layer never imports a repository directly.
 */
const profileRepository = new ProfileRepository();
const skillRepository = new SkillRepository();
const projectRepository = new ProjectRepository();
const experienceRepository = new ExperienceRepository();
const educationRepository = new EducationRepository();
const certificationRepository = new CertificationRepository();

export const container = {
  getProfileUseCase: new GetProfileUseCase(profileRepository),
  getSkillsUseCase: new GetSkillsUseCase(skillRepository),
  getProjectsUseCase: new GetProjectsUseCase(projectRepository),
  getExperiencesUseCase: new GetExperiencesUseCase(experienceRepository),
  getEducationsUseCase: new GetEducationsUseCase(educationRepository),
  getCertificationsUseCase: new GetCertificationsUseCase(certificationRepository),
};
