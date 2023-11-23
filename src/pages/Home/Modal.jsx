import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const rootModal = document.querySelector('#modal');

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleModalCloseKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleModalCloseKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleModalCloseKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [closeModal]);

  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return ReactDOM.createPortal(
    <div onClick={handleModalClose}>
      <div>{children}</div>
    </div>,
    rootModal
  );
};

export default Modal;
