import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 110px;

  @media screen and (min-width: 768px) {
    min-width: 172px;
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
  margin-bottom: 40px;

  color: var(--gray-text-40);

  font-size: 14px;
  /* letter-spacing: -0.28px; */
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
