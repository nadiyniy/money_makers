import styled from 'styled-components';

export const NewCategoriesForm = styled.form`
  /* display: flex;
  align-items: center; */
  padding: 12px 0px 12px 14px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const NewCategoriesInput = styled.input`
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
export const NewLabel = styled.label`
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 20px;
`;
export const NewCategoriesButton = styled.button`
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
