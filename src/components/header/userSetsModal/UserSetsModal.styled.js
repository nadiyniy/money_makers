import styled from 'styled-components';

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
  width: 100%;
  width: 100%;
  border-radius: 30px;
  border: 1px solid var(--gray-text-10);
  background: var(--gray-dark-color);
  position: relative;
  padding: 40px 20px 60px;
  @media (min-width: 768px) {
    max-width: 500px;
    padding: 40px 40px 60px;
    height: 477px;
    width: 500px;
  }
  h2 {
    color: var(--white-color);

    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
  button {
    cursor: pointer;
  }
`;
export const StyledSetsBtn = styled.div`
  margin-top: 20px;
`;

export const StyledModalCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;

  img {
    border-radius: var(--border-radius-rounded);
    width: 80px;
    height: 80px;
    background-color: var(--gray-avatar-color);
    @media (min-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    label {
      height: 30px;
      padding: 8px 16px;
      border-radius: var(--border-radius-40);
      background: var(--gray-btn);
      border: none;
      color: var(--white-color);

      font-size: 12px;
      letter-spacing: -0.02em;
    }
    input {
      display: none;
    }

    button {
      height: 30px;

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
export const StyledForm = styled.form`
  div {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;

    select {
      padding: 12px 18px;
      color: var(--white-color);

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
      color: var(--white-color);
      background: transparent;
      font-size: 14px;
      line-height: 1.5;
      border-radius: 12px;
      border: 1px solid var(--gray-text-40);
      &::placeholder {
        opacity: 1;
        color: var(--white-color);
        font-size: 16px;
        line-height: 1.5;
      }
      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 1.3;
      }
    }
  }
  button {
    width: 100%;
    cursor: pointer;

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

export const StyledAvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-rounded);
  background: var(--gray-avatar-color);
  color: var(--primary-color);
`;
