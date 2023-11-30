import styled from 'styled-components';
export const ModalListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 335px;
  max-height: 430px;
  border-radius: 30px;
  border: 1px solid var(--primary-light-color);
  background-color: var(--gray-dark-color);
  padding-bottom: 20px;
  padding-top: 20px;

  @media screen and (min-width: 375px) {
    width: 335px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  @media screen and (min-width: 768px) {
    max-height: 460px;
    min-width: 500px;
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
  margin-left: 20px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  margin-bottom: 20px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-left: 40px;
  }
`;
export const ModalListSecondTitle = styled.h2`
  margin-left: 20px;

  color: var(--gray-text-20);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;

export const ModalScrollbar = styled.ul`
  margin-right: 10px;
  max-height: 192px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scroll-color);
    border-radius: 6px;
  }
`;

export const ModalItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  position: relative;

  &:hover {
    background-color: var(--black-color);
  }
  &:hover .ModalButtonWrapper {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const ModalCategoryText = styled.p`
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const ModalButtonWrapper = styled.div`
  display: none;
  align-items: center;
  gap: 14px;

  ${ModalItem}:hover & {
    display: flex;
  }
`;

export const ModalListButton = styled.button`
  background-color: transparent;
  border: none;
  transition: all 0.3s ease;

  svg {
    color: var(--primary-color);
  }

  &:hover svg {
    color: var(--primary-hover-color);
  }
`;
