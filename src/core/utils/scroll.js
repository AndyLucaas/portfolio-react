/**
 * scroll.js — small DOM helper to smoothly scroll to a section id,
 * respecting the user's reduced-motion preference.
 */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
}
