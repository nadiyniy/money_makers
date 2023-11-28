import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    min-width: 172px;
    padding-top: 18px;
  }

  @media screen and (min-width: 1280px) {
    width: 533px;
    max-height: 800px;
    margin-left: 54px;
    margin-top: 0px;
    padding-top: 0px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: var(--white-color);

  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.02rem;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`;

export const Description = styled.p`
  max-width: 399px;
  margin-bottom: 40px;

  color: var(--gray-text-40);

  font-size: 14px;
  /* letter-spacing: -0.02em; */
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
