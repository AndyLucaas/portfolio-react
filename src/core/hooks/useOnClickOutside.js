import { useEffect } from 'react';

/**
 * useOnClickOutside — invokes `handler` when a pointer event occurs
 * outside of the element referenced by `ref`. Used to close the mobile
 * navigation menu and the project modal.
 */
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      const node = ref.current;
      if (!node || node.contains(event.target)) return;
      handler(event);
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
