import React from 'react';
import { StyledUserBtn } from './UserBarBtn.styled';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/selectors';
import UserAvatar from '../userAvatar/UserAvatar';
import { UserBarArrowIcon } from 'components/svgs';

const UserBarBtn = ({ variant, toggleUserPanel, isUserPanelOpen }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <StyledUserBtn className={variant + (isUserPanelOpen ? ' panel-open' : '')} onClick={toggleUserPanel}>
      <UserAvatar isMinified user={currentUser} />
      <p>{currentUser.name}</p>
      <div className="arrow-icon">
        <UserBarArrowIcon width={12} height={12} />
      </div>
    </StyledUserBtn>
  );
};

export default UserBarBtn;
