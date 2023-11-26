import styled from 'styled-components';

export const StyledContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--gray-text-10);
  &.default {
    width: 100px;
    height: 100px;
  }
  &.minified {
    width: 44px;
    height: 44px;
  }
`;
