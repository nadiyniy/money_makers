import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledListTransactions } from './TransactionsHistoryNav.syled';

const TransactionsHistoryNav = ({ variant }) => {
  return (
    <StyledListTransactions variant={variant}>
      <li>
        <NavLink to="#">All Expense</NavLink>
      </li>
      <li>
        <NavLink to="#">All Income</NavLink>
      </li>
    </StyledListTransactions>
  );
};

export default TransactionsHistoryNav;
