import React from 'react';
import avatar from '../../../images/404-page.png';
import sprite from '../../../images/sprite.svg';
import { StyledUserBtn } from './UserBarBtn.styled';

const UserBarBtn = ({ variant, toggleUserPanel }) => {
  return (
    <StyledUserBtn variant={variant} onClick={toggleUserPanel}>
      <img src={avatar} alt="User icon" />
      <p>Alex Rybachok</p>
      <svg width="20" height="20">
        <use href={`${sprite}#icon-arrow-down`} />
      </svg>
    </StyledUserBtn>
  );
};

export default UserBarBtn;
