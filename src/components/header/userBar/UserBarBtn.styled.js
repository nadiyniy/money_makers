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
    display: ${props => (props.variant === 'burger' ? 'flex' : 'none')};
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: var(--border-radius-rounded);
  }
`;
export const StyledContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--gray-text-10);
`;
