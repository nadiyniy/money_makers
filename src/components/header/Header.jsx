import React from 'react';
import Logo from './logo/Logo';
import TransactionsHistoryNav from './navBar/TransactionsHistoryNav';
import UserBarBtn from './userBar/UserBarBtn';
import UserSetsModal from './userSetsModal/UserSetsModal';
import BurgerMenuBtn from './burgerMenuBtn/BurgerMenuBtn';

const Header = () => {
  return (
    <div>
      <header>
        <Logo />
        <TransactionsHistoryNav />
        <UserBarBtn />
        <BurgerMenuBtn />
      </header>
      <UserSetsModal />
    </div>
  );
};

export default Header;
