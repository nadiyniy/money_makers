import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 10px;

  color: rgba(250, 250, 250, 0.4);

  font-size: 14px;
  letter-spacing: 2.8px;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    margin-top: 100px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;

  color: #fafafa;

  font-size: 32px;
  letter-spacing: -0.64px;
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
    width: 100%;
    max-width: 533px;
  }
`;

