import PropTypes from 'prop-types';
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

UserAvatar.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    categories: PropTypes.shape({
      expenses: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          categoryName: PropTypes.string,
          _id: PropTypes.string,
        })
      ),
      incomes: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          categoryName: PropTypes.string,
          _id: PropTypes.string,
        })
      ),
    }),
    currency: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    transactionsTotal: PropTypes.shape({
      incomes: PropTypes.number,
      expenses: PropTypes.number,
    }),
    _id: PropTypes.string,
  }),
  isMinified: PropTypes.bool.isRequired,
};
