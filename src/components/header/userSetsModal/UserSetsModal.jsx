import React from 'react';
import avatar from '../../../images/404-page.png';
import { StyledAvatar, StyledForm, StyledModal, StyledModalCloseBtn } from './UserSetsModal.styled';

const UserSetsModal = ({ closeModal }) => {
  return (
    <StyledModal>
      <StyledModalCloseBtn onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6L18 18" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </StyledModalCloseBtn>
      <h2>Profile settings</h2>
      <StyledAvatar>
        <img src={avatar} alt="User icon" />
        <div>
          <button>Upload new photo</button>
          <button>Remove</button>
        </div>
      </StyledAvatar>
      <StyledForm>
        <div>
          <select>
            <option>UAH</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input placeholder="Alex Rybachok"></input>
        </div>
        <button>Save</button>
      </StyledForm>
    </StyledModal>
  );
};

export default UserSetsModal;
