import styled from 'styled-components';

export const EditCategoriesWrapper = styled.div`
  padding: 12px 20px 12px 20px;
  @media screen and (min-width: 768px) {
    padding: 12px 40px 12px 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const EditCategoriesInput = styled.input`
  max-width: 300px;
  width: 100%;
  color: var(--white-color);
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
  margin-bottom: 8px;

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

  @media screen and (min-width: 768px) {
    padding: 12px 18px;
    max-width: 500px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const EditLabel = styled.label`
  position: relative;
  color: var(--primary-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const EditCategoriesButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: var(--primary-color);
  color: var(--black-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background: var(--primary-hover-color);
  }
`;
export const ErrorMessage = styled.p`
  margin-top: 4px;
  font-size: 12px;
  color: var(--error-color);
`;
