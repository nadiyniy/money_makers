import styled from 'styled-components';

export const StyledModalLink = styled.div`
  white-space: nowrap;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: var(--border-radius-15);
  border: 1px solid var(--gray-text-10);
  background: var(--black-color);
  align-items: flex-start;
  @media (max-width: 768px) {
    display: none;
    &.burger {
      display: flex;
    }
  }
  button {
    cursor: pointer;
    color: var(--gray-text-50);
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:hover,
    &:focus {
      color: var(--white-color);
    }
  }
`;
