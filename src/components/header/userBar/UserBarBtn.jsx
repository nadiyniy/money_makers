import React from 'react';
import sprite from '../../../images/sprite.svg';
import { StyledUserBtn } from './UserBarBtn.styled';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/selectors';
import UserAvatar from '../userAvatar/UserAvatar';

const UserBarBtn = ({ variant, toggleUserPanel }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <StyledUserBtn variant={variant} onClick={toggleUserPanel}>
      <UserAvatar isMinified user={currentUser} />

      <p>{currentUser.name}</p>
      <svg width="20" height="20">
        <use href={`${sprite}#icon-arrow-down`} />
      </svg>
    </StyledUserBtn>
  );
};

export default UserBarBtn;
