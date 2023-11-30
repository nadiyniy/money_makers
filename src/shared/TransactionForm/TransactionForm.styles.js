import ReactDatePicker from 'react-datepicker';
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
  margin: 0;
  padding: 28px 20px;
  width: 100%;
  min-height: 533px;
  background-color: var(--gray-dark-color);
  border-radius: 30px;
  color: var(--white-color);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-height: 620px;
    max-width: 704px;
    padding: 40px 109px;
  }
  @media screen and (min-width: 1280px) {
    width: 566px;
    height: 600px;
    margin: 0;
    margin-left: 44px;
    padding: 40px 40px;
  }
`;
export const ParentInputWrapper = styled.div`
  width: 100%;
`;
export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 32px;
  padding-right: 44px;
  margin-bottom: 20px;
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
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
  margin-left: 52px;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
`;
export const RadioCustom = styled.span`
  position: absolute;
  top: -2px;
  left: -30px;
  height: 20px;
  width: 20px;
  background-color: none;
  border: 2px solid var(--gray-text-20);
  border-radius: 10px;
`;

export const RadioCustomChecked = styled(RadioCustom)`
  border-color: var(--primary-color);
  transition: all 0.3s ease;

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
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
export const DateLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const CalendarIcon = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 48px;
  right: 10px;
  transform: translateY(-50%);
  width: 24px;
  height: auto;
`;
export const DateInput = styled(ReactDatePicker)`
  width: 100%;
  max-width: 140px;
  gap: 18px;
  color: var(--white-color);
  background-color: var(--gray-dark-color);
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--gray-text-20);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:focus {
    border-color: var(--primary-color);
    background-color: var(--gray-dark-color);
  }

  &::placeholder {
    background-color: var(--gray-dark-color);
    color: var(--gray-text-40);
  }
  @media screen and (min-width: 768px) {
    max-width: 262px;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    width: 234px;
  }
`;

export const OtherInput = styled.input`
  width: 100%;
  color: var(--white-color);
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
    color: var(--gray-text-40);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CategoryInput = styled(OtherInput)`
  padding: 12px 14px;
`;

export const SumInput = styled(OtherInput)``;
export const CommentInput = styled(OtherInput)`
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
  border-radius: 40px;
  background: var(--primary-color);
  transition: all 0.3s ease;
  border: none;
  &:hover {
    background: var(--primary-hover-color);
  }
`;

export const OneLabel = styled.label`
  display: block;
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 20px;
`;
export const ErrorMessage = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: var(--error-color);
`;

export const TwoLabel = styled.label`
  display: block;
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 20px;
  position: relative;
`;
export const Currency = styled.div`
  position: absolute;
  top: 26px;
  right: 10px;
  color: var(--gray-text-40);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  .currencies-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 0px;
    font-size: 16px;
    gap: 8px;
    background-color: var(--black-color);
    border-radius: 8px;
    li {
      z-index: 1;
      display: block;
      padding: 4px 12px;
      color: var(--gray-text-40);
      border: 1px solid var(--gray-text-40);
      border-radius: 8px;
      &:hover,
      &:focus {
        color: var(--white-color);
        border: 1px solid var(--primary-color);
      }
    }
  }

  .currencies-active {
    width: max-content;
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: center;
    padding: 12px 18px;
    font-size: 16px;
    line-height: 1.5;
  }
  &.arrow-icon {
    transform: rotate(0);
    transform: scale(3);
  }
  &.dropdown-open .arrow-icon {
    transform: rotate(180deg);
  }
`;
