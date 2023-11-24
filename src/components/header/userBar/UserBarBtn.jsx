import React from 'react';
import styled from 'styled-components';
import avatar from '../../../images/404-page.png';

const UserBarBtn = () => {
  return (
    <StyledUserBtn>
      <img src={avatar} alt="User icon" />
      <p>Alex Rybachok</p>
      <div>svg</div>
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
