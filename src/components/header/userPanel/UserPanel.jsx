import React from 'react';
import Modal from 'shared/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';
import UserSetsModal from '../userSetsModal/UserSetsModal';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';

const UserPanel = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <>
      <div>

        <button onClick={() => openModal()}>Profile settings</button>
        <button onClick={handleLogout}>Log out</button>
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
