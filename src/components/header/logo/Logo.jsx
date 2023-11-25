import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sprite from '../../../images/sprite.svg';

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

const StyledLogo = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    p {
      color: #fafafa;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
      text-transform: uppercase;
    }
  }
`;

export default Logo;
