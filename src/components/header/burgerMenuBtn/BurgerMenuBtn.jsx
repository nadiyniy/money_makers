import BurgerMenu from 'components/header/burgerMenu/BurgerMenu';
import React, { useState } from 'react';
import styled from 'styled-components';
import sprite from '../../../images/sprite.svg';

const BurgerMenuBtn = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <StyledBurgerBtn>
      <button onClick={openBurgerMenu}>
        <svg width="27" height="16">
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>
      {isBurgerMenuOpen && <BurgerMenu closeBurgerMenu={closeBurgerMenu} />}{' '}
    </StyledBurgerBtn>
  );
};

const StyledBurgerBtn = styled.div`
  @media (min-width: 768.1px) {
    display: none;
  }
  button {
  }
`;

export default BurgerMenuBtn;
