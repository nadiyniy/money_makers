import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledListTransactions } from './TransactionsHistoryNav.syled';

const TransactionsHistoryNav = ({ variant, closeBurgerMenu }) => {
  return (
    <StyledListTransactions className={variant}>
      <NavLink onClick={closeBurgerMenu} to="/transactions/history/expenses">
        All Expense
      </NavLink>
      <NavLink onClick={closeBurgerMenu} to="/transactions/history/incomes">
        All Income
      </NavLink>
    </StyledListTransactions>
  );
};

export default TransactionsHistoryNav;

TransactionsHistoryNav.propTypes = {
  closeBurgerMenu: PropTypes.func,
  variant: PropTypes.string,
};
