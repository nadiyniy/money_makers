import { Close } from 'components/svgs';
import styled from 'styled-components';
export const ModalListWrapper = styled.div`
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

export const ModalListButton = styled.button`
  background-color: transparent;
`;
export const ModalListTitle = styled.h1`
  color: var(--white-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  margin-bottom: 20px;
`;
export const ModalListSecondTitle = styled.h2`
  color: var(--gray-text-20);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

export const ModalListSecond = styled.div``;
