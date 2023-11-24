import React, { useState } from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';
import UserPanel from './userPanel/UserPanel';

const Header = () => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };
  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      setIsUserPanelOpen(false);
    }
  };

  return (
    <div>
      <header>
        <Logo />
        <TransactionsHistoryNav />
        <UserBarBtn toggleUserPanel={toggleUserPanel} />
        {isUserPanelOpen && <UserPanel onClick={handleModalClose} />}
        <BurgerMenuBtn />
      </header>
    </div>
  );
};

export default Header;
