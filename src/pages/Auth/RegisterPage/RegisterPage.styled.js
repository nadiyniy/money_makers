import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  min-height: 568px;

  margin-top: 110px;

  @media screen and (min-width: 768px) {
    min-width: 172px;
    margin-top: 18px;
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
  /* letter-spacing: -0.28px; */
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
