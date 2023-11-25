import TransactionsHistoryNav from 'components/header/navBar/TransactionsHistoryNav';
import UserBarBtn from 'components/header/userBar/UserBarBtn';
import React, { useEffect, useState } from 'react';
import UserPanel from '../userPanel/UserPanel';
import styled from 'styled-components';

const BurgerMenu = ({ closeBurgerMenu }) => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const toggleUserPanel = () => {
    setIsUserPanelOpen(!isUserPanelOpen);
  };
  useEffect(() => {
    const handleModalCloseKeyDown = e => {
      if (e.code === 'Escape') {
        closeBurgerMenu();
      }
    };

    document.addEventListener('keydown', handleModalCloseKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleModalCloseKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [closeBurgerMenu]);

  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      closeBurgerMenu();
    }
  };

  return (
    <ModalBackdrop onClick={handleModalClose}>
      <StyledBurgerMenu>
        <StyledCloseBurgerBtn onClick={closeBurgerMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
            <path
              d="M3.78221 27.1851L0 23.2472L9.77967 13.8541L0.38649 4.07439L4.10796 0.5L13.5011 10.2797L23.0212 1.13587L26.8034 5.0737L17.2833 14.2175L26.6765 23.9972L22.955 27.5716L13.5619 17.7919L3.78221 27.1851Z"
              fill="#0C0D0D"
            />
          </svg>
        </StyledCloseBurgerBtn>
        <div>
          <StyledContainerUserBtn>
            <UserBarBtn variant="burger" toggleUserPanel={toggleUserPanel} />
            {isUserPanelOpen && <UserPanel variant="burger" />}
          </StyledContainerUserBtn>
        </div>
        <TransactionsHistoryNav variant="burger" />
      </StyledBurgerMenu>
    </ModalBackdrop>
  );
};
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
const StyledCloseBurgerBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 27px;
  height: 27px;
  border: none;
  background: none;
`;
const StyledContainerUserBtn = styled.div`
  position: relative;
  display: inline-flex;
`;
const StyledBurgerMenu = styled.div`
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

export default BurgerMenu;
