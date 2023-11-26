import styled from 'styled-components';
export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const MainPageTitle = styled.h1`
  color: var(--white-color);
  font-family: Suisse Intl;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    font-size: 38px;
    letter-spacing: -0.76px;
  }
`;
export const MainPageText = styled.p`
  color: var(--gray-text-40);
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
`;
