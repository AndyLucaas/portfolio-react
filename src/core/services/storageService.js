/**
 * storageService.js — thin, safe wrapper around localStorage.
 * Isolated here so any storage strategy (cookies, IndexedDB...) can
 * replace it later without touching the hooks that consume it.
 */
export const storageService = {
  get(key, fallback = null) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? fallback : raw;
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Storage unavailable (private mode, quota) — fail silently.
    }
  },
};
