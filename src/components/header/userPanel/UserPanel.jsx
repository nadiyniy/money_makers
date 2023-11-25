import React from 'react';
import Modal from 'shared/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';
import UserSetsModal from '../userSetsModal/UserSetsModal';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import styled from 'styled-components';

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
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <UserSetsModal closeModal={closeModal} />
        </Modal>
      ) : null}
    </>
  );
};
const StyledModalLink = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  padding: 18px 16px;
  display: flex;

  flex-direction: column;
  gap: 12px;
  border-radius: var(--border-radius-15);
  border: 1px solid var(--gray-text-10);
  background: var(--black-color);
  align-items: flex-start;
  @media (max-width: 768px) {
    display: ${props => (props.variant === 'burger' ? 'flex' : 'none')};
  }
  button {
    cursor: pointer;
    color: rgba(250, 250, 250, 0.5);
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default UserPanel;
