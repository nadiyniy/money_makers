import React, { useState } from 'react';
import Modal from 'shared/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';
import UserSetsModal from '../userSetsModal/UserSetsModal';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { StyledModalLink } from './UserPanel.styled';
import WarningLogout from '../ConfirmLogout/ConfirmLogout';

const UserPanel = ({ variant }) => {
  const { closeModal } = useModal();
  const [isOpenSettings, setOpenSettings] = useState(false);
  const [isOpenLogout, setOpenLogout] = useState(false);
  const dispatch = useDispatch();

  const handleSettings = () => {
    setOpenSettings(true);
  };

  const handleLogout = () => {
    setOpenLogout(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logoutThunk());
    setOpenLogout(false);
    closeModal();
  };

  return (
    <>
      <StyledModalLink variant={variant}>
        <button onClick={handleSettings}>Profile settings</button>
        <button onClick={handleLogout}>Log out</button>
      </StyledModalLink>

      {isOpenSettings && (
        <Modal closeModal={() => setOpenSettings(false)}>
          <UserSetsModal closeModal={() => setOpenSettings(false)} />
        </Modal>
      )}

      {isOpenLogout && (
        <Modal closeModal={() => setOpenLogout(false)}>
          <WarningLogout closeModal={() => setOpenLogout(false)} onConfirmLogout={handleConfirmLogout} />
        </Modal>
      )}
    </>
  );
};

export default UserPanel;
