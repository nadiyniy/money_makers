import styled from 'styled-components';

export const StyledAuthWrapper = styled.div`
  max-width: 375px;
  padding: 40px 20px 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 63px 32px 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 575px;
    margin-right: 100px;
    margin-left: 54px;
    padding: 0;
    
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;

  color: var(--white-color);

  font-size: 32px;
  letter-spacing: -0.02em;
  font-weight: normal;

  span {
    color: var(--primary-color);
    text-decoration-line: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 56px;
    letter-spacing: -1.12px;
  }
`;

export const Description = styled.p`
  margin-bottom: 30px;
  color: var(--gray-text-40);

  font-size: 14px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 533px;
  }
`;
