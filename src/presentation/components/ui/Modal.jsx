import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from '../../../core/hooks/useOnClickOutside';
import { Icon } from '../common/Icon';
import styles from './Modal.module.css';

/**
 * Modal — accessible dialog rendered in a portal. Closes on Escape,
 * on backdrop click, and traps no focus beyond the close button to
 * keep the implementation simple and predictable.
 */
export function Modal({ isOpen, onClose, title, children }) {
  const panelRef = useRef(null);
  useOnClickOutside(panelRef, () => isOpen && onClose());

  useEffect(() => {
    if (!isOpen) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} role="presentation">
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
          <Icon name="close" size={18} />
        </button>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
}
