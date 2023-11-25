import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledListTransactions } from './TransactionsHistoryNav.syled';

const TransactionsHistoryNav = ({ variant }) => {
  return (
    <StyledListTransactions variant={variant}>
      <li>
        <NavLink to="/transactions/history/expense">All Expense</NavLink>
      </li>
      <li>
        <NavLink to="/transactions/history/income">All Income</NavLink>
      </li>
      <li>
        <NavLink to="/transactions/expense">expense</NavLink>
      </li>
      <li>
        <NavLink to="/transactions/income">income</NavLink>
      </li>
    </StyledListTransactions>
  );
};

export default TransactionsHistoryNav;
