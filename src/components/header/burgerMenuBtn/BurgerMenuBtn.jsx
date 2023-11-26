import BurgerMenu from 'components/header/burgerMenu/BurgerMenu';
import React, { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import { StyledBurgerBtn } from './BurgerMenuBtn.styled';

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

export default BurgerMenuBtn;
