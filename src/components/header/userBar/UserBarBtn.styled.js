import styled from 'styled-components';

export const StyledUserBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--border-radius-30);
  background: var(--gray-dark-color);
  border: none;
  cursor: pointer;
  color: rgba(250, 250, 250, 0.4);
  font-size: 16px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    display: none;
    &.burger {
      display: flex;
    }
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: var(--border-radius-rounded);
  }
`;
