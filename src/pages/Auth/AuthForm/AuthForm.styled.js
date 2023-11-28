import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;

  ul {
    margin-bottom: 80px;

    @media screen and (min-width: 1280px) {
      margin-bottom: 60px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 399px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 12px 18px;

  background: transparent;
  border: 1px solid var(--gray-text-20);
  border-radius: var(--border-radius-12);
  color: var(--white-color);

  font-size: 16px;
  line-height: 24px;

  &::placeholder {
    color: var(--gray-text-40);
  }

  &:focus {
    border: 1px solid var(--primary-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    height: 42px;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;

  min-width: 138px;
  padding: 14px 44px;
  /* margin-top: 135px; */
  margin-bottom: 20px;
  border: none;
  border-radius: 40px;

  font-size: 14px;
  letter-spacing: -0.02em;

  white-space: nowrap;
  transition: background-color 0.2s ease-in-out;

  background: var(--primary-color);
  color: var(--black-color);

  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--primary-hover-color);
  }

  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: var(--primary-color);
    }
  }

  @media screen and (min-width: 768px) {
    min-width: 145px;
    font-size: 16px;
  }
`;

export const NavigationWrapper = styled.div`
  span {
    color: var(--gray-text-60);
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--white-color);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 10px;
`;
