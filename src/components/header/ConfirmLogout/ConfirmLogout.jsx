import React from 'react';
import PropTypes from 'prop-types';
import { StyledModalCloseBtn } from '../userSetsModal/UserSetsModal.styled';
import { CloseIcon } from 'components/svgs';
import { StyledConfirmBtn, StyledConfirmModal } from './ConfirmLogout.styled';

const ConfirmLogout = ({ closeModal, onConfirmLogout }) => {
  return (
    <StyledConfirmModal>
      <StyledModalCloseBtn onClick={closeModal}>
        <CloseIcon />
      </StyledModalCloseBtn>
      <p>Are you sure you want to log out?</p>
      <StyledConfirmBtn>
        <button onClick={onConfirmLogout}>Log out</button>
        <button onClick={closeModal}>Cancel</button>
      </StyledConfirmBtn>
    </StyledConfirmModal>
  );
};

export default ConfirmLogout;

ConfirmLogout.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onConfirmLogout: PropTypes.func.isRequired,
};
