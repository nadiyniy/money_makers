import styled from 'styled-components';

export const StyledListTransactions = styled.nav`
  display: flex;
  gap: 16px;
  align-items: start;
  flex-direction: row;
  margin-top: 0;
  &.burger {
    align-items: center;
    flex-direction: column;
    margin-top: 300px;
  }

  @media (max-width: 768px) {
    display: none;
    &.burger {
      display: flex;
    }
  }

  a {
    width: 125px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 21px;
    border-radius: var(--border-radius-30);
    border: 1px solid var(--gray-text-40);
    color: var(--white-color);

    letter-spacing: -0.02em;
    &.burger {
      color: var(--black-color);
      border: 1px solid var(--gray-avatar-40);
    }
    &.active {
      border: none;
      color: var(--black-color);
      background-color: var(--primary-color);
    }
    &.active.burger {
      color: var(--white-color);
      background-color: var(--black-color);
    }
  }
`;
