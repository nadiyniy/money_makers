import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';
import { LogoIcon } from 'components/svgs';

const Logo = ({ isLoggedIn }) => {
  return (
    <StyledLogo>
      <Link to={isLoggedIn ? '/transactions/incomes' : '/'}>
        <LogoIcon className="logo-icon-svg" width={27} height={16} />

        <p>ExpenseTracker</p>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
