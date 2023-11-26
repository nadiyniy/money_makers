import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../images/sprite.svg';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <svg width="27" height="16">
          <use href={`${sprite}#icon-Icon`} />
        </svg>

        <p>ExpenseTracker</p>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
