import BurgerMenu from 'components/header/burgerMenu/BurgerMenu';
import React, { useState } from 'react';

const BurgerMenuBtn = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <div>
      <button onClick={openBurgerMenu}>open burger menu</button>
      {isBurgerMenuOpen && <BurgerMenu closeBurgerMenu={closeBurgerMenu} />}{' '}
    </div>
  );
};

export default BurgerMenuBtn;
