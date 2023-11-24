import React from 'react';
import styled from 'styled-components';
import avatar from '../../../images/404-page.png';

const UserSetsModal = ({ closeModal }) => {
  return (
    <StyledModal>
      <StyledModalCloseBtn onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 6L18 18" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </StyledModalCloseBtn>
      <h2>Profile settings</h2>
      <StyledAvatar>
        <img src={avatar} alt="User icon" />
        <div>
          <button>Upload new photo</button>
          <button>Remove</button>
        </div>
      </StyledAvatar>
      <StyledForm>
        <div>
          <select>
            <option>UAH</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input placeholder="Alex Rybachok"></input>
        </div>
        <button>Save</button>
      </StyledForm>
    </StyledModal>
  );
};
const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 477px;
  inset: 0;
  width: 500px;
  border-radius: 30px;
  border: 1px solid var(--gray-text-10);
  background: var(--gray-dark-color);
  position: relative;
  padding: 40px 40px 60px;
  h2 {
    color: var(--white-color);

    font-size: 28px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-bottom: 40px;
  }
  button {
    cursor: pointer;
  }
`;
const StyledModalCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;

  img {
    border-radius: var(--border-radius-rounded);
    width: 100px;
    height: 100px;
    background-color: var(--gray-avatar-color);
  }
  div {
    display: flex;
    margin-top: 20px;
    gap: 8px;
    button {
      padding: 8px 16px;
      border-radius: var(--border-radius-40);
      background: var(--gray-btn);
      border: none;
      color: var(--white-color);

      font-size: 12px;
      letter-spacing: -0.02em;
    }
  }
`;
const StyledForm = styled.form`
  div {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;

    select {
      padding: 12px 18px;
      color: #fafafa;

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
      background: transparent;
      border-radius: 12px;
      border: 1px solid var(--gray-text-40);
    }
    input {
      width: 100%;
      padding: 12px 18px;
      color: #fafafa;
      background: transparent;
      font-size: 16px;
      line-height: 1.5;
      border-radius: 12px;
      border: 1px solid var(--gray-text-40);
      &::placeholder {
        opacity: 1;
        color: var(--white-color);
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
  button {
    width: 100%;

    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: var(--border-radius-40);
    background: var(--primary-color);
    border: none;
    color: var(--black-color);
    font-size: 16px;
    letter-spacing: -0.02em;
  }
`;

export default UserSetsModal;
