import styled from 'styled-components';

export const DonutWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 99px 22px 87px 22px;
  max-width: 335px;
  height: 533px;
  background-color: var(--gray-dark-color);
  border-radius: var(--border-radius-30);
  color: var(--white-color);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 302px;
    max-width: 704px;
    padding: 99px 372px 82px 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 630px;
    height: 302px;
    padding: 99px 298px 82px 40px;
  }
`;

export const Title = styled.form`
color: var(--gray-text-50);
`;
