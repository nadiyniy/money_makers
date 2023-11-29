import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledItem = styled.li`
  /* margin-bottom: 40px; */
`;

const commonButtonStyles = `
  width: 100%;
  padding: 14px 44px;
  border-radius: 40px;

  font-size: 14px;
  letter-spacing: -0.28px;

  white-space: nowrap;
  transition: background-color 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 166px;
  }
  
`;

export const SignUpLink = styled(Link)`
  ${commonButtonStyles}
  width: 100%;

  background: var(--primary-color);
  color: var(--black-color);

  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--primary-hover-color);
  }
`;

export const SignInLink = styled(Link)`
  ${commonButtonStyles}

  background-color: transparent;
  color: var(--white-color);
  border: 1px solid rgba(250, 250, 250, 0.4);

  transition: border-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-color: var(--primary-color);
  }
`;
