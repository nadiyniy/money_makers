import React from 'react';
import { NavLink } from 'react-router-dom';

const TransactionsHistoryNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="#">All Expense</NavLink>
      </li>
      <li>
        <NavLink to="#">All Income</NavLink>
      </li>
    </ul>
  );
};

export default TransactionsHistoryNav;
