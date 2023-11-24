import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
const StyledListTransactions = styled.ul`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    display: ${props => (props.variant === 'burger' ? 'flex' : 'none')};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    padding: 12px 21px;
    border-radius: var(--border-radius-30);
    border: 1px solid var(--gray-text-40);
    color: #fafafa;

    letter-spacing: -0.02em;
  }
`;

export default TransactionsHistoryNav;
