import styled from 'styled-components';

export const TransactionWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;
export const TransactionFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 28px 20px;
  width: 100%;
  height: 533px;
  background-color: var(--gray-dark-color);
  border-radius: 30px;
  color: var(--white-color);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 600px;
    max-width: 704px;
    padding: 109px 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 566px;
    height: 600px;
    padding: 40px 40px;
    margin: 0;
    margin-left: 44px;
  }
`;
export const ParentInputWrapper = styled.div`
  width: 100%;
`;
export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-left: 32px;
  margin-right: 44px;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
    margin-right: 48px;
  }
`;
export const RadioLabel1 = styled(RadioLabel)`
  margin-left: 0px;
  margin-right: 0px;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
  /* @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  } */
`;
export const RadioCustom = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: none;
  border: 2px solid var(--gray-text-20);
  border-radius: 10px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const RadioCustomChecked = styled(RadioCustom)`
  border-color: var(--primary-color);

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 50%;
    border: 2px solid var(--gray-dark-color);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
`;
export const DateInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;
export const DateInput = styled.input`
  gap: 18px;
  color: var(--gray-text-40);
  background-color: var(--gray-dark-color);
  display: flex;
  padding: 12px 14px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--gray-text-20);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: var(--gray-dark-color);
  }

  &::placeholder {
    background-color: var(--gray-dark-color);
    color: var(--gray-text-20);
  }
`;

export const OtherInput = styled.input`
  width: 100%;
  color: var(--gray-text-40);
  background-color: var(--gray-dark-color);
  display: flex;
  padding: 12px 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--gray-text-20);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  transition: all 0.3s ease;
  margin-top: 8px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: var(--gray-dark-color);
  }

  &::placeholder {
    background-color: var(--gray-dark-color);
    color: var(--gray-text-20);
  }
`;

export const CategoryInput = styled(OtherInput)`
  padding: 12px 14px;
`;

export const SumInput = styled(OtherInput)`
  position: relative;

  &::after {
    content: 'UAH';
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--gray-text-40);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28;
  }
`;
export const CommentInput = styled(OtherInput)`
  padding: 12px 14px;
  height: 91px;
  resize: none;
`;
export const TransactionButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TransactionButton = styled.button`
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: var(--primary-color);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-hover-color);
  }
`;

export const OneLabel = styled.label`
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 20px;
`;
