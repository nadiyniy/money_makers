import styled from 'styled-components';

export const StyledConfirmModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  border-radius: 30px;
  border: 1px solid var(--gray-text-10);
  background: var(--gray-dark-color);
  position: relative;
  padding: 80px 30px;
  width: 335px;
  @media (min-width: 768px) {
    width: 500px;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: var(--white-color);
    letter-spacing: -0.02em;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const StyledConfirmBtn = styled.div`
  display: flex;
  gap: 8px;
  button {
    transition: var(--transition);
    &:nth-child(1) {
      background: var(--primary-color);
      color: var(--black-color);
      &:hover,
      &:focus {
        background-color: var(--primary-hover-color);
      }
    }
    width: 100%;
    white-space: nowrap;
    padding: 14px 44px;
    border-radius: var(--border-radius-40);
    background: var(--gray-btn);
    border: none;
    color: var(--white-color);
    font-size: 14px;
    letter-spacing: -0.02em;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: var(--gray-hover-color);
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
