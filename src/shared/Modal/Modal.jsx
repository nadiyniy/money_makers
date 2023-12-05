import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';

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
    <ModalBackdrop onClick={handleModalClose}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    rootModal
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};
