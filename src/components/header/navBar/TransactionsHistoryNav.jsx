import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledListTransactions } from './TransactionsHistoryNav.syled';

const TransactionsHistoryNav = ({ variant }) => {
  return (
    <StyledListTransactions className={variant}>
      <NavLink to="/transactions/history/expenses">All Expense</NavLink>
      <NavLink to="/transactions/history/incomes">All Income</NavLink>
    </StyledListTransactions>
  );
};

export default TransactionsHistoryNav;
