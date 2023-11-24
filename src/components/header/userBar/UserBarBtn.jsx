import React from 'react';
import styled from 'styled-components';
import avatar from '../../../images/404-page.png';

const UserBarBtn = () => {
  return (
    <StyledUserBtn>
      <img src={avatar} alt="User icon" />
      <p>Alex Rybachok</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="#0EF387"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </StyledUserBtn>
  );
};

const StyledUserBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--border-radius-30);
  background: var(--gray-dark-color);
  border: none;
  cursor: pointer;
  color: rgba(250, 250, 250, 0.4);
  font-size: 16px;
  letter-spacing: -0.02em;
  img {
    width: 44px;
    height: 44px;
    border-radius: var(--border-radius-rounded);
  }
`;

export default UserBarBtn;
