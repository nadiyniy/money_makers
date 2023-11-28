import styled from 'styled-components';
export const TotalAmountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;


  @media screen and (min-width: 768px) {
    max-width: 704px;
    flex-direction: row;
    gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 630px;
    height: 121px;
    margin-top: 59px;
  }
`;
export const AmountWrapper = styled.div`
  height: 81px;
  border-radius: 20px;
  background: var(--gray-dark-color);
  padding: 20px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 121px;
    width: 340px;
    padding: 32px 23px;
  }
  @media screen and (min-width: 1280px) {
    width: 303px;
  }
`;
export const AmountTitle = styled.h3`
  color: var(--gray-text-50);
  margin-bottom: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 768px) {
    margin-bottom: 7px;
    font-size: 16px;
  }
`;
export const AmountText = styled.p`
  color: var(--white-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const AmountButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border: none;
  border-radius: 10px;
  background-color: var(--primary-color);
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    padding: 13px 16px;
    margin-right: 22px;
  }
`;
