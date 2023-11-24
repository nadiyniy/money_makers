import React from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';
import UserPanel from './userPanel/UserPanel';

const Header = () => {
  return (
    <div>
      <header>
        <Logo />
        <TransactionsHistoryNav />
        <UserBarBtn />
        <UserPanel />
        <BurgerMenuBtn />
      </header>
    </div>
  );
};

export default Header;
