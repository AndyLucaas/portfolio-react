import { ROUTES } from './routes';

/**
 * navigation.js — declarative nav menu, decoupled from the Navbar component.
 * `labelKey` resolves through the translations dictionary.
 */
export const NAV_ITEMS = [
  { id: 'home', path: ROUTES.HOME, labelKey: 'nav.home' },
  { id: 'about', path: ROUTES.ABOUT, labelKey: 'nav.about' },
  { id: 'skills', path: ROUTES.SKILLS, labelKey: 'nav.skills' },
  { id: 'projects', path: ROUTES.PROJECTS, labelKey: 'nav.projects' },
  { id: 'experience', path: ROUTES.EXPERIENCE, labelKey: 'nav.experience' },
  { id: 'education', path: ROUTES.EDUCATION, labelKey: 'nav.education' },
  { id: 'contact', path: ROUTES.CONTACT, labelKey: 'nav.contact' },
];
