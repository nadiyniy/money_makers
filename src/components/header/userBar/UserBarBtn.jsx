import React from 'react';
import sprite from '../../../images/sprite.svg';
import { StyledContainerAvatar, StyledUserBtn } from './UserBarBtn.styled';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/selectors';

const UserBarBtn = ({ variant, toggleUserPanel }) => {
  const currentUser = useSelector(selectCurrentUser);

  const renderAvatar = () => {
    if (currentUser && currentUser.name) {
      if (currentUser.avatarUrl) {
        return <img src={currentUser.avatarUrl} alt="User icon" />;
      } else {
        const initials = currentUser.name
          .split(' ')
          .map(part => part.charAt(0))
          .join('')
          .toUpperCase();
        return <StyledContainerAvatar className="initials-avatar">{initials}</StyledContainerAvatar>;
      }
    }
    return null;
  };

  return (
    <StyledUserBtn variant={variant} onClick={toggleUserPanel}>
      {/* <img src={currentUser.avatarUrl} alt="User icon" /> */}
      {renderAvatar()}

      <p>{currentUser.name}</p>
      <svg width="20" height="20">
        <use href={`${sprite}#icon-arrow-down`} />
      </svg>
    </StyledUserBtn>
  );
};

export default UserBarBtn;
