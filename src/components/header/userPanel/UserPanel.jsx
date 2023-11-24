import React from 'react';
import Modal from 'shared/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';
import UserSetsModal from '../userSetsModal/UserSetsModal';

const UserPanel = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div>
        <button onClick={() => openModal()} to="#">
          Profile settings
        </button>
        <button to="#">Log out</button>
      </div>
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <UserSetsModal closeModal={closeModal} />
        </Modal>
      ) : null}
    </>
  );
};

export default UserPanel;
