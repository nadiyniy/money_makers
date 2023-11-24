import BurgerMenu from 'components/header/burgerMenu/BurgerMenu';
import React, { useState } from 'react';
import styled from 'styled-components';

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
        <svg
          style={{ background: 'none' }}
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <path
            d="M5.5 15.5833H38.5M5.5 28.4167H38.5"
            stroke="#FAFAFA"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
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
