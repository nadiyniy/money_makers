import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledCloseBurgerBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 27px;
  height: 27px;
  border: none;
  background: none;
`;
export const StyledContainerUserBtn = styled.div`
  position: relative;
  display: inline-flex;
`;
export const StyledBurgerMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
