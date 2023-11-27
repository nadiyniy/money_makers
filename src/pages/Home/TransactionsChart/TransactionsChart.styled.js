import styled from 'styled-components';
export const ChartWrapper = styled.div`
  width: 100%;
  height: 472px;
  margin-bottom: 80px;
  padding: 28px 20px 40px 20px;
  background: var(--gray-dark-color);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 630px;
    max-height: 302px;
  }
`;
export const ChartTitle = styled.h1`
  color: var(--gray-text-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
