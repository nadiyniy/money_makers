import React from 'react';
import { StyledUserBtn } from './UserBarBtn.styled';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/selectors';
import UserAvatar from '../userAvatar/UserAvatar';
import { UserBarArrowIcon } from 'components/svgs';

const UserBarBtn = ({ variant, toggleUserPanel }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <StyledUserBtn className={variant} onClick={toggleUserPanel}>
      <UserAvatar isMinified user={currentUser} />

      <p>{currentUser.name}</p>
      <UserBarArrowIcon width={12} height={12} />
    </StyledUserBtn>
  );
};

export default UserBarBtn;
