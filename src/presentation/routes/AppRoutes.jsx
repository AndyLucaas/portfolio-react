import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../core/constants/routes';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { SkillsPage } from '../pages/SkillsPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ExperiencePage } from '../pages/ExperiencePage';
import { EducationPage } from '../pages/EducationPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

/**
 * AppRoutes — the single declarative route map for the app.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.SKILLS} element={<SkillsPage />} />
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
        <Route path={ROUTES.EXPERIENCE} element={<ExperiencePage />} />
        <Route path={ROUTES.EDUCATION} element={<EducationPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
