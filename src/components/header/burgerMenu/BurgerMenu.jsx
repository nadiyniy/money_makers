import TransactionsHistoryNav from 'components/header/navBar/TransactionsHistoryNav';
import UserBarBtn from 'components/header/userBar/UserBarBtn';
import React from 'react';

const BurgerMenu = () => {
  return (
    <div>
      <button>X</button>
      <UserBarBtn />
      <TransactionsHistoryNav />
    </div>
  );
};

export default BurgerMenu;
