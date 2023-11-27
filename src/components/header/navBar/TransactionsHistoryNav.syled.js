import styled from 'styled-components';

export const StyledListTransactions = styled.nav`
  display: flex;
  gap: 16px;
  align-items: ${props => (props.variant === 'burger' ? 'center' : 'start')};
  flex-direction: ${props => (props.variant === 'burger' ? 'column' : 'row')};
  margin-top: ${props => (props.variant === 'burger' ? '300px' : '0')};

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
    border: ${props =>
      props.variant === 'burger' ? '1px solid var(--gray-avatar-40)' : '1px solid var(--gray-text-40)'};
    color: ${props => (props.variant === 'burger' ? 'var(--black-color)' : 'var(--white-color)')};

    letter-spacing: -0.02em;
    &.active {
      border: none;
      color: ${props => (props.variant === 'burger' ? 'var(--white-color)' : 'var(--black-color)')};
      background-color: ${props => (props.variant === 'burger' ? 'var(--black-color)' : 'var(--primary-color)')};
    }
  }
`;
