import { useMemo } from 'react';
import { useLanguage } from './useLanguage';
import { container } from '../services/container';

/**
 * usePortfolioData — the single bridge between the presentation layer
 * and the application use cases. Pages call this hook instead of
 * importing repositories or use cases directly, keeping React
 * components free of business/data-access logic.
 */
export function usePortfolioData() {
  const { locale } = useLanguage();

  return useMemo(
    () => ({
      profile: container.getProfileUseCase.execute(locale),
      skills: container.getSkillsUseCase.execute(locale),
      projects: container.getProjectsUseCase.execute(locale),
      experiences: container.getExperiencesUseCase.execute(locale),
      educations: container.getEducationsUseCase.execute(locale),
      certifications: container.getCertificationsUseCase.execute(locale),
    }),
    [locale]
  );
}
