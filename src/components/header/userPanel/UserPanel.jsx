import React from 'react';
import Modal from 'shared/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';
import UserSetsModal from '../userSetsModal/UserSetsModal';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { StyledModalLink } from './UserPanel.styled';
import { selectCurrentUser } from 'redux/user/selectors';

const UserPanel = ({ variant }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

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
