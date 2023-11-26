import React from 'react';
import Modal from 'shared/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';
import UserSetsModal from '../userSetsModal/UserSetsModal';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { StyledModalLink } from './UserPanel.styled';

const UserPanel = ({ variant }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <>
      <StyledModalLink variant={variant}>
        <button onClick={() => openModal()}>Profile settings</button>
        <button onClick={handleLogout}>Log out</button>
      </StyledModalLink>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <UserSetsModal closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default UserPanel;
