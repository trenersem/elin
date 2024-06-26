import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm duration-150 dark:bg-black/80"
        onClick={onClose}
      />
      <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="">
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
