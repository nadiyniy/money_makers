import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'shared/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';
import UserSetsModal from '../userSetsModal/UserSetsModal';

const UserPanel = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div>
        <Link onClick={() => openModal()} to="#">
          Profile settings
        </Link>
        <Link to="#">Log out</Link>
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
