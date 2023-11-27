import styled from 'styled-components';
export const MainPageSection = styled.section`
  @media screen and (min-width: 1280px) {
    max-height: 800px;
  }
`;

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const MainPageTitle = styled.h1`
  color: var(--white-color);
  margin-top: 66px;
  margin-bottom: 20px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    font-size: 38px;
    letter-spacing: -0.76px;
    margin-top: 60px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 630px;
  }
`;
export const MainPageText = styled.p`
  color: var(--gray-text-40);
  margin-bottom: 40px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    font-size: 16px;
    letter-spacing: -0.32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 630px;
  }
`;
