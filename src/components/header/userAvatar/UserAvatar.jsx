import { StyledContainerAvatar } from './UserAvatar.styled';

const UserAvatar = ({ user, isMinified }) => {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  if (isEmpty(user)) {
    return null;
  }

  if (!user.avatarUrl) {
    const initials = user.name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
    return <StyledContainerAvatar className={isMinified ? 'minified' : 'default'}>{initials}</StyledContainerAvatar>;
  }

  return <img src={user.avatarUrl} alt="User icon" />;
};

export default UserAvatar;
