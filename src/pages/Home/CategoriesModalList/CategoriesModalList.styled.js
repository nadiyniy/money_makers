import styled from 'styled-components';
export const ModalListWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid var(--primary-light-color);
  background-color: var(--gray-dark-color);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ModalListCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`;

export const ModalListTitle = styled.h1`
  color: var(--white-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const ModalListSecondTitle = styled.h2`
  color: var(--gray-text-20);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

export const ModalWrapper = styled.div`
  max-height: 192px;
  width: 100%;
`;
export const ModalItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;

  ${({ isActive }) =>
    isActive &&
    `  
    background-color: var(--black-color);
  `};
`;
export const ModalCategoryText = styled.p`
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ModalButtonWrapper = styled.div`
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  align-items: center;
  gap: 14px;
`;
export const ModalListButton = styled.button`
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
    border-color: var(--primary-hover-color);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: var(--gray-dark-color);
  }
`;
